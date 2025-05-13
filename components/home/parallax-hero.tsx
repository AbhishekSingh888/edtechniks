"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"
import MagneticButton from "../ui/magnetic-button"
import FloatingImage from "../ui/floating-image"

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

export default function ParallaxHero() {
    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    // Enhanced spring animation settings
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 45,
        damping: 25,
        restDelta: 0.0004,
        mass: 1.3
    })

    // Refined parallax effects
    const y1 = useParallax(smoothProgress, -45)
    const y2 = useParallax(smoothProgress, -5)
    const rotate = useTransform(smoothProgress, [0, 1], [0, -4])
    const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.96])
    const opacity = useTransform(smoothProgress, [0, 0.85], [1, 0])
    const backgroundY = useTransform(smoothProgress, [0, 1], [0, -35])

    return (
        <div
            ref={ref}
            className="relative overflow-hidden min-h-[110vh] bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950"
        >
            {/* Enhanced background elements */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 bg-[url('/grid.svg')] opacity-25 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
            />

            {/* Decorative elements */}
            <div className="absolute top-32 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-10 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex min-h-[90vh] items-center justify-center">
                <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-10 md:gap-16 mx-auto max-w-7xl">
                    <motion.div
                        style={{ opacity, y: y1, scale }}
                        className="flex flex-col space-y-7 z-10"
                    >
                        <div className="space-y-5">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                className="flex items-center space-x-2 mb-4"
                            >
                                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                                <span className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                                    <Sparkles className="h-4 w-4" />
                                    Cutting-edge technology
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl leading-tight"
                            >
                                Transform your{" "}
                                <span className="relative">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 relative z-10">
                                        education technology
                                    </span>
                                    <motion.span
                                        className="absolute -bottom-1 left-0 w-full h-3 bg-blue-200/30 dark:bg-blue-900/30 rounded-sm -z-10"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                                    />
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                className="max-w-xl text-lg text-slate-600 dark:text-slate-300"
                            >
                                Comprehensive EdTech solutions that enhance teaching, learning, and administration for modern educational institutions.
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                                    className="block w-full h-[1px] bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-700 dark:to-transparent mt-4"
                                />
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                        >
                            <motion.div
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            >
                                <MagneticButton variant="gradient" size="md" magneticIntensity={0.3}>
                                    Get Started
                                    <motion.span
                                        animate={{ x: isHovered ? 5 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="ml-2"
                                    >
                                        <ArrowRight className="h-5 w-5" />
                                    </motion.span>
                                </MagneticButton>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            >
                                <MagneticButton variant="outline" size="md" magneticIntensity={0.2}>
                                    Learn More
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </MagneticButton>
                            </motion.div>
                        </motion.div>

                        {/* Enhanced feature tags */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                            className="flex flex-wrap gap-3 mt-6"
                        >
                            {[
                                { name: "Smart Classes", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
                                { name: "Software Solutions", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
                                { name: "Hardware", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300" },
                                { name: "Infrastructure", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" }
                            ].map((item, index) => (
                                <motion.span
                                    key={item.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className={`px-3 py-1 text-xs rounded-full font-medium ${item.color} backdrop-blur-sm`}
                                >
                                    {item.name}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Enhanced image section */}
                    <motion.div
                        style={{ y: y2, rotate, scale }}
                        className="relative mx-auto h-[380px] w-full max-w-md md:h-[480px] lg:h-[520px] z-10"
                    >
                        <div className="absolute -right-4 top-1/4 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-20 dark:from-blue-900 dark:to-purple-900 dark:opacity-10 blur-md"></div>

                        <div className="relative h-full w-full rounded-2xl bg-white p-4 shadow-xl dark:bg-slate-800/90 backdrop-blur-sm border border-slate-100 dark:border-slate-700">
                            <FloatingImage
                                src="https://images.pexels.com/photos/5905555/pexels-photo-5905555.jpeg?auto=compress&w=500&h=500&fit=crop"
                                alt="Modern classroom with education technology"
                                width={500}
                                height={500}
                                className="h-full w-full rounded-xl"
                                rotationFactor={5}
                                translateFactor={8}
                            />

                            {/* Redesigned decorative dots */}
                            <div className="absolute -right-8 -bottom-8 w-28 h-28 opacity-60 z-10">
                                <div className="grid grid-cols-3 gap-2.5">
                                    {Array(9).fill(0).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                delay: 0.8 + (i * 0.05),
                                                duration: 0.35,
                                                type: "spring",
                                                stiffness: 100
                                            }}
                                            className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Enhanced floating badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                            className="absolute -right-8 top-12 bg-white dark:bg-slate-800 rounded-lg px-4 py-3 shadow-lg border border-slate-100 dark:border-slate-700"
                        >
                            <div className="flex items-center gap-2.5">
                                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse ring-2 ring-green-500/20" />
                                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">Real-time Collaboration</span>
                            </div>
                        </motion.div>

                        {/* Enhanced statistics badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                            className="absolute -left-10 bottom-24 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-100 dark:border-slate-700"
                        >
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">500+</span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">Happy Clients</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute left-1/2 bottom-10 -translate-x-1/2"
            >
                <div className="flex flex-col items-center">
                    <span className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">Scroll to discover</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.2 }}
                        className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center pt-1.5"
                    >
                        <motion.div
                            animate={{ height: [5, 10, 5] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.2 }}
                            className="w-1.5 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}