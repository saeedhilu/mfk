'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Route {
  id: string
  from: { x: number; y: number }
  to: { x: number; y: number }
  progress: number
  duration: number
}

export default function AnimatedWorldMap() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [routes, setRoutes] = useState<Route[]>([])

  useEffect(() => {
    // Define trade routes
    const initialRoutes: Route[] = [
      {
        id: 'route1',
        from: { x: 20, y: 40 }, // North America
        to: { x: 75, y: 35 }, // Asia
        progress: 0,
        duration: 12,
      },
      {
        id: 'route2',
        from: { x: 50, y: 45 }, // Europe
        to: { x: 85, y: 60 }, // Australia
        progress: 0.3,
        duration: 15,
      },
      {
        id: 'route3',
        from: { x: 25, y: 70 }, // South America
        to: { x: 50, y: 45 }, // Europe
        progress: 0.5,
        duration: 14,
      },
    ]
    setRoutes(initialRoutes)

    // Animate routes
    const interval = setInterval(() => {
      setRoutes((prev) =>
        prev.map((route) => ({
          ...route,
          progress: (route.progress + 0.008) % 1,
        }))
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const getPointOnCurve = (from: { x: number; y: number }, to: { x: number; y: number }, t: number) => {
    // Smooth bezier curve
    const controlPoint = {
      x: (from.x + to.x) / 2,
      y: Math.min(from.y, to.y) - 15,
    }
    const x = (1 - t) ** 2 * from.x + 2 * (1 - t) * t * controlPoint.x + t ** 2 * to.x
    const y = (1 - t) ** 2 * from.y + 2 * (1 - t) * t * controlPoint.y + t ** 2 * to.y
    return { x, y }
  }

  const getAngle = (from: { x: number; y: number }, to: { x: number; y: number }, t: number) => {
    const currentPos = getPointOnCurve(from, to, t)
    const nextPos = getPointOnCurve(from, to, Math.min(t + 0.05, 1))
    return (Math.atan2(nextPos.y - currentPos.y, nextPos.x - currentPos.x) * 180) / Math.PI
  }

  const hubLocations = [
    { x: 20, y: 40, label: 'NA' },
    { x: 50, y: 45, label: 'EU' },
    { x: 75, y: 35, label: 'AS' },
    { x: 85, y: 60, label: 'AU' },
    { x: 25, y: 70, label: 'SA' },
  ]

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.6,
        pointerEvents: 'none',
      }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Light grey world map background - simplified continents */}
        <g opacity="0.3">
          {/* Simplified continent shapes in light grey */}
          <path
            d="M 15 35 Q 25 30 35 35 Q 40 40 35 50 Q 30 55 20 50 Q 15 45 15 35 Z"
            fill="#E0E8ED"
            stroke="#D0D8DD"
            strokeWidth="0.2"
          />
          <path
            d="M 45 40 Q 55 35 65 40 Q 70 45 65 55 Q 60 60 50 55 Q 45 50 45 40 Z"
            fill="#E0E8ED"
            stroke="#D0D8DD"
            strokeWidth="0.2"
          />
          <path
            d="M 70 30 Q 80 25 90 30 Q 95 35 90 45 Q 85 50 75 45 Q 70 40 70 30 Z"
            fill="#E0E8ED"
            stroke="#D0D8DD"
            strokeWidth="0.2"
          />
          <path
            d="M 20 60 Q 30 55 40 60 Q 45 65 40 75 Q 35 80 25 75 Q 20 70 20 60 Z"
            fill="#E0E8ED"
            stroke="#D0D8DD"
            strokeWidth="0.2"
          />
          <path
            d="M 80 55 Q 88 50 95 55 Q 98 60 95 68 Q 90 72 82 68 Q 80 63 80 55 Z"
            fill="#E0E8ED"
            stroke="#D0D8DD"
            strokeWidth="0.2"
          />
        </g>

        {/* Green trade routes */}
        {routes.map((route) => {
          const currentPos = getPointOnCurve(route.from, route.to, route.progress)
          const angle = getAngle(route.from, route.to, route.progress)

          return (
            <g key={route.id}>
              {/* Route path - thin green line with subtle glow */}
              <path
                d={`M ${route.from.x} ${route.from.y} Q ${(route.from.x + route.to.x) / 2} ${
                  Math.min(route.from.y, route.to.y) - 15
                } ${route.to.x} ${route.to.y}`}
                fill="none"
                stroke="#1BAA5A"
                strokeWidth="0.15"
                opacity="0.6"
                strokeDasharray="0.5 0.5"
              />
              {/* Airplane - proper airplane shape */}
              <g transform={`translate(${currentPos.x}, ${currentPos.y}) rotate(${angle})`}>
                {/* Airplane body */}
                <motion.path
                  d="M -0.8 0 L 0.8 0 L 0.6 -0.2 L -0.6 -0.2 Z"
                  fill="#1BAA5A"
                  opacity="0.9"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                {/* Airplane wings */}
                <path
                  d="M -0.3 0 L -0.5 0.3 L -0.2 0.3 Z"
                  fill="#1BAA5A"
                  opacity="0.8"
                />
                <path
                  d="M 0.3 0 L 0.5 0.3 L 0.2 0.3 Z"
                  fill="#1BAA5A"
                  opacity="0.8"
                />
                {/* Airplane tail */}
                <path
                  d="M -0.6 -0.2 L -0.8 -0.4 L -0.6 -0.3 Z"
                  fill="#1BAA5A"
                  opacity="0.7"
                />
                {/* Glow effect */}
                <circle
                  cx="0"
                  cy="0"
                  r="0.5"
                  fill="#1BAA5A"
                  opacity="0.2"
                />
              </g>
              {/* Trail dots */}
              <motion.circle
                cx={getPointOnCurve(route.from, route.to, Math.max(0, route.progress - 0.1)).x}
                cy={getPointOnCurve(route.from, route.to, Math.max(0, route.progress - 0.1)).y}
                r="0.15"
                fill="#1BAA5A"
                opacity={0.4}
                animate={{ opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </g>
          )
        })}

        {/* Subtle floating dots for global hubs */}
        {hubLocations.map((hub, index) => (
          <motion.circle
            key={index}
            cx={hub.x}
            cy={hub.y}
            r="0.3"
            fill="#1BAA5A"
            opacity={0.4}
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  )
}
