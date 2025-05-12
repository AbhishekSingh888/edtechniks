"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Jennifer Lewis",
    role: "Principal, Westwood Academy",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&w=150&h=150&fit=crop",
    content: "EdTechniks has transformed how we deliver education. Their smart classroom solutions have significantly improved student engagement and learning outcomes.",
  },
  {
    name: "Prof. Michael Chen",
    role: "IT Director, Riverside College",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&w=150&h=150&fit=crop",
    content: "The technical support and training provided by EdTechniks has been exceptional. Our faculty adapted quickly to the new systems, enhancing both teaching and administrative efficiency.",
  },
  {
    name: "Mrs. Sarah Johnson",
    role: "Head Teacher, Oakridge School",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&w=150&h=150&fit=crop",
    content: "Implementing EdTechniks' solutions has been seamless. They understand the unique challenges of educational institutions and provide tailored technology that works for our needs.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Trusted by Leading Educational Institutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          >
            Discover how we've helped schools and colleges enhance their educational technology
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800"
            >
              <div className="absolute -top-4 left-6 text-blue-500 dark:text-blue-400">
                <Quote size={32} className="rotate-180" />
              </div>
              <div className="pt-4">
                <p className="text-slate-700 dark:text-slate-300">{testimonial.content}</p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-slate-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
