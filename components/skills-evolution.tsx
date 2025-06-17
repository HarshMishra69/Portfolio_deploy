"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import {
  Brain,
  Database,
  Code,
  TrendingUp,
  Zap,
  Target,
  Star,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react"

interface SkillData {
  name: string
  category: string
  icon: any
  color: string
  levels: { year: string; level: number; milestone: string }[]
  description: string
}

export function SkillsEvolution() {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedSkill, setSelectedSkill] = useState<string>("python")
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentYear, setCurrentYear] = useState("2022")
  const [isClient, setIsClient] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const skillsData: SkillData[] = [
    {
      name: "Python",
      category: "Programming",
      icon: Code,
      color: "from-green-400 to-emerald-600",
      levels: [
        { year: "2022", level: 20, milestone: "Started learning basics" },
        { year: "2023", level: 60, milestone: "Data manipulation with Pandas" },
        { year: "2024", level: 90, milestone: "Advanced ML implementations" },
      ],
      description: "From basic syntax to advanced data science applications",
    },
    {
      name: "Machine Learning",
      category: "AI/ML",
      icon: Brain,
      color: "from-purple-400 to-pink-600",
      levels: [
        { year: "2022", level: 0, milestone: "No knowledge" },
        { year: "2023", level: 45, milestone: "Basic algorithms understanding" },
        { year: "2024", level: 85, milestone: "Complex model building" },
      ],
      description: "Journey from zero to building sophisticated ML models",
    },
    {
      name: "Data Analysis",
      category: "Analytics",
      icon: TrendingUp,
      color: "from-blue-400 to-cyan-600",
      levels: [
        { year: "2022", level: 15, milestone: "Excel basics" },
        { year: "2023", level: 70, milestone: "Statistical analysis" },
        { year: "2024", level: 88, milestone: "Advanced insights generation" },
      ],
      description: "Evolved from basic Excel to advanced statistical analysis",
    },
    {
      name: "Deep Learning",
      category: "AI/ML",
      icon: Zap,
      color: "from-orange-400 to-red-600",
      levels: [
        { year: "2022", level: 0, milestone: "No knowledge" },
        { year: "2023", level: 25, milestone: "Neural network basics" },
        { year: "2024", level: 80, milestone: "Transformer architectures" },
      ],
      description: "From neural network fundamentals to cutting-edge transformers",
    },
    {
      name: "Data Visualization",
      category: "Analytics",
      icon: Database,
      color: "from-yellow-400 to-orange-600",
      levels: [
        { year: "2022", level: 30, milestone: "Basic charts" },
        { year: "2023", level: 75, milestone: "Power BI dashboards" },
        { year: "2024", level: 85, milestone: "Interactive visualizations" },
      ],
      description: "Creating compelling stories through data visualization",
    },
    {
      name: "Research Skills",
      category: "Academic",
      icon: Target,
      color: "from-indigo-400 to-purple-600",
      levels: [
        { year: "2022", level: 10, milestone: "Basic research" },
        { year: "2023", level: 50, milestone: "Literature review skills" },
        { year: "2024", level: 85, milestone: "IEEE publication" },
      ],
      description: "Developed from basic research to published academic work",
    },
  ]

  const years = ["2022", "2023", "2024"]
  const categories = [...new Set(skillsData.map((skill) => skill.category))]

  const selectedSkillData = skillsData.find((skill) => skill.name.toLowerCase().replace(/\s+/g, "") === selectedSkill)

  // Auto-play animation
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentYear((prev) => {
        const currentIndex = years.indexOf(prev)
        return years[(currentIndex + 1) % years.length]
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [isPlaying, years])

  const resetAnimation = () => {
    setCurrentYear("2022")
    setIsPlaying(false)
  }

  if (!isClient) return null

  return (
    <section
      ref={containerRef}
      className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Code Elements */}
      {isClient &&
        [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            {["ML", "AI", "Data", "Python", "TensorFlow", "Pandas", "NumPy", "sklearn"][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8"
          >
            <TrendingUp className="w-5 h-5" />
            <span>Skills Evolution Timeline</span>
            <Star className="w-5 h-5" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Skills{" "}
            <motion.span
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Evolution
            </motion.span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Watch my technical skills grow from beginner to advanced level. An interactive journey through my learning
            progression.
          </p>
        </motion.div>

        {/* Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-12"
        >
          {/* Year Selector */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2">
            {years.map((year) => (
              <motion.button
                key={year}
                onClick={() => setCurrentYear(year)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentYear === year
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {year}
              </motion.button>
            ))}
          </div>

          {/* Animation Controls */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? "Pause" : "Play"}
            </motion.button>

            <motion.button
              onClick={resetAnimation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </motion.button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skills Grid */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                  <motion.div
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium"
                  >
                    {category}
                  </motion.div>
                ))}
              </div>

              {/* Skills Progress Bars */}
              <div className="space-y-6">
                {skillsData.map((skill, index) => {
                  const currentLevel = skill.levels.find((l) => l.year === currentYear)?.level || 0
                  const isSelected = skill.name.toLowerCase().replace(/\s+/g, "") === selectedSkill

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      onClick={() => setSelectedSkill(skill.name.toLowerCase().replace(/\s+/g, ""))}
                      className={`cursor-pointer p-6 rounded-2xl border transition-all ${
                        isSelected
                          ? "bg-white/10 border-white/30 shadow-2xl scale-105"
                          : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-lg`}
                          >
                            <skill.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                            <p className="text-sm text-gray-400">{skill.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{currentLevel}%</div>
                          <div className="text-xs text-gray-400">Current Level</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                            initial={{ width: 0 }}
                            animate={{ width: `${currentLevel}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>

                        {/* Milestone Markers */}
                        <div className="absolute top-0 left-0 right-0 h-3 flex items-center">
                          {skill.levels.map((level, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-4 h-4 bg-white rounded-full border-2 border-gray-700 shadow-lg"
                              style={{ left: `${level.level}%`, transform: "translateX(-50%)" }}
                              initial={{ scale: 0 }}
                              animate={{
                                scale: level.year === currentYear ? 1.5 : 1,
                                boxShadow:
                                  level.year === currentYear
                                    ? "0 0 20px rgba(255, 255, 255, 0.8)"
                                    : "0 0 5px rgba(255, 255, 255, 0.3)",
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Current Milestone */}
                      <div className="mt-4 text-sm text-gray-300">
                        <span className="font-medium text-white">{currentYear}:</span>{" "}
                        {skill.levels.find((l) => l.year === currentYear)?.milestone || "No data"}
                      </div>

                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-white/20"
                        >
                          <p className="text-gray-300 text-sm">{skill.description}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Detailed View */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="sticky top-8 space-y-6"
            >
              {/* Selected Skill Details */}
              {selectedSkillData && (
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedSkillData.color} flex items-center justify-center shadow-lg`}
                    >
                      <selectedSkillData.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedSkillData.name}</h3>
                      <p className="text-gray-400">{selectedSkillData.category}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedSkillData.description}</p>

                  {/* Progress Timeline */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">Learning Timeline</h4>
                    {selectedSkillData.levels.map((level, index) => (
                      <motion.div
                        key={level.year}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                          level.year === currentYear
                            ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30"
                            : "bg-white/5 border border-white/10"
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedSkillData.color} flex items-center justify-center text-white font-bold shadow-lg`}
                        >
                          {level.level}%
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white">{level.year}</div>
                          <div className="text-sm text-gray-300">{level.milestone}</div>
                        </div>
                        {level.year === currentYear && <ChevronRight className="w-5 h-5 text-purple-400" />}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  Growth Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total Skills</span>
                    <span className="text-2xl font-bold text-white">{skillsData.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Average Growth</span>
                    <span className="text-2xl font-bold text-green-400">
                      {Math.round(
                        skillsData.reduce((acc, skill) => {
                          const firstLevel = skill.levels[0]?.level || 0
                          const lastLevel = skill.levels[skill.levels.length - 1]?.level || 0
                          return acc + (lastLevel - firstLevel)
                        }, 0) / skillsData.length,
                      )}
                      %
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Learning Years</span>
                    <span className="text-2xl font-bold text-purple-400">3</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Key Milestones Achieved</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "AI Research",
                desc: "Published IEEE paper on fake data detection",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Database,
                title: "Data Mastery",
                desc: "Advanced analytics with Power BI & Python",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Target,
                title: "Project Success",
                desc: "Multiple real-world applications built",
                color: "from-green-500 to-emerald-500",
              },
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
