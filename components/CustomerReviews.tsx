'use client'

import { motion, useInView, useAnimationControls } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'

interface Review {
  id: string
  name: string
  company: string
  location: string
  rating: number
  comment: string
  avatar: string
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Michael Chen',
    company: 'Fresh Produce Co.',
    location: 'Singapore',
    rating: 5,
    comment: 'MFK Exports has been our trusted partner for over 3 years. Their cold chain logistics ensure our fruits arrive fresh every time. Exceptional service and reliability.',
    avatar: '👤',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    company: 'Global Foods Ltd.',
    location: 'United Kingdom',
    rating: 5,
    comment: 'The quality assurance process is outstanding. We\'ve never had a single issue with shipments. Professional team and seamless documentation handling.',
    avatar: '👤',
  },
  {
    id: '3',
    name: 'Ahmed Al-Rashid',
    company: 'Middle East Imports',
    location: 'Dubai, UAE',
    rating: 5,
    comment: 'Fast delivery and excellent packaging solutions. Our customers are always satisfied with the product quality. Highly recommend MFK Exports.',
    avatar: '👤',
  },
  {
    id: '4',
    name: 'Emma Rodriguez',
    company: 'European Distributors',
    location: 'Spain',
    rating: 5,
    comment: 'Outstanding global distribution network. They handle all our export needs efficiently. The team is responsive and always available when we need support.',
    avatar: '👤',
  },
  {
    id: '5',
    name: 'David Kim',
    company: 'Asia Pacific Trading',
    location: 'South Korea',
    rating: 5,
    comment: 'Best logistics partner we\'ve worked with. Their attention to detail and commitment to quality is unmatched. Our business has grown significantly with their support.',
    avatar: '👤',
  },
  {
    id: '6',
    name: 'Lisa Thompson',
    company: 'North American Imports',
    location: 'Canada',
    rating: 5,
    comment: 'Reliable, professional, and trustworthy. MFK Exports makes international trade simple. Their expertise in produce logistics is evident in every shipment.',
    avatar: '👤',
  },
]

export default function CustomerReviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const carouselRef = useRef<HTMLDivElement>(null)
  const currentXRef = useRef(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const controls = useAnimationControls()

  // Duplicate reviews 3 times for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews]

  // Calculate animation distance: one set of reviews
  const cardWidth = 400
  const gap = 32
  const oneSetWidth = reviews.length * (cardWidth + gap)
  const animationDistance = -oneSetWidth

  const clampPosition = useCallback(
    (value: number) => {
      if (animationDistance === 0) return 0
      return Math.max(animationDistance, Math.min(0, value))
    },
    [animationDistance]
  )

  const updatePosition = useCallback(
    (value: number) => {
      const clamped = clampPosition(value)
      currentXRef.current = clamped
      setCurrentX(clamped)
      controls.set({ x: clamped })
    },
    [clampPosition, controls]
  )

  useEffect(() => {
    if (!isInView) {
      controls.stop()
      return
    }

    if (isHovered || isDragging) {
      controls.stop()
      setCurrentX(currentXRef.current)
    } else {
      currentXRef.current = currentX
      controls.start({
        x: [currentXRef.current, currentXRef.current + animationDistance],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        },
        onUpdate: (latest) => {
          currentXRef.current = latest as number
        },
      })
    }
  }, [isHovered, isDragging, isInView, currentX, controls, animationDistance])

  // Handle mouse drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    controls.stop()
    setDragStart(e.clientX - currentXRef.current)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Handle wheel scroll
  const handleWheel = (e: React.WheelEvent) => {
    if (isHovered) {
      e.preventDefault()
      const scrollAmount = e.deltaY > 0 ? 150 : -150
      const newX = currentXRef.current + scrollAmount
      updatePosition(newX)
    }
  }

  // Handle global mouse events for dragging
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        const newX = e.clientX - dragStart
        updatePosition(newX)
      }

      const handleGlobalMouseUp = () => {
        setIsDragging(false)
      }

      window.addEventListener('mousemove', handleGlobalMouseMove)
      window.addEventListener('mouseup', handleGlobalMouseUp)

      return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove)
        window.removeEventListener('mouseup', handleGlobalMouseUp)
      }
    }
  }, [isDragging, dragStart, updatePosition])

  return (
    <section
      id="reviews"
      ref={ref}
      style={{
        padding: '120px 20px',
        position: 'relative',
        zIndex: 1,
        background: 'var(--white)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(27, 170, 90, 0.1)',
              border: '1px solid rgba(27, 170, 90, 0.2)',
              borderRadius: '50px',
              marginBottom: '20px',
            }}
          >
            <span style={{ color: 'var(--primary-green)', fontSize: '0.85rem', fontWeight: 600 }}>
              Customer Reviews
            </span>
          </motion.div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>What Our Clients Say</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem' }}>
            Trusted by businesses worldwide. Rated 4.9+ stars by 1,000+ satisfied clients
          </p>
        </motion.div>

        {/* Overall Rating Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            textAlign: 'center',
            marginBottom: '80px',
            padding: '50px',
            background: 'linear-gradient(135deg, rgba(27, 170, 90, 0.05), rgba(14, 90, 50, 0.05))',
            borderRadius: '24px',
            border: '1px solid rgba(27, 170, 90, 0.1)',
            maxWidth: '600px',
            margin: '0 auto 80px',
          }}
        >
          <div
            style={{
              fontSize: '5rem',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              color: 'var(--primary-green)',
              marginBottom: '16px',
              lineHeight: 1,
            }}
          >
            4.9
          </div>
          <div
            style={{
              fontSize: '2rem',
              color: 'var(--primary-green)',
              marginBottom: '12px',
            }}
          >
            ⭐⭐⭐⭐⭐
          </div>
          <p
            style={{
              color: 'var(--text-grey)',
              fontSize: '1.1rem',
              margin: 0,
              fontWeight: 500,
            }}
          >
            Based on 1,000+ verified reviews
          </p>
        </motion.div>

        {/* Continuous Scrolling Carousel */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setIsDragging(false)
          }}
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}
          style={{
            position: 'relative',
            overflow: 'hidden',
            marginTop: '40px',
            padding: '40px 0',
            width: '100%',
            cursor: isDragging ? 'grabbing' : isHovered ? 'grab' : 'default',
            userSelect: 'none',
          }}
        >
          {/* Gradient Overlays for fade effect */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '200px',
              height: '100%',
              background: 'linear-gradient(to right, var(--white), transparent)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: '200px',
              height: '100%',
              background: 'linear-gradient(to left, var(--white), transparent)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          />

          {/* Scroll hint when hovered */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                top: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 20,
                padding: '8px 20px',
                background: 'rgba(27, 170, 90, 0.95)',
                color: 'var(--white)',
                borderRadius: '25px',
                fontSize: '0.85rem',
                fontWeight: 600,
                pointerEvents: 'none',
                boxShadow: '0 4px 12px rgba(27, 170, 90, 0.3)',
              }}
            >
              Scroll or drag to navigate
            </motion.div>
          )}

          {/* Scrolling Container */}
          <motion.div
            animate={controls}
            style={{
              display: 'flex',
              gap: `${gap}px`,
              width: 'max-content',
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={`${review.id}-${index}`}
                className="card"
                whileHover={{
                  scale: 1.05,
                  boxShadow: 'var(--shadow-medium)',
                }}
                style={{
                  padding: '40px',
                  width: `${cardWidth}px`,
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-soft)',
                  background: 'var(--white)',
                  cursor: 'default',
                  pointerEvents: 'auto',
                }}
              >
                {/* Rating Stars */}
                <div
                  style={{
                    fontSize: '1.3rem',
                    color: 'var(--primary-green)',
                    marginBottom: '24px',
                  }}
                >
                  {'⭐'.repeat(review.rating)}
                </div>

                {/* Review Comment */}
                <p
                  style={{
                    color: 'var(--text-dark)',
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                    marginBottom: '32px',
                    flex: 1,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{review.comment}&rdquo;
                </p>

                {/* Customer Info */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    paddingTop: '24px',
                    borderTop: '1px solid var(--border-light)',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--primary-green), var(--deep-green))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      color: 'var(--white)',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(27, 170, 90, 0.2)',
                    }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: 'var(--deep-green)',
                        marginBottom: '4px',
                      }}
                    >
                      {review.name}
                    </h4>
                    <p
                      style={{
                        color: 'var(--text-grey)',
                        fontSize: '0.95rem',
                        margin: '0 0 4px 0',
                        fontWeight: 500,
                      }}
                    >
                      {review.company}
                    </p>
                    <p
                      style={{
                        color: 'var(--text-light)',
                        fontSize: '0.85rem',
                        margin: 0,
                      }}
                    >
                      📍 {review.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: '80px',
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(27, 170, 90, 0.05), rgba(14, 90, 50, 0.05))',
            borderRadius: '24px',
            border: '1px solid rgba(27, 170, 90, 0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '60px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--primary-green)',
                  marginBottom: '8px',
                }}
              >
                1,000+
              </div>
              <div style={{ color: 'var(--text-grey)', fontSize: '1rem', fontWeight: 500 }}>
                Verified Reviews
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--primary-green)',
                  marginBottom: '8px',
                }}
              >
                120+
              </div>
              <div style={{ color: 'var(--text-grey)', fontSize: '1rem', fontWeight: 500 }}>
                Countries Served
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--primary-green)',
                  marginBottom: '8px',
                }}
              >
                98%
              </div>
              <div style={{ color: 'var(--text-grey)', fontSize: '1rem', fontWeight: 500 }}>
                Satisfaction Rate
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
