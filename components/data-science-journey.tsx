"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useMemo, useCallback, useEffect } from "react"
import {
  Brain,
  Database,
  Code,
  TrendingUp,
  Award,
  BookOpen,
  Users,
  Target,
  Zap,
  Star,
  Sparkles,
  Rocket,
} from "lucide-react"

interface DataPoint {
  id: string
  title: string
  description: string
  icon: any
  position: { x: number; y: number }
  color: string
  year: string
  category: "learning" | "project" | "skill" | "achievement"
  connections: string[]
  impact: string
  tech: string[]
}

export function DataScienceJourney() {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isClient, setIsClient] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const [selectedPoint, setSelectedPoint] = useState<string | null>("start")
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const sphereRotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isClient])

  // Enhanced data points with more details
  const dataPoints: DataPoint[] = useMemo(
    () => [
      {
        id: "python",
        title: "Python Programming",
        description: "Mastered Python ecosystem for data science including pandas, numpy, matplotlib, and scikit-learn",
        icon: Code,
        position: { x: 15, y: 25 },
        color: "from-emerald-400 via-green-500 to-teal-600",
        year: "2022",
        category: "skill",
        connections: ["start", "ml"],
        impact: "Foundation for all data science projects",
        tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
      },
      {
        id: "start",
        title: "Data Science Journey Begins",
        description: "Discovered my passion for data science and began specializing in ML at Bennett University",
        icon: Rocket,
        position: { x: 35, y: 45 },
        color: "from-blue-400 via-cyan-500 to-sky-600",
        year: "2023",
        category: "learning",
        connections: ["python", "stats", "ml"],
        impact: "Career-defining moment",
        tech: ["Data Science", "Statistics", "Research"],
      },
      {
        id: "stats",
        title: "Statistics & Mathematics",
        description: "Deep dive into statistical analysis, probability theory, and mathematical foundations for ML",
        icon: TrendingUp,
        position: { x: 20, y: 70 },
        color: "from-purple-400 via-violet-500 to-indigo-600",
        year: "2023",
        category: "learning",
        connections: ["ml", "research"],
        impact: "Mathematical foundation for advanced ML",
        tech: ["Statistics", "Probability", "Linear Algebra"],
      },
      {
        id: "powerbi",
        title: "Business Intelligence",
        description: "Mastered Power BI for creating interactive dashboards and business intelligence solutions",
        icon: Database,
        position: { x: 65, y: 30 },
        color: "from-yellow-400 via-orange-500 to-red-500",
        year: "2023",
        category: "skill",
        connections: ["ecommerce", "bikes"],
        impact: "Bridge between data and business insights",
        tech: ["Power BI", "DAX", "Excel", "SQL"],
      },
      {
        id: "ml",
        title: "Machine Learning",
        description: "Comprehensive study of ML algorithms, from linear regression to ensemble methods",
        icon: Brain,
        position: { x: 50, y: 60 },
        color: "from-red-400 via-pink-500 to-rose-600",
        year: "2023-24",
        category: "skill",
        connections: ["dl", "nlp", "research"],
        impact: "Core competency in predictive modeling",
        tech: ["Scikit-learn", "Classification", "Regression", "Clustering"],
      },
      {
        id: "ecommerce",
        title: "E-commerce Analytics",
        description: "Comprehensive Amazon sales analysis revealing customer behavior patterns and revenue insights",
        icon: TrendingUp,
        position: { x: 80, y: 45 },
        color: "from-blue-500 via-indigo-500 to-purple-600",
        year: "2023",
        category: "project",
        connections: ["powerbi"],
        impact: "Real-world business impact through data",
        tech: ["Power BI", "Data Visualization", "Business Analytics"],
      },
      {
        id: "bikes",
        title: "Customer Segmentation",
        description: "Advanced Excel analysis of bike buyer demographics with statistical modeling",
        icon: Database,
        position: { x: 85, y: 20 },
        color: "from-green-500 via-emerald-500 to-teal-600",
        year: "2023",
        category: "project",
        connections: ["powerbi"],
        impact: "Customer insights driving business decisions",
        tech: ["Excel", "Pivot Tables", "Statistical Analysis"],
      },
      {
        id: "dl",
        title: "Deep Learning",
        description: "Advanced neural networks, CNNs, RNNs, and transformer architectures using TensorFlow",
        icon: Zap,
        position: { x: 40, y: 85 },
        color: "from-indigo-400 via-purple-500 to-violet-600",
        year: "2024",
        category: "skill",
        connections: ["nlp", "research"],
        impact: "Cutting-edge AI capabilities",
        tech: ["TensorFlow", "Keras", "Neural Networks", "CNNs"],
      },
      {
        id: "nlp",
        title: "Natural Language Processing",
        description: "Text processing, sentiment analysis, and transformer models for language understanding",
        icon: Sparkles,
        position: { x: 25, y: 90 },
        color: "from-pink-400 via-rose-500 to-red-600",
        year: "2024",
        category: "skill",
        connections: ["research"],
        impact: "Language AI and text analytics expertise",
        tech: ["NLTK", "Transformers", "BERT", "Sentiment Analysis"],
      },
      {
        id: "research",
        title: "IEEE Research Publication",
        description: "Published paper on 'Transforming Truth: Transformer based Fake Data Detection on Web'",
        icon: Award,
        position: { x: 70, y: 80 },
        color: "from-yellow-400 via-amber-500 to-orange-600",
        year: "2024",
        category: "achievement",
        connections: ["nlp", "dl"],
        impact: "Contributing to academic knowledge",
        tech: ["Research", "Transformers", "NLP", "Academic Writing"],
      },
      {
        id: "journey",
        title: "Journey Book Platform",
        description: "Full-stack travel platform combining data insights with user experiences - my dream project",
        icon: Target,
        position: { x: 90, y: 65 },
        color: "from-emerald-400 via-green-500 to-lime-600",
        year: "2024",
        category: "project",
        connections: ["python", "ml"],
        impact: "Passion project with real-world application",
        tech: ["Full-Stack", "Python", "MongoDB", "Data Visualization"],
      },
      {
        id: "future",
        title: "Future Aspirations",
        description: "Aiming to become a leading Data Scientist and contribute to AI innovation globally",
        icon: Star,
        position: { x: 75, y: 10 },
        color: "from-purple-400 via-pink-500 to-rose-600",
        year: "2025+",
        category: "achievement",
        connections: [],
        impact: "Next chapter in data science excellence",
        tech: ["AI Innovation", "Leadership", "Research", "Industry Impact"],
      },
    ],
    [],
  )

  const categoryConfig = useMemo(
    () => ({
      learning: {
        color: "border-blue-400 bg-blue-500/20 text-blue-300",
        bgGlow: "bg-blue-500/10",
        label: "Learning",
        icon: BookOpen,
      },
      project: {
        color: "border-green-400 bg-green-500/20 text-green-300",
        bgGlow: "bg-green-500/10",
        label: "Projects",
        icon: Target,
      },
      skill: {
        color: "border-purple-400 bg-purple-500/20 text-purple-300",
        bgGlow: "bg-purple-500/10",
        label: "Skills",
        icon: Zap,
      },
      achievement: {
        color: "border-yellow-400 bg-yellow-500/20 text-yellow-300",
        bgGlow: "bg-yellow-500/10",
        label: "Achievements",
        icon: Award,
      },
    }),
    [],
  )

  const handlePointClick = useCallback(
    (pointId: string) => {
      setSelectedPoint(selectedPoint === pointId ? null : pointId)
    },
    [selectedPoint],
  )

  const selectedPointData = useMemo(() => {
    return selectedPoint ? dataPoints.find((p) => p.id === selectedPoint) : null
  }, [selectedPoint, dataPoints])

  if (!isClient) return null

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900"
    >
      {/* Dynamic Background Effects */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 25%, transparent 50%)`,
        }}
      />

      {/* Animated Background Spheres */}
      <motion.div
        style={{ y: backgroundY, rotate: sphereRotate }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: backgroundY, rotate: sphereRotate }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
      />

      {/* Floating Particles */}
      {isClient &&
        [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8"
          >
            <Rocket className="w-5 h-5" />
            <span>Interactive Journey Map</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            My{" "}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Data Science
            </motion.span>{" "}
            Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            An interactive visualization of my transformation from curious student to aspiring data scientist. Click on
            any milestone to explore the story behind each achievement.
          </p>
        </motion.div>

        {/* Enhanced Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {Object.entries(categoryConfig).map(([key, config], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border backdrop-blur-sm ${config.color} hover:scale-105 transition-all cursor-pointer`}
            >
              <config.icon className="w-5 h-5" />
              <span className="font-medium">{config.label}</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {dataPoints.filter((p) => p.category === key).length}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Enhanced Interactive Sphere */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-full h-[600px] mx-auto"
            >
              {/* 3D Sphere Container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-indigo-900/30 backdrop-blur-xl border border-white/10 shadow-2xl">
                {/* Enhanced Grid System */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {/* Latitude lines with glow */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`lat-${i}`}
                      className="absolute left-0 right-0 border-t border-cyan-400/30"
                      style={{ top: `${((i + 1) * 100) / 9}%` }}
                      animate={{
                        opacity: [0.3, 0.7, 0.3],
                        boxShadow: [
                          "0 0 5px rgba(34, 211, 238, 0.3)",
                          "0 0 15px rgba(34, 211, 238, 0.6)",
                          "0 0 5px rgba(34, 211, 238, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}

                  {/* Longitude lines with glow */}
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={`lon-${i}`}
                      className="absolute top-0 bottom-0 border-l border-purple-400/30"
                      style={{ left: `${((i + 1) * 100) / 11}%` }}
                      animate={{
                        opacity: [0.3, 0.7, 0.3],
                        boxShadow: [
                          "0 0 5px rgba(168, 85, 247, 0.3)",
                          "0 0 15px rgba(168, 85, 247, 0.6)",
                          "0 0 5px rgba(168, 85, 247, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>

                {/* Enhanced Data Points */}
                {dataPoints.map((point, index) => (
                  <motion.div
                    key={point.id}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${point.position.x}%`,
                      top: `${point.position.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    onClick={() => handlePointClick(point.id)}
                    onHoverStart={() => setHoveredPoint(point.id)}
                    onHoverEnd={() => setHoveredPoint(null)}
                  >
                    {/* Connection Lines */}
                    {(selectedPoint === point.id || hoveredPoint === point.id) &&
                      point.connections.map((connectionId) => {
                        const connectedPoint = dataPoints.find((p) => p.id === connectionId)
                        if (!connectedPoint) return null

                        const dx = connectedPoint.position.x - point.position.x
                        const dy = connectedPoint.position.y - point.position.y
                        const length = Math.sqrt(dx * dx + dy * dy)
                        const angle = Math.atan2(dy, dx) * (180 / Math.PI)

                        return (
                          <motion.div
                            key={connectionId}
                            className="absolute origin-left h-1 bg-gradient-to-r from-cyan-400/80 via-blue-500/60 to-transparent rounded-full"
                            style={{
                              width: `${length * 5}px`,
                              transform: `rotate(${angle}deg)`,
                              left: "50%",
                              top: "50%",
                            }}
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                        )
                      })}

                    {/* Enhanced Data Point */}
                    <motion.div
                      className={`relative w-12 h-12 rounded-full border-2 ${categoryConfig[point.category].color} backdrop-blur-sm shadow-lg`}
                      whileHover={{ scale: 1.3 }}
                      animate={{
                        scale: selectedPoint === point.id ? 1.4 : 1,
                        boxShadow:
                          selectedPoint === point.id
                            ? "0 0 30px rgba(59, 130, 246, 0.8)"
                            : hoveredPoint === point.id
                              ? "0 0 20px rgba(59, 130, 246, 0.6)"
                              : "0 0 10px rgba(59, 130, 246, 0.3)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`absolute inset-1 rounded-full bg-gradient-to-r ${point.color} flex items-center justify-center shadow-inner`}
                      >
                        <point.icon className="w-6 h-6 text-white drop-shadow-lg" />
                      </div>

                      {/* Pulsing Ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${point.color} opacity-30`}
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.2,
                        }}
                      />

                      {/* Year Badge */}
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white font-medium whitespace-nowrap">
                        {point.year}
                      </div>
                    </motion.div>

                    {/* Enhanced Tooltip */}
                    {hoveredPoint === point.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: -15, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-4 py-3 bg-black/90 backdrop-blur-sm border border-white/20 rounded-xl text-white text-sm whitespace-nowrap z-20 shadow-2xl"
                      >
                        <div className="font-semibold">{point.title}</div>
                        <div className="text-xs text-gray-300 mt-1">{point.impact}</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                {/* Central Glow Effect */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>
          </div>

          {/* Enhanced Details Panel */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                Journey Details
              </h3>

              {selectedPointData ? (
                <motion.div
                  key={selectedPointData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedPointData.color} flex items-center justify-center shadow-lg`}
                    >
                      <selectedPointData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{selectedPointData.title}</h4>
                      <div className="flex items-center gap-3">
                        <span className="text-cyan-300 font-medium">{selectedPointData.year}</span>
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium ${categoryConfig[selectedPointData.category].color}`}
                        >
                          {categoryConfig[selectedPointData.category].label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-gray-300 leading-relaxed">{selectedPointData.description}</p>
                  </div>

                  {/* Impact */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-4 border border-blue-400/20">
                    <h5 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Impact
                    </h5>
                    <p className="text-blue-200 text-sm">{selectedPointData.impact}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedPointData.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-200 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Connections */}
                  {selectedPointData.connections.length > 0 && (
                    <div>
                      <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Connected Milestones
                      </h5>
                      <div className="space-y-2">
                        {selectedPointData.connections.map((connId) => {
                          const connPoint = dataPoints.find((p) => p.id === connId)
                          return connPoint ? (
                            <motion.button
                              key={connId}
                              onClick={() => handlePointClick(connId)}
                              whileHover={{ scale: 1.02, x: 5 }}
                              className="block w-full text-left p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-cyan-300 hover:text-cyan-200 transition-all text-sm"
                            >
                              <div className="flex items-center gap-3">
                                <connPoint.icon className="w-4 h-4" />
                                <span>{connPoint.title}</span>
                                <span className="text-xs text-gray-400">({connPoint.year})</span>
                              </div>
                            </motion.button>
                          ) : null
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-gray-400 text-lg mb-2">Explore My Journey</p>
                  <p className="text-gray-500 text-sm">Click on any milestone to discover the story behind it</p>
                </div>
              )}
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-400/20 rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                Journey Statistics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(categoryConfig).map(([key, config]) => {
                  const count = dataPoints.filter((p) => p.category === key).length
                  return (
                    <motion.div
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-white/5 rounded-2xl border border-white/10"
                    >
                      <config.icon className="w-8 h-8 mx-auto mb-3 text-white" />
                      <div className="text-3xl font-bold text-white mb-1">{count}</div>
                      <div className="text-sm text-gray-400">{config.label}</div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <BookOpen className="w-8 h-8 text-cyan-400" />
              Timeline Journey
            </h3>
            <p className="text-gray-400">A chronological view of my data science evolution</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-lg" />

            <div className="space-y-12">
              {dataPoints
                .sort((a, b) => a.year.localeCompare(b.year))
                .map((point, index) => (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-r ${point.color} flex items-center justify-center`}
                          >
                            <point.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{point.title}</h4>
                            <p className="text-sm text-cyan-300">{point.year}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{point.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {point.tech.slice(0, 3).map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${point.color} flex items-center justify-center border-4 border-slate-900 z-10 shadow-lg cursor-pointer`}
                      onClick={() => handlePointClick(point.id)}
                    >
                      <point.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="flex-1" />
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
