"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Award, Users, Calendar } from "lucide-react"

export function ResearchSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const publications = [
    {
      title: "Transforming Truth: Transformer based Fake Data Detection on Web",
      authors: "Harsh Mishra, Co-Authors",
      journal: "IEEE Conference Template",
      year: "2024",
      status: "Published",
      description:
        "This research paper explores the application of transformer models for detecting fake data and misinformation on web platforms, achieving high accuracy in classification tasks using advanced NLP techniques and deep learning architectures.",
      keywords: ["NLP", "Transformers", "Fake News Detection", "Deep Learning", "Web Mining", "IEEE"],
      link: "https://drive.google.com/file/d/1tB0e7nlWGlus5gE686yJs0sKrVE0tlZV/view?usp=sharing",
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: "IEEE Publication",
      description: "Published research paper in IEEE conference format",
    },
    {
      icon: Users,
      title: "Collaborative Research",
      description: "Worked with faculty and peers on cutting-edge AI projects",
    },
    {
      icon: FileText,
      title: "Technical Writing",
      description: "Strong documentation and academic research writing skills",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Research & Publications</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My contributions to the academic community through research in AI, machine learning, and data science
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Publications */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-slate-800 mb-8">Publications</h3>
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all mb-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-purple-600" />
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {pub.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      {pub.year}
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-slate-800 mb-2">{pub.title}</h4>
                  <p className="text-slate-600 mb-2">
                    <span className="font-medium">Authors:</span> {pub.authors}
                  </p>
                  <p className="text-slate-600 mb-4">
                    <span className="font-medium">Published in:</span> {pub.journal}
                  </p>

                  <p className="text-slate-700 mb-4 leading-relaxed">{pub.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.keywords.map((keyword) => (
                      <span key={keyword} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Read Paper
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Research Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-slate-800 mb-8">Research Highlights</h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{achievement.title}</h4>
                    <p className="text-slate-600">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
