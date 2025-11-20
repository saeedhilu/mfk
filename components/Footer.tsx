'use client'

import { motion } from 'framer-motion'
import Container from './ui/Container'
import styles from './Footer.module.css'

export default function Footer() {
  const quickLinks = ['Home', 'Services', 'Reviews', 'About', 'Location', 'Contact']
  const services = ['Cold Chain Logistics', 'Packaging Solutions', 'Global Distribution']

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.brand}
          >
            <h3>MFK Exports</h3>
            <p>Exporting excellence, one shipment at a time. Your trusted partner in global produce logistics.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className={styles.column}>Quick Links</h4>
            <ul className={styles.links}>
              {quickLinks.map((link) => (
                <li key={link} className={styles.linkItem}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className={styles.link}
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
            <h4 className={styles.column}>Services</h4>
            <ul className={styles.links}>
              {services.map((service) => (
                <li key={service} className={styles.linkItem}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 5 }}
                    className={styles.link}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className={styles.copyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} MFK Exports. All rights reserved.</p>
        </motion.div>
      </Container>
    </footer>
  )
}
