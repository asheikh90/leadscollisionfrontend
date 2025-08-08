import React from 'react'
import { motion } from 'framer-motion'
import { PhoneMissed, FileX, UserX, MessageSquare, Calendar, CheckCircle, ArrowRight } from 'lucide-react'

const BeforeAfter = () => {
  const beforeItems = [
    { icon: PhoneMissed, text: "Missed calls" },
    { icon: FileX, text: "Stale CCC estimates" },
    { icon: UserX, text: "No-shows" }
  ]

  const afterItems = [
    { icon: MessageSquare, text: "Instant replies" },
    { icon: Calendar, text: "Booked calendar" },
    { icon: CheckCircle, text: "Confirmations & reactivations" }
  ]

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Before vs After
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 border-red-500/30"
          >
            <h3 className="text-2xl font-black text-red-400 mb-8 text-center">BEFORE</h3>
            <div className="space-y-6">
              {beforeItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-red-400" />
                  </div>
                  <span className="text-gray-300 font-semibold text-lg">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
          </motion.div>
          
          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 border-success-500/30"
          >
            <h3 className="text-2xl font-black text-success-400 mb-8 text-center">AFTER</h3>
            <div className="space-y-6">
              {afterItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-success-500/20 rounded-xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-success-400" />
                  </div>
                  <span className="text-gray-300 font-semibold text-lg">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
