'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
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

  const contactInfo = [
    { icon: '📧', title: 'Email', content: 'info@mfkexports.com' },
    { icon: '📞', title: 'Phone', content: '+1 (555) 123-4567' },
    { icon: '📍', title: 'Address', content: '123 Export Street, Logistics City, LC 12345' },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: '100px 20px',
        position: 'relative',
        zIndex: 1,
        background: 'var(--white)',
      }}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Let's discuss how we can help with your export needs</p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            marginTop: '60px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.8rem',
                marginBottom: '2rem',
                color: 'var(--deep-green)',
              }}
            >
              Get In Touch
            </h3>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginBottom: '2rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'var(--primary-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      marginBottom: '0.5rem',
                      color: 'var(--deep-green)',
                      fontSize: '1.1rem',
                    }}
                  >
                    {info.title}
                  </h4>
                  <p style={{ color: 'var(--text-grey)', fontSize: '1rem' }}>{info.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="card"
            style={{
              background: 'var(--white)',
              border: '1px solid var(--border-light)',
            }}
          >
            {['name', 'email', 'subject'].map((field, index) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                style={{ marginBottom: '1.5rem' }}
              >
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  required
                  value={formData[field as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    background: 'var(--white)',
                    color: 'var(--text-dark)',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-green)'
                    e.currentTarget.style.outline = 'none'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(27, 170, 90, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-light)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              style={{ marginBottom: '1.5rem' }}
            >
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '1px solid var(--border-light)',
                  borderRadius: '8px',
                  fontFamily: 'inherit',
                  fontSize: '1rem',
                  background: 'var(--white)',
                  color: 'var(--text-dark)',
                  resize: 'vertical',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-green)'
                  e.currentTarget.style.outline = 'none'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(27, 170, 90, 0.1)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </motion.div>
            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ width: '100%' }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
