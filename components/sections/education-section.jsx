"use client"

import { SectionHeading } from "@/components/section-heading"
import { GraduationCap, Award } from "lucide-react"
import styles from "@/components/landing-cyberpunk.module.css"

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
    <section id="education" className={styles.cyberSection}>
      <div className="container relative z-10">
        <SectionHeading number="05" title="Education & Certifications" subtitle="Credentials" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className={styles.sectionIcon}>
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.educationCard} p-6`}
                  data-landing-card
                >
                  <h4 className="relative z-10 text-lg font-semibold text-white mb-2">{item.degree}</h4>
                  <div className="relative z-10 text-zinc-400 mb-1">{item.school}</div>
                  <div className="relative z-10 text-zinc-500 text-sm mb-2">{item.location}</div>
                  <div className="relative z-10 text-zinc-400 text-sm">{item.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className={styles.sectionIcon}>
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.educationCard} p-6`}
                  data-landing-card
                >
                  <h4 className="relative z-10 text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <div className="relative z-10 text-zinc-400 mb-1">{item.issuer}</div>
                  {item.location && <div className="relative z-10 text-zinc-500 text-sm mb-2">{item.location}</div>}
                  <div className="relative z-10 text-zinc-400 text-sm">{item.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
