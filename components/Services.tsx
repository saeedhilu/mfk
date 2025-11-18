'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const services = [
  { 
    icon: '🚚', 
    title: 'Cold Chain Logistics', 
    description: 'Temperature-controlled transportation ensuring freshness from farm to destination. Our advanced cold chain system maintains optimal conditions throughout the journey.',
    features: ['Temperature Monitoring', 'Real-time Tracking', 'Quality Assurance']
  },
  { 
    icon: '📦', 
    title: 'Packaging Solutions', 
    description: 'Custom packaging designed to protect your produce during transit. We use eco-friendly materials and innovative designs for maximum protection.',
    features: ['Custom Design', 'Eco-friendly Materials', 'Damage Protection']
  },
  { 
    icon: '🌍', 
    title: 'Global Distribution', 
    description: 'Worldwide shipping network connecting producers to international markets. Our extensive network ensures timely delivery to over 120 countries.',
    features: ['120+ Countries', 'Fast Shipping', 'Global Network']
  },
  { 
    icon: '✅', 
    title: 'Quality Assurance', 
    description: 'Rigorous quality checks at every stage of the supply chain. We maintain the highest standards to ensure your produce meets international quality requirements.',
    features: ['Multi-stage Inspection', 'Certification', 'Quality Reports']
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getPrevIndex = () => (currentIndex - 1 + services.length) % services.length
  const getNextIndex = () => (currentIndex + 1) % services.length

  return (
    <section
      id="services"
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
              Our Services
            </span>
          </motion.div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>What We Offer</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem' }}>
            Comprehensive logistics solutions tailored for your produce export needs
          </p>
        </motion.div>

        {/* Carousel Container with Glass Blur Preview */}
        <div
          style={{
            position: 'relative',
            marginTop: '80px',
            maxWidth: '1200px',
            margin: '80px auto 0',
            overflow: 'visible',
            padding: '0 20px',
          }}
        >
          {/* Previous Slide - Glass Blur Effect (Left) */}
          <motion.div
            initial={false}
            animate={{
              opacity: 0.3,
              scale: 0.85,
              x: -100,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '90%',
              maxWidth: '500px',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                padding: '40px',
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid rgba(27, 170, 90, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                opacity: 0.4,
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, var(--primary-green), var(--deep-green))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    margin: '0 auto 20px',
                    opacity: 0.6,
                  }}
                >
                  {services[getPrevIndex()].icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: 'var(--deep-green)',
                    marginBottom: '12px',
                    opacity: 0.7,
                  }}
                >
                  {services[getPrevIndex()].title}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Current Slide - Center */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '550px',
              zIndex: 3,
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={false}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 0.95,
                  y: index === currentIndex ? 0 : 20,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.6,
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  className="card"
                  style={{
                    padding: '60px 50px',
                    width: '100%',
                    maxWidth: '900px',
                    height: 'auto',
                    minHeight: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '2px solid var(--primary-green)',
                    boxShadow: '0 20px 60px rgba(27, 170, 90, 0.15)',
                    margin: '0 auto',
                    background: 'var(--white)',
                    textAlign: 'center',
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '28px',
                      background: 'linear-gradient(135deg, var(--primary-green), var(--deep-green))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3.5rem',
                      marginBottom: '40px',
                      boxShadow: '0 10px 40px rgba(27, 170, 90, 0.3)',
                    }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: 'var(--deep-green)',
                      marginBottom: '24px',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: 'var(--text-grey)',
                      lineHeight: 1.9,
                      fontSize: '1.15rem',
                      marginBottom: '40px',
                      maxWidth: '700px',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '24px',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      paddingTop: '32px',
                      borderTop: '1px solid var(--border-light)',
                      width: '100%',
                    }}
                  >
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 20px',
                          background: 'var(--light-green)',
                          borderRadius: '50px',
                          fontSize: '0.95rem',
                          color: 'var(--text-dark)',
                          fontWeight: 500,
                        }}
                      >
                        <div
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'var(--primary-green)',
                            flexShrink: 0,
                          }}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Next Slide - Glass Blur Effect (Right) */}
          <motion.div
            initial={false}
            animate={{
              opacity: 0.3,
              scale: 0.85,
              x: 100,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '90%',
              maxWidth: '500px',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                padding: '40px',
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid rgba(27, 170, 90, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                opacity: 0.4,
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, var(--primary-green), var(--deep-green))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    margin: '0 auto 20px',
                    opacity: 0.6,
                  }}
                >
                  {services[getNextIndex()].icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: 'var(--deep-green)',
                    marginBottom: '12px',
                    opacity: 0.7,
                  }}
                >
                  {services[getNextIndex()].title}
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '50px',
          }}
        >
          {services.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: index === currentIndex ? '40px' : '12px',
                height: '12px',
                borderRadius: '6px',
                background: index === currentIndex ? 'var(--primary-green)' : 'var(--border-light)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
