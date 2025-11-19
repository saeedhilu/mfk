'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

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
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews]

  // Calculate card width
  const cardWidth = isMobile ? 320 : 400
  const gap = isMobile ? 24 : 32

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

        {/* Swiper Carousel */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            marginTop: '40px',
            padding: '40px 0',
            width: '100%',
          }}
        >
          {/* Gradient Overlays for fade effect */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: 'clamp(60px, 15vw, 200px)',
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
              width: 'clamp(60px, 15vw, 200px)',
              height: '100%',
              background: 'linear-gradient(to left, var(--white), transparent)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          />

          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={gap}
            slidesPerView="auto"
            freeMode={{
              enabled: true,
              sticky: false,
            }}
            speed={2500}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            loop={true}
            loopAdditionalSlides={reviews.length}
            allowTouchMove={true}
            grabCursor={true}
            touchRatio={1}
            resistance={true}
            resistanceRatio={0.85}
            style={{
              padding: '0',
              overflow: 'visible',
            }}
            breakpoints={{
              320: {
                slidesPerView: 'auto',
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 'auto',
                spaceBetween: 32,
              },
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <SwiperSlide
                key={`${review.id}-${index}`}
                style={{
                  width: `${cardWidth}px`,
                  minWidth: '280px',
                  height: 'auto',
                }}
              >
                <motion.div
                  className="card"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: 'var(--shadow-medium)',
                  }}
                  style={{
                    padding: 'clamp(24px, 4vw, 40px)',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-soft)',
                    background: 'var(--white)',
                    cursor: 'default',
                    touchAction: 'manipulation',
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
              </SwiperSlide>
            ))}
          </Swiper>
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
