'use client'

import { ReactNode } from 'react'
import styles from './Container.module.css'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'wide' | 'narrow'
}

export default function Container({ children, className = '', size = 'default' }: ContainerProps) {
  return (
    <div className={`${styles.container} ${styles[`size-${size}`]} ${className}`}>
      {children}
    </div>
  )
}
