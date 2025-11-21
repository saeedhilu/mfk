// 'use client'

// import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react'
// import Container from './ui/Container'
// import Section from './ui/Section'
// import styles from './Process.module.css'

// interface Step {
//   number: string
//   title: string
//   description: string
//   icon: string
// }

// const steps: Step[] = [
//   {
//     number: '01',
//     title: 'Initial Consultation',
//     description:
//       'We begin with a comprehensive consultation to understand your export needs, product specifications, target markets, and timeline requirements. Our experts analyze your requirements and provide tailored recommendations.',
//     icon: '📞',
//   },
//   {
//     number: '02',
//     title: 'Quality Assessment',
//     description:
//       'Our certified quality control team conducts thorough inspections of your produce at the source. We verify compliance with international standards, check freshness, and ensure proper handling procedures are in place.',
//     icon: '🔍',
//   },
//   {
//     number: '03',
//     title: 'Custom Packaging',
//     description:
//       'We design and implement custom packaging solutions optimized for your specific produce type. Our eco-friendly materials and innovative designs ensure maximum protection during transit while maintaining freshness.',
//     icon: '📦',
//   },
//   {
//     number: '04',
//     title: 'Documentation & Compliance',
//     description:
//       'Our experienced team handles all export documentation, including customs clearance, phytosanitary certificates, and compliance requirements. We ensure all paperwork is accurate and meets destination country regulations.',
//     icon: '📋',
//   },
//   {
//     number: '05',
//     title: 'Cold Chain Logistics',
//     description:
//       'Temperature-controlled transportation begins with our advanced cold chain system. Real-time monitoring ensures optimal conditions throughout the journey, preserving quality and extending shelf life.',
//     icon: '🚚',
//   },
//   {
//     number: '06',
//     title: 'Delivery & Support',
//     description:
//       'We coordinate with local partners for seamless delivery to your destination. Our support team provides real-time tracking updates and remains available to address any concerns throughout the process.',
//     icon: '✅',
//   },
// ]

// export default function Process() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.2 })

//   return (
//     <Section id="process" ref={ref} background="secondary" className={styles.section}>
//       <Container>
//         <motion.div
//           className={styles.sectionHeader}
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.5 }}
//             className={styles.eyebrow}
//           >
//             <span>Our Process</span>
//           </motion.div>
//           <h2 className={styles.sectionTitle}>How We Work</h2>
//           <p className={styles.sectionSubtitle}>
//             A streamlined process from consultation to delivery, ensuring your produce reaches global markets with
//             excellence
//           </p>
//         </motion.div>

//         <div className={styles.grid}>
//           {steps.map((step, index) => (
//             <motion.div
//               key={step.number}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className={styles.stepCard}
//             >
//               <div className={styles.stepNumber}>{step.number}</div>
//               <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className={styles.icon}>
//                 {step.icon}
//               </motion.div>
//               <h3 className={styles.title}>{step.title}</h3>
//               <p className={styles.description}>{step.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </Section>
//   )
// }


'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, memo } from 'react'
import Container from './ui/Container'
import Section from './ui/Section'
import styles from './Process.module.css'

interface Step {
  number: string
  title: string
  description: string
  icon: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'We begin with a comprehensive consultation to understand your export needs, product specifications, target markets, and timeline requirements.',
    icon: '📞',
  },
  {
    number: '02',
    title: 'Quality Assessment',
    description:
      'Certified quality control teams verify compliance with international standards, ensuring freshness and proper handling.',
    icon: '🔍',
  },
  {
    number: '03',
    title: 'Custom Packaging',
    description:
      'We design eco-friendly, optimized packaging to protect your produce during transit and maintain freshness.',
    icon: '📦',
  },
  {
    number: '04',
    title: 'Documentation & Compliance',
    description:
      'We manage customs clearance, phytosanitary certificates, and compliance with destination-country regulations.',
    icon: '📋',
  },
  {
    number: '05',
    title: 'Cold Chain Logistics',
    description:
      'Advanced cold-chain logistics with real-time monitoring ensure optimal temperature throughout the journey.',
    icon: '🚚',
  },
  {
    number: '06',
    title: 'Delivery & Support',
    description:
      'We coordinate seamless delivery through global partners and keep you updated with real-time tracking.',
    icon: '✅',
  },
]

// Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section
      id="process"
      ref={ref}
      background="secondary"
      className={styles.section}
    >
      <Container>
        {/* ────── Header ────── */}
        <motion.div
          className={styles.sectionHeader}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fadeUp}
        >
          <motion.div
            className={styles.eyebrow}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.45 }}
          >
            <span>Our Process</span>
          </motion.div>

          <h2 className={styles.sectionTitle}>How We Work</h2>
          <p className={styles.sectionSubtitle}>
            A streamlined process from consultation to delivery — ensuring your produce reaches global markets with excellence.
          </p>
        </motion.div>

        {/* ────── Steps Grid ────── */}
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.stepCard}
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
            >
              <div className={styles.stepNumber}>{step.number}</div>

              <motion.div
                className={styles.icon}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {step.icon}
              </motion.div>

              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default memo(Process)
