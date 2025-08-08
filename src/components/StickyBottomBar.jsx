import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Calendar, Phone } from 'lucide-react'

const StickyBottomBar = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 justify-center items-center">
        <button 
          onClick={scrollToDemo}
          className="btn-cta flex items-center space-x-2 w-full sm:w-auto"
        >
          <MessageSquare className="h-5 w-5" />
          <span>Try Live Demo</span>
        </button>
        <button className="btn-secondary flex items-center space-x-2 w-full sm:w-auto">
          <Calendar className="h-5 w-5" />
          <span>Book A Call</span>
        </button>
        <button className="btn-secondary flex items-center space-x-2 w-full sm:w-auto">
          <Phone className="h-5 w-5" />
          <span>Text 267-212-1034</span>
        </button>
      </div>
    </motion.div>
  )
}

export default StickyBottomBar
