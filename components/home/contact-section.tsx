"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="bg-white py-24 dark:bg-slate-800" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Have questions about our EdTech solutions? Contact us for a personalized consultation.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-slate-50 p-8 shadow-lg dark:bg-slate-700"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Send us a message</h3>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Institution Name
                </label>
                <input
                  type="text"
                  id="institution"
                  className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between space-y-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-lg"
          >
            <div>
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="mt-2 text-blue-100">
                Reach out to us directly or visit our office for a demonstration of our EdTech solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="mr-4 h-6 w-6 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="mt-1 text-blue-100">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-4 h-6 w-6 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="mt-1 text-blue-100">contact@edtechniks.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-4 h-6 w-6 flex-shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="mt-1 text-blue-100">
                    1234 Innovation Drive<br />
                    Tech Park, Suite 500<br />
                    Education Valley, CA 94123
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
              <p className="text-center">
                Schedule a free consultation and demo for your institution today!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
