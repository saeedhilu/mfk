'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

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

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    handleLinkClick()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}
    >
      <div className={styles.navInner}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={styles.logo}
        >
          MFK <span className={styles.logoAccent}>Exports</span>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className={styles.desktopNav}>
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
                className={styles.navLink}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={styles.mobileMenuBtn}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles.hamburgerLine}
          />
          <motion.span
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1,
              scale: isMobileMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={styles.hamburgerLine}
          />
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles.hamburgerLine}
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
            className={styles.mobileMenu}
          >
            <ul className={styles.mobileMenuList}>
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                  className={styles.mobileMenuItem}
                >
                  <motion.a
                    href={link.href}
                    onClick={(e) => handleMobileLinkClick(e, link.href)}
                    whileTap={{ scale: 0.95 }}
                    className={styles.mobileMenuLink}
                  >
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      {link.label}
                    </motion.span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
