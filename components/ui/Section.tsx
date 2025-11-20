'use client'

import { ReactNode, forwardRef } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'white' | 'primary' | 'secondary'
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, className = '', background = 'white' }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`${styles.section} ${styles[`bg-${background}`]} ${className}`}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = 'Section'

export default Section
