"use client"

import { motion } from "framer-motion"
import { BookOpen, Code, Cpu, Building, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "E-Learning & Smart Class",
    description:
      "Transform classrooms with interactive digital tools",
    icon: <BookOpen className="h-8 w-8 text-white" />,
    image:
      "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: [
      "Smart Class Setup",
      "Computer Lab Setup",
      "English Language Lab",
      "Virtual Classroom",
      "Video Conferencing",
      "Digital Content",
      "E-tab Solutions",
      "Robotics Lab",
    ],
    accentColor: "bg-blue-600",
    textColor: "text-blue-600",
    category: "E-Learning"
  },
  {
    title: "Software Solutions",
    description:
      "Custom software for enhanced productivity and communication",
    icon: <Code className="h-8 w-8 text-white" />,
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    features: [
      "Website Development",
      "School ERP",
      "SMS Module",
      "Windows/MS Office Setup",
      "Corporate Email ID",
      "Data Recovery",
      "Tally Server Networking",
    ],
    accentColor: "bg-teal-600",
    textColor: "text-teal-600",
    category: "Software"
  },
  {
    title: "Hardware Solutions",
    description:
      "Quality IT hardware with robust technical support",
    icon: <Cpu className="h-8 w-8 text-white" />,
    image:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: [
      "Smart Boards & Projectors",
      "Interactive Flat Panels",
      "Servers, Desktops, Laptops",
      "Printers & Billing Machines",
      "CCTV Systems",
      "Public Announcement Systems",
      "Biometric Access Control",
    ],
    accentColor: "bg-indigo-600",
    textColor: "text-indigo-600",
    category: "Hardware"
  },
  {
    title: "Infrastructure Solutions",
    description:
      "Comprehensive services for uninterrupted operations",
    icon: <Building className="h-8 w-8 text-white" />,
    image:
      "https://images.pexels.com/photos/256542/pexels-photo-256542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: [
      "Annual Maintenance Contracts",
      "Networking (Wired/Wireless)",
      "Smart Class Repairs",
      "CCTV Installation",
      "Electrical Installations",
      "File & Backup Server Setup",
    ],
    accentColor: "bg-purple-600",
    textColor: "text-purple-600",
    category: "Infrastructure"
  },
]

const categories = ["All", "E-Learning", "Software", "Hardware", "Infrastructure"]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemFade = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function ServicesSection() {


  return (
    <section className="bg-gradient-to-b from-slate-50 to-white  dark:from-slate-900 dark:to-slate-800" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center justify-center mb-6 rounded-full bg-blue-50 px-3 py-1 dark:bg-blue-900/30">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-300">Our Services</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Comprehensive Technology Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            End-to-end technology services tailored for educational institutions and enterprises
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mt-10 space-x-2 overflow-x-auto pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >

        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemFade}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 10 } }}
            >
              <div className={cn(
                "h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all dark:bg-slate-800/80 rounded-xl",
                "border-t-4",
                service.category === "E-Learning" ? "border-blue-600" :
                  service.category === "Software" ? "border-teal-600" :
                    service.category === "Hardware" ? "border-indigo-600" : "border-purple-600"
              )}>
                <div className="relative h-44 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10"></div>
                  <div className="absolute top-4 left-4">
                    <div className={cn("p-2 rounded-full", service.accentColor)}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-sm text-slate-200 mt-1 line-clamp-2">{service.description}</p>
                  </div>
                </div>

                <CardContent className="bg-white dark:bg-slate-800 p-5">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {service.features.map((feature) => (
                      <motion.div
                        key={feature}
                        className="flex items-start gap-1.5"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 12 }}
                      >
                        <CheckCircle2 className={cn("h-4 w-4 mt-0.5 shrink-0", service.textColor)} />
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
