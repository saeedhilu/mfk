'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import AnimatedWorldMap from './AnimatedWorldMap'
import styles from './Hero.module.css'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const features = [
    { icon: '🌡️', title: 'Temperature Control', description: 'Advanced cold chain technology' },
    { icon: '📊', title: 'Real-time Tracking', description: 'Monitor your shipments 24/7' },
    { icon: '✅', title: 'Quality Certified', description: 'International standards compliance' },
    { icon: '⚡', title: 'Fast Delivery', description: 'Optimized global routes' },
  ]

  const stats = [
    { number: '500+', label: 'Countries', icon: '🌍' },
    { number: '10K+', label: 'Tons Exported', icon: '📦' },
    { number: '98%', label: 'Satisfaction', icon: '⭐' },
  ]

  return (
    <>
    <div className={styles.mapBackground}>
        <AnimatedWorldMap />
      </div>
      <section id="home" ref={ref} className={styles.hero}>
      {/* Animated World Map Background */}
      

      {/* Gradient Overlay */}
      <motion.div
        className={styles.gradientOverlay}
        style={{ y, opacity }}
      />

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.badge}
          >
            <span className={styles.badgeText}>
              🌍 Trusted by 1,000+ Businesses Worldwide
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.heading}
          >
            Export Fresh Produce
            <br />
            <span className={styles.headingAccent}>Globally</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.description}
          >
            Premium logistics solutions for fruits and vegetables.
            Connecting farms to global markets with excellence and reliability.
            We specialize in temperature-controlled transportation, quality assurance,
            and seamless international trade documentation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.ctaGroup}
          >
            <a href="#contact" className="btn btn-primary">
              Start Exporting
            </a>
            <a href="#services" className="btn btn-secondary">
              View Services
            </a>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.featuresGrid}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className={styles.featureCard}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className={styles.statsContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className={styles.statItem}
              >
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
   
  )
}
