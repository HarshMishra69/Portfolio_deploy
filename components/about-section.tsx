"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Database, Code, TrendingUp } from "lucide-react"

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const interests = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning, NLP, and AI model development with TensorFlow and scikit-learn",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Data preprocessing, cleaning, analysis, and visualization using Python ecosystem",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building web applications with modern technologies and databases",
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Creating insights through Power BI dashboards and data-driven solutions",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About Me</h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate 4th-year Data Science student at{" "}
            <span className="font-semibold text-purple-600">Bennett University</span>, specializing in Machine Learning
            and AI. I love turning complex data into meaningful insights and building intelligent solutions that solve
            real-world problems. My journey in data science has been driven by curiosity and a desire to make a positive
            impact through technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6"
              >
                <interest.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{interest.title}</h3>
              <p className="text-slate-600">{interest.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Education highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">🎓 Currently Pursuing</h3>
          <p className="text-xl mb-2">B.Tech in Computer Science Engineering</p>
          <p className="text-lg opacity-90">Specialization: Data Science</p>
          <p className="text-lg opacity-90">Bennett University • 2021-2025</p>
        </motion.div>
      </div>
    </section>
  )
}
