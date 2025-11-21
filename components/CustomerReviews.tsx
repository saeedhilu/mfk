'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Container from './ui/Container'
import Section from './ui/Section'
import styles from './CustomerReviews.module.css'

interface Review {
  id: string
  name: string
  company: string
  location: string
  rating: number
  comment: string
  avatar: string
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Michael Chen',
    company: 'Fresh Produce Co.',
    location: 'Singapore',
    rating: 5,
    comment: 'MFK Exports has been our trusted partner for over 3 years. Their cold chain logistics ensure our fruits arrive fresh every time. Exceptional service and reliability.',
    avatar: '👤',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    company: 'Global Foods Ltd.',
    location: 'United Kingdom',
    rating: 5,
    comment: 'The quality assurance process is outstanding. We\'ve never had a single issue with shipments. Professional team and seamless documentation handling.',
    avatar: '👤',
  },
  {
    id: '3',
    name: 'Ahmed Al-Rashid',
    company: 'Middle East Imports',
    location: 'Dubai, UAE',
    rating: 5,
    comment: 'Fast delivery and excellent packaging solutions. Our customers are always satisfied with the product quality. Highly recommend MFK Exports.',
    avatar: '👤',
  },
  {
    id: '4',
    name: 'Emma Rodriguez',
    company: 'European Distributors',
    location: 'Spain',
    rating: 5,
    comment: 'Outstanding global distribution network. They handle all our export needs efficiently. The team is responsive and always available when we need support.',
    avatar: '👤',
  },
  {
    id: '5',
    name: 'David Kim',
    company: 'Asia Pacific Trading',
    location: 'South Korea',
    rating: 5,
    comment: 'Best logistics partner we\'ve worked with. Their attention to detail and commitment to quality is unmatched. Our business has grown significantly with their support.',
    avatar: '👤',
  },
  {
    id: '6',
    name: 'Lisa Thompson',
    company: 'North American Imports',
    location: 'Canada',
    rating: 5,
    comment: 'Reliable, professional, and trustworthy. MFK Exports makes international trade simple. Their expertise in produce logistics is evident in every shipment.',
    avatar: '👤',
  },
]

export default function CustomerReviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Responsive breakpoints for carousel
  const carouselBreakpoints = {
    0: { slidesPerView: 1.1, spaceBetween: 18 },
    640: { slidesPerView: 1.3, spaceBetween: 22 },
    900: { slidesPerView: 1.6, spaceBetween: 24 },
    1024: { slidesPerView: 2, spaceBetween: 28 },
    1440: { slidesPerView: 2.5, spaceBetween: 32 },
  }

  return (
    <Section id="reviews" ref={ref} className={styles.section}>
      <Container>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className={styles.eyebrow}
          >
            <span>Customer Reviews</span>
          </motion.div>
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          <p className={styles.sectionSubtitle}>
            Trusted by businesses worldwide. Rated 4.9+ stars by 1,000+ satisfied clients
          </p>
        </motion.div>

        {/* Overall Rating Display */}
       
        {/* Swiper Carousel */}
        <div className={styles.carouselWrapper}>
          {/* Gradient Overlays */}
          <div className={styles.gradientLeft} />
          <div className={styles.gradientRight} />

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.1}
            spaceBetween={18}
            speed={1200}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            loopAdditionalSlides={reviews.length}
            allowTouchMove={true}
            grabCursor={true}
            centeredSlides={false}
            breakpoints={carouselBreakpoints}
            rewind={false}
            style={{ padding: 0, overflow: 'visible' }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} style={{ height: 'auto' }}>
                <motion.div
                  className={styles.reviewCard}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  {/* Rating Stars */}
                  <div className={styles.rating}>
                    {'⭐'.repeat(review.rating)}
                  </div>

                  {/* Review Comment */}
                  <p className={styles.comment}>
                    &ldquo;{review.comment}&rdquo;
                  </p>

                  {/* Customer Info */}
                  <div className={styles.customerInfo}>
                    <div className={styles.avatar}>
                      {review.avatar}
                    </div>
                    <div className={styles.customerDetails}>
                      <h4>{review.name}</h4>
                      <p className={styles.company}>{review.company}</p>
                      <p className={styles.location}>📍 {review.location}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={styles.trustBadge}
        >
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>1,000+</div>
              <div className={styles.statLabel}>Verified Reviews</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>120+</div>
              <div className={styles.statLabel}>Countries Served</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

