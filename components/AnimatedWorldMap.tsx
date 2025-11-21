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
    // Define subtle trade routes
    const initialRoutes: Route[] = [
      {
        id: 'route1',
        from: { x: 20, y: 40 },
        to: { x: 75, y: 35 },
        progress: 0,
        duration: 12,
      },
      {
        id: 'route2',
        from: { x: 50, y: 45 },
        to: { x: 85, y: 60 },
        progress: 0.3,
        duration: 15,
      },
      {
        id: 'route3',
        from: { x: 25, y: 70 },
        to: { x: 50, y: 45 },
        progress: 0.5,
        duration: 14,
      },
      {
        id: 'route4',
        from: { x: 75, y: 35 },
        to: { x: 20, y: 40 },
        progress: 0.2,
        duration: 13,
      },
      {
        id: 'route5',
        from: { x: 85, y: 60 },
        to: { x: 25, y: 70 },
        progress: 0.8,
        duration: 16,
      },
    ]
    setRoutes(initialRoutes)

    const interval = setInterval(() => {
      setRoutes((prev) =>
        prev.map((route) => ({
          ...route,
          progress: (route.progress + 0.006) % 1,
        }))
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const getPointOnCurve = (from: { x: number; y: number }, to: { x: number; y: number }, t: number) => {
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
    { x: 20, y: 40, label: 'North America' },
    { x: 50, y: 45, label: 'Europe' },
    { x: 75, y: 35, label: 'Asia' },
    { x: 85, y: 60, label: 'Australia' },
    { x: 25, y: 70, label: 'South America' },
    { x: 55, y: 60, label: 'Africa' },
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
        opacity: 0.5,
        pointerEvents: 'none',
      }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          {/* Subtle glow filter */}
          <filter id="subtleGlow">
            <feGaussianBlur stdDeviation="0.3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Gradient for routes */}
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Subtle world map continents */}
        <g opacity="0.12">
          {/* North America */}
          <path
            d="M 10 30 Q 15 25 20 28 Q 25 30 30 33 Q 35 38 33 45 Q 30 50 25 48 Q 20 47 18 43 Q 15 40 12 38 Q 10 35 10 30 Z"
            fill="#1F2937"
            stroke="#374151"
            strokeWidth="0.2"
          />
          {/* Europe */}
          <path
            d="M 45 38 Q 48 35 52 37 Q 56 39 58 43 Q 60 47 58 52 Q 55 56 50 54 Q 47 52 45 48 Q 43 43 45 38 Z"
            fill="#1F2937"
            stroke="#374151"
            strokeWidth="0.2"
          />
          {/* Asia */}
          <path
            d="M 65 28 Q 70 24 78 26 Q 85 28 90 32 Q 95 37 93 44 Q 90 50 83 48 Q 78 46 73 43 Q 68 39 65 35 Q 63 31 65 28 Z"
            fill="#1F2937"
            stroke="#374151"
            strokeWidth="0.2"
          />
          {/* Africa */}
          <path
            d="M 48 52 Q 52 50 57 53 Q 61 57 62 63 Q 62 68 58 72 Q 54 75 50 72 Q 47 68 46 63 Q 45 57 48 52 Z"
            fill="#1F2937"
            stroke="#374151"
            strokeWidth="0.2"
          />
          {/* South America */}
          <path
            d="M 22 60 Q 26 57 30 60 Q 33 64 34 70 Q 33 76 29 80 Q 25 82 21 78 Q 18 73 18 68 Q 18 63 22 60 Z"
            fill="#1F2937"
            stroke="#374151"
            strokeWidth="0.2"
          />
          {/* Australia */}
          <path
            d="M 80 58 Q 84 55 90 57 Q 95 60 96 65 Q 95 70 90 72 Q 85 73 81 70 Q 78 66 78 62 Q 78 60 80 58 Z"
            fill="#1F2937"
            stroke="#374151"
            strokeWidth="0.2"
          />
        </g>

        {/* Subtle grid pattern */}
        <g opacity="0.03">
          {[...Array(20)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 5}
              x2="100"
              y2={i * 5}
              stroke="#6B7280"
              strokeWidth="0.1"
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 5}
              y1="0"
              x2={i * 5}
              y2="100"
              stroke="#6B7280"
              strokeWidth="0.1"
            />
          ))}
        </g>

        {/* Trade routes - subtle and elegant */}
        {routes.map((route) => {
          const currentPos = getPointOnCurve(route.from, route.to, route.progress)
          const angle = getAngle(route.from, route.to, route.progress)

          return (
            <g key={route.id}>
              {/* Dashed route line */}
              <path
                d={`M ${route.from.x} ${route.from.y} Q ${(route.from.x + route.to.x) / 2} ${
                  Math.min(route.from.y, route.to.y) - 15
                } ${route.to.x} ${route.to.y}`}
                fill="none"
                stroke="#10B981"
                strokeWidth="0.15"
                opacity="0.25"
                strokeDasharray="0.8 1.2"
              />
              
              {/* Animated glow line following the airplane */}
              <path
                d={`M ${route.from.x} ${route.from.y} Q ${(route.from.x + route.to.x) / 2} ${
                  Math.min(route.from.y, route.to.y) - 15
                } ${route.to.x} ${route.to.y}`}
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="0.3"
                opacity="0.8"
                strokeDasharray={`${route.progress * 100} ${100 - route.progress * 100}`}
                filter="url(#subtleGlow)"
              />

              {/* Simple airplane icon */}
              <g transform={`translate(${currentPos.x}, ${currentPos.y}) rotate(${angle})`}>
                <motion.g
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Airplane body - sleek design */}
                  <path
                    d="M -0.6 0 L 0.8 0 L 0.6 -0.15 L -0.4 -0.15 Z"
                    fill="#10B981"
                    opacity="0.9"
                  />
                  {/* Wings */}
                  <path d="M -0.2 0 L -0.4 0.25 L -0.1 0.25 Z" fill="#10B981" opacity="0.8" />
                  <path d="M 0.2 0 L 0.4 0.25 L 0.1 0.25 Z" fill="#10B981" opacity="0.8" />
                  {/* Tail */}
                  <path d="M -0.4 -0.15 L -0.6 -0.3 L -0.4 -0.2 Z" fill="#10B981" opacity="0.7" />
                </motion.g>
                
                {/* Subtle glow around airplane */}
                <circle
                  cx="0"
                  cy="0"
                  r="0.4"
                  fill="#10B981"
                  opacity="0.2"
                  filter="url(#subtleGlow)"
                />
              </g>

              {/* Fading trail dots */}
              {[0.08, 0.16].map((offset, i) => (
                <motion.circle
                  key={i}
                  cx={getPointOnCurve(route.from, route.to, Math.max(0, route.progress - offset)).x}
                  cy={getPointOnCurve(route.from, route.to, Math.max(0, route.progress - offset)).y}
                  r={0.12 - i * 0.03}
                  fill="#10B981"
                  opacity={0.4 - i * 0.15}
                  animate={{ opacity: [0.4 - i * 0.15, 0, 0.4 - i * 0.15] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
              ))}
            </g>
          )
        })}

        {/* Hub locations - subtle pulsing dots */}
        {hubLocations.map((hub, index) => (
          <g key={index}>
            {/* Outer pulse ring */}
            <motion.circle
              cx={hub.x}
              cy={hub.y}
              r="0.8"
              fill="none"
              stroke="#10B981"
              strokeWidth="0.15"
              opacity="0.2"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
                ease: 'easeOut',
              }}
            />
            
            {/* Main hub dot */}
            <motion.circle
              cx={hub.x}
              cy={hub.y}
              r="0.3"
              fill="#10B981"
              opacity="0.6"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.3,
                ease: 'easeInOut',
              }}
            />
          </g>
        ))}

        {/* Ambient floating particles */}
        {[...Array(25)].map((_, i) => (
          <motion.circle
            key={i}
            cx={Math.random() * 100}
            cy={Math.random() * 100}
            r="0.08"
            fill="#10B981"
            opacity={0.15}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -8, 0],
              x: [0, Math.random() * 4 - 2, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  )
}