'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CustomerReviews from '@/components/CustomerReviews'
import About from '@/components/About'
import GlobalReach from '@/components/GlobalReach'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AnimatedWorldMap from '@/components/AnimatedWorldMap'

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: 'var(--white)' }}>
      <Navbar />
      <Hero />
      <Services />
      <CustomerReviews />
      <About />
      <GlobalReach />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
