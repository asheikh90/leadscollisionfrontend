import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Calendar, ArrowRight } from 'lucide-react'

const FinalCTA = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-panel p-16 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-accent-500"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
                Stop Chasing.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-500">
                  Start Booking.
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-semibold">
                Join collision shops booking 2-5 more jobs per week without lifting a finger. 
                Your leads are waiting.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <motion.button 
                  onClick={scrollToDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-cta flex items-center space-x-3 text-xl px-12 py-6"
                >
                  <MessageSquare className="h-6 w-6" />
                  <span>Try Live Demo</span>
                  <ArrowRight className="h-6 w-6" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center space-x-3 text-xl px-12 py-6"
                >
                  <Calendar className="h-6 w-6" />
                  <span>Book a Call</span>
                </motion.button>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 font-semibold">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success-400 rounded-full"></div>
                  <span>15-minute setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success-400 rounded-full"></div>
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success-400 rounded-full"></div>
                  <span>Your data stays yours</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA
