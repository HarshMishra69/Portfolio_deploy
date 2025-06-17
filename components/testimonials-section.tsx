"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Dr. Asima Yadav",
      role: "Professor",
      company: "Bennett University",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "An exceptional student with a deep understanding of data science concepts. Harsh's research work on fake data detection shows remarkable analytical thinking and technical expertise. His dedication to learning is truly commendable.",
    },
    {
      name: "Himanshi Maheshwari",
      role: "Project Partner",
      company: "Journey Book Collaborator",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with Harsh on the Journey Book project was an amazing experience. His vision for combining travel experiences with data insights is innovative and his coding skills are impressive. A great team player!",
    },
    {
      name: "Dr. Anshika",
      role: "Mentor",
      company: "Data Science Club",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "A dedicated learner who consistently delivers high-quality work. Harsh's Power BI dashboards and data analysis projects demonstrate strong business acumen and technical skills. He has great potential in the field.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">What People Say</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Feedback from professors, mentors, and project collaborators who have worked with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-200" />

              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  <p className="text-purple-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
