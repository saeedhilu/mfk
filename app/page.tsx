// 'use client'

// import Navbar from '@/components/Navbar'
// import Hero from '@/components/Hero'
// import Services from '@/components/Services'
// import CustomerReviews from '@/components/CustomerReviews'
// import About from '@/components/About'
// import Process from '@/components/Process'
// import GlobalReach from '@/components/GlobalReach'
// import Location from '@/components/Location'
// import Contact from '@/components/Contact'
// import Footer from '@/components/Footer'
// import AnimatedWorldMap from '@/components/AnimatedWorldMap'

// export default function Home() {
//   return (
//     <main style={{ position: 'relative', minHeight: '100vh', background: 'var(--white)' }}>
//       <Navbar />
//       <Hero />
//       <Services />
//       <CustomerReviews />
//       <About />
//       <Process />
//       <GlobalReach />
//       <Location />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }

// app/page.tsx
'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CustomerReviews from '@/components/CustomerReviews'
import About from '@/components/About'
import Process from '@/components/Process'
import GlobalReach from '@/components/GlobalReach'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Full-width sections */}
      <Hero />                    {/* usually full-bleed */}
      <GlobalReach />             {/* map/background → full width */}
      
      {/* Contained sections - wrap content in .container */}
      <div className="container">
        <Services />
        <CustomerReviews />
        <About />
        <Process />
        <Location />
        <Contact />
      </div>

      <Footer />
    </>
  )
}