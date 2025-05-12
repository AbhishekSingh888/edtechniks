"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "../adaptive-theme-provider"
import { Sun, Moon, Monitor, Palette } from "lucide-react"

interface ThemeSwitcherProps {
  /** Additional CSS classes */
  className?: string
  
  /** Whether to show text labels */
  showLabels?: boolean
  
  /** Orientation of the switcher */
  orientation?: "horizontal" | "vertical"
  
  /** Size of the icons */
  size?: "sm" | "md" | "lg"
  
  /** Whether to include color theme options */
  includeColorThemes?: boolean
}

export default function ThemeSwitcher({
  className = "",
  showLabels = false,
  orientation = "horizontal",
  size = "md",
  includeColorThemes = false,
}: ThemeSwitcherProps) {
  // Use theme context
  const { theme, setTheme, accentColor, setAccentColor } = useTheme()
  
  // Color palette open/closed state
  const [isPaletteOpen, setIsPaletteOpen] = useState(false)
  
  // Define icon sizes based on the size prop
  const iconSizes = {
    sm: 18,
    md: 20,
    lg: 24,
  }
  
  // Base class for buttons
  const buttonBaseClass = `
    relative flex items-center justify-center rounded-lg 
    ${size === "sm" ? "p-1.5" : size === "md" ? "p-2" : "p-2.5"}
    transition-all duration-300 ease-out
  `
  
  // Active button class
  const activeClass = "bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-white"
  
  // Inactive button class
  const inactiveClass = "text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-700/80"
  
  // Available accent colors
  const accentColors = [
    { name: "blue", color: "rgb(37, 99, 235)" },
    { name: "purple", color: "rgb(147, 51, 234)" },
    { name: "teal", color: "rgb(20, 184, 166)" },
    { name: "green", color: "rgb(22, 163, 74)" },
    { name: "orange", color: "rgb(249, 115, 22)" },
  ]

  return (
    <div className={`${className}`}>
      <div 
        className={`
          flex ${orientation === "horizontal" ? "flex-row" : "flex-col"} 
          gap-2 rounded-lg bg-white/80 p-1 shadow-sm backdrop-blur-sm
          dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700
        `}
      >
        {/* Theme mode buttons */}
        <button
          type="button"
          onClick={() => setTheme("light")}
          aria-label="Light mode"
          className={`${buttonBaseClass} ${theme === "light" ? activeClass : inactiveClass}`}
        >
          <Sun size={iconSizes[size]} />
          {showLabels && <span className="ml-2">Light</span>}
        </button>
        
        <button
          type="button"
          onClick={() => setTheme("dark")}
          aria-label="Dark mode"
          className={`${buttonBaseClass} ${theme === "dark" ? activeClass : inactiveClass}`}
        >
          <Moon size={iconSizes[size]} />
          {showLabels && <span className="ml-2">Dark</span>}
        </button>
        
        <button
          type="button"
          onClick={() => setTheme("system")}
          aria-label="System mode"
          className={`${buttonBaseClass} ${theme === "system" ? activeClass : inactiveClass}`}
        >
          <Monitor size={iconSizes[size]} />
          {showLabels && <span className="ml-2">System</span>}
        </button>
        
        {/* Color theme selector */}
        {includeColorThemes && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsPaletteOpen(!isPaletteOpen)}
              aria-label="Color themes"
              className={`${buttonBaseClass} ${isPaletteOpen ? activeClass : inactiveClass}`}
              style={{
                borderBottom: `2px solid ${accentColors.find(c => c.name === accentColor)?.color || 'currentColor'}`,
              }}
            >
              <Palette size={iconSizes[size]} />
              {showLabels && <span className="ml-2">Colors</span>}
            </button>
            
            {/* Color palette dropdown */}
            <AnimatePresence>
              {isPaletteOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 5 }}
                  transition={{ duration: 0.15 }}
                  className={`
                    absolute z-50 mt-2 p-2 rounded-lg shadow-lg bg-white dark:bg-slate-800
                    border border-slate-200 dark:border-slate-700
                    ${orientation === "horizontal" ? "left-0" : "top-0 left-full ml-2"}
                  `}
                >
                  <div className="grid grid-cols-5 gap-2">
                    {accentColors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => {
                          setAccentColor(color.name as any)
                          setIsPaletteOpen(false)
                        }}
                        aria-label={`${color.name} theme`}
                        className={`
                          w-6 h-6 rounded-full hover:scale-110 transition-transform
                          ${accentColor === color.name ? 'ring-2 ring-offset-2 ring-slate-900/10 dark:ring-white/20' : ''}
                        `}
                        style={{ backgroundColor: color.color }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}

// We need to import AnimatePresence here because we're using it inside the component
import { AnimatePresence } from "framer-motion"
