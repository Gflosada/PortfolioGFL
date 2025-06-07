"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { GraduationCap, Award } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "College Diploma - Computer Programming",
      school: "Georgian College",
      location: "Toronto, ON",
      period: "2023-2025",
      type: "education",
    },
    {
      degree: "College Diploma - Digital Marketing",
      school: "Greystone College of Business and Technology",
      location: "Toronto, ON",
      period: "2021-2022",
      type: "education",
    },
    {
      degree: "Bachelor's Degree - Industrial Design",
      school: "Pontifical University Javeriana",
      location: "Bogotá, Colombia",
      period: "2016-2020",
      type: "education",
    },
  ]

  const certifications = [
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta, Coursera",
      date: "September 2022",
      type: "certification",
    },
    {
      title: "Innovation Design",
      issuer: "Chamber of Commerce",
      location: "Bogotá, Colombia",
      date: "March 2016",
      type: "certification",
    },
  ]

  return (
    <section id="education" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading title="Education & Certifications" subtitle="My academic background and achievements" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-500 to-blue-500 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassmorphicCard>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.degree}</h4>
                    <div className="text-zinc-400 mb-1">{item.school}</div>
                    <div className="text-zinc-500 text-sm mb-2">{item.location}</div>
                    <div className="text-zinc-400 text-sm">{item.period}</div>
                  </GlassmorphicCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Award className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassmorphicCard>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                    <div className="text-zinc-400 mb-1">{item.issuer}</div>
                    {item.location && <div className="text-zinc-500 text-sm mb-2">{item.location}</div>}
                    <div className="text-zinc-400 text-sm">{item.date}</div>
                  </GlassmorphicCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
