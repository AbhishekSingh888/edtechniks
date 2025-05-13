"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/button"

// Updated navigation items with our new sections
const navItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Courses", href: "#courses" },
  { name: "Contact", href: "#contact" },
]

export default function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (href: string) => {
    try {
      if (href === "#home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
        return
      }

      const element = document.querySelector(href)
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    } catch (error) {
      console.error("Error scrolling to section:", error)
    }
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/90 py-3 shadow-md backdrop-blur-md dark:bg-slate-900/90" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-xl font-bold text-blue-600">Edtechniks</span>
        </motion.div>

        {/* Desktop Navigation - Redesigned with active indicators */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <motion.li key={item.name} className="relative">
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative py-2 px-1 ${
                    activeSection === item.href.substring(1) 
                      ? "text-blue-600 dark:text-blue-400" 
                      : "text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleSmoothScroll(item.href)
                  }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.span 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => {
              try {
                const contactSection = document.querySelector("#contact")
                if (contactSection) {
                  const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 80
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  })
                }
              } catch (error) {
                console.error("Error scrolling to contact section:", error)
              }
            }}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-md p-2 text-slate-700 dark:text-slate-200 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-md px-4 py-2 shadow-lg dark:bg-slate-800/95">
              <nav>
                <ul className="space-y-2 py-4">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href={item.href}
                        className={`block py-2 text-base font-medium ${
                          activeSection === item.href.substring(1) 
                            ? "text-blue-600 dark:text-blue-400" 
                            : "text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                        }`}
                        onClick={(e) => {
                          e.preventDefault()
                          setIsMobileMenuOpen(false)
                          setTimeout(() => {
                            handleSmoothScroll(item.href)
                          }, 300)
                        }}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                  <li>
                    <Button
                      className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => {
                        try {
                          setIsMobileMenuOpen(false)
                          setTimeout(() => {
                            const contactSection = document.querySelector("#contact")
                            if (contactSection) {
                              const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 80
                              window.scrollTo({
                                top: offsetTop,
                                behavior: "smooth",
                              })
                            }
                          }, 300)
                        } catch (error) {
                          console.error("Error scrolling to contact section:", error)
                        }
                      }}
                    >
                      Get Started
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
