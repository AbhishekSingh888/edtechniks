"use client"

import { motion } from "framer-motion"
import AnimatedCounter from "../animated-counter"


const stats = [
  { label: "Happy Clients", value: 500, suffix: "+" },
  { label: "Projects Completed", value: 1200, suffix: "+" },
  { label: "Years of Experience", value: 15, suffix: "" },
  { label: "Team Members", value: 50, suffix: "+" },
]

export default function StatsSection() {
  return (
    <section className="bg-white py-16 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="mb-2 text-4xl font-bold text-blue-600"
              >
                <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="text-slate-600 dark:text-slate-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
