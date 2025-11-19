'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  // { 
  //   icon: '🚚', 
  //   title: 'Cold Chain Logistics', 
  //   description: 'Temperature-controlled transportation ensuring freshness from farm to destination. Our advanced cold chain system maintains optimal conditions throughout the journey.',
  //   features: ['Temperature Monitoring', 'Real-time Tracking', 'Quality Assurance']
  // },
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

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: '120px 20px',
        position: 'relative',
        zIndex: 1,
        background: 'var(--white)',
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

        {/* Services Grid - Optimized for 2x2 on medium, 4 columns on large */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginTop: '60px',
            maxWidth: '1200px',
            margin: '60px auto 0',
          }}
          className="services-grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card"
              style={{
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-soft)',
                transition: 'all 0.3s ease',
                height: '100%',
              }}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, var(--primary-green), var(--deep-green))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  marginBottom: '28px',
                  boxShadow: '0 8px 24px rgba(27, 170, 90, 0.25)',
                }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--deep-green)',
                  marginBottom: '16px',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-grey)',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                  marginBottom: '28px',
                  flex: 1,
                }}
              >
                {service.description}
              </p>

              {/* Features List */}
              <div
                style={{
                  width: '100%',
                  paddingTop: '24px',
                  borderTop: '1px solid var(--border-light)',
                }}
              >
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      marginBottom: '12px',
                      fontSize: '0.9rem',
                      color: 'var(--text-grey)',
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
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .services-grid {
          display: grid;
        }
        
        /* Mobile: 1 column */
        @media (max-width: 640px) {
          .services-grid {
            gridTemplateColumns: 1fr !important;
          }
        }
        
        /* Tablet: 2 columns */
        @media (min-width: 641px) and (max-width: 1024px) {
          .services-grid {
            gridTemplateColumns: repeat(2, 1fr) !important;
          }
        }
        
        /* Desktop: 4 columns in one row */
        @media (min-width: 1025px) {
          .services-grid {
            gridTemplateColumns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
