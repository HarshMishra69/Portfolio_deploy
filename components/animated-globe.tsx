"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function AnimatedGlobe() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8])

  return (
    <div ref={ref} className="relative h-96 flex items-center justify-center overflow-hidden">
      <motion.div style={{ rotate, scale }} className="relative w-64 h-64">
        {/* Globe base */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 shadow-2xl">
          {/* Grid lines */}
          <div className="absolute inset-0 rounded-full">
            {/* Horizontal lines */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="absolute left-0 right-0 border-t border-blue-300/30"
                style={{ top: `${(i + 1) * 12.5}%` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}

            {/* Vertical lines */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 border-l border-blue-300/30"
                style={{ left: `${(i + 1) * 8.33}%` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>

          {/* Continents (simplified shapes) */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {/* North America */}
            <motion.div
              className="absolute w-8 h-12 bg-green-400/60 rounded-lg"
              style={{ top: "25%", left: "15%" }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Europe */}
            <motion.div
              className="absolute w-6 h-8 bg-green-400/60 rounded"
              style={{ top: "20%", left: "45%" }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />

            {/* Asia */}
            <motion.div
              className="absolute w-12 h-16 bg-green-400/60 rounded-lg"
              style={{ top: "15%", left: "60%" }}
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            />

            {/* Africa */}
            <motion.div
              className="absolute w-8 h-14 bg-green-400/60 rounded-lg"
              style={{ top: "35%", left: "48%" }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
            />
          </div>

          {/* Glowing dots for cities */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Atmosphere glow */}
          <div className="absolute -inset-4 rounded-full bg-blue-400/20 blur-xl" />
        </div>
      </motion.div>
    </div>
  )
}
