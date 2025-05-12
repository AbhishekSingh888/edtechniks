"use client"

import { useState, useRef } from "react"
import { motion, MotionValue, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const productFeatures = [
  {
    title: "Interactive Virtual Classrooms",
    description: "Create immersive learning environments with real-time collaboration tools, screen sharing, and interactive whiteboards.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-blue-500 to-teal-400"
  },
  {
    title: "AI-Powered Learning Paths",
    description: "Personalized learning experiences adapt to each student's strengths and challenges through advanced machine learning algorithms.",
    image: "https://images.pexels.com/photos/5428263/pexels-photo-5428263.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Comprehensive Analytics Dashboard",
    description: "Track student progress, engagement metrics, and learning outcomes with detailed visual reports and actionable insights.",
    image: "https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-pink-500 to-rose-500"
  }
]

export default function StickyShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  return (
    <div ref={containerRef} className="bg-slate-50 dark:bg-slate-900">
      <div className="min-h-screen flex flex-col relative">
        <motion.div 
          className="text-center pt-24 pb-16 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 mb-5 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-blue-600 dark:text-blue-400 font-medium text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Powerful Features
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            Discover Our <span className="text-blue-600">Flagship</span> Products
          </h2>
          <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            Our cutting-edge educational technology provides seamless experiences for students, teachers, and administrators.
          </p>
        </motion.div>
        
        <div className="flex-1 sticky top-0 flex items-center overflow-hidden">
          {productFeatures.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              progress={scrollYProgress} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface Feature {
  title: string;
  description: string;
  image: string;
  color: string;
}

function FeatureCard({ feature, progress, index }: { feature: Feature; progress: MotionValue<number>; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  
  // Calculate the position based on scroll progress
  const x = useTransform(
    progress,
    [0, 0.33, 0.66, 1], 
    index === 0 
      ? ['0%', '0%', '-100%', '-100%']
      : index === 1
        ? ['100%', '0%', '0%', '-100%']
        : ['100%', '100%', '0%', '0%']
  )
  
  const opacity = useTransform(
    progress,
    index === 0 
      ? [0, 0.1, 0.4, 0.5] 
      : index === 1
        ? [0.3, 0.4, 0.7, 0.8]
        : [0.6, 0.7, 0.9, 1],
    [0, 1, 1, 0]
  )

  const scale = useTransform(
    progress,
    index === 0 
      ? [0, 0.1, 0.4, 0.5] 
      : index === 1
        ? [0.3, 0.4, 0.7, 0.8]
        : [0.6, 0.7, 0.9, 1],
    [0.8, 1, 1, 0.8]
  )
  
  return (
    <motion.div
      ref={cardRef}
      className="absolute w-full h-full flex justify-center items-center px-4"
      style={{
        x,
        opacity,
        scale
      }}
    >
      <motion.div 
        className={`w-full max-w-2xl bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden`}
        style={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
          transformStyle: "preserve-3d",
          transformPerspective: "1000px"
        }}
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
        onMouseMove={(e) => {
          if (!cardRef.current) return
          const rect = cardRef.current.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const rotateY = ((x - centerX) / centerX) * 10
          const rotateX = ((centerY - y) / centerY) * 10
          
          cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={(e) => {
          setIsHovered(false)
          if (cardRef.current) {
            cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
          }
        }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="relative h-64 md:h-full overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20`}></div>
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">{feature.description}</p>
            
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + (item * 0.1) }}
                >
                  <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Feature point {item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              className={`mt-8 px-6 py-2.5 rounded-lg bg-gradient-to-r ${feature.color} text-white font-medium`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
