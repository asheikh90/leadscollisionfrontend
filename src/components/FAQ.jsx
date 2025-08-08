import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Can I approve messages first?",
      answer: "Yes, manual review is default. You can review every message before it goes out, or switch to auto-mode once you're comfortable with how it sounds."
    },
    {
      question: "Will it spam my customers?",
      answer: "No. Human pacing, opt-out ready. LeadBrain follows up professionally with realistic timing and always includes easy opt-out options."
    },
    {
      question: "Does it work for fleets and insurance?",
      answer: "Yes. Fleet handling works today; deeper insurance integration and parts management are coming Q1 2024."
    },
    {
      question: "Do I need CCC access now?",
      answer: "No! LeadBrain works with any estimate format. We can pull data from CCC, Mitchell, Audatex, or even handwritten estimates."
    },
    {
      question: "What if I already have a CRM?",
      answer: "LeadBrain integrates with most CRMs or works alongside them. We sync lead data and booking information so nothing falls through the cracks."
    },
    {
      question: "How fast can I get started?",
      answer: "Under 15 minutes. Connect your phone, calendar, and estimate system. The AI starts learning your style immediately."
    }
  ]

  return (
    <section className="section-padding bg-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            FAQ
          </h2>
          <p className="text-xl text-gray-300 font-semibold">
            Everything you need to know about LeadBrain Collision
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-black text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
