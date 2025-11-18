'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#about', label: 'About' },
    { href: '#location', label: 'Location' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.08)' : 'none',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        borderBottom: isScrolled ? '1px solid var(--border-light)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 40px' }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--deep-green)',
          }}
        >
          MFK <span style={{ color: 'var(--primary-green)' }}>Exports</span>
        </motion.div>

        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-dark)',
                  fontWeight: 500,
                  fontSize: '1rem',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary-green)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-dark)'
                }}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            flexDirection: 'column',
            cursor: 'pointer',
            gap: '5px',
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 8 : 0,
            }}
            style={{
              width: '25px',
              height: '3px',
              background: 'var(--text-dark)',
              transition: 'all 0.3s ease',
            }}
          />
          <motion.span
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            style={{
              width: '25px',
              height: '3px',
              background: 'var(--text-dark)',
              transition: 'all 0.3s ease',
            }}
          />
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -8 : 0,
            }}
            style={{
              width: '25px',
              height: '3px',
              background: 'var(--text-dark)',
              transition: 'all 0.3s ease',
            }}
          />
        </motion.div>
      </div>
    </motion.nav>
  )
}
