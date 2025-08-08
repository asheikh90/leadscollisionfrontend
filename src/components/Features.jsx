import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, RefreshCw, Calendar, Wrench, Shield, Zap } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Chatbot That Sounds Like You",
      description: "Learns your tone, handles objections, never gets tired.",
      color: "text-blue-400"
    },
    {
      icon: RefreshCw,
      title: "CCC Re-Activator",
      description: "Finds old estimates and re-engages until yes/no.",
      color: "text-green-400"
    },
    {
      icon: Calendar,
      title: "Calendar, Not Chaos",
      description: "Books, confirms day-before, rebooks no-shows.",
      color: "text-purple-400"
    },
    {
      icon: Wrench,
      title: "Parts + Insurance (Coming Soon)",
      description: "Carrier-aware asks & vendor ETAs baked in.",
      color: "text-accent-500"
    },
    {
      icon: Shield,
      title: "Your Data Stays Yours",
      description: "Full ownership; anonymized trends sharpen the tool weekly.",
      color: "text-red-400"
    },
    {
      icon: Zap,
      title: "15-Minute Setup",
      description: "Connect your systems and start booking more jobs instantly.",
      color: "text-yellow-400"
    }
  ]

  return (
    <section id="features" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Features That <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-500">Actually Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
            Built by collision pros, for collision pros. No fluff, just results.
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
              className="glass-panel p-8 hover:scale-105 hover:bg-white/10 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className={`h-12 w-12 ${feature.color} mb-6 group-hover:scale-110 transition-transform`} />
              </motion.div>
              <h3 className="text-xl font-black text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
