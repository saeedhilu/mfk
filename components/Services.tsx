'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  { 
    icon: '🚚', 
    title: 'Cold Chain Logistics', 
    description: 'Temperature-controlled transportation ensuring freshness from farm to destination. Our advanced cold chain system maintains optimal conditions throughout the journey, preserving quality and extending shelf life. We utilize state-of-the-art refrigeration technology and real-time monitoring to guarantee your produce arrives in perfect condition.',
    features: ['Temperature Monitoring', 'Real-time Tracking', 'Quality Assurance', 'Extended Shelf Life']
  },
  { 
    icon: '📦', 
    title: 'Packaging Solutions', 
    description: 'Custom packaging designed to protect your produce during transit. We use eco-friendly materials and innovative designs for maximum protection. Our packaging solutions are tailored to each product type, ensuring minimal waste, optimal ventilation, and maximum freshness preservation. We comply with international packaging standards and regulations.',
    features: ['Custom Design', 'Eco-friendly Materials', 'Damage Protection', 'International Compliance']
  },
  { 
    icon: '🌍', 
    title: 'Global Distribution', 
    description: 'Worldwide shipping network connecting producers to international markets. Our extensive network ensures timely delivery to over 120 countries. We have established partnerships with major logistics providers, customs brokers, and port authorities worldwide. Our streamlined processes reduce transit times and minimize delays.',
    features: ['120+ Countries', 'Fast Shipping', 'Global Network', 'Streamlined Processes']
  },
  { 
    icon: '✅', 
    title: 'Quality Assurance', 
    description: 'Rigorous quality checks at every stage of the supply chain. We maintain the highest standards to ensure your produce meets international quality requirements. Our certified quality control team conducts inspections at origin, during transit, and at destination. We provide detailed quality reports and certifications for all shipments.',
    features: ['Multi-stage Inspection', 'Certification', 'Quality Reports', 'Certified Team']
  },
  { 
    icon: '📋', 
    title: 'Documentation & Compliance', 
    description: 'Complete documentation handling for international trade. We manage all export/import documentation, customs clearance, phytosanitary certificates, and compliance requirements. Our experienced team ensures all paperwork is accurate, timely, and meets destination country regulations, preventing delays and penalties.',
    features: ['Customs Clearance', 'Phytosanitary Certificates', 'Compliance Management', 'Expert Team']
  },
  { 
    icon: '💼', 
    title: 'Trade Consulting', 
    description: 'Expert guidance on international trade regulations, market access, and export strategies. Our consultants help you navigate complex trade requirements, identify new markets, and optimize your export operations. We provide market research, regulatory guidance, and strategic planning to grow your export business.',
    features: ['Market Research', 'Regulatory Guidance', 'Strategic Planning', 'Business Growth']
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
        padding: 'clamp(60px, 8vh, 80px) 20px',
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
        
        /* Desktop: 3 columns in one row */
        @media (min-width: 1025px) {
          .services-grid {
            gridTemplateColumns: repeat(3, 1fr) !important;
          }
        }
        
        /* Large Desktop: 3 columns (keep same for better readability) */
        @media (min-width: 1400px) {
          .services-grid {
            gridTemplateColumns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
