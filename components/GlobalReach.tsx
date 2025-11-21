'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Container from './ui/Container'
import Section from './ui/Section'
import styles from './GlobalReach.module.css'

interface Stat {
  number: number
  suffix: string
  label: string
  icon: string
}

const stats: Stat[] = [
  { number: 500, suffix: '+', label: 'Countries Served', icon: '🌍' },
  { number: 10000, suffix: '+', label: 'Tons Exported', icon: '📦' },
  { number: 98, suffix: '%', label: 'Satisfaction Rate', icon: '⭐' },
]

interface CountUpProps {
  target: number
  suffix?: string
}

function CountUp({ target, suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const duration = 2000
    const steps = 60
    const increment = target / steps

    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [target])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

export default function GlobalReach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [counted, setCounted] = useState(false)

  useEffect(() => {
    if (isInView && !counted) {
      setCounted(true)
    }
  }, [isInView, counted])

  return (
    <Section id="reach" ref={ref} background="secondary" className={styles.section}>
      <Container>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className={styles.sectionTitle}>Global Reach</h2>
          <p className={styles.sectionSubtitle}>Our impact in numbers</p>
        </motion.div>

        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.icon}>{stat.icon}</div>
              <h3 className={styles.number}>
                {counted ? <CountUp target={stat.number} suffix={stat.suffix} /> : '0'}
              </h3>
              <p className={styles.label}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
