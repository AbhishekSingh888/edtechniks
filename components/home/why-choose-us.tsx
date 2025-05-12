"use client"

import { motion } from "framer-motion"
import { Award, Clock, Users, Shield, Headphones } from "lucide-react"

const reasons = [
  {
    title: "Expertise & Experience",
    description:
      "With over 15 years of experience, our team of certified professionals delivers solutions that meet the highest industry standards.",
    icon: <Award className="h-12 w-12 text-blue-600" />,
  },
  {
    title: "End-to-End Solutions",
    description:
      "From consultation to implementation and maintenance, we provide comprehensive services tailored to your specific requirements.",
    icon: <Clock className="h-12 w-12 text-blue-600" />,
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We prioritize your needs and work closely with you to ensure our solutions align perfectly with your goals and objectives.",
    icon: <Users className="h-12 w-12 text-blue-600" />,
  },
  {
    title: "Quality Assurance",
    description:
      "We partner with leading technology providers to ensure you receive only the highest quality products and services.",
    icon: <Shield className="h-12 w-12 text-blue-600" />,
  },
  {
    title: "Dedicated Support",
    description:
      "Our responsive support team is available to address any issues promptly, minimizing downtime and ensuring smooth operations.",
    icon: <Headphones className="h-12 w-12 text-blue-600" />,
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-800" id="why-choose-us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Trusted by hundreds of educational institutions and businesses across the region
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 10 } }}
              className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl dark:bg-slate-900"
            >
              <motion.div
                className="mb-4 rounded-full bg-blue-50 p-3 dark:bg-blue-900/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {reason.icon}
              </motion.div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">{reason.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
