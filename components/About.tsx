'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [counted, setCounted] = useState(false)

  useEffect(() => {
    if (isInView && !counted) {
      setCounted(true)
    }
  }, [isInView, counted])

  const features = [
    { icon: '🌍', title: 'Global Network', description: 'Connected to markets worldwide' },
    { icon: '⚡', title: 'Fast Delivery', description: 'Optimized routes and schedules' },
    { icon: '✅', title: 'Quality Assured', description: 'Rigorous quality checks' },
    { icon: '🤝', title: 'Trusted Partner', description: 'Years of reliable service' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '100px 20px',
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
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Your trusted partner in global produce logistics</p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginTop: '60px',
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                textAlign: 'center',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'var(--primary-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  margin: '0 auto 24px',
                  boxShadow: 'var(--shadow-soft)',
                }}
              >
                {feature.icon}
              </motion.div>
              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--deep-green)',
                  marginBottom: '12px',
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: 'var(--text-grey)',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
