// 'use client'

// import { motion, useInView } from 'framer-motion'
// import { useRef, useEffect, useState } from 'react'

// const stats = [
//   { number: 500, suffix: '+', label: 'Countries Served', icon: '🌍' },
//   { number: 10000, suffix: '+', label: 'Tons Exported', icon: '📦' },
//   { number: 98, suffix: '%', label: 'Satisfaction Rate', icon: '⭐' },
//   // { number: 24, suffix: '/7',    label: 'Support Available', icon: '🕐' },
// ]

// export default function GlobalReach() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.2 })
//   const [counted, setCounted] = useState(false)

//   useEffect(() => {
//     if (isInView && !counted) {
//       setCounted(true)
//     }
//   }, [isInView, counted])

//   return (
//     <section
//       id="reach"
//       ref={ref}
//       style={{
//         padding: 'clamp(60px, 8vh, 80px) 20px',
//         position: 'relative',
//         zIndex: 1,
//         background: 'var(--light-green)',
//       }}
//     >
//       <div  >
//         <motion.div
//           className="section-header"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="section-title">Global Reach</h2>
//           <p className="section-subtitle">Our impact in numbers</p>
//         </motion.div>

//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '40px',
//             marginTop: '60px',
//           }}
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="card"
//               style={{ textAlign: 'center' }}
//             >
//               <div
//                 style={{
//                   fontSize: '3rem',
//                   marginBottom: '16px',
//                 }}
//               >
//                 {stat.icon}
//               </div>
//               <h3
//                 style={{
//                   fontFamily: 'Poppins, sans-serif',
//                   fontSize: '3rem',
//                   fontWeight: 700,
//                   color: 'var(--primary-green)',
//                   marginBottom: '8px',
//                 }}
//               >
//                 {counted ? (
//                   <CountUp target={stat.number} suffix={stat.suffix} />
//                 ) : (
//                   '0'
//                 )}
//               </h3>
//               <p
//                 style={{
//                   color: 'var(--text-grey)',
//                   fontSize: '1.1rem',
//                   margin: 0,
//                 }}
//               >
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     const duration = 2000
//     const steps = 60
//     const increment = target / steps
//     let current = 0

//     const timer = setInterval(() => {
//       current += increment
//       if (current >= target) {
//         setCount(target)
//         clearInterval(timer)
//       } else {
//         setCount(Math.floor(current))
//       }
//     }, duration / steps)

//     return () => clearInterval(timer)
//   }, [target])

//   return (
//     <>
//       {count}
//       {suffix}
//     </>
//   )
// }



'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const stats = [
  { number: 500, suffix: '+', label: 'Countries Served', icon: '🌍' },
  { number: 10000, suffix: '+', label: 'Tons Exported', icon: '📦' },
  { number: 98, suffix: '%', label: 'Satisfaction Rate', icon: '⭐' },
]

export default function GlobalReach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [counted, setCounted] = useState(false)

  useEffect(() => {
    if (isInView && !counted) setCounted(true)
  }, [isInView])

  return (
    <section
      id="reach"
      ref={ref}
      style={{
        background: 'var(--light-green)',
        padding: '80px 0',
        position: 'relative',
      }}
    >
      <div  >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header"
        >
          <h2 className="section-title">Global Reach</h2>
          <p className="section-subtitle">
            Our impact in numbers
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginTop: '40px',
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '3rem' }}>{s.icon}</div>

              <h3
                style={{
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  color: 'var(--primary-green)',
                }}
              >
                {counted ? <CountUp target={s.number} suffix={s.suffix} /> : '0'}
              </h3>

              <p style={{ color: 'var(--text-grey)' }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const duration = 2000
    const steps = 60
    const inc = target / steps

    const interval = setInterval(() => {
      current += inc
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
