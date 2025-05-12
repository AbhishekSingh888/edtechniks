"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import MagneticButton from "../ui/magnetic-button"
import FloatingImage from "../ui/floating-image"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

export default function ParallaxHero() {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // Create smooth spring animations for better performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  // Create different parallax effects
  const y1 = useParallax(smoothProgress, -100)
  const y2 = useParallax(smoothProgress, 100)
  const rotate = useTransform(smoothProgress, [0, 1], [0, -10])
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.9])
  const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0])
  
  // Visual effects for the background
  const gradientOpacity = useTransform(smoothProgress, [0, 0.5], [0.3, 0])
  const backgroundY = useTransform(smoothProgress, [0, 1], [0, -50])

  return (
    <div 
      ref={ref}
      className="relative overflow-hidden min-h-[100vh] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Parallax grid background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
      ></motion.div>
      
      {/* Animated gradient background overlay with parallax effect */}
      <motion.div
        style={{ 
          opacity: gradientOpacity,
          y: useTransform(smoothProgress, [0, 1], [0, -100])
        }}
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mix-blend-multiply filter blur-3xl"
      ></motion.div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-32 md:pb-40 flex min-h-[85vh] items-center">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Text Content */}
          <motion.div
            style={{ opacity, y: y1, scale }}
            className="flex flex-col space-y-8 z-10"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center space-x-2 mb-4"
              >
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-teal-500"></div>
                <span className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">Cutting-edge technology</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl"
              >
                Transform your{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent relative z-10">
                    education technology
                  </span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-3 bg-blue-200/30 dark:bg-blue-900/30 rounded-sm -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-xl text-lg text-slate-600 dark:text-slate-300"
              >
                Comprehensive EdTech solutions that enhance teaching, learning, and administration for modern educational institutions.
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                  className="block w-full h-[1px] bg-gradient-to-r from-blue-600/40 to-transparent mt-4"
                />
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <MagneticButton variant="gradient" size="md" magneticIntensity={0.4}>
                  Get Started
                  <motion.span 
                    animate={{ x: isHovered ? 5 : 0 }} 
                    transition={{ duration: 0.2 }} 
                    className="ml-2"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </MagneticButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <MagneticButton variant="outline" size="md" magneticIntensity={0.3}>
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </MagneticButton>
              </motion.div>
            </motion.div>
            
            {/* Small features list */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {["Smart Classes", "Software Solutions", "Hardware", "Infrastructure"].map((item, index) => (
                <motion.span 
                  key={item}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700 font-medium dark:bg-slate-800/70 dark:text-slate-300"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Content with Parallax Effect */}
          <motion.div
            style={{ y: y2, rotate, scale }}
            className="relative mx-auto h-[400px] w-full max-w-md md:h-[500px] z-10"
          >
            {/* Floating gradient blobs */}
            <div className="absolute -right-4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-300 opacity-30 blur-3xl filter dark:bg-purple-800"></div>
            <div className="absolute -left-4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-300 opacity-30 blur-3xl filter dark:bg-blue-800"></div>
            
            {/* Image card with hover effect */}            <div className="relative h-full w-full rounded-2xl bg-white p-3 shadow-2xl dark:bg-slate-800 backdrop-blur-sm">
              <FloatingImage
                src="https://images.pexels.com/photos/5905555/pexels-photo-5905555.jpeg?auto=compress&w=500&h=500&fit=crop"
                alt="Modern classroom with education technology"
                width={500}
                height={500}
                className="h-full w-full"
                rotationFactor={7}
                translateFactor={10}
              />
              
              {/* Overlaid decorative dots */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 opacity-60 z-10">
                <div className="grid grid-cols-3 gap-2">
                  {Array(9).fill(0).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + (i * 0.05), duration: 0.4, type: "spring" }}
                      className="w-2 h-2 rounded-full bg-blue-500"
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute -right-5 top-10 bg-white dark:bg-slate-700 rounded-xl px-4 py-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">Real-time Collaboration</span>
              </div>
            </motion.div>
            
            {/* Floating statistics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="absolute -left-10 bottom-16 bg-white dark:bg-slate-700 rounded-xl p-3 shadow-lg"
            >
              <div className="text-center">
                <span className="block text-xl font-bold text-blue-600">500+</span>
                <span className="text-xs text-slate-500 dark:text-slate-300">Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute left-1/2 bottom-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-slate-500 dark:text-slate-400 mb-2">Scroll to discover</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-9 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center pt-1"
          >
            <motion.div 
              animate={{ height: [6, 10, 6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 bg-slate-400 dark:bg-slate-500 rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
