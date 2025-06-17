"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useMemo, useCallback, useEffect } from "react"
import { Brain, Database, Code, TrendingUp, Award, BookOpen, Users, Target } from "lucide-react"

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
}

export function DataScienceGlobe() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isClient, setIsClient] = useState(false)

  const [selectedPoint, setSelectedPoint] = useState<string | null>(null)
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Memoized data points
  const dataPoints: DataPoint[] = useMemo(
    () => [
      {
        id: "python",
        title: "Python Programming",
        description: "Mastered Python for data analysis, pandas, numpy, and data manipulation",
        icon: Code,
        position: { x: 20, y: 30 },
        color: "from-green-500 to-emerald-500",
        year: "2022",
        category: "skill",
        connections: ["start", "ml"],
      },
      {
        id: "start",
        title: "Started Data Science Journey",
        description: "Began specializing in Data Science and Machine Learning at Bennett University",
        icon: BookOpen,
        position: { x: 35, y: 45 },
        color: "from-blue-500 to-cyan-500",
        year: "2023",
        category: "learning",
        connections: ["python", "stats", "ml"],
      },
      {
        id: "stats",
        title: "Statistics & Mathematics",
        description: "Built strong foundation in statistics, probability, and mathematical concepts for data science",
        icon: TrendingUp,
        position: { x: 15, y: 60 },
        color: "from-purple-500 to-indigo-500",
        year: "2023",
        category: "learning",
        connections: ["ml", "research"],
      },
      {
        id: "powerbi",
        title: "Power BI Mastery",
        description: "Created interactive dashboards and business intelligence solutions",
        icon: Database,
        position: { x: 60, y: 35 },
        color: "from-yellow-500 to-orange-500",
        year: "2023",
        category: "skill",
        connections: ["ecommerce", "bikes"],
      },
      {
        id: "ml",
        title: "Machine Learning",
        description: "Deep dive into ML algorithms, classification, regression, and model building",
        icon: Brain,
        position: { x: 50, y: 65 },
        color: "from-red-500 to-pink-500",
        year: "2023-24",
        category: "skill",
        connections: ["dl", "nlp", "research"],
      },
      {
        id: "ecommerce",
        title: "E-commerce Analytics",
        description: "Amazon sales analysis using Power BI - comprehensive business insights",
        icon: TrendingUp,
        position: { x: 75, y: 50 },
        color: "from-blue-600 to-purple-600",
        year: "2023",
        category: "project",
        connections: ["powerbi"],
      },
      {
        id: "bikes",
        title: "Bike Buyers Analysis",
        description: "Excel-based data analysis of customer demographics and purchasing patterns",
        icon: Database,
        position: { x: 80, y: 25 },
        color: "from-green-600 to-teal-600",
        year: "2023",
        category: "project",
        connections: ["powerbi"],
      },
      {
        id: "dl",
        title: "Deep Learning",
        description: "Advanced neural networks, TensorFlow, and deep learning architectures",
        icon: Brain,
        position: { x: 40, y: 80 },
        color: "from-indigo-500 to-purple-500",
        year: "2024",
        category: "skill",
        connections: ["nlp", "research"],
      },
      {
        id: "nlp",
        title: "Natural Language Processing",
        description: "Text processing, sentiment analysis, and transformer models",
        icon: Brain,
        position: { x: 25, y: 85 },
        color: "from-pink-500 to-red-500",
        year: "2024",
        category: "skill",
        connections: ["research"],
      },
      {
        id: "research",
        title: "Research Publication",
        description: "IEEE paper: 'Transforming Truth: Transformer based Fake Data Detection on Web'",
        icon: Award,
        position: { x: 65, y: 80 },
        color: "from-yellow-500 to-amber-500",
        year: "2024",
        category: "achievement",
        connections: ["nlp", "dl"],
      },
      {
        id: "journey",
        title: "Journey Book Platform",
        description: "Full-stack travel blogging platform with data insights - my dream project",
        icon: Target,
        position: { x: 85, y: 65 },
        color: "from-emerald-500 to-green-500",
        year: "2024",
        category: "project",
        connections: ["python", "ml"],
      },
      {
        id: "future",
        title: "Future Goals",
        description: "Aspiring to become a Data Scientist and contribute to AI innovation",
        icon: Target,
        position: { x: 70, y: 15 },
        color: "from-purple-600 to-pink-600",
        year: "2025+",
        category: "achievement",
        connections: [],
      },
    ],
    [],
  )

  const categoryColors = useMemo(
    () => ({
      learning: "border-blue-400 bg-blue-500/20",
      project: "border-green-400 bg-green-500/20",
      skill: "border-purple-400 bg-purple-500/20",
      achievement: "border-yellow-400 bg-yellow-500/20",
    }),
    [],
  )

  const categoryLabels = useMemo(
    () => ({
      learning: "Learning",
      project: "Projects",
      skill: "Skills",
      achievement: "Achievements",
    }),
    [],
  )

  // Optimized event handlers with minimal re-renders
  const handlePointClick = useCallback(
    (pointId: string) => {
      setSelectedPoint(selectedPoint === pointId ? null : pointId)
    },
    [selectedPoint],
  )

  // Memoized selected point data
  const selectedPointData = useMemo(() => {
    return selectedPoint ? dataPoints.find((p) => p.id === selectedPoint) : null
  }, [selectedPoint, dataPoints])

  // Don't render on server
  if (!isClient) return null

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Data Science Journey
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Interactive visualization of my learning path, projects, and achievements in data science and machine
            learning
          </p>
        </motion.div>

        {/* Simplified Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(categoryLabels).map(([key, label]) => (
            <div
              key={key}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border ${categoryColors[key as keyof typeof categoryColors]} backdrop-blur-sm`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${dataPoints.find((p) => p.category === key)?.color || "from-gray-400 to-gray-500"}`}
              />
              <span className="text-white text-sm font-medium">{label}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Static Globe - No scroll animations */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-96 lg:h-[500px] mx-auto">
              {/* Static Globe background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-white/10">
                {/* Static Grid lines - no animations */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {/* Static latitude lines */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`lat-${i}`}
                      className="absolute left-0 right-0 border-t border-cyan-400/20"
                      style={{ top: `${((i + 1) * 100) / 7}%` }}
                    />
                  ))}

                  {/* Static longitude lines */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`lon-${i}`}
                      className="absolute top-0 bottom-0 border-l border-cyan-400/20"
                      style={{ left: `${((i + 1) * 100) / 9}%` }}
                    />
                  ))}
                </div>

                {/* Static Data points - minimal animations */}
                {dataPoints.map((point, index) => (
                  <motion.div
                    key={point.id}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${point.position.x}%`,
                      top: `${point.position.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    onClick={() => handlePointClick(point.id)}
                    onMouseEnter={() => setHoveredPoint(point.id)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    {/* Static Connection lines - only show when selected */}
                    {selectedPoint === point.id &&
                      point.connections.map((connectionId) => {
                        const connectedPoint = dataPoints.find((p) => p.id === connectionId)
                        if (!connectedPoint) return null

                        const dx = connectedPoint.position.x - point.position.x
                        const dy = connectedPoint.position.y - point.position.y
                        const length = Math.sqrt(dx * dx + dy * dy)
                        const angle = Math.atan2(dy, dx) * (180 / Math.PI)

                        return (
                          <div
                            key={connectionId}
                            className="absolute origin-left h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent"
                            style={{
                              width: `${length * 4}px`,
                              transform: `rotate(${angle}deg)`,
                              left: "50%",
                              top: "50%",
                            }}
                          />
                        )
                      })}

                    {/* Static Data point - no hover animations */}
                    <div
                      className={`relative w-8 h-8 rounded-full border-2 ${categoryColors[point.category]} backdrop-blur-sm transition-transform duration-200 ${
                        selectedPoint === point.id
                          ? "scale-125 shadow-lg shadow-cyan-400/30"
                          : hoveredPoint === point.id
                            ? "scale-110"
                            : ""
                      }`}
                    >
                      <div
                        className={`absolute inset-1 rounded-full bg-gradient-to-r ${point.color} flex items-center justify-center`}
                      >
                        <point.icon className="w-4 h-4 text-white" />
                      </div>

                      {/* Year label */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap">
                        {point.year}
                      </div>
                    </div>

                    {/* Simple tooltip - no animations */}
                    {hoveredPoint === point.id && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm whitespace-nowrap z-10">
                        {point.title}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Minimal decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full" />
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full" />
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-yellow-400/40 rounded-full" />
              </div>
            </div>
          </div>

          {/* Static Details Panel */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-fit sticky top-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">Journey Details</h3>

              {selectedPointData ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${selectedPointData.color} flex items-center justify-center`}
                    >
                      <selectedPointData.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{selectedPointData.title}</h4>
                      <p className="text-sm text-cyan-300">{selectedPointData.year}</p>
                    </div>
                  </div>

                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryColors[selectedPointData.category]}`}
                  >
                    {categoryLabels[selectedPointData.category]}
                  </div>

                  <p className="text-gray-300 leading-relaxed">{selectedPointData.description}</p>

                  {selectedPointData.connections.length > 0 && (
                    <div>
                      <h5 className="text-sm font-medium text-white mb-2">Connected to:</h5>
                      <div className="space-y-1">
                        {selectedPointData.connections.map((connId) => {
                          const connPoint = dataPoints.find((p) => p.id === connId)
                          return connPoint ? (
                            <button
                              key={connId}
                              onClick={() => handlePointClick(connId)}
                              className="block text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
                            >
                              → {connPoint.title}
                            </button>
                          ) : null
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">Click on any point to explore my journey</p>
                  <p className="text-sm text-gray-500 mt-2">Hover to see quick info</p>
                </div>
              )}
            </motion.div>

            {/* Journey Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">Journey Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(categoryLabels).map(([key, label]) => {
                  const count = dataPoints.filter((p) => p.category === key).length
                  return (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-white">{count}</div>
                      <div className="text-sm text-gray-400">{label}</div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Simplified Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Timeline View</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400" />
            <div className="space-y-6">
              {dataPoints
                .sort((a, b) => a.year.localeCompare(b.year))
                .map((point, index) => (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                    className={`flex items-center gap-4 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                        <h4 className="font-semibold text-white text-sm">{point.title}</h4>
                        <p className="text-xs text-cyan-300 mb-1">{point.year}</p>
                        <p className="text-xs text-gray-300">{point.description}</p>
                      </div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${point.color} flex items-center justify-center border-2 border-slate-900 z-10 flex-shrink-0`}
                    >
                      <point.icon className="w-3 h-3 text-white" />
                    </div>
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
