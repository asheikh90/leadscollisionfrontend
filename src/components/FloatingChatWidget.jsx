import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Bot } from 'lucide-react'

const FloatingChatWidget = () => {
  const [messages, setMessages] = useState([])
  const [currentStep, setCurrentStep] = useState(0)

  const chatSequence = [
    { type: 'user', text: 'Hi, I need a quote for my car', delay: 1000 },
    { type: 'ai', text: 'Hey! I\'m Ali from Collision Club. I can help with that. What\'s your name?', delay: 2000 },
    { type: 'user', text: 'Mike', delay: 1500 },
    { type: 'ai', text: 'Nice to meet you Mike! What kind of car are we working on?', delay: 2000 },
    { type: 'user', text: '2020 Honda Civic, white', delay: 1800 },
    { type: 'ai', text: 'Got it. Can you describe the damage or upload some photos?', delay: 2200 },
    { type: 'user', text: 'Rear bumper damage from parking lot hit', delay: 2000 },
    { type: 'ai', text: 'I see this type of repair often. Are you paying cash, going through insurance, or is this a fleet vehicle?', delay: 2500 },
    { type: 'user', text: 'Insurance - State Farm', delay: 1500 },
    { type: 'ai', text: 'Perfect! We work with State Farm all the time. Have you started a claim yet?', delay: 2000 },
    { type: 'user', text: 'Yes, claim #SF789456', delay: 1800 },
    { type: 'ai', text: 'Excellent! For a 2020 Civic rear bumper, you\'re looking at $1,200-$1,500. We\'ll handle all the paperwork with State Farm. Want to book a time to bring it in?', delay: 3000 }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < chatSequence.length) {
        setMessages(prev => [...prev, chatSequence[currentStep]])
        setCurrentStep(prev => prev + 1)
      } else {
        // Reset after completion
        setTimeout(() => {
          setMessages([])
          setCurrentStep(0)
        }, 5000)
      }
    }, currentStep === 0 ? 1000 : chatSequence[currentStep - 1]?.delay || 2000)

    return () => clearTimeout(timer)
  }, [currentStep])

  return (
    <div className="relative">
      <motion.div 
        className="glass-panel p-6 max-w-md mx-auto"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-white/10">
          <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-white font-bold">Ali @ Collision Club</div>
            <div className="text-green-400 text-sm flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Online now
            </div>
          </div>
        </div>
        
        <div className="space-y-4 h-80 overflow-y-auto">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-xs ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-gray-600' 
                      : 'bg-gradient-to-r from-primary-500 to-accent-500'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-white/10 text-white' 
                      : 'bg-primary-600/20 text-white border border-primary-500/30'
                  }`}>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-sm"
                    >
                      {message.text}
                      {index === messages.length - 1 && message.type === 'ai' && (
                        <span className="typing-indicator ml-1"></span>
                      )}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-white/5 rounded-lg px-3 py-2 text-gray-400 text-sm">
              Type your message...
            </div>
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating indicators */}
      <motion.div 
        className="absolute -top-4 -right-4 glass-panel px-3 py-1"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-success-400 font-bold text-sm">Live Demo</span>
      </motion.div>
    </div>
  )
}

export default FloatingChatWidget
