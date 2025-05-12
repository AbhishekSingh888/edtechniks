"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Book, Code, LineChart, Laptop, Microscope, Rocket } from "lucide-react"
import FloatingFeatureCard from "../ui/floating-feature-card"
import LazyLoadSection from "../ui/lazy-load-section"
import ResponsiveGrid from "../ui/responsive-grid"
import { useTheme } from "../adaptive-theme-provider"

// Learning features data
const learningFeatures = [
  {
    title: "Adaptive Learning Paths",
    description: "Personalized learning journeys that adapt to each student's progress and learning style.",
    icon: <Laptop className="h-6 w-6" />,
    colorTheme: "blue"
  },
  {
    title: "Interactive Code Labs",
    description: "Hands-on coding environments where students can practice programming in real-time.",
    icon: <Code className="h-6 w-6" />,
    colorTheme: "purple"
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive analytics to track student progress and identify areas for improvement.",
    icon: <LineChart className="h-6 w-6" />,
    colorTheme: "green"
  },
  {
    title: "Virtual Science Labs",
    description: "Simulate complex laboratory experiments in an immersive virtual environment.",
    icon: <Microscope className="h-6 w-6" />,
    colorTheme: "teal"
  },
  {
    title: "Curriculum Builder",
    description: "Create and customize curriculum materials aligned with educational standards.",
    icon: <Book className="h-6 w-6" />,
    colorTheme: "orange"
  },
  {
    title: "Innovation Hub",
    description: "Collaboration space where students can develop their own educational projects.",
    icon: <Rocket className="h-6 w-6" />,
    colorTheme: "gradient"
  }
];

export default function AdvancedLearningFeaturesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)
  const { accentColor } = useTheme()
  
  // Map our theme accent color to the component color themes
  const getColorTheme = (index: number) => {
    if (accentColor === "blue") return ["blue", "teal", "purple", "green", "orange", "gradient"][index % 6]
    if (accentColor === "purple") return ["purple", "blue", "teal", "orange", "green", "gradient"][index % 6]
    if (accentColor === "teal") return ["teal", "blue", "purple", "green", "orange", "gradient"][index % 6]
    if (accentColor === "green") return ["green", "teal", "blue", "purple", "orange", "gradient"][index % 6]
    if (accentColor === "orange") return ["orange", "blue", "purple", "teal", "green", "gradient"][index % 6]
    return ["blue", "teal", "purple", "green", "orange", "gradient"][index % 6]
  }

  // Handle feature click to expand/collapse
  const handleFeatureClick = (index: number) => {
    if (expandedFeature === index) {
      setExpandedFeature(null)
    } else {
      setExpandedFeature(index)
    }
  }

  return (
    <LazyLoadSection
      id="advanced-features"
      className="relative py-20 overflow-hidden"
      animation="fade"
      threshold={0.1}
    >
      <div ref={sectionRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-4 text-sm font-semibold rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
            style={{
              backgroundColor: `var(--accent-color-light)`,
              color: `var(--accent-color)`,
            }}
          >
            Advanced Technology
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Next-Generation <span style={{ color: 'var(--accent-color)' }}>Learning Features</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300 text-lg"
          >
            Explore our cutting-edge educational technology tools designed to transform the learning experience
          </motion.p>
        </div>
        
        {/* Responsive features grid */}
        <ResponsiveGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          gap="1.5rem"
          animation="slide-up"
          staggerDelay={0.1}
          startDelay={0.2}
          className="mt-8"
        >
          {learningFeatures.map((feature, index) => (
            <FloatingFeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              colorTheme={getColorTheme(index) as any}
              backgroundStyle="glass"
              showShadow={true}
              className="h-full"
              onClick={() => handleFeatureClick(index)}
            />
          ))}
        </ResponsiveGrid>
        
        {/* Mobile-optimized view for expanded feature */}
        {expandedFeature !== null && (
          <motion.div
            className="md:hidden mt-6 p-5 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <h4 className="text-xl font-bold mb-2">
              {learningFeatures[expandedFeature].title}
            </h4>
            <p className="text-slate-600 dark:text-slate-300">
              {learningFeatures[expandedFeature].description}
            </p>
            <div className="mt-4">
              <button
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                style={{ color: 'var(--accent-color)' }}
                onClick={() => setExpandedFeature(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a 
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ 
              backgroundColor: 'var(--accent-color)',
              boxShadow: '0 10px 20px -10px var(--accent-color-medium)'
            }}
          >
            Request a Demo
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-slate-50/50 to-transparent dark:from-slate-900/50 dark:to-transparent"></div>
    </LazyLoadSection>
  )
}
