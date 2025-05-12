"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const [isNavigating, setIsNavigating] = useState(false)
  
  // Initial page load transition
  useEffect(() => {
    // Add a slight delay to make the transition visible
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    
    return () => clearTimeout(timer)
  }, [])
  
  // Route change transition
  useEffect(() => {
    if (!isLoading) {
      setIsNavigating(true)
      const timer = setTimeout(() => {
        setIsNavigating(false)
      }, 500)
      
      return () => clearTimeout(timer)
    }
  }, [pathname, isLoading])
  
  return (
    <>
      {/* Initial page load animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-slate-900 z-[9999] flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: {
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1]
              } 
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex flex-col items-center"
            >
              <motion.div 
                className="w-16 h-16 mb-6 relative"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 2,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <div className="absolute inset-0 rounded-full border-t-4" style={{ borderColor: 'var(--accent-color)' }}></div>
                <div className="absolute inset-0 rounded-full border-r-4 border-opacity-40" style={{ borderColor: 'var(--accent-color)' }}></div>
                <div className="absolute inset-0 rounded-full border-b-4 border-opacity-60" style={{ borderColor: 'var(--accent-color)' }}></div>
              </motion.div>
              
              <motion.span
                className="text-slate-900 dark:text-white text-2xl font-bold tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{ color: 'var(--accent-color)' }}
              >
                Edtechniks
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Page navigation transition */}
      <AnimatePresence mode="wait">
        {isNavigating && !isLoading && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-slate-200 dark:bg-slate-700 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="h-full"
              style={{ backgroundColor: 'var(--accent-color)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
