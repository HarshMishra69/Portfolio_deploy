"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

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

  const scrollToSection = (sectionId: string) => {
    // Client-side check for DOM manipulation
    if (typeof window === "undefined" || typeof document === "undefined") return

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      style={{ y, opacity }}
    >
      {/* Dynamic background with mouse interaction */}
      <div className="absolute inset-0">
        {isClient && typeof window !== "undefined" && (
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
            }}
          />
        )}
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {isClient &&
          [...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-sm" />
            </motion.div>
          ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Profile image with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 mx-auto relative">
            {/* Multiple glow layers */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full blur-2xl opacity-60"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-40"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <img
              src="/images/harsh-profile-new.jpg"
              alt="Harsh Mishra"
              className="w-full h-full rounded-full object-cover border-4 border-white/20 relative z-10"
            />

            {/* Sparkle effects around profile */}
            {isClient &&
              [...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                  style={{
                    left: `${20 + Math.cos((i * 45 * Math.PI) / 180) * 60}px`,
                    top: `${20 + Math.sin((i * 45 * Math.PI) / 180) * 60}px`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
          </div>
        </motion.div>

        {/* Enhanced status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)" }}
          >
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <Sparkles className="w-4 h-4" />🎓 Data Science Student at Bennett University
          </motion.span>
        </motion.div>

        {/* Name with enhanced gradient animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
        >
          <motion.span
            className="bg-gradient-to-r from-orange-400 via-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-400% animate-gradient"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            Harsh Mishra
          </motion.span>
        </motion.h1>

        {/* Animated subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">Aspiring Data Scientist & ML Engineer</p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
            Transforming data into insights • Building intelligent solutions • Passionate about AI & Machine Learning
          </p>
          {/* Email display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-sm"
          >
            <Mail className="w-4 h-4" />
            harshmishraactive247@gmail.com
          </motion.div>
        </motion.div>

        {/* Enhanced social links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center gap-4 mb-8"
        >
          {[
            { icon: Github, href: "https://github.com/HarshMishra69?tab=repositories", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/harsh-mishra-290430256/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:harshmishraactive247@gmail.com", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{
                scale: 1.3,
                rotate: 360,
                boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              title={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced CTA buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
            View My Projects
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all"
          >
            Let's Connect
          </motion.button>

          <motion.a
            href="https://drive.google.com/file/d/1uWaYF0IasqGmd54eQHERQWnZ88tKgiY1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div className="flex flex-col items-center gap-2" whileHover={{ scale: 1.1 }}>
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <motion.div
            animate={{
              boxShadow: [
                "0 0 10px rgba(168, 85, 247, 0.5)",
                "0 0 20px rgba(168, 85, 247, 0.8)",
                "0 0 10px rgba(168, 85, 247, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
          >
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
