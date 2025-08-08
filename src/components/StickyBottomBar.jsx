import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'

const StickyBottomBar = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 glass-panel-dark border-t border-gray-700/50 p-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <div className="text-white font-black text-lg">Ready to 10x your collision shop?</div>
          <div className="text-gray-300 font-medium">Join 2,400+ shops using AI to book more cars</div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/dashboard" 
            className="btn-secondary flex items-center space-x-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
          
          <button className="btn-cta flex items-center space-x-2">
            <span>Start Free Trial</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default StickyBottomBar
