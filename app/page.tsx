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
      <Hero />
      <GlobalReach />
      <Services />
      <CustomerReviews />
      <About />
      <Process />
      <Location />
      <Contact />
      <Footer />
    </>
  )
}
