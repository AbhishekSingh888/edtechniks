"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, X } from "lucide-react"
import LazyLoadSection from "../ui/lazy-load-section"
import MagneticButton from "../ui/magnetic-button"

// Feature comparison data
const comparisonData = {
  categories: ["Learning Management", "Interactive Content", "Analytics", "Security", "Support"],
  products: [
    {
      name: "EdTechniks",
      isOurs: true,
      description: "Our complete educational technology solution",
      features: [
        { name: "Adaptive Learning Paths", included: true },
        { name: "Interactive Simulations", included: true },
        { name: "Real-time Student Analytics", included: true },
        { name: "Enterprise-grade Security", included: true },
        { name: "24/7 Priority Support", included: true },
      ],
    },
    {
      name: "Basic LMS",
      isOurs: false,
      description: "Standard learning management system",
      features: [
        { name: "Fixed Learning Paths", included: true },
        { name: "Static Content Only", included: false },
        { name: "Basic Analytics", included: true },
        { name: "Standard Security", included: true },
        { name: "Email Support", included: true },
      ],
    },
    {
      name: "Legacy Systems",
      isOurs: false,
      description: "Older educational software solutions",
      features: [
        { name: "Limited Customization", included: false },
        { name: "PDF Documents Only", included: false },
        { name: "Monthly Reports", included: true },
        { name: "Basic Protection", included: true },
        { name: "Business Hours Support", included: false },
      ],
    },
  ],
  featureDetails: [
    {
      category: "Learning Management",
      description: "Our adaptive learning paths adjust to each student's learning pace and style, providing a personalized experience that improves engagement and outcomes."
    },
    {
      category: "Interactive Content",
      description: "Interactive simulations and content bring abstract concepts to life, allowing students to explore and learn through engaging hands-on experiences."
    },
    {
      category: "Analytics",
      description: "Comprehensive real-time analytics help teachers identify struggling students early and provide targeted interventions when they're most effective."
    },
    {
      category: "Security",
      description: "Enterprise-grade security ensures student data remains protected with encryption, regular security audits, and compliance with all privacy regulations."
    },
    {
      category: "Support",
      description: "24/7 priority support means you'll never be left waiting when you need assistance with your educational technology implementation."
    }
  ]
};

export default function FeatureComparisonSection() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  // Handle feature row click to show details on mobile
  const handleFeatureClick = (category: string) => {
    if (selectedFeature === category) {
      setSelectedFeature(null)
    } else {
      setSelectedFeature(category)
    }
  }
  
  // Find the details for the selected feature
  const selectedFeatureDetails = comparisonData.featureDetails.find(
    (detail) => detail.category === selectedFeature
  )

  return (
    <LazyLoadSection
      id="comparison"
      className="relative py-20 overflow-hidden bg-slate-50 dark:bg-slate-900/50"
      animation="fade"
      threshold={0.1}
    >
      <div ref={sectionRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            How We <span style={{ color: 'var(--accent-color)' }}>Compare</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            See why EdTechniks delivers superior value compared to traditional educational technology solutions
          </motion.p>
        </div>
        
        {/* Comparison table - desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Table header */}
              <thead>
                <tr className="bg-white dark:bg-slate-800">
                  <th className="p-4 text-left text-slate-500 dark:text-slate-400 font-medium border-b border-slate-200 dark:border-slate-700">
                    Features
                  </th>
                  
                  {comparisonData.products.map((product, index) => (
                    <th 
                      key={index} 
                      className={`p-4 text-left border-b border-slate-200 dark:border-slate-700
                        ${product.isOurs ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-white dark:bg-slate-800'}
                      `}
                    >
                      <div className="flex flex-col">
                        <span className={`font-bold text-lg ${product.isOurs ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
                          {product.name}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {product.description}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              
              {/* Table body */}
              <tbody>
                {comparisonData.categories.map((category, categoryIndex) => {
                  // Find the feature details for this category
                  const details = comparisonData.featureDetails.find(d => d.category === category);
                  
                  return (
                    <tr 
                      key={categoryIndex}
                      className={categoryIndex % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-800/50'}
                    >
                      <td className="p-4 border-b border-slate-200 dark:border-slate-700">
                        <div className="flex flex-col">
                          <span className="font-medium text-slate-900 dark:text-white">{category}</span>
                          <span className="text-sm text-slate-500 dark:text-slate-400 hidden lg:block mt-1">
                            {details?.description.substring(0, 60)}...
                          </span>
                        </div>
                      </td>
                      
                      {comparisonData.products.map((product, productIndex) => {
                        const feature = product.features[categoryIndex];
                        
                        return (
                          <td 
                            key={productIndex} 
                            className={`p-4 border-b border-slate-200 dark:border-slate-700
                              ${product.isOurs ? 'bg-blue-50 dark:bg-blue-900/20' : ''}
                            `}
                          >
                            <div className="flex items-center">
                              {feature.included ? (
                                <>
                                  <Check className={`h-5 w-5 ${product.isOurs ? 'text-blue-600 dark:text-blue-400' : 'text-green-500'}`} />
                                  <span className="ml-2 text-sm font-medium">
                                    {feature.name}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <X className="h-5 w-5 text-slate-400" />
                                  <span className="ml-2 text-sm text-slate-400">
                                    Not Available
                                  </span>
                                </>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
        
        {/* Mobile-optimized comparison */}
        <div className="lg:hidden space-y-8">
          {comparisonData.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className={`
                rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden
                ${selectedFeature === category ? 'shadow-lg ring-2 ring-[var(--accent-color-light)]' : 'shadow'}
              `}
              onClick={() => handleFeatureClick(category)}
            >
              <div className="p-4 bg-white dark:bg-slate-800 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {category}
                  </h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transition-transform ${selectedFeature === category ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Feature details expansion */}
              {selectedFeature === category && (
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    {comparisonData.featureDetails.find(d => d.category === category)?.description}
                  </p>
                  
                  <div className="space-y-3">
                    {comparisonData.products.map((product, productIndex) => (
                      <div 
                        key={productIndex}
                        className={`
                          p-3 rounded-lg flex items-center justify-between
                          ${product.isOurs 
                            ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30' 
                            : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
                          }
                        `}
                      >
                        <span className={`
                          font-medium
                          ${product.isOurs ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-white'}
                        `}>
                          {product.name}
                        </span>
                        
                        {product.features[index].included ? (
                          <Check className={`h-5 w-5 ${product.isOurs ? 'text-blue-600 dark:text-blue-400' : 'text-green-500'}`} />
                        ) : (
                          <X className="h-5 w-5 text-slate-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="space-x-4">
            <MagneticButton
              size="lg"
              variant="primary"
              className="px-8 py-3 font-semibold"
             
            >
              Get Started Today
            </MagneticButton>
            
            <MagneticButton
              size="lg"
              variant="outline"
              className="px-8 py-3 font-semibold"
            >
              Learn More
            </MagneticButton>
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-slate-800 dark:to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-800 dark:to-transparent"></div>
    </LazyLoadSection>
  )
}
