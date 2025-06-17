"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Code, Database, Brain } from "lucide-react"

export function FloatingElements() {
  const [isClient, setIsClient] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Client-side check for mouse events
    if (!isClient || typeof window === "undefined") return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [isClient])

  const icons = [Code, Database, Brain]

  // Reduced to only 6 elements
  const elements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    Icon: icons[i % icons.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
  }))

  // Don't render on server
  if (!isClient || typeof window === "undefined") return null

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
            x:
              isClient && typeof window !== "undefined"
                ? (mousePosition.x - (typeof window !== "undefined" ? window.innerWidth : 0) / 2) * 0.01
                : 0,
          }}
          transition={{
            duration: 8, // Slower animation
            repeat: Number.POSITIVE_INFINITY,
            delay: element.id * 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-6 bg-purple-500/10 backdrop-blur-sm border border-white/5 rounded-full flex items-center justify-center">
            <element.Icon className="w-3 h-3 text-purple-300/30" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
