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
    { 
      icon: '🌍', 
      title: 'Global Network', 
      description: 'Connected to markets worldwide with strategic partnerships across 120+ countries. Our extensive network ensures reliable access to international markets and seamless logistics coordination.' 
    },
    { 
      icon: '⚡', 
      title: 'Fast Delivery', 
      description: 'Optimized routes and schedules that minimize transit times. We leverage advanced logistics technology and strategic partnerships to ensure your produce reaches markets quickly and efficiently.' 
    },
    { 
      icon: '✅', 
      title: 'Quality Assured', 
      description: 'Rigorous quality checks at every stage of the supply chain. Our certified quality control team ensures your produce meets the highest international standards and customer expectations.' 
    },
    { 
      icon: '🤝', 
      title: 'Trusted Partner', 
      description: 'Years of reliable service with a proven track record. We have built long-term relationships with producers and buyers worldwide, earning trust through consistent delivery and exceptional service.' 
    },
    { 
      icon: '📊', 
      title: 'Data-Driven', 
      description: 'Real-time tracking and analytics for complete supply chain visibility. Our advanced tracking systems provide you with detailed insights into shipment status, temperature conditions, and delivery timelines.' 
    },
    { 
      icon: '🛡️', 
      title: 'Risk Management', 
      description: 'Comprehensive insurance and risk mitigation strategies. We protect your shipments with appropriate coverage and implement proactive measures to minimize risks throughout the export process.' 
    },
  ]

  return (
    <section
      id="about"
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
