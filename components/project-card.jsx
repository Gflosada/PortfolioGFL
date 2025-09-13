"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Github, Globe } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProjectCard({ title, description, tags, image, demoUrl, repoUrl, websiteUrl, slug, hideButtons = false }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 group-hover:border-blue-500/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-slate-500/10 to-blue-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative h-full flex flex-col">
          <div className="relative overflow-hidden h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            />
          </div>

          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-zinc-400 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-700 text-white"
                >
                  {tag}
                  </span>
                ))}
                </div>

            {!hideButtons && (
              <div className="flex justify-between mt-auto pt-4 border-t border-zinc-700/50">
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-zinc-700/50 flex flex-col items-center gap-1" asChild>
                    <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </Link>
                  </Button>
                  <div className="flex flex-col items-center gap-1">
                    {websiteUrl ? (
                      <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-zinc-700/50 flex flex-col items-center gap-1" asChild>
                        <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4" />
                          <span>Website</span>
                        </Link>
                      </Button>
                    ) : (
                      <div className="h-8 w-16 flex flex-col items-center justify-center">
                        <div className="h-4 w-4 opacity-0"></div>
                        <span className="text-xs opacity-0">Placeholder</span>
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-slate-600 to-blue-600 hover:from-blue-600 hover:to-slate-600 border-0 px-4 flex items-center justify-center gap-2 rounded-xl"
                  asChild
                >
                  <Link
                    href={`/project/${slug}`}
                    className="flex items-center gap-2"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>

          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-500" : "bg-zinc-500"} transition-colors duration-300`}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
