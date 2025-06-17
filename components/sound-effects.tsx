"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

export function SoundEffects() {
  const [isMuted, setIsMuted] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return

    // Initialize Web Audio API
    try {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    } catch (error) {
      console.log("Web Audio API not supported")
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [isClient])

  const playSound = (frequency: number, duration = 0.1) => {
    if (!audioContextRef.current || isMuted || typeof window === "undefined") return

    try {
      const oscillator = audioContextRef.current.createOscillator()
      const gainNode = audioContextRef.current.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContextRef.current.destination)

      oscillator.frequency.setValueAtTime(frequency, audioContextRef.current.currentTime)
      oscillator.type = "sine"

      gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + duration)

      oscillator.start(audioContextRef.current.currentTime)
      oscillator.stop(audioContextRef.current.currentTime + duration)
    } catch (error) {
      console.log("Error playing sound:", error)
    }
  }

  const isButton = (element: HTMLElement): boolean => {
    if (!element) return false

    // Check if element is a button
    if (element.tagName === "BUTTON") return true

    // Check if element has button role
    if (element.getAttribute("role") === "button") return true

    // Check if element is clickable (has onclick or cursor pointer)
    const style = typeof window !== "undefined" ? window.getComputedStyle(element) : null
    if (style && style.cursor === "pointer") return true

    // Safely check for closest button parent
    try {
      if (element.closest && typeof element.closest === "function") {
        return !!element.closest("button")
      }
    } catch (error) {
      // Fallback: manually traverse up the DOM
      let parent = element.parentElement
      while (parent) {
        if (parent.tagName === "BUTTON" || parent.getAttribute("role") === "button") {
          return true
        }
        parent = parent.parentElement
      }
    }

    return false
  }

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return

    const handleClick = (e: MouseEvent) => {
      try {
        const target = e.target as HTMLElement
        if (target && isButton(target)) {
          playSound(800, 0.1) // Button click sound
        }
      } catch (error) {
        console.log("Error in click handler:", error)
      }
    }

    const handleHover = (e: MouseEvent) => {
      try {
        const target = e.target as HTMLElement
        if (target && isButton(target)) {
          playSound(600, 0.05) // Hover sound
        }
      } catch (error) {
        console.log("Error in hover handler:", error)
      }
    }

    document.addEventListener("click", handleClick)
    document.addEventListener("mouseenter", handleHover, true)

    return () => {
      document.removeEventListener("click", handleClick)
      document.removeEventListener("mouseenter", handleHover, true)
    }
  }, [isClient, isMuted])

  if (!isClient) return null

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      onClick={() => setIsMuted(!isMuted)}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
      title={isMuted ? "Enable Sound" : "Disable Sound"}
    >
      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
    </motion.button>
  )
}
