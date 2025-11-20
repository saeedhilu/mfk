// 'use client'

// import { motion, useScroll, useTransform } from 'framer-motion'
// import { useRef } from 'react'
// import AnimatedWorldMap from './AnimatedWorldMap'

// export default function Hero() {
//   const ref = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start start', 'end start'],
//   })

//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

//   return (
//     <section
//       id="home"
//       ref={ref}
//       style={{
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 'clamp(80px, 10vh, 100px) clamp(16px, 4vw, 20px) clamp(40px, 6vh, 60px)',
//         position: 'relative',
//         zIndex: 1,
//         overflow: 'hidden',
//         background: 'var(--white)',
//       }}
//     >
//       {/* Animated World Map with Airplane - Hero Background */}
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: 0,
//           opacity: 0.4,
//           pointerEvents: 'none',
//         }}
//       >
//         <AnimatedWorldMap />
//       </div>

//       {/* Subtle background gradient */}
//       <motion.div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(233, 240, 235, 0.4) 100%)',
//           y,
//           opacity,
//           zIndex: 1,
//         }}
//       />

//       <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           style={{
//             textAlign: 'center',
//             // maxWidth: '900px',
//             margin: '0 auto',
//           }}
//         >
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             style={{
//               display: 'inline-block',
//               padding: 'clamp(6px, 1vw, 8px) clamp(16px, 3vw, 20px)',
//               background: 'rgba(27, 170, 90, 0.1)',
//               border: '1px solid rgba(27, 170, 90, 0.2)',
//               borderRadius: '50px',
//               marginBottom: 'clamp(16px, 3vw, 24px)',
//             }}
//           >
//             <span style={{ color: 'var(--primary-green)', fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)', fontWeight: 600 }}>
//               🌍 Trusted by 1,000+ Businesses Worldwide
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             style={{
//               fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
//               fontFamily: 'Poppins, sans-serif',
//               fontWeight: 800,
//               lineHeight: 1.1,
//               marginBottom: 'clamp(16px, 3vw, 24px)',
//               color: 'var(--deep-green)',
//               letterSpacing: '-0.03em',
//             }}
//           >
//             Export Fresh Produce
//             <br />
//             <span style={{ color: 'var(--primary-green)' }}>Globally</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             style={{
//               fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
//               color: 'var(--text-grey)',
//               marginBottom: 'clamp(24px, 4vw, 40px)',
//               lineHeight: 1.7,
//               maxWidth: '650px',
//               margin: '0 auto clamp(24px, 4vw, 40px)',
//               fontWeight: 400,
//             }}
//           >
//             Premium logistics solutions for fruits and vegetables. 
//             Connecting farms to global markets with excellence and reliability. 
//             We specialize in temperature-controlled transportation, quality assurance, 
//             and seamless international trade documentation.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             style={{ 
//               display: 'flex', 
//               gap: 'clamp(12px, 2vw, 16px)', 
//               justifyContent: 'center', 
//               flexWrap: 'wrap',
//               marginBottom: 'clamp(40px, 8vh, 80px)',
//             }}
//           >
//             <a href="#contact" className="btn btn-primary" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', padding: 'clamp(14px, 2.5vw, 18px) clamp(32px, 5vw, 40px)' }}>
//               Start Exporting
//             </a>
//             <a href="#services" className="btn btn-secondary" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', padding: 'clamp(14px, 2.5vw, 18px) clamp(32px, 5vw, 40px)' }}>
//               View Services
//             </a>
//           </motion.div>

//           {/* Key Features Grid */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//               gap: 'clamp(20px, 3vw, 28px)',
//               marginTop: 'clamp(40px, 6vh, 60px)',
//               marginBottom: 'clamp(30px, 5vh, 50px)',
//             }}
//           >
//             {[
//               { icon: '🌡️', title: 'Temperature Control', description: 'Advanced cold chain technology' },
//               { icon: '📊', title: 'Real-time Tracking', description: 'Monitor your shipments 24/7' },
//               { icon: '✅', title: 'Quality Certified', description: 'International standards compliance' },
//               { icon: '⚡', title: 'Fast Delivery', description: 'Optimized global routes' },
//             ].map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
//                 whileHover={{ y: -5, scale: 1.05 }}
//                 style={{
//                   textAlign: 'center',
//                   padding: 'clamp(20px, 3vw, 28px)',
//                   background: 'rgba(255, 255, 255, 0.9)',
//                   backdropFilter: 'blur(10px)',
//                   borderRadius: '16px',
//                   border: '1px solid rgba(27, 170, 90, 0.1)',
//                   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
//                 }}
//               >
//                 <div style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: 'clamp(8px, 1.5vw, 12px)' }}>
//                   {feature.icon}
//                 </div>
//                 <h4
//                   style={{
//                     fontFamily: 'Poppins, sans-serif',
//                     fontSize: 'clamp(1rem, 2vw, 1.2rem)',
//                     fontWeight: 600,
//                     color: 'var(--deep-green)',
//                     marginBottom: '8px',
//                   }}
//                 >
//                   {feature.title}
//                 </h4>
//                 <p style={{ color: 'var(--text-grey)', fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', margin: 0 }}>
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Stats Row */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.0 }}
//             style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
//               gap: 'clamp(24px, 4vw, 40px)',
//               marginTop: 'clamp(20px, 4vh, 40px)',
//               padding: 'clamp(24px, 4vw, 40px)',
//               background: 'rgba(255, 255, 255, 0.8)',
//               backdropFilter: 'blur(20px)',
//               borderRadius: '24px',
//               border: '1px solid rgba(27, 170, 90, 0.1)',
//               boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
//             }}
//           >
//             {[
//               { number: '500+', label: 'Countries', icon: '🌍' },
//               { number: '10K+', label: 'Tons Exported', icon: '📦' },
//               { number: '98%', label: 'Satisfaction', icon: '⭐' },
//             ].map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
//                 style={{ textAlign: 'center' }}
//               >
//                 <div style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: 'clamp(8px, 1.5vw, 12px)' }}>{stat.icon}</div>
//                 <div
//                   style={{
//                     fontFamily: 'Poppins, sans-serif',
//                     fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
//                     fontWeight: 700,
//                     color: 'var(--primary-green)',
//                     marginBottom: 'clamp(4px, 1vw, 8px)',
//                   }}
//                 >
//                   {stat.number}
//                 </div>
//                 <div style={{ color: 'var(--text-grey)', fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', fontWeight: 500 }}>
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import AnimatedWorldMap from './AnimatedWorldMap'
import HeroFeatures from './HeroFeatures'
import HeroStats from './HeroStats'

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
        width: '100%',
        padding: 'clamp(80px, 10vh, 120px) 0 clamp(40px, 8vh, 60px)',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--white)',
      }}
    >
      {/* Background Map */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.35,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <AnimatedWorldMap />
      </div>

      {/* Gradient Overlay */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(233,240,235,0.4) 100%)',
          y,
          opacity,
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(27,170,90,0.08)',
              border: '1px solid rgba(27,170,90,0.2)',
              borderRadius: 50,
              marginBottom: 24,
            }}
          >
            <span style={{ color: 'var(--primary-green)', fontWeight: 600 }}>
              🌍 Trusted by 1,000+ Businesses Worldwide
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'var(--deep-green)',
              marginBottom: 24,
            }}
          >
            Export Fresh Produce
            <br />
            <span style={{ color: 'var(--primary-green)' }}>Globally</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              maxWidth: 650,
              margin: '0 auto 32px',
              color: 'var(--text-grey)',
              lineHeight: 1.7,
            }}
          >
            Premium logistics solutions for fruits and vegetables. Connecting farms
            to global markets with temperature-controlled excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 16,
              marginBottom: 40,
              flexWrap: 'wrap',
            }}
          >
            <a href="#contact" className="btn btn-primary">
              Start Exporting
            </a>
            <a href="#services" className="btn btn-secondary">
              View Services
            </a>
          </motion.div>
        </motion.div>

        {/* SEPARATED COMPONENTS */}
        <HeroFeatures />
        <HeroStats />
      </div>
    </section>
  )
}
