"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, BarChart3, MapPin, ShoppingCart, Code, Database } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Amazon Sales Analysis",
      description:
        "Comprehensive sales analytics dashboard using Power BI to analyze Amazon sales trends, customer behavior, and revenue patterns with interactive visualizations and KPI tracking.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Power BI", "Excel", "Data Analysis", "SQL", "DAX"],
      github: "https://github.com/HarshMishra69/Amazon_sales_analysis_PowerBI",
      live: "#",
      icon: BarChart3,
      category: "Data Analytics",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Journey Book Platform",
      description:
        "My dream project - A comprehensive travel blogging platform where users can document their journeys, share experiences, and discover insights about destinations through community-driven content and data visualization.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["HTML", "CSS", "JavaScript", "Python", "MongoDB"],
      github: "https://github.com/HarshMishra69/journey-book",
      live: "https://github.com/HarshMishra69/Website-journeybook",
      icon: MapPin,
      category: "Full Stack",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Bike Buyers Analysis",
      description:
        "Excel-based data analysis project examining bike purchasing patterns, customer demographics, and market trends with comprehensive data visualization and statistical insights.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Excel", "Data Analysis", "Pivot Tables", "Charts"],
      github: "https://github.com/HarshMishra69/Bike_Buyers_Analysis_Excel",
      live: "#",
      icon: Database,
      category: "Data Analysis",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Group Expense Tracker",
      description:
        "Android application built with Java for tracking group expenses, splitting bills, and managing shared costs with intuitive UI and real-time calculations.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Java", "Android", "SQLite", "XML"],
      github: "https://github.com/HarshMishra69/group_expense_tracker",
      live: "#",
      icon: ShoppingCart,
      category: "Mobile App",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6"
          >
            <Code className="w-4 h-4" />
            Featured Projects
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my academic and personal projects that showcase my skills in data science, machine
            learning, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Project image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm rounded-full font-medium shadow-lg`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Action buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0, y: hoveredProject === index ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 right-4 flex gap-2"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    {project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded-full text-sm font-medium hover:bg-slate-600/50 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/HarshMishra69?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
