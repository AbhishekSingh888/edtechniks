"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    content: "EdTechniks has completely transformed how our school approaches digital learning. The smart classroom solutions are intuitive and reliable.",
    author: "Sarah Johnson",
    role: "Principal, Westlake Academy",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&w=200"
  },
  {
    id: 2,
    content: "The comprehensive support and training EdTechniks provides made our technology transition seamless. Our staff adapted quickly to the new systems.",
    author: "Michael Chen",
    role: "IT Director, Riverdale School District",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&w=200"
  },
  {
    id: 3,
    content: "The analytics dashboard has given us unprecedented insights into student performance. We can now tailor our teaching methods more effectively.",
    author: "Priya Patel",
    role: "Academic Coordinator, Tech Institute",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&w=200"
  },
  {
    id: 4,
    content: "EdTechniks' hardware solutions have proven to be extremely durable and cost-effective. Their maintenance team is always prompt and professional.",
    author: "David Wilson",
    role: "Superintendent, Oakridge Schools",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&w=200"
  }
]

export default function EnhancedTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  // Auto advance testimonials
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null)
  
  useState(() => {
    autoAdvanceRef.current = setInterval(() => {
      next()
    }, 8000)
    
    return () => {
      if (autoAdvanceRef.current) {
        clearInterval(autoAdvanceRef.current)
      }
    }
  })
  
  const resetAutoAdvance = () => {
    if (autoAdvanceRef.current) {
      clearInterval(autoAdvanceRef.current)
      autoAdvanceRef.current = setInterval(() => {
        next()
      }, 8000)
    }
  }

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-40 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["20%", "50%", "30%", "50%", "20%"]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          <motion.div 
            className="absolute top-96 -left-20 w-72 h-72 rounded-full bg-purple-100 dark:bg-purple-900/20 opacity-40 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -90, -180, -270, -360],
              borderRadius: ["30%", "50%", "40%", "50%", "30%"]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
      
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <motion.span 
            className="inline-block px-4 py-1.5 mb-5 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-600 dark:text-purple-400 font-medium text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Testimonials
          </motion.span>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              What Our Clients Have to Say
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              Discover how our solutions are transforming education and empowering institutions across the country.
            </p>
          </motion.div>
        </div>
        
        {/* Testimonials carousel */}
        <div className="max-w-6xl mx-auto relative">
          <div className="overflow-hidden pb-10">
            <motion.div 
              className="relative min-h-[350px] md:min-h-[300px]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                      {/* Image */}
                      <div className="md:w-1/4 flex-shrink-0">
                        <div className="relative">
                          <div className="h-24 w-24 md:h-32 md:w-32 relative rounded-2xl overflow-hidden">
                            <Image
                              src={testimonials[activeIndex].image}
                              alt={testimonials[activeIndex].author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-4 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2"
                          >
                            <Quote className="h-5 w-5 text-white" />
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="md:w-3/4">
                        <div className="flex mb-6">
                          {[...Array(5)].map((_, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + (i * 0.1) }}
                            >
                              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                            </motion.div>
                          ))}
                        </div>
                        
                        <blockquote>
                          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                            "{testimonials[activeIndex].content}"
                          </p>
                          <footer>
                            <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
                              {testimonials[activeIndex].author}
                            </h4>
                            <p className="text-slate-500 dark:text-slate-400">
                              {testimonials[activeIndex].role}
                            </p>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i)
                  resetAutoAdvance()
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 dark:bg-slate-600'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute -bottom-4 left-0 right-0 flex justify-between px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                prev()
                resetAutoAdvance()
              }}
              className="bg-white dark:bg-slate-700 h-10 w-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600 dark:text-slate-200" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                next()
                resetAutoAdvance()
              }}
              className="bg-white dark:bg-slate-700 h-10 w-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-slate-600 dark:text-slate-200" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
