import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react'

const ProblemSolution = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-red-400" />
              <h2 className="text-2xl font-bold text-white">The Problem</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>Leads go cold while you're busy working on cars</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>CCC estimates sit in email inboxes, never converting</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>Manual follow-ups eat up your day</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>You lose track of where leads came from</p>
              </div>
            </div>
          </motion.div>
          
          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-primary-500/30"
          >
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="h-8 w-8 text-green-400" />
              <h2 className="text-2xl font-bold text-white">LeadBrain Fixes That</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>AI engages leads instantly, 24/7</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>Automatically follows up on old CCC estimates</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>Books appointments while you focus on repairs</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>Tracks every lead source and outcome</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-primary-600/20 to-accent-500/20 rounded-lg border border-primary-500/30">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-accent-500" />
                <span className="text-accent-500 font-semibold">Result: 37% more conversions on average</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
