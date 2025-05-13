"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"

type MagneticButtonProps = {
  children: React.ReactNode
  className?: string
  magneticIntensity?: number
  springConfig?: {
    stiffness?: number
    damping?: number
  }
  onClick?: () => void
  hoverScale?: number
  tapScale?: number
  variant?: "primary" | "secondary" | "outline" | "gradient"
  size?: "sm" | "md" | "lg"
}

export default function MagneticButton({
  children,
  className = "",
  magneticIntensity = 0.3,
  springConfig = { stiffness: 150, damping: 15 },
  onClick,
  hoverScale = 1.05,
  tapScale = 0.97,
  variant = "primary",
  size = "lg"
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Initialize motion values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Create springs for smoother animation
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Create CSS transform template
  const transform = useMotionTemplate`translateX(${springX}px) translateY(${springY}px)`

  // Calculate base classes based on variant and size
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-700 text-white";
      case "secondary":
        return "bg-slate-200 hover:bg-slate-300 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white";
      case "outline":
        return "border border-slate-300 bg-transparent hover:bg-slate-100 text-slate-900 dark:border-slate-700 dark:hover:bg-slate-800 dark:text-white";
      case "gradient":
        return "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white";
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white";
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-sm py-1.5 px-3";
      case "md":
        return "text-base py-2.5 px-5";
      case "lg":
        return "text-lg py-3 px-7";
      default:
        return "text-base py-2.5 px-5";
    }
  }

  useEffect(() => {
    setIsMounted(true)

    return () => setIsMounted(false)
  }, [])

  // Function to handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !isMounted) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Update motion values
    mouseX.set(distanceX * magneticIntensity)
    mouseY.set(distanceY * magneticIntensity)
  }

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Get all classes
  const allClasses = `relative flex items-center justify-center rounded-lg font-medium transition-colors ${getSizeClasses()} ${getVariantClasses()} ${className}`

  return (
    <motion.button
      ref={buttonRef}
      className={allClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ transform }}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
    >
      {children}


      {variant === "gradient" && (
        <motion.div
          className="absolute flex inset-0 -z-10 rounded-lg opacity-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.4 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {variant === "primary" && (
        <motion.div
          className="absolute flex inset-0 -z-10 rounded-lg opacity-0 bg-blue-500 blur-xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.4 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  )
}
