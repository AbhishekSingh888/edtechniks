"use client"

import { motion } from "framer-motion"
import { BookOpen, Code, Cpu, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import Image from "next/image"

const services = [
  {
    title: "E-Learning & Smart Class Solutions",
    description:
      "Transform traditional classrooms with modern digital tools that make learning more interactive, accessible, and effective.",
    icon: <BookOpen className="h-10 w-10 text-blue-600" />,
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
  },
  {
    title: "Software Solutions",
    description:
      "We build and deploy custom software that enhances productivity, enables communication, and ensures smooth operations.",
    icon: <Code className="h-10 w-10 text-teal-600" />,
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
  },
  {
    title: "Hardware Solutions",
    description:
      "From procurement to setup, we deliver quality IT hardware and robust technical support for all your infrastructure needs.",
    icon: <Cpu className="h-10 w-10 text-indigo-600" />,
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
  },
  {
    title: "Infrastructure Solutions",
    description:
      "Ensure uninterrupted tech operations with comprehensive infrastructure services, from cabling to annual maintenance.",
    icon: <Building className="h-10 w-10 text-purple-600" />,
    image:
      "https://images.pexels.com/photos/256658/pexels-photo-256658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: [
      "Annual Maintenance Contracts",
      "Networking (Wired/Wireless)",
      "Smart Class Repairs",
      "CCTV Installation",
      "Electrical Installations",
      "File & Backup Server Setup",
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 dark:bg-slate-900" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Comprehensive Technology Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            We provide end-to-end technology services tailored for educational institutions and enterprises.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 sm:grid-cols-1 md:grid-cols-3 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <Card className="group h-full overflow-hidden border-0 shadow-md hover:shadow-xl transition-all dark:bg-slate-800 rounded-xl">
                <div className="relative h-56 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute z- inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <CardHeader className="relative -mt-12 z-20 px-6 pt-6 pb-3 bg-white/95 dark:bg-slate-800/95 rounded-t-3xl">
                  <div className="flex justify-center mb-3">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                  <CardDescription className="mt-2 text-sm text-center text-slate-600 dark:text-slate-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="bg-white/95 dark:bg-slate-800/95 px-6 pb-6 pt-4">
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-sm text-slate-700 dark:text-slate-300"
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 12 }}
                      >
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
