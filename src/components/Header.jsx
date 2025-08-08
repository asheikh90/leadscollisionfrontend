import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-panel-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-accent-500" />
            <span className="text-xl font-black text-white">LeadBrain Collision</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#demo" className="text-gray-300 hover:text-white transition-colors font-semibold">Live Demo</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors font-semibold">Features</a>
            <a href="#results" className="text-gray-300 hover:text-white transition-colors font-semibold">Results</a>
          </nav>
          
          <div className="hidden md:flex space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors font-semibold">Login</button>
            <button className="btn-cta">Book Demo</button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden py-4 border-t border-gray-700"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors font-semibold">Live Demo</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors font-semibold">Features</a>
              <a href="#results" className="text-gray-300 hover:text-white transition-colors font-semibold">Results</a>
              <button className="btn-cta w-full">Book Demo</button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
