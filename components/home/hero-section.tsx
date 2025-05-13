"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-900">
      {/* Simple grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-2 md:gap-12 lg:py-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl"
              >
                Transform your{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  education technology
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-xl text-lg text-slate-600 dark:text-slate-300"
              >
                Comprehensive EdTech solutions that enhance teaching, learning, and administration for modern educational institutions.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                <span className="flex items-center">
                  Get Started
                  <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }} className="ml-2">
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 dark:focus:ring-slate-700"
              >
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto h-[400px] w-full max-w-lg md:h-[460px]"
          >
            <div className="relative h-full w-full rounded-lg bg-white shadow-lg dark:bg-slate-800">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Image
                  src="https://images.pexels.com/photos/5905555/pexels-photo-5905555.jpeg?auto=compress&w=500&h=500&fit=crop"
                  alt="Modern classroom with education technology"
                  width={500}
                  height={500}
                  className="h-full w-full rounded-lg object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
