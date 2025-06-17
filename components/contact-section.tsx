"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Send, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harshmishraactive247@gmail.com",
      href: "mailto:harshmishraactive247@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "HarshMishra69",
      href: "https://github.com/HarshMishra69?tab=repositories",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "harsh-mishra-290430256",
      href: "https://www.linkedin.com/in/harsh-mishra-290430256/",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:harshmishraactive247@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Let's Work Together</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-100 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">{info.label}</p>
                    <p className="text-slate-800 font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="contact-form"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                <span className="gradient-label">Send Me a Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                  <label htmlFor="name" className="gradient-label block mb-3">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01, y: -2 }}
                    type="text"
                    id="name"
                    placeholder="What should I call you?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-0 focus:border-transparent transition-all text-slate-800 placeholder-slate-400 font-semibold text-lg bg-gradient-to-r from-slate-50 to-white shadow-sm hover:shadow-lg focus:shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
                      color: "#1e293b",
                      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 pointer-events-none focus-within:opacity-100" />
                </div>

                <div className="relative">
                  <label htmlFor="email" className="gradient-label block mb-3">
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01, y: -2 }}
                    type="email"
                    id="email"
                    placeholder="your.awesome@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-0 focus:border-transparent transition-all text-slate-800 placeholder-slate-400 font-semibold text-lg bg-gradient-to-r from-slate-50 to-white shadow-sm hover:shadow-lg focus:shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
                      color: "#1e293b",
                      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 pointer-events-none focus-within:opacity-100" />
                </div>

                <div className="relative">
                  <label htmlFor="message" className="gradient-label block mb-3">
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01, y: -2 }}
                    id="message"
                    placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-0 focus:border-transparent transition-all resize-none text-slate-800 placeholder-slate-400 font-semibold text-lg bg-gradient-to-r from-slate-50 to-white shadow-sm hover:shadow-lg focus:shadow-xl leading-relaxed"
                    style={{
                      background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
                      color: "#1e293b",
                      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 pointer-events-none focus-within:opacity-100" />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4)",
                    y: -3,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="contact-button w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-5 px-8 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-2xl transition-all duration-300 hover:shadow-purple-500/30"
                  style={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: "0.025em",
                  }}
                >
                  <Send className="w-6 h-6" />
                  Send Message
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
