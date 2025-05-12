"use client"

import { motion } from "framer-motion"
import { BookOpen, Code, Cpu, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import Image from "next/image"
import { section } from "framer-motion/client"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "E-Learning & Smart Class Solutions",
    description:
      "Comprehensive digital learning environments that transform traditional classrooms into interactive learning spaces.",
    icon: <BookOpen className="h-10 w-10 text-blue-600" />,
    image: "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      "Custom software solutions designed to streamline operations and enhance productivity for educational institutions and businesses.",
    icon: <Code className="h-10 w-10 text-teal-600" />,
    image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    features: [
      "Website Development",
      "School ERP",
      "SMS Module",
      "Windows/MS Office/Antivirus Setup",
      "Corporate Email ID",
      "Data Recovery",
      "Tally Server with Networking",
    ],
  },
  {
    title: "Hardware Solutions",
    description:
      "High-quality hardware products and installation services to meet all your technological requirements.",
    icon: <Cpu className="h-10 w-10 text-indigo-600" />,
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: [
      "Projectors & Smart Boards",
      "Interactive Flat Panels",
      "Servers, Desktops & Laptops",
      "Printers & Billing Machines",
      "CCTV Surveillance",
      "Video Door Phones",
      "Public Announcement Systems",
      "EPABX (Intercom)",
      "Biometric & Visitor Management",
    ],
  },
  {
    title: "Infrastructure Solutions",
    description:
      "End-to-end infrastructure services to ensure your technology investments remain operational and efficient.",
    icon: <Building className="h-10 w-10 text-purple-600" />,
    image: "https://images.pexels.com/photos/256658/pexels-photo-256658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: [
      "Annual Maintenance Contract (AMC)",
      "Smart Class Repair",
      "CCTV Installation",
      "Networking (Wired & Wireless)",
      "Electrical Installation",
      "File & Backup Server",
    ],
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 dark:bg-slate-900" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Comprehensive Technology Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            We provide end-to-end technology services tailored for educational institutions and businesses
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <Card className="group h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-slate-800">
                <div className="relative h-58 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
                </div>

                <CardHeader className="pb-2 relative z-10 -mt-10 bg-white/95 dark:bg-slate-800/95 rounded-t-3xl pt-8 px-6">
                  <motion.div
                    className="mb-4 flex justify-center"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1, transition: { duration: 0.5 } }}
                  >
                   
                  </motion.div>
                  <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                  <CardDescription className="text-base text-slate-600 dark:text-slate-300 text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="bg-white/95 dark:bg-slate-800/95 px-6 pb-6 pt-2">
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <motion.li
                        key={feature}
                        className="flex items-center"
                        whileHover={{ x: 5, color: "#3b82f6" }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
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
