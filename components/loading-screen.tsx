"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Brain, Zap } from "lucide-react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(timer)
  }, [isClient])

  const icons = [Code, Database, Brain, Zap]

  if (!isClient) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center"
        >
          {/* Background Animation */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="text-center z-10">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <span className="text-white font-bold text-3xl">H</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Harsh Mishra</h1>
              <p className="text-purple-300">Data Science Portfolio</p>
            </motion.div>

            {/* Rotating Icons */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              {icons.map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center"
                  style={{
                    left: "50%",
                    top: "50%",
                    marginLeft: "-24px",
                    marginTop: "-24px",
                  }}
                  animate={{
                    rotate: 360,
                    x: Math.cos((index * Math.PI * 2) / icons.length + (progress / 100) * Math.PI * 2) * 40,
                    y: Math.sin((index * Math.PI * 2) / icons.length + (progress / 100) * Math.PI * 2) * 40,
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    x: { duration: 0.5 },
                    y: { duration: 0.5 },
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-64 mx-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white text-sm">Loading Portfolio</span>
                <span className="text-purple-300 text-sm">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Loading Text */}
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="mt-6 text-gray-400"
            >
              Preparing amazing experience...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
