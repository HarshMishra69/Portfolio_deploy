"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function FireGlobe() {
  const ref = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Only use scroll on client side
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Simplified transforms with client-side check
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 0.4, 0.4, 0.2])

  // Don't render on server
  if (!isClient || typeof window === "undefined") return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        ref={ref}
        style={{ rotate, opacity }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96"
      >
        {/* Simplified fire globe */}
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/30 via-red-500/20 to-yellow-500/30 blur-3xl" />

          {/* Minimal floating elements */}
          {["AI", "ML", "Data"].map((text, i) => (
            <div
              key={text}
              className="absolute text-orange-300/20 font-mono text-sm font-bold"
              style={{
                left: `${30 + i * 20}%`,
                top: `${40 + (i % 2) * 20}%`,
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
