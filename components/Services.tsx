'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Container from './ui/Container'
import Section from './ui/Section'
import styles from './Services.module.css'

type ServiceCard = {
  icon: string
  title: string
  description: string
  badge: string
  metrics: { label: string; value: string }[]
  tags: string[]
}

const services: ServiceCard[] = [
  {
    icon: '❄️',
    title: 'Cold Chain Control',
    description: 'Sensor-led reefer fleets keep fruit locked between 0–4°C from farm to runway with live exception alerts.',
    badge: 'Freshness 24/7',
    metrics: [
      { label: 'Avg temp dev.', value: '±0.4°C' },
      { label: 'Active reefer lanes', value: '38' },
    ],
    tags: ['Live telemetry', 'Rapid reroute'],
  },
  {
    icon: '📦',
    title: 'Packaging Lab',
    description: 'Vent-smart crates and compostable wraps built per SKU to cut bruising while staying customs-compliant.',
    badge: 'Impact-proof',
    metrics: [
      { label: 'Damage claims', value: '0.8%' },
      { label: 'Custom dielines', value: '120+' },
    ],
    tags: ['Compostable films', 'Shelf-life modeling'],
  },
  {
    icon: '🌍',
    title: 'Global Lift & Distribution',
    description: 'Priority lift across 24 hubs with pre-booked capacity, bonded warehousing, and market-specific playbooks.',
    badge: '120+ lanes',
    metrics: [
      { label: 'Ports cleared', value: '72h avg' },
      { label: 'Markets live', value: '120+' },
    ],
    tags: ['Slot guarantee', 'Bonded hubs'],
  },
  {
    icon: '🧪',
    title: 'Quality Intelligence',
    description: 'Multi-stage inspections, digital scorecards, and AI photo checks to certify every lot before release.',
    badge: 'Grade A ready',
    metrics: [
      { label: 'Checks per lot', value: '5+' },
      { label: 'QC accuracy', value: '99.2%' },
    ],
    tags: ['ISO / GlobalG.A.P', 'Photo QC AI'],
  },
  {
    icon: '📋',
    title: 'Docs & Compliance Desk',
    description: 'Phytosanitary, customs and port health paperwork packaged in under 6 hours with automated validations.',
    badge: '<0.5% errors',
    metrics: [
      { label: 'Clearance speed', value: '<24h' },
      { label: 'Docs accuracy', value: '99.5%' },
    ],
    tags: ['Phytosanitary', 'HS code routing'],
  },
  {
    icon: '📈',
    title: 'Trade Growth Studio',
    description: 'Route simulations, price intelligence and distributor matchmaking to open new shelves faster.',
    badge: '+18% ROI',
    metrics: [
      { label: 'New routes', value: '27' },
      { label: 'Avg lift', value: '+18%' },
    ],
    tags: ['Market briefs', 'Playbook design'],
  },
]

const quickFacts = [
  { label: 'On-time departures', value: '98.6%' },
  { label: 'Avg. clearance window', value: '< 24 hrs' },
  { label: 'Global partners', value: '180+' },
]

const routeStops = ['Harvest', 'Cool chain hub', 'Customs + docs', 'Flight deck', 'Retail shelf']

const planePath = [
  { x: 0, y: 0 },
  { x: 120, y: -20 },
  { x: 260, y: 10 },
  { x: 390, y: -18 },
  { x: 520, y: 0 },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section id="services" ref={ref} className={styles.section}>
      <div className={styles.glow} aria-hidden />
      <Container>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className={styles.eyebrow}
          >
            <span>Services engineered for exporters</span>
          </motion.div>
          <h2 className={styles.sectionTitle}>Designing the freshest supply line in the sky</h2>
          <p className={styles.sectionSubtitle}>
            Every touchpoint—from crate design to compliance—is rebuilt for produce that travels thousands of miles yet
            lands market-ready.
          </p>
        </motion.div>

        <div className={styles.layout}>
          <motion.div
            className={`${styles.intro} card`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className={styles.introCopy}>
              MFK operates like an always-on control tower. We pair a farmer success pod with data analysts and ops
              leads so decisions happen in minutes, not days.
            </p>
            <div className={styles.quickFacts}>
              {quickFacts.map((fact) => (
                <div key={fact.label} className={styles.quickFact}>
                  <span className={styles.quickFactValue}>{fact.value}</span>
                  <p className={styles.quickFactLabel}>{fact.label}</p>
                </div>
              ))}
            </div>
            <div className={styles.introTags}>
              {['Dedicated lane squads', 'Predictive disruption alerts', 'Nightly shipment pulse'].map((item) => (
                <span key={item} className={styles.introTag}>{item}</span>
              ))}
            </div>
          </motion.div>

          <div className={styles.grid}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ translateY: -8 }}
              >
                <div className={styles.icon}>{service.icon}</div>
                <div className={styles.titleRow}>
                  <h3>{service.title}</h3>
                  <span className={styles.badge}>{service.badge}</span>
                </div>
                <p className={styles.description}>{service.description}</p>
                <div className={styles.metrics}>
                  {service.metrics.map((metric) => (
                    <div key={`${service.title}-${metric.label}`} className={styles.metric}>
                      <strong className={styles.metricValue}>{metric.value}</strong>
                      <small className={styles.metricLabel}>{metric.label}</small>
                    </div>
                  ))}
                </div>
                <div className={styles.tags}>
                  {service.tags.map((tag) => (
                    <span key={`${service.title}-${tag}`} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

            
      </Container>
    </Section>
  )
}
