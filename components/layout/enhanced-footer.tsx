"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"
import MagneticButton from "../ui/magnetic-button"

// Array of quick links
const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Products", href: "#products" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

// Services offered
const services = [
  { name: "Software Solutions", href: "#services" },
  { name: "Hardware Solutions", href: "#services" },
  { name: "Infrastructure", href: "#services" },
  { name: "Training & Support", href: "#services" },
  { name: "Annual Maintenance", href: "#services" },
]

export default function EnhancedFooter() {
  const [emailHovered, setEmailHovered] = useState(false)
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  // Function for smooth scroll
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
    <footer className="relative bg-slate-900 text-white overflow-hidden" ref={footerRef}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          initial={{ opacity: 0.05 }}
          animate={{ opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600"
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      </div>
      
      {/* Main footer content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Column 1: Company & Social */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-lg font-bold">E</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Edtechniks</span>
              </div>
              <p className="text-slate-300 max-w-xs">
                Empowering education through innovative technology solutions, enhancing the teaching and learning experience.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: <Facebook size={18} />, href: "#" },
                  { icon: <Twitter size={18} />, href: "#" },
                  { icon: <Instagram size={18} />, href: "#" },
                  { icon: <Linkedin size={18} />, href: "#" },
                  { icon: <Github size={18} />, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-blue-600 hover:text-white"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleSmoothScroll(link.href)
                    }}
                    className="text-slate-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 rounded-full bg-blue-500 mr-2"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 3: Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleSmoothScroll(service.href)
                    }}
                    className="text-slate-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 rounded-full bg-purple-500 mr-2"></span>
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 4: Contact Us */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-300">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-blue-500" />
                <span>123 Education Lane, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Phone size={18} className="flex-shrink-0 text-blue-500" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Mail size={18} className="flex-shrink-0 text-blue-500" />
                <span>contact@edtechniks.com</span>
              </li>
            </ul>
            
            {/* Newsletter Subscription */}
            <div className="mt-4 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Subscribe to Our Newsletter
              </h4>
              <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-md border-none bg-slate-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-500"
                />
                <MagneticButton 
                  variant="primary" 
                  size="sm" 
                  className="sm:w-auto"
                  magneticIntensity={0.3}
                >
                  Subscribe
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom Section with divider and copyright */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 border-t border-slate-800 pt-8 text-center"
        >
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Edtechniks. All rights reserved. 
            <span className="block sm:inline sm:ml-2">
              Designed with innovation for modern education.
            </span>
          </p>
          
          {/* Apple-inspired floating links */}
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}