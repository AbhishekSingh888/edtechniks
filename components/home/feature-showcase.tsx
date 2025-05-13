"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface Feature {
    title: string
    description: string
    icon: React.ReactNode
    image: string
    color: keyof typeof colorMap
}

const features: Feature[] = [
    {
        title: "Smart Classroom Solutions",
        description:
            "Transform traditional learning environments with interactive technology designed to engage students and simplify teaching.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
        ),
        image: "https://images.pexels.com/photos/5905555/pexels-photo-5905555.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "blue"
    },
    {
        title: "Learning Management System",
        description:
            "A comprehensive platform for course creation, content delivery, student assessment, and progress tracking.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
        ),
        image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "purple"
    },
    {
        title: "Enterprise Security",
        description:
            "Protect sensitive educational data with end-to-end encryption, secure authentication, and comprehensive threat monitoring.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
        ),
        image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "green"
    },
    {
        title: "AI-Powered Analytics",
        description:
            "Gain actionable insights with advanced analytics that help identify learning patterns and optimize educational outcomes.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
        ),
        image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "teal"
    }
]

const colorMap = {
    blue: {
        bgLight: "bg-blue-50",
        bgDark: "dark:bg-blue-900/20",
        hoverLight: "group-hover:bg-blue-100",
        hoverDark: "dark:group-hover:bg-blue-800/30",
        textLight: "text-blue-600",
        textDark: "dark:text-blue-400",
        borderLight: "border-blue-200",
        borderDark: "dark:border-blue-800",
        gradientFrom: "from-blue-600",
        gradientTo: "to-indigo-600"
    },
    purple: {
        bgLight: "bg-purple-50",
        bgDark: "dark:bg-purple-900/20",
        hoverLight: "group-hover:bg-purple-100",
        hoverDark: "dark:group-hover:bg-purple-800/30",
        textLight: "text-purple-600",
        textDark: "dark:text-purple-400",
        borderLight: "border-purple-200",
        borderDark: "dark:border-purple-800",
        gradientFrom: "from-purple-600",
        gradientTo: "to-pink-600"
    },
    green: {
        bgLight: "bg-green-50",
        bgDark: "dark:bg-green-900/20",
        hoverLight: "group-hover:bg-green-100",
        hoverDark: "dark:group-hover:bg-green-800/30",
        textLight: "text-green-600",
        textDark: "dark:text-green-400",
        borderLight: "border-green-200",
        borderDark: "dark:border-green-800",
        gradientFrom: "from-green-600",
        gradientTo: "to-teal-600"
    },
    teal: {
        bgLight: "bg-teal-50",
        bgDark: "dark:bg-teal-900/20",
        hoverLight: "group-hover:bg-teal-100",
        hoverDark: "dark:group-hover:bg-teal-800/30",
        textLight: "text-teal-600",
        textDark: "dark:text-teal-400",
        borderLight: "border-teal-200",
        borderDark: "dark:border-teal-800",
        gradientFrom: "from-teal-600",
        gradientTo: "to-cyan-600"
    }
}

export default function FeatureShowcase() {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.2 })
    const [activeFeature, setActiveFeature] = useState<number | null>(null)

    return (
        <section ref={containerRef} className="bg-white dark:bg-slate-900 py-24 overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        className="inline-block px-4 py-1.5 mb-5 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-blue-600 dark:text-blue-400 font-medium text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        Core Features
                    </motion.span>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            Innovative Solutions for Modern <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Education</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg">
                            Our ecosystem of products works seamlessly together to create transformative learning experiences.
                        </p>
                    </motion.div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:gap-8">
                    {features.map((feature, index) => {
                        const colors = colorMap[feature.color] as typeof colorMap[keyof typeof colorMap]
                        return (
                            <motion.div
                                key={feature.title}
                                className="group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                                onMouseEnter={() => setActiveFeature(index)}
                                onMouseLeave={() => setActiveFeature(null)}
                                whileHover={{ y: -5 }}
                            >
                                <div className={`h-full rounded-2xl border transition-all duration-300 overflow-hidden relative 
                                ${colors.borderLight} ${colors.borderDark}
                                group-hover:shadow-lg`}>
                                    {/* Feature content */}
                                    <div className="p-8 h-full flex flex-col">
                                        <div className={`rounded-xl p-3 inline-block mb-5 transition-colors duration-300
                                    ${colors.bgLight} ${colors.bgDark}
                                    ${colors.hoverLight} ${colors.hoverDark}`}>
                                            <div className={`${colors.textLight} ${colors.textDark}`}>
                                                {feature.icon}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                                            {feature.description}
                                        </p>

                                        {/* Learn more button with arrow */}
                                        <motion.div
                                            className="inline-flex items-center font-medium group-hover:translate-x-0.5 transition-transform duration-300"
                                            animate={activeFeature === index ? { x: 3 } : { x: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className={`${colors.textLight} ${colors.textDark}`}>Learn more</span>
                                            <ArrowUpRight className={`h-4 w-4 ml-1 ${colors.textLight} ${colors.textDark} 
                                               transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
                                        </motion.div>
                                    </div>

                                    {/* Animated highlight line */}
                                    <motion.div
                                        className={`h-1 bg-gradient-to-r absolute bottom-0 left-0 right-0 ${colors.gradientFrom} ${colors.gradientTo}`}
                                        initial={{ scaleX: 0, originX: 0 }}
                                        animate={activeFeature === index ? { scaleX: 1 } : { scaleX: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom CTA area */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium hover:shadow-lg transition-all hover:scale-105 active:scale-95">
                        Explore All Solutions
                    </button>
                </motion.div>
            </div>

            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -40, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
                />
            </div>
        </section>
    )
}
