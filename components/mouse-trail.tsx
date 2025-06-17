"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CursorPosition {
  x: number
  y: number
  id: number
}

export function MouseTrail() {
  const [cursorTrail, setCursorTrail] = useState<CursorPosition[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorTrail((prevTrail) => [{ x: e.clientX, y: e.clientY, id: Date.now() }, ...prevTrail.slice(0, 8)])
  }, [])

  useEffect(() => {
    if (!isClient) return

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove, isClient])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {cursorTrail.map((cursor, index) => (
          <motion.div
            key={cursor.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            style={{
              left: cursor.x - 6,
              top: cursor.y - 6,
              opacity: Math.max(0.8 - index * 0.1, 0),
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
