import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel-dark border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-accent-500" />
            <span className="text-xl font-black text-white">LeadBrain</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white font-semibold transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white font-semibold transition-colors">
              How It Works
            </a>
            <a href="#results" className="text-gray-300 hover:text-white font-semibold transition-colors">
              Results
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white font-semibold transition-colors">
              FAQ
            </a>
            <Link 
              to="/dashboard" 
              className="text-primary-400 hover:text-primary-300 font-bold transition-colors border border-primary-500/30 px-4 py-2 rounded-lg hover:bg-primary-500/10"
            >
              Dashboard
            </Link>
            <button className="btn-cta">
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-gray-700/50"
          >
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white font-semibold transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white font-semibold transition-colors">
                How It Works
              </a>
              <a href="#results" className="text-gray-300 hover:text-white font-semibold transition-colors">
                Results
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white font-semibold transition-colors">
                FAQ
              </a>
              <Link 
                to="/dashboard" 
                className="text-primary-400 hover:text-primary-300 font-bold transition-colors border border-primary-500/30 px-4 py-2 rounded-lg hover:bg-primary-500/10 text-center"
              >
                Dashboard
              </Link>
              <button className="btn-cta">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header
