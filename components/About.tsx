'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Container from './ui/Container'
import Section from './ui/Section'
import styles from './About.module.css'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: '🌍',
      title: 'Global Network',
      description:
        'Connected to markets worldwide with strategic partnerships across 120+ countries. Our extensive network ensures reliable access to international markets and seamless logistics coordination.',
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description:
        'Optimized routes and schedules that minimize transit times. We leverage advanced logistics technology and strategic partnerships to ensure your produce reaches markets quickly and efficiently.',
    },
    {
      icon: '✅',
      title: 'Quality Assured',
      description:
        'Rigorous quality checks at every stage of the supply chain. Our certified quality control team ensures your produce meets the highest international standards and customer expectations.',
    },
    {
      icon: '🤝',
      title: 'Trusted Partner',
      description:
        'Years of reliable service with a proven track record. We have built long-term relationships with producers and buyers worldwide, earning trust through consistent delivery and exceptional service.',
    },
    {
      icon: '📊',
      title: 'Data-Driven',
      description:
        'Real-time tracking and analytics for complete supply chain visibility. Our advanced tracking systems provide you with detailed insights into shipment status, temperature conditions, and delivery timelines.',
    },
    {
      icon: '🛡️',
      title: 'Risk Management',
      description:
        'Comprehensive insurance and risk mitigation strategies. We protect your shipments with appropriate coverage and implement proactive measures to minimize risks throughout the export process.',
    },
  ]

  return (
    <Section id="about" ref={ref} className={styles.section}>
      <Container>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Why Choose Us</h2>
          <p className={styles.sectionSubtitle}>Your trusted partner in global produce logistics</p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.feature}
            >
              <motion.div whileHover={{ scale: 1.1 }} className={styles.iconWrapper}>
                {feature.icon}
              </motion.div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
