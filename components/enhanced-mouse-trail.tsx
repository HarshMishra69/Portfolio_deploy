"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MousePosition {
  x: number
  y: number
  id: number
}

export function EnhancedMouseTrail() {
  const [mouseTrail, setMouseTrail] = useState<MousePosition[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Throttled mouse move handler for better performance
  const handleMouseMove = useCallback(
    (() => {
      let lastTime = 0
      return (e: MouseEvent) => {
        // Ensure we're on the client side
        if (typeof window === "undefined") return

        const now = Date.now()
        if (now - lastTime < 50) return // Throttle to 20fps instead of 60fps
        lastTime = now

        setMouseTrail((prev) => [
          { x: e.clientX, y: e.clientY, id: now },
          ...prev.slice(0, 4), // Reduced trail length from 15 to 4
        ])
      }
    })(),
    [],
  )

  useEffect(() => {
    // Client-side check
    if (!isClient || typeof window === "undefined") return

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [handleMouseMove, isClient])

  // Don't render on server
  if (!isClient || typeof window === "undefined") return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Simplified mouse trail */}
      <AnimatePresence>
        {mouseTrail.map((position, index) => (
          <motion.div
            key={position.id}
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            style={{
              left: position.x - 6,
              top: position.y - 6,
              opacity: Math.max(0.6 - index * 0.15, 0),
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
