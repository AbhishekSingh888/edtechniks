"use client"

import { useState, useRef, ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"

interface FloatingFeatureCardProps {
  /** Card title */
  title: string
  
  /** Card description */
  description: string
  
  /** Icon component or image URL */
  icon: ReactNode | string
  
  /** Optional color theme */
  colorTheme?: "blue" | "purple" | "teal" | "green" | "orange" | "gradient"
  
  /** Option to show shadow */
  showShadow?: boolean
  
  /** Background style */
  backgroundStyle?: "solid" | "gradient" | "glass" | "light" | "dark"
  
  /** Whether the card should float on scroll */
  floatOnScroll?: boolean
  
  /** Additional CSS classes */
  className?: string
  
  /** Optional action on click */
  onClick?: () => void
}

export default function FloatingFeatureCard({
  title,
  description,
  icon,
  colorTheme = "blue",
  showShadow = true,
  backgroundStyle = "glass",
  floatOnScroll = false,
  className = "",
  onClick
}: FloatingFeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // Motion values for mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Add spring physics for smoother movement
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })
  
  // Transform mouse position to card rotation
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5])
  const translateZ = useTransform(
    springX,
    [-0.5, 0.5],
    isHovered ? [10, 10] : [0, 0]
  )
  
  // Handle mouse movement over card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    
    // Calculate relative mouse position (0-1)
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5
    
    mouseX.set(relativeX)
    mouseY.set(relativeY)
  }
  
  // Color theme styles
  const colorThemeStyles = {
    blue: {
      bg: backgroundStyle === "solid" 
        ? "bg-blue-500" 
        : backgroundStyle === "gradient" 
        ? "bg-gradient-to-br from-blue-400 to-blue-600"
        : backgroundStyle === "glass"
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md"
        : backgroundStyle === "light"
        ? "bg-blue-50 dark:bg-blue-900/20"
        : "bg-blue-900 dark:bg-blue-950",
      ring: "ring-blue-500/20",
      iconBg: "bg-blue-500/10 dark:bg-blue-400/10",
      iconColor: "text-blue-600 dark:text-blue-400",
      shadow: "shadow-blue-500/20"
    },
    purple: {
      bg: backgroundStyle === "solid" 
        ? "bg-purple-500" 
        : backgroundStyle === "gradient" 
        ? "bg-gradient-to-br from-purple-400 to-purple-600"
        : backgroundStyle === "glass"
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md"
        : backgroundStyle === "light"
        ? "bg-purple-50 dark:bg-purple-900/20"
        : "bg-purple-900 dark:bg-purple-950",
      ring: "ring-purple-500/20",
      iconBg: "bg-purple-500/10 dark:bg-purple-400/10",
      iconColor: "text-purple-600 dark:text-purple-400",
      shadow: "shadow-purple-500/20"
    },
    teal: {
      bg: backgroundStyle === "solid" 
        ? "bg-teal-500" 
        : backgroundStyle === "gradient" 
        ? "bg-gradient-to-br from-teal-400 to-teal-600"
        : backgroundStyle === "glass"
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md"
        : backgroundStyle === "light"
        ? "bg-teal-50 dark:bg-teal-900/20"
        : "bg-teal-900 dark:bg-teal-950",
      ring: "ring-teal-500/20",
      iconBg: "bg-teal-500/10 dark:bg-teal-400/10",
      iconColor: "text-teal-600 dark:text-teal-400",
      shadow: "shadow-teal-500/20"
    },
    green: {
      bg: backgroundStyle === "solid" 
        ? "bg-green-500" 
        : backgroundStyle === "gradient" 
        ? "bg-gradient-to-br from-green-400 to-green-600"
        : backgroundStyle === "glass"
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md"
        : backgroundStyle === "light"
        ? "bg-green-50 dark:bg-green-900/20"
        : "bg-green-900 dark:bg-green-950",
      ring: "ring-green-500/20",
      iconBg: "bg-green-500/10 dark:bg-green-400/10",
      iconColor: "text-green-600 dark:text-green-400",
      shadow: "shadow-green-500/20"
    },
    orange: {
      bg: backgroundStyle === "solid" 
        ? "bg-orange-500" 
        : backgroundStyle === "gradient" 
        ? "bg-gradient-to-br from-orange-400 to-orange-600"
        : backgroundStyle === "glass"
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md"
        : backgroundStyle === "light"
        ? "bg-orange-50 dark:bg-orange-900/20"
        : "bg-orange-900 dark:bg-orange-950",
      ring: "ring-orange-500/20",
      iconBg: "bg-orange-500/10 dark:bg-orange-400/10",
      iconColor: "text-orange-600 dark:text-orange-400",
      shadow: "shadow-orange-500/20"
    },
    gradient: {
      bg: "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
      ring: "ring-purple-500/20",
      iconBg: "bg-white/20 dark:bg-white/10",
      iconColor: "text-white",
      shadow: "shadow-purple-500/20"
    }
  }
  
  // Get styles for current color theme
  const currentThemeStyles = colorThemeStyles[colorTheme]
  
  // Text color based on background style
  const textColor = 
    backgroundStyle === "solid" || backgroundStyle === "gradient" || backgroundStyle === "dark"
      ? "text-white"
      : "text-slate-900 dark:text-white"
  
  // Text secondary color based on background style
  const textSecondaryColor = 
    backgroundStyle === "solid" || backgroundStyle === "gradient" || backgroundStyle === "dark"
      ? "text-white/80" 
      : "text-slate-600 dark:text-slate-300"
  
  return (
    <motion.div
      ref={cardRef}
      className={`
        ${className}
        relative overflow-hidden rounded-2xl p-6
        border border-slate-200 dark:border-slate-800
        ${currentThemeStyles.bg}
        ${showShadow ? `shadow-lg ${currentThemeStyles.shadow}` : ""}
        transition-all duration-300 ease-out
      `}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Card content with 3D effect */}
      <motion.div
        className="relative z-10 flex flex-col items-start"
        style={{
          rotateX,
          rotateY,
          translateZ,
        }}
      >
        {/* Icon */}
        <div className={`mb-4 rounded-lg p-3 ${currentThemeStyles.iconBg} ${currentThemeStyles.iconColor}`}>
          {typeof icon === "string" ? (
            <Image
              src={icon}
              alt={title}
              width={24}
              height={24}
              className="h-6 w-6"
            />
          ) : (
            icon
          )}
        </div>
        
        {/* Title */}
        <h3 className={`mb-2 text-xl font-bold ${textColor}`}>{title}</h3>
        
        {/* Description */}
        <p className={`${textSecondaryColor}`}>{description}</p>
      </motion.div>
      
      {/* Background glow effect */}
      <motion.div
        className={`
          absolute inset-0 bg-gradient-to-r from-transparent 
          via-white/10 to-transparent
        `}
        style={{
          opacity: isHovered ? 1 : 0,
          x: useTransform(mouseX, [-0.5, 0.5], [-100, 100]),
          y: useTransform(mouseY, [-0.5, 0.5], [-100, 100]),
        }}
      />
    </motion.div>
  )
}