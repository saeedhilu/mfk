'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Container from './ui/Container'
import Section from './ui/Section'
import styles from './Contact.module.css'

interface ContactInfo {
  icon: string
  title: string
  content: string
}

const contactInfo: ContactInfo[] = [
  { icon: '📧', title: 'Email', content: 'info@mfkexports.com' },
  { icon: '📞', title: 'Phone', content: '+1 (555) 123-4567' },
  { icon: '📍', title: 'Address', content: '123 Export Street, Logistics City, LC 12345' },
]

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Section id="contact" ref={ref} className={styles.section}>
      <Container>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.sectionSubtitle}>Let&rsquo;s discuss how we can help with your export needs</p>
        </motion.div>

        <div className={styles.layout}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className={styles.contactInfo}
          >
            <h3>Get In Touch</h3>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={styles.contactItem}
              >
                <div className={styles.icon}>{info.icon}</div>
                <div className={styles.details}>
                  <h4>{info.title}</h4>
                  <p>{info.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className={styles.form}
          >
            {(['name', 'email', 'subject'] as const).map((field, index) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className={styles.inputGroup}
              >
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  required
                  value={formData[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  className={styles.input}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className={styles.inputGroup}
            >
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className={styles.textarea}
              />
            </motion.div>
            <motion.button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </Container>
    </Section>
  )
}
