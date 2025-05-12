"use client"

import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'

interface FloatingImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  rotationFactor?: number
  translateFactor?: number
}

export default function FloatingImage({
  src,
  alt,
  width,
  height,
  className = "",
  rotationFactor = 10,
  translateFactor = 15,
}: FloatingImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  
  // Motion values for the image
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Add spring physics for smoother motion
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })
  
  // Transform mouse position to rotation and movement values
  const rotateX = useTransform(springY, [0, 1], [rotationFactor, -rotationFactor])
  const rotateY = useTransform(springX, [0, 1], [-rotationFactor, rotationFactor])
  const translateX = useTransform(springX, [0, 1], [-translateFactor, translateFactor])
  const translateY = useTransform(springY, [0, 1], [-translateFactor, translateFactor])
  const scale = useSpring(useMotionValue(1), { stiffness: 300, damping: 25 })
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    
    // Calculate relative position of mouse within the element (0-1)
    const relativeX = (e.clientX - rect.left) / rect.width
    const relativeY = (e.clientY - rect.top) / rect.height
    
    // Update motion values
    mouseX.set(relativeX)
    mouseY.set(relativeY)
  }
  
  const handleMouseEnter = () => {
    setIsHovering(true)
    scale.set(1.05)
  }
  
  const handleMouseLeave = () => {
    setIsHovering(false)
    mouseX.set(0.5)
    mouseY.set(0.5)
    scale.set(1)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ boxShadow: isHovering ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.3 }}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          scale
        }}
        transition={{ duration: 0.1 }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full rounded-2xl transform transition-all duration-700 ease-out"
        />
        
        {/* Overlay effect on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/10 rounded-2xl"
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}
