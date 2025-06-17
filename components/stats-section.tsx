"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Code, Database, BookOpen, Award } from "lucide-react"

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Code, label: "Projects Completed", value: 15, suffix: "+" },
    { icon: Database, label: "Datasets Analyzed", value: 50, suffix: "+" },
    { icon: BookOpen, label: "Research Papers", value: 1, suffix: "" },
    { icon: Award, label: "Academic Year", value: 4, suffix: "th" },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = end
              return newCounts
            })
            clearInterval(timer)
          } else {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = Math.floor(start)
              return newCounts
            })
          }
        }, 16)

        return () => clearInterval(timer)
      })
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Journey in Numbers</h2>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto">
            Here's a snapshot of my academic and project achievements so far
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center text-white hover:bg-white/20 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>

              <motion.div className="text-4xl font-bold mb-2" key={counts[index]}>
                {counts[index]}
                {stat.suffix}
              </motion.div>

              <p className="text-purple-100 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
