"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import TiltCard from "../ui/tilt-card"

// Featured courses data
const featuredCourses = [
  {
    title: "Interactive Smart Board Mastery",
    description: "Learn how to leverage smart boards effectively in your classroom for interactive learning experiences.",
    image: "https://images.pexels.com/photos/6238118/pexels-photo-6238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Teacher Training"
  },
  {
    title: "Digital Assessment Tools",
    description: "Master modern assessment tools to track student progress and provide meaningful feedback.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "EdTech"
  },
  {
    title: "Classroom Device Management",
    description: "Strategic approaches to managing multiple devices in a classroom environment.",
    image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "IT Management"
  },
  {
    title: "Virtual Learning Environments",
    description: "Create engaging virtual learning spaces that keep students connected and motivated.",
    image: "https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Online Learning"
  },
  {
    title: "School Network Security",
    description: "Essential security practices to protect your school's digital infrastructure and student data.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Cybersecurity"
  },
  {
    title: "Educational Data Analytics",
    description: "Harness the power of data to improve educational outcomes and inform teaching strategies.",
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Analytics"
  }
];

export default function FeaturedCoursesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    },
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden" ref={sectionRef}>
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-4 text-sm font-semibold rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
          >
            Knowledge Base
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Featured <span className="text-blue-600 dark:text-blue-400">Courses</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300 text-lg"
          >
            Enhance your educational technology skills with our specialized training courses designed for teachers and administrators.
          </motion.p>
        </div>
        
        {/* Courses grid with tilt cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredCourses.map((course, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <TiltCard
                title={course.title}
                description={course.description}
                image={course.image}
                category={course.category}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a 
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Browse All Courses
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
