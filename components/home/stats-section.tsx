"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import AnimatedCounter from "../animated-counter"

const stats = [
  {
    label: "Happy Clients",
    value: 500,
    suffix: "+",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    label: "Projects Completed",
    value: 1200,
    suffix: "+",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  },
  {
    label: "Years of Experience",
    value: 15,
    suffix: "",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  {
    label: "Team Members",
    value: 50,
    suffix: "+",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  }
]

export default function StatsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  
  // Get scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Floating shapes with parallax effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 opacity-5 dark:opacity-10"
        >
          <div className="absolute inset-0 grid grid-cols-10 gap-1">
            {Array(100).fill(0).map((_, i) => (
              <div key={i} className="h-8 border-b border-r border-slate-900 dark:border-slate-200"></div>
            ))}
          </div>
        </motion.div>
        
        {/* Floating glowing shapes */}
        <motion.div 
          className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-3xl"
          animate={{ 
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>
    
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-blue-600 dark:text-blue-400 font-medium text-sm">
            Our Growth
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            The Numbers Speak for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Themselves</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            We take pride in our achievements and the trust our clients place in us. 
            Here's a snapshot of our journey so far.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="relative"
            >
              <div className="group rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon with animated background */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 group-hover:from-blue-500/30 group-hover:to-teal-500/30 blur-xl transition-all duration-500 transform group-hover:scale-110"></div>
                  <div className="relative bg-white dark:bg-slate-700 rounded-2xl p-3 inline-block text-blue-600 dark:text-blue-400">
                    {stat.icon}
                  </div>
                </div>
                
                {/* Counter value */}
                <div className="flex items-end space-x-1 mb-1">
                  <span className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tabular-nums">
                    <AnimatedCounter 
                      from={0} 
                      to={stat.value} 
                      duration={2500}
                      suffix={stat.suffix} 
                    />
                  </span>
                </div>
                
                {/* Label */}
                <p className="text-slate-600 dark:text-slate-300 text-lg">{stat.label}</p>
                
                {/* Line decorations */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "30%" } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 1.2 }}
                  className="absolute bottom-6 left-8 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
