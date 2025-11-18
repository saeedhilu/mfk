'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--deep-green)',
        color: 'var(--white)',
        padding: '60px 20px 30px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '1.5rem',
                color: 'var(--white)',
                fontSize: '1.5rem',
              }}
            >
              MFK Exports
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.8 }}>
              Exporting excellence, one shipment at a time. Your trusted partner in global produce logistics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              style={{
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '1.5rem',
                color: 'var(--white)',
                fontSize: '1.1rem',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {['Home', 'Services', 'Reviews', 'About', 'Location', 'Contact'].map((link) => (
                <li key={link} style={{ marginBottom: '0.8rem' }}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--white)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              style={{
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '1.5rem',
                color: 'var(--white)',
                fontSize: '1.1rem',
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {['Cold Chain Logistics', 'Packaging Solutions', 'Global Distribution'].map((service) => (
                <li key={service} style={{ marginBottom: '0.8rem' }}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 5 }}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--white)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          style={{
            textAlign: 'center',
            paddingTop: '30px',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'rgba(255, 255, 255, 0.8)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; 2024 MFK Exports. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
