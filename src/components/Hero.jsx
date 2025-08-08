import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-600/20 border border-primary-500/30 rounded-full px-6 py-2 mb-8">
            <Zap className="h-4 w-4 text-primary-400" />
            <span className="text-primary-400 font-semibold text-sm">AI-Powered Collision Repair</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Turn Every Lead Into
            <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Booked Revenue
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
            Your AI assistant handles quotes, books appointments, and follows up 24/7. 
            <strong className="text-white"> Get 2-5 more cars per week</strong> without hiring anyone.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="btn-cta group flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <Link 
              to="/dashboard" 
              className="btn-secondary group flex items-center space-x-2"
            >
              <TrendingUp className="h-5 w-5" />
              <span>View Dashboard</span>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-black text-white">2,400+</div>
              <div className="text-sm">Shops Using AI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-white">$2.3M+</div>
              <div className="text-sm">Extra Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-white">37%</div>
              <div className="text-sm">More Bookings</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
