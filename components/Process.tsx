'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with a comprehensive consultation to understand your export needs, product specifications, target markets, and timeline requirements. Our experts analyze your requirements and provide tailored recommendations.',
    icon: '📞',
  },
  {
    number: '02',
    title: 'Quality Assessment',
    description: 'Our certified quality control team conducts thorough inspections of your produce at the source. We verify compliance with international standards, check freshness, and ensure proper handling procedures are in place.',
    icon: '🔍',
  },
  {
    number: '03',
    title: 'Custom Packaging',
    description: 'We design and implement custom packaging solutions optimized for your specific produce type. Our eco-friendly materials and innovative designs ensure maximum protection during transit while maintaining freshness.',
    icon: '📦',
  },
  {
    number: '04',
    title: 'Documentation & Compliance',
    description: 'Our experienced team handles all export documentation, including customs clearance, phytosanitary certificates, and compliance requirements. We ensure all paperwork is accurate and meets destination country regulations.',
    icon: '📋',
  },
  {
    number: '05',
    title: 'Cold Chain Logistics',
    description: 'Temperature-controlled transportation begins with our advanced cold chain system. Real-time monitoring ensures optimal conditions throughout the journey, preserving quality and extending shelf life.',
    icon: '🚚',
  },
  {
    number: '06',
    title: 'Delivery & Support',
    description: 'We coordinate with local partners for seamless delivery to your destination. Our support team provides real-time tracking updates and remains available to address any concerns throughout the process.',
    icon: '✅',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="process"
      ref={ref}
      style={{
        padding: 'clamp(60px, 8vh, 80px) 20px',
        position: 'relative',
        zIndex: 1,
        background: 'var(--light-green)',
      }}
    >
      <div  >
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
              Our Process
            </span>
          </motion.div>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>How We Work</h2>
          <p className="section-subtitle" style={{ fontSize: '1.15rem' }}>
            A streamlined process from consultation to delivery, ensuring your produce reaches global markets with excellence
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(24px, 4vw, 32px)',
            marginTop: 'clamp(40px, 6vw, 60px)',
            position: 'relative',
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card"
              style={{
                padding: 'clamp(28px, 4vw, 40px)',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-soft)',
                background: 'var(--white)',
                position: 'relative',
                height: '100%',
              }}
            >
              {/* Step Number */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(3rem, 6vw, 4rem)',
                  fontWeight: 800,
                  color: 'rgba(27, 170, 90, 0.1)',
                  lineHeight: 1,
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, var(--primary-green), var(--deep-green))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  marginBottom: '24px',
                  boxShadow: '0 8px 24px rgba(27, 170, 90, 0.25)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {step.icon}
              </motion.div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                  fontWeight: 700,
                  color: 'var(--deep-green)',
                  marginBottom: '16px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-grey)',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                  flex: 1,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

