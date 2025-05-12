"use client"

import { useState, useEffect, ReactNode } from "react"
import { motion } from "framer-motion"

interface LazyLoadSectionProps {
  /** The component or content to lazy load */
  children: ReactNode
  
  /** Distance from the viewport to trigger loading (0-1, where 1 = fully visible) */
  threshold?: number
  
  /** Delay in milliseconds before starting to load */
  loadDelay?: number
  
  /** Optional placeholder to show while loading */
  placeholder?: ReactNode
  
  /** Animation for when content appears */
  animation?: "fade" | "slide-up" | "slide-down" | "zoom" | "none"
  
  /** Whether to unmount component when out of view (memory optimization) */
  unmountWhenOutOfView?: boolean
  
  /** ID for the section */
  id?: string
  
  /** Additional CSS classes */
  className?: string
}

export default function LazyLoadSection({
  children,
  threshold = 0.1,
  loadDelay = 0,
  placeholder,
  animation = "fade",
  unmountWhenOutOfView = false,
  id,
  className = "",
}: LazyLoadSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  
  useEffect(() => {
    // Create intersection observer to detect when element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInView(entry.isIntersecting)
        
        // When element enters viewport and hasn't been loaded yet
        if (entry.isIntersecting && !hasLoaded) {
          // Load after delay
          const timer = setTimeout(() => {
            setIsVisible(true)
            setHasLoaded(true)
          }, loadDelay)
          
          return () => clearTimeout(timer)
        }
        
        // Handle unmounting when scrolled out of view (if enabled)
        if (!entry.isIntersecting && unmountWhenOutOfView && hasLoaded) {
          setIsVisible(false)
        }
      },
      { threshold }
    )
    
    // Get a reference to the DOM element
    const currentElement = document.getElementById(id || "lazy-section")
    
    if (currentElement) {
      observer.observe(currentElement)
    }
    
    // Cleanup function
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [id, threshold, loadDelay, unmountWhenOutOfView, hasLoaded])
  
  // Define animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slide-up" ? 30 : animation === "slide-down" ? -30 : 0,
      scale: animation === "zoom" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }
  
  return (
    <div id={id || "lazy-section"} className={className}>
      {isVisible ? (
        animation === "none" ? (
          <>{children}</>
        ) : (
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
          >
            {children}
          </motion.div>
        )
      ) : (
        placeholder || (
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        )
      )}
    </div>
  )
}
