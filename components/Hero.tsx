'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import AnimatedWorldMap from './AnimatedWorldMap'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 20px 100px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        background: 'var(--white)',
      }}
    >
      {/* Animated World Map with Airplane - Hero Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      >
        <AnimatedWorldMap />
        <AnimatedWorldMap />
        <AnimatedWorldMap />
        <AnimatedWorldMap />
        <AnimatedWorldMap />
      </div>

      {/* Subtle background gradient */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(233, 240, 235, 0.4) 100%)',
          y,
          opacity,
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(27, 170, 90, 0.1)',
              border: '1px solid rgba(27, 170, 90, 0.2)',
              borderRadius: '50px',
              marginBottom: '24px',
            }}
          >
            <span style={{ color: 'var(--primary-green)', fontSize: '0.9rem', fontWeight: 600 }}>
              🌍 Trusted by 1,000+ Businesses Worldwide
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '24px',
              color: 'var(--deep-green)',
              letterSpacing: '-0.03em',
            }}
          >
            Export Fresh Produce
            <br />
            <span style={{ color: 'var(--primary-green)' }}>Globally</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)',
              color: 'var(--text-grey)',
              marginBottom: '40px',
              lineHeight: 1.7,
              maxWidth: '650px',
              margin: '0 auto 40px',
              fontWeight: 400,
            }}
          >
            Premium logistics solutions for fruits and vegetables. 
            Connecting farms to global markets with excellence and reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ 
              display: 'flex', 
              gap: '16px', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              marginBottom: '80px',
            }}
          >
            <a href="#contact" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '18px 40px' }}>
              Start Exporting
            </a>
            <a href="#services" className="btn btn-secondary" style={{ fontSize: '1.05rem', padding: '18px 40px' }}>
              View Services
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              marginTop: '80px',
              padding: '40px',
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid rgba(27, 170, 90, 0.1)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
            }}
          >
            {[
              { number: '500+', label: 'Countries', icon: '🌍' },
              { number: '10K+', label: 'Tons Exported', icon: '📦' },
              { number: '98%', label: 'Satisfaction', icon: '⭐' },
              // { number: '24/7', label:uw 'Support', icon: '🕐' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{stat.icon}</div>
                <div
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: 'var(--primary-green)',
                    marginBottom: '8px',
                  }}
                >
                  {stat.number}
                </div>
                <div style={{ color: 'var(--text-grey)', fontSize: '0.95rem', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
