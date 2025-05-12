"use client"

import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
import { PhoneCall, Mail } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-teal-500 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Technology Infrastructure?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Contact us today for a free consultation and discover how our solutions can benefit your institution or
            business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {/* <Button size="lg" variant="secondary" className="w-full sm:w-auto relative overflow-hidden group">
                <span className="absolute inset-0 w-0 bg-blue-600/20 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  <span>Schedule a Call</span>
                </span>
              </Button> */}
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {/* <Button
                size="lg"
                variant="outline"
                className="w-full border-white text-white hover:bg-white/10 sm:w-auto group"
              >
                <Mail className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                Request Information
              </Button> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
