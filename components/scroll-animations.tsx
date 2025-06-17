"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function ScrollAnimations({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  if (!isClient) return <div>{children}</div>

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="relative">
      {children}
    </motion.div>
  )
}
