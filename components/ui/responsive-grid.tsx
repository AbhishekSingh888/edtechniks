"use client"

import { Children, ReactNode, isValidElement, cloneElement } from "react"
import { motion, Variants } from "framer-motion"

interface ResponsiveGridProps {
  /** Grid items */
  children: ReactNode
  
  /** Number of columns at various breakpoints */
  columns?: {
    /** Mobile (default) */
    base?: number
    /** Small screens (640px+) */
    sm?: number
    /** Medium screens (768px+) */
    md?: number
    /** Large screens (1024px+) */
    lg?: number
    /** Extra large screens (1280px+) */
    xl?: number
    /** 2XL screens (1536px+) */
    "2xl"?: number
  }
  
  /** Gap between grid items */
  gap?: string
  
  /** Animation for grid items */
  animation?: "fade" | "slide-up" | "scale" | "none"
  
  /** Animation delay between items (in seconds) */
  staggerDelay?: number
  
  /** Delay before starting animations (in seconds) */
  startDelay?: number
  
  /** Additional CSS classes for the grid container */
  className?: string
  
  /** Whether to center the items in the grid */
  centered?: boolean
}

export default function ResponsiveGrid({
  children,
  columns = { base: 1, sm: 2, md: 2, lg: 3, xl: 4, "2xl": 4 },
  gap = "1rem",
  animation = "none",
  staggerDelay = 0.1,
  startDelay = 0,
  className = "",
  centered = false,
}: ResponsiveGridProps) {
  // Define animation variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: startDelay,
      },
    },
  }
  
  const itemVariants: Variants = {
    hidden: {
      opacity: animation !== "none" ? 0 : 1,
      y: animation === "slide-up" ? 20 : 0,
      scale: animation === "scale" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Generate CSS grid template columns for responsive design
  const gridTemplateColumns = Object.entries(columns)
    .map(([breakpoint, cols]) => {
      if (breakpoint === "base") {
        return `grid-template-columns: repeat(${cols}, minmax(0, 1fr));`;
      }
      return `@media (min-width: ${
        breakpoint === "sm" ? "640px" : 
        breakpoint === "md" ? "768px" : 
        breakpoint === "lg" ? "1024px" : 
        breakpoint === "xl" ? "1280px" : 
        "1536px"
      }) {
        grid-template-columns: repeat(${cols}, minmax(0, 1fr));
      }`;
    })
    .join(" ");

  // Add styles for the grid
  const gridStyle = {
    display: "grid",
    gap,
    justifyContent: centered ? "center" : "start",
    style: gridTemplateColumns,
  };

  // Clone children to add motion properties if animation is enabled
  const gridItems = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;

    return animation !== "none" ? (
      <motion.div variants={itemVariants} key={index}>
        {child}
      </motion.div>
    ) : (
      child
    );
  });

  return animation !== "none" ? (
    <motion.div
      className={`responsive-grid ${className}`}
      style={gridStyle}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {gridItems}
    </motion.div>
  ) : (
    <div className={`responsive-grid ${className}`} style={gridStyle}>
      {gridItems}
    </div>
  );
}
