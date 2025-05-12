"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"

interface TiltCardProps {
  title: string
  description: string
  image: string
  category?: string
  link?: string
  className?: string
}

export default function TiltCard({ 
  title, 
  description, 
  image, 
  category = "Featured",
  link = "#",
  className = ""
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for tracking mouse position relative to card
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Add spring physics for smoother movement
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  // Transform spring values to rotation values
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7])

  // Additional transforms for inner elements
  const translateZ = useTransform(
    springX,
    [-0.5, 0.5],
    isHovered ? [0, 0] : [-5, 5]
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    
    // Get mouse position relative to card (0-1)
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5
    
    // Update motion values
    mouseX.set(relativeX)
    mouseY.set(relativeY)
  }
  
  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  
  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        height: "400px",
        width: "100%",
      }}
    >
      {/* Card container with 3D rotation */}
      <motion.div
        className="relative h-full w-full rounded-2xl bg-white shadow-xl dark:bg-slate-800 overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      >
        {/* Background image with parallax effect */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            translateZ: "-20px",
            scale: isHovered ? 1.15 : 1.05,
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-75"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        </motion.div>

        {/* Card content */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col justify-end p-6"
          style={{ translateZ: translateZ }}
        >
          {/* Category tag */}
          <motion.div
            className="mb-2 w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {category}
          </motion.div>

          {/* Title */}
          <motion.h3
            className="mb-2 text-2xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="mb-4 line-clamp-2 text-sm text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {description}
          </motion.p>

          {/* Read more link with dynamic hover effect */}
          <motion.a
            href={link}
            className="group inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
            whileHover={{ x: 5 }}
          >
            Learn more
            <motion.svg
              className="ml-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ x: 0 }}
              animate={isHovered ? { x: 3 } : { x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </motion.svg>
          </motion.a>

          {/* Dynamic glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
