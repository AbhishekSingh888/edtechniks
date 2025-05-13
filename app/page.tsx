"use client"

import { useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

import ParallaxHero from "../components/home/parallax-hero"
import EnhancedTestimonials from "../components/home/testimonial"
import FeaturedCoursesSection from "../components/home/featured-courses-section"
import ContactSection from "../components/home/contact-section"
import WhyChooseUsSection from "../components/home/why-choose-us"
import CtaSection from "../components/home/cta-section"
import ServicesSection from "../components/home/service-section"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import FeatureShowcase from "../components/home/feature-showcase"
import StatsSection from "../components/home/stats-section"

export default function Home() {
  useEffect(() => {
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;

      const anchorElement = target.tagName === 'A'
        ? target as HTMLAnchorElement
        : target.closest('a');

      if (!anchorElement) return;

      const href = anchorElement.getAttribute('href');

      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href) as HTMLElement;

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
      <ScrollProgress />

      <section id="home">
        <ParallaxHero />
      </section>

      <section id="features">
        <FeatureShowcase />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="why-choose-us">
        <WhyChooseUsSection />
      </section>
      <section id="stats">
        <StatsSection />
      </section>

      <section id="courses">
        <FeaturedCoursesSection />
      </section>

      <section id="testimonials">
        <EnhancedTestimonials />
      </section>

     
      <section id="cta">
        <CtaSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </motion.main>
  );
}
