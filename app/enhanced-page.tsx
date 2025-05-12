"use client"

import { useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

// Import our new components
import ParallaxHero from "../components/home/parallax-hero"
import StickyShowcase from "../components/home/sticky-showcase"
import EnhancedTestimonials from "../components/home/enhanced-testimonials"
import AppleStatsSection from "../components/home/apple-stats-section"
import AppleFeatureShowcase from "../components/home/apple-feature-showcase"

// Import existing components
import ContactSection from "../components/home/contact-section"
import WhyChooseUsSection from "../components/home/why-choose-us"
import CtaSection from "../components/home/cta-section"

// Scroll progress indicator component
function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 z-50 origin-left"
      style={{ scaleX }}
    />
  )
}

export default function Home() {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        const href = target?.getAttribute?.('href');

        if (href?.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href) as HTMLElement | null;
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => document.removeEventListener('click', handleLinkClick);
  }, [])
  
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Enhanced scroll progress indicator */}
      <ScrollProgressIndicator />
      
      {/* Our new parallax hero section */}
      <section id="home">
        <ParallaxHero />
      </section>
      
      {/* Apple-style feature showcase */}
      <section id="features">
        <AppleFeatureShowcase />
      </section>
      
      {/* 3D sticky product showcase */}
      <section id="products">
        <StickyShowcase />
      </section>
      
      {/* Why Choose Us section (existing) */}
      <section id="why-choose-us">
        <WhyChooseUsSection />
      </section>
      
      {/* Apple-style stats section */}
      <section id="stats">
        <AppleStatsSection />
      </section>
      
      {/* Enhanced testimonials */}
      <section id="testimonials">
        <EnhancedTestimonials />
      </section>
      
      {/* Call to action section (existing) */}
      <section id="cta">
        <CtaSection />
      </section>
      
      {/* Contact section (existing) */}
      <section id="contact">
        <ContactSection />
      </section>
    </motion.main>
  );
}
