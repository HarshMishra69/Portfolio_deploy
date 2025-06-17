"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const programmingSkills = [
    { name: "Python", level: 90, color: "from-blue-400 to-yellow-500" },
    { name: "C++", level: 85, color: "from-blue-600 to-blue-800" },
    { name: "HTML/CSS", level: 88, color: "from-orange-400 to-red-500" },
    { name: "SQL", level: 82, color: "from-blue-500 to-blue-700" },
  ]

  const dataSkills = [
    { name: "Machine Learning", level: 85, color: "from-green-400 to-blue-500" },
    { name: "Deep Learning", level: 80, color: "from-purple-500 to-pink-500" },
    { name: "NLP", level: 78, color: "from-indigo-400 to-purple-600" },
    { name: "Data Preprocessing", level: 88, color: "from-teal-400 to-blue-500" },
    { name: "Classification", level: 85, color: "from-green-500 to-teal-500" },
    { name: "Regression", level: 83, color: "from-yellow-400 to-orange-500" },
  ]

  const tools = [
    "TensorFlow",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Power BI",
    "Excel",
    "MongoDB",
    "Jupyter",
    "Git",
    "VS Code",
    "Google Colab",
    "Matplotlib",
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and skills I've developed during my academic journey and personal projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Programming Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Programming Languages</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-300 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Data Science Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Data Science & ML</h3>
            <div className="space-y-6">
              {dataSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-300 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Tools & Frameworks</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-center text-white font-medium hover:bg-white/20 transition-all cursor-pointer text-sm"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
