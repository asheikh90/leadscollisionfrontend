import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Wrench, Search, Target, Users, Zap } from 'lucide-react'

const ComingSoon = () => {
  const features = [
    {
      icon: Shield,
      title: "Insurance Handling",
      description: "Carrier-aware follow-ups and automated document requests",
      status: "Q1 2024"
    },
    {
      icon: Wrench,
      title: "Parts Integration",
      description: "Real-time vendor checks and ETA updates",
      status: "Q1 2024"
    },
    {
      icon: Search,
      title: "SEO Automation",
      description: "Boost your local search rankings automatically",
      status: "Q2 2024"
    },
    {
      icon: Target,
      title: "Paid Ads Manager",
      description: "Optimize ad spend and track ROI by lead source",
      status: "Q2 2024"
    },
    {
      icon: Users,
      title: "Fleet Outreach",
      description: "Automated outreach to fleets and dealerships",
      status: "Q2 2024"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-r from-gray-900/50 to-blue-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-8 w-8 text-accent-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Coming Soon
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're building the complete AI toolkit for collision repair shops
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="bg-accent-500/20 text-accent-500 px-3 py-1 rounded-full text-sm font-medium">
                  {feature.status}
                </span>
              </div>
              
              <feature.icon className="h-12 w-12 text-primary-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-30"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              All Features Plug Into the Same AI Engine
            </h3>
            <p className="text-gray-300 mb-6">
              Every new tool learns from your shop's data and gets smarter together. 
              One system, unlimited possibilities.
            </p>
            <button className="btn-primary">
              Get Early Access
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ComingSoon
