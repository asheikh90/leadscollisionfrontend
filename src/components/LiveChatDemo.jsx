import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Bot, Calendar, DollarSign, Phone, MessageSquare } from 'lucide-react'

const LiveChatDemo = () => {
  const [currentFlow, setCurrentFlow] = useState('insurance')
  const [showQuote, setShowQuote] = useState(false)

  const flows = {
    insurance: {
      title: "Insurance Customer",
      messages: [
        { type: 'ai', text: "Hi! I'm Ali from Collision Club. What's your name?" },
        { type: 'user', text: 'Sarah' },
        { type: 'ai', text: 'Hey Sarah! What kind of car needs work?' },
        { type: 'user', text: '2019 Toyota Camry, silver' },
        { type: 'ai', text: 'Got it. Can you describe the damage?' },
        { type: 'user', text: 'Front bumper and headlight from fender bender' },
        { type: 'ai', text: 'Are you paying cash, insurance, or is this a fleet?' },
        { type: 'user', text: 'Insurance - Geico' },
        { type: 'ai', text: 'Perfect! Have you started a claim with Geico yet?' },
        { type: 'user', text: 'Yes, claim #GC445789' },
        { type: 'ai', text: "Excellent! We work with Geico daily. We'll handle all paperwork. For a 2019 Camry front end, you're looking at $2,100–$2,600. Want to pick a time?" }
      ],
      quote: {
        range: '$2,100 – $2,600',
        prep: 'Remove bumper; headlight assembly replacement',
        timeline: '3–4 business days',
        notes: 'We handle all Geico paperwork'
      }
    },
    cash: {
      title: "Cash Customer",
      messages: [
        { type: 'ai', text: "Hi! I'm Ali from Collision Club. What's your name?" },
        { type: 'user', text: 'Mike' },
        { type: 'ai', text: 'Hey Mike! What kind of car needs work?' },
        { type: 'user', text: '2018 Honda Accord, black' },
        { type: 'ai', text: 'Got it. What happened to it?' },
        { type: 'user', text: 'Rear bumper scraped in parking lot' },
        { type: 'ai', text: 'Are you paying cash, insurance, or is this a fleet?' },
        { type: 'user', text: 'Cash' },
        { type: 'ai', text: 'For a 2018 Accord rear bumper repair, cash price is $850–$1,100. We can also do paint protection film for $200 extra to prevent future scratches. Sound good?' }
      ],
      quote: {
        range: '$850 – $1,100',
        prep: 'Sand, prime, paint, clear coat',
        timeline: '2–3 business days',
        upsells: 'Paint protection film (+$200)'
      }
    },
    ccc: {
      title: "Returning CCC Customer",
      messages: [
        { type: 'ai', text: "Hi! I'm Ali from Collision Club. What's your name?" },
        { type: 'user', text: 'Jennifer' },
        { type: 'ai', text: "Hey Jennifer! What's your phone number?" },
        { type: 'user', text: '555-0123' },
        { type: 'ai', text: 'Found your previous estimate #MOCK1780 ($1,780) for your 2020 Subaru Outback. Ready to schedule that repair?' },
        { type: 'user', text: 'Yes, when can you fit me in?' },
        { type: 'ai', text: 'Great! I have Tuesday at 9 AM or Wednesday at 2 PM available. Which works better?' }
      ],
      quote: {
        range: '$1,780 (Previous Estimate)',
        prep: 'Door panel replacement, paint match',
        timeline: '2 business days',
        notes: 'CCC estimate #MOCK1780 reactivated'
      }
    }
  }

  return (
    <section id="demo" className="section-padding bg-gradient-to-r from-gray-900/50 to-blue-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            AI Quote Widget Demo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
            Chat-first quoting that converts. Watch different customer types get handled automatically.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Flow Selector */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Try Different Scenarios:</h3>
            {Object.entries(flows).map(([key, flow]) => (
              <button
                key={key}
                onClick={() => { setCurrentFlow(key); setShowQuote(false); }}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  currentFlow === key
                    ? 'bg-primary-600/30 border border-primary-500/50 text-white'
                    : 'glass-panel text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="font-bold">{flow.title}</div>
                <div className="text-sm opacity-75">
                  {key === 'insurance' && 'Geico claim handling'}
                  {key === 'cash' && 'Direct pay with upsells'}
                  {key === 'ccc' && 'Reactivate old estimate'}
                </div>
              </button>
            ))}
          </div>

          {/* Chat Interface */}
          <div className="glass-panel p-6">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold">Ali @ Collision Club</div>
                <div className="text-success-400 text-sm flex items-center">
                  <div className="w-2 h-2 bg-success-400 rounded-full mr-2"></div>
                  Online now
                </div>
              </div>
            </div>

            <div className="space-y-4 h-96 overflow-y-auto mb-4">
              {flows[currentFlow].messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
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
                      <span className="text-sm">{message.text}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-white/5 rounded-lg px-3 py-2 text-gray-400 text-sm">
                Type your message...
              </div>
              <button
                onClick={() => setShowQuote(true)}
                className="btn-cta px-4 py-2 text-sm"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Quote Summary & Scheduler */}
          <div className="space-y-6">
            <motion.div
              className="glass-panel p-6"
              animate={{ scale: showQuote ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-success-400" />
                Quote Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Estimated Range:</span>
                  <span className="text-success-400 font-bold">{flows[currentFlow].quote.range}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Timeline:</span>
                  <span className="text-white">{flows[currentFlow].quote.timeline}</span>
                </div>
                <div className="text-gray-300 text-sm">
                  <strong>Prep Notes:</strong> {flows[currentFlow].quote.prep}
                </div>
                {flows[currentFlow].quote.upsells && (
                  <div className="text-accent-400 text-sm">
                    <strong>Available:</strong> {flows[currentFlow].quote.upsells}
                  </div>
                )}
                {flows[currentFlow].quote.notes && (
                  <div className="text-primary-400 text-sm">
                    <strong>Note:</strong> {flows[currentFlow].quote.notes}
                  </div>
                )}
              </div>
            </motion.div>

            <div className="glass-panel p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary-400" />
                Available Times
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {['Tue 9 AM', 'Tue 2 PM', 'Wed 9 AM', 'Wed 2 PM'].map((time, index) => (
                  <button
                    key={index}
                    className="p-2 bg-white/5 hover:bg-primary-600/20 rounded-lg text-sm text-white transition-colors"
                  >
                    {time}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                <button className="w-full btn-cta">Book This Slot</button>
                <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Have Us Call You</span>
                </button>
                <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Text Me The Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveChatDemo