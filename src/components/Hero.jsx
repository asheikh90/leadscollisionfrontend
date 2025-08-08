import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Phone } from 'lucide-react'
import FloatingChatWidget from './FloatingChatWidget'

const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-purple-900/95"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-500">Crash Leads</span><br />
              Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Cash Jobs</span><br />
              <span className="text-4xl md:text-5xl lg:text-6xl text-gray-300">— Automatically.</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-medium"
            >
              An AI that talks like your shop, quotes like your estimator, and books cars on your calendar. 
              It doesn't forget, ghost, or take lunch.
            </motion.p>
            
            {/* Proof Chips */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <div className="glass-panel px-4 py-2 text-success-400 font-bold">
                +37% on stale estimates
              </div>
              <div className="glass-panel px-4 py-2 text-primary-400 font-bold">
                2–5 more cars/week
              </div>
              <div className="glass-panel px-4 py-2 text-accent-400 font-bold">
                15 min setup
              </div>
            </motion.div>
            
            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 mb-6"
            >
              <button 
                onClick={scrollToDemo}
                className="btn-cta flex items-center space-x-3"
              >
                <MessageSquare className="h-6 w-6" />
                <span>Try the Live Chat Demo</span>
              </button>
              <button className="btn-secondary flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>Text Us: 267-212-1034</span>
              </button>
            </motion.div>
            
            {/* Data ownership line */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm text-gray-400 font-medium"
            >
              You own your data. We only make it work harder.
            </motion.p>
          </motion.div>
          
          {/* Right: Floating Chat Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <FloatingChatWidget />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
