import React from 'react'
import { motion } from 'framer-motion'
import { Target, MessageCircle, CheckCircle, Clock } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Target,
      title: "Capture",
      description: "Leads flow in from ads, SEO, forms, calls",
      color: "text-blue-400"
    },
    {
      icon: MessageCircle,
      title: "Engage",
      description: "AI responds instantly, quotes accurately",
      color: "text-accent-500"
    },
    {
      icon: CheckCircle,
      title: "Book",
      description: "Jobs land on your calendar, confirmed",
      color: "text-green-400"
    },
    {
      icon: Clock,
      title: "Confirm",
      description: "Day-before reminders, rebook no-shows",
      color: "text-purple-400"
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
            Four steps to turn every lead into a booked job
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-accent-500 via-green-400 to-purple-400 opacity-30"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="glass-panel p-8 mb-6 hover:scale-105 transition-transform">
                  <div className={`w-16 h-16 ${step.color.replace('text-', 'bg-')}/20 rounded-full flex items-center justify-center mx-auto mb-6 relative`}>
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                    <div className={`absolute inset-0 rounded-full ${step.color.replace('text-', 'bg-')}/10 animate-pulse`}></div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 font-medium">{step.description}</p>
                </div>
                
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-black text-sm">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
