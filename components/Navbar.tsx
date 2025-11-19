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

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#about', label: 'About' },
    { href: '#location', label: 'Location' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

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
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'clamp(0.8rem, 2vw, 1.2rem) clamp(16px, 4vw, 20px)',
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
            fontWeight: 700,
            color: 'var(--deep-green)',
            zIndex: 1001,
            whiteSpace: 'nowrap',
          }}
        >
          MFK <span style={{ color: 'var(--primary-green)' }}>Exports</span>
        </motion.div>

        {/* Desktop Navigation */}
        <ul
          style={{
            display: 'none',
            listStyle: 'none',
            gap: 'clamp(1rem, 2vw, 2rem)',
            alignItems: 'center',
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
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
                onClick={handleLinkClick}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-dark)',
                  fontWeight: 500,
                  fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  whiteSpace: 'nowrap',
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

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            gap: '5px',
            background: 'transparent',
            border: 'none',
            padding: '8px',
            zIndex: 1001,
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
          className="mobile-menu-btn"
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
              borderRadius: '2px',
            }}
          />
          <motion.span
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            style={{
              width: '25px',
              height: '3px',
              background: 'var(--text-dark)',
              transition: 'all 0.3s ease',
              borderRadius: '2px',
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
              borderRadius: '2px',
            }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: 'var(--white)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              borderTop: '1px solid var(--border-light)',
              overflow: 'hidden',
              maxHeight: '100vh',
              overflowY: 'auto',
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: '16px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
              }}
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      color: 'var(--text-dark)',
                      fontWeight: 500,
                      fontSize: '1rem',
                      padding: '14px clamp(20px, 5vw, 40px)',
                      transition: 'all 0.3s ease',
                      borderBottom: '1px solid var(--border-light)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--light-green)'
                      e.currentTarget.style.color = 'var(--primary-green)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'var(--text-dark)'
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </motion.nav>
  )
}
