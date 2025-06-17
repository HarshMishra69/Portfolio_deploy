"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  life: number
}

export function ParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const createParticle = useCallback((x: number, y: number) => {
    const colors = ["#8B5CF6", "#EC4899", "#06B6D4", "#10B981", "#F59E0B"]
    return {
      id: Math.random(),
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1,
    }
  }, [])

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return

    let lastTime = 0
    const throttleDelay = 100 // Throttle to every 100ms

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastTime < throttleDelay) return
      lastTime = now

      // Create particles on mouse move (reduced frequency)
      if (Math.random() < 0.2) {
        try {
          const newParticle = createParticle(e.clientX, e.clientY)
          setParticles((prev) => [...prev.slice(-15), newParticle]) // Reduced max particles
        } catch (error) {
          console.log("Error creating particle:", error)
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isClient, createParticle])

  useEffect(() => {
    if (!isClient) return

    const interval = setInterval(() => {
      setParticles((prev) => {
        try {
          return prev
            .map((particle) => ({
              ...particle,
              x: particle.x + particle.vx,
              y: particle.y + particle.vy,
              life: particle.life - 0.02,
            }))
            .filter((particle) => particle.life > 0)
        } catch (error) {
          console.log("Error updating particles:", error)
          return []
        }
      })
    }, 32) // Reduced frequency to 30fps

    return () => clearInterval(interval)
  }, [isClient])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life,
          }}
          animate={{
            scale: [1, 0],
            opacity: [particle.life, 0],
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </div>
  )
}
