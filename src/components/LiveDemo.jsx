import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, Calendar, DollarSign, Clock } from 'lucide-react'

const LiveDemo = () => {
  const [step, setStep] = useState(1)

  return (
    <section id="demo" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how a lead goes from inquiry to booked appointment
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="mb-6">
              <div className="flex space-x-2 mb-4">
                {[1, 2, 3].map((i) => (
                  <button
                    key={i}
                    onClick={() => setStep(i)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      step === i 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    Step {i}
                  </button>
                ))}
              </div>
            </div>
            
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white mb-4">Customer Submits Damage Info</h3>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="space-y-3">
                    <input 
                      type="text" 
                      placeholder="2019 Honda Accord" 
                      className="w-full p-3 bg-gray-700 text-white rounded-lg"
                      disabled
                    />
                    <textarea 
                      placeholder="Rear-end collision, bumper and trunk damage"
                      className="w-full p-3 bg-gray-700 text-white rounded-lg h-20"
                      disabled
                    />
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Upload className="h-4 w-4" />
                      <span>3 photos uploaded</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white mb-4">AI Generates Instant Quote</h3>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-green-400" />
                      <span className="text-white font-semibold">$2,800 - $3,400</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">3-4 business days</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      "Hi! Based on your photos, we can definitely help with your Honda. 
                      We work with all insurance companies and offer a lifetime warranty on our work."
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
            
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white mb-4">Appointment Booked</h3>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-accent-500" />
                      <span className="text-white font-semibold">Tuesday, Dec 12 at 9:00 AM</span>
                    </div>
                    <div className="bg-green-900/30 border border-green-500/30 p-3 rounded-lg">
                      <p className="text-green-400 font-medium">✓ Appointment Confirmed</p>
                      <p className="text-gray-300 text-sm">Customer will receive reminder 24 hours before</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h4 className="text-lg font-bold text-white mb-3">What Happens Behind the Scenes</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>AI analyzes damage photos using collision repair data</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Checks your shop's pricing and availability</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Responds in your shop's voice and style</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Books directly into your calendar system</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 border-accent-500/30">
              <h4 className="text-lg font-bold text-white mb-3">Real Results</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-500">37%</div>
                  <div className="text-gray-300 text-sm">Higher conversion</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">24/7</div>
                  <div className="text-gray-300 text-sm">Lead response</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LiveDemo
