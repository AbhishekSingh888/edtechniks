"use client"

import { motion } from "framer-motion"
import { BookOpen, Code, Cpu, Building } from "lucide-react"
import { Card } from "../ui/card"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "E-Learning & Smart Class Solutions",
    description:
      "Comprehensive digital learning environments that transform traditional classrooms into interactive learning spaces.",
    icon: <BookOpen className="h-10 w-10 text-blue-600" />,
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-slate-800">
                {/* <CardHeader className="pb-2">
                  <motion.div
                    className="mb-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base text-slate-600 dark:text-slate-300">
                    {service.description}
                  </CardDescription>
                </CardHeader> */}
                {/* <CardContent> */}
                {/* <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent> */}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  )
}
