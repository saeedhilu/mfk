'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const location = {
    name: 'Angamaly, Kerala',
    address: 'Angamaly, Kerala, India',
    coordinates: {
      lat: 10.1926394,
      lng: 76.3869289,
    },
    mapUrl: 'https://www.google.com/maps/place/Angamaly,+Kerala/@10.2024916,76.2986096,12z/data=!3m1!4b1!4m6!3m5!1s0x3b080665e0bb9959:0x19b75e6b4e671ef1!8m2!3d10.1926394!4d76.3869289!16zL20vMDVyX3hf?entry=ttu',
  }

  return (
    <section
      id="location"
      ref={ref}
      style={{
        padding: '100px 20px',
        position: 'relative',
        zIndex: 1,
        background: 'var(--light-green)',
      }}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Location</h2>
          <p className="section-subtitle">Visit us or get in touch from anywhere in the world</p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
            marginTop: '60px',
            alignItems: 'center',
          }}
        >
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="card"
            style={{
              padding: '40px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, var(--primary-green), var(--deep-green))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                marginBottom: '24px',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              📍
            </div>

            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--deep-green)',
                marginBottom: '16px',
              }}
            >
              {location.name}
            </h3>

            <p
              style={{
                color: 'var(--text-grey)',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: '32px',
              }}
            >
              {location.address}
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'var(--light-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}
                >
                  🗺️
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      color: 'var(--deep-green)',
                      marginBottom: '4px',
                    }}
                  >
                    Coordinates
                  </div>
                  <div style={{ color: 'var(--text-grey)', fontSize: '0.9rem' }}>
                    {location.coordinates.lat}, {location.coordinates.lng}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'var(--light-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}
                >
                  🌍
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      color: 'var(--deep-green)',
                      marginBottom: '4px',
                    }}
                  >
                    Time Zone
                  </div>
                  <div style={{ color: 'var(--text-grey)', fontSize: '0.9rem' }}>
                    IST (UTC+5:30)
                  </div>
                </div>
              </div>
            </div>

            <motion.a
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-block',
                textDecoration: 'none',
              }}
            >
              View on Google Maps
            </motion.a>
          </motion.div>

          {/* Embedded Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-medium)',
              border: '1px solid var(--border-light)',
              height: '500px',
            }}
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5!2d${location.coordinates.lng}!3d${location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080665e0bb9959%3A0x19b75e6b4e671ef1!2sAngamaly%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MFK Exports Location - Angamaly, Kerala"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

