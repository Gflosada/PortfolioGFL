"use client"

import { motion } from "framer-motion"

export function SkillBadge({ name, level }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative flex min-h-36 overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-5 sm:p-6 h-full transition-all duration-300 hover:border-blue-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-slate-500/10 to-blue-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative flex w-full flex-col justify-center">
          <div className="mb-4 min-h-12 whitespace-pre-line break-words text-center text-base font-semibold leading-6 text-balance sm:text-lg">
            {name}
          </div>

          <div className="relative h-2.5 w-full bg-zinc-700 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-slate-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="mt-2 text-right text-sm text-zinc-400">{level}%</div>
        </div>
      </div>
    </motion.div>
  )
}
