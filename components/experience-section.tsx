"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
      achievements: ["Increased app performance by 40%", "Led team of 5 developers", "Implemented CI/CD pipeline"],
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications and collaborated with design teams to create intuitive user interfaces using React and modern CSS frameworks.",
      achievements: ["Built 15+ responsive websites", "Reduced load time by 60%", "Implemented design system"],
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      description:
        "Started my professional journey building websites for small businesses and learning modern web development practices.",
      achievements: ["Completed 25+ client projects", "Learned React and Node.js", "Improved SEO rankings"],
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Experience</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="relative z-10 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-20" />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex-1 bg-slate-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-1">{exp.title}</h3>
                      <p className="text-purple-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                      <div className="flex items-center gap-1 text-slate-600 text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-slate-600 text-sm">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-800">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
