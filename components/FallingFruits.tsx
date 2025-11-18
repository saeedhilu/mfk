'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const fruits = ['🍎', '🍊', '🍌', '🍇', '🍓', '🥝', '🍑', '🥭', '🍍', '🥑']

export default function FallingFruits() {
  const [fruitsArray, setFruitsArray] = useState<Array<{
    id: number
    emoji: string
    left: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    // Create subtle falling fruits - not too many to avoid being overwhelming
    const newFruits = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      emoji: fruits[Math.floor(Math.random() * fruits.length)],
      left: Math.random() * 100,
      duration: 15 + Math.random() * 10, // 15-25 seconds
      delay: Math.random() * 5,
    }))
    setFruitsArray(newFruits)
  }, [])

  return (
    <div className="falling-fruits">
      {fruitsArray.map((fruit) => (
        <motion.div
          key={fruit.id}
          className="fruit"
          initial={{ y: -50, x: fruit.left + '%', opacity: 0.1 }}
          animate={{
            y: '100vh',
            opacity: [0.1, 0.15, 0.1],
            rotate: 360,
          }}
          transition={{
            duration: fruit.duration,
            delay: fruit.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            fontSize: '2rem',
            pointerEvents: 'none',
          }}
        >
          {fruit.emoji}
        </motion.div>
      ))}
    </div>
  )
}

