"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  })
  const [cursorVariant, setCursorVariant] = useState("default")
  
  // Track cursor position
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    // Track when cursor is over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-hover') ||
        target.closest('.cursor-hover')
      ) {
        setCursorVariant("hover")
      } else {
        setCursorVariant("default")
      }
    }

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mouseover", handleMouseOver)
    
    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  // Hide default cursor in desktop browsers
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only modify cursor on non-touch devices
      if (window.matchMedia('(pointer: fine)').matches) {
        document.body.style.cursor = 'none'
        
        // Add hover class to interactive elements
        const buttons = document.querySelectorAll('button, a')
        buttons.forEach(button => {
          button.classList.add('cursor-hover')
        })
      }
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.cursor = ''
      }
    }
  }, [])

  // Cursor animations
  const variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      height: 10,
      width: 10,
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      mixBlendMode: "difference" as const,
      transition: {
        type: "spring",
        mass: 0.3
      }
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      mixBlendMode: "difference" as const,
      transition: {
        type: "spring",
        mass: 0.5
      }
    }
  }
  
  // Don't show custom cursor on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
      />
      
      {/* Outer cursor ring with delay */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-white/30 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 36,
          y: mousePosition.y - 36,
          height: cursorVariant === "hover" ? 72 : 50,
          width: cursorVariant === "hover" ? 72 : 50,
          opacity: cursorVariant === "hover" ? 0.5 : 0.15,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          damping: 15,
          stiffness: 150,
          restDelta: 0.001
        }}
      />
    </>
  )
}
