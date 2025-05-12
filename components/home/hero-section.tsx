"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:gap-16 lg:py-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl"
              >
                Transform your{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  digital experience
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-xl text-lg text-slate-600 dark:text-slate-300"
              >
                Create stunning interfaces that captivate your audience and drive engagement with our innovative
                platform.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-white hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative flex items-center rounded-md bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-3 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                  Get Started
                  <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }} className="ml-2">
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:border-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-700"
              >
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto h-[400px] w-full max-w-md md:h-[500px]"
          >
            <div className="absolute -right-4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-300 opacity-30 blur-3xl filter dark:bg-purple-800"></div>
            <div className="absolute -left-4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-300 opacity-30 blur-3xl filter dark:bg-blue-800"></div>

            <div className="relative h-full w-full rounded-2xl bg-white p-2 shadow-2xl dark:bg-slate-800">
              <Image
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=500&h=500&fit=crop"
                alt="Product illustration"
                width={500}
                height={500}
                className="h-full w-full rounded-xl object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
