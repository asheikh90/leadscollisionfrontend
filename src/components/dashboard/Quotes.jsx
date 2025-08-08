import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, 
  FileText, 
  DollarSign, 
  Calendar, 
  Car,
  User,
  X,
  Send
} from 'lucide-react'

const Quotes = () => {
  const [showNewQuoteModal, setShowNewQuoteModal] = useState(false)
  const [newQuote, setNewQuote] = useState({
    vehicle: '',
    payerType: 'cash',
    damage: ''
  })

  const quotes = [
    {
      id: 1,
      customer: 'Sarah Johnson',
      vehicle: '2019 Toyota Camry',
      range: '$2,100 - $2,600',
      prep: 'Remove bumper; headlight assembly replacement',
      upsells: 'Paint protection film (+$200)',
      status: 'Sent',
      created: '2 hours ago',
      payerType: 'Insurance'
    },
    {
      id: 2,
      customer: 'Mike Rodriguez',
      vehicle: '2020 Honda Accord',
      range: '$850 - $1,100',
      prep: 'Sand, prime, paint, clear coat',
      upsells: 'Trim blackout (+$150)',
      status: 'Accepted',
      created: '4 hours ago',
      payerType: 'Cash'
    },
    {
      id: 3,
      customer: 'Lisa Chen',
      vehicle: '2018 Subaru Outback',
      range: '$1,780',
      prep: 'Door panel replacement, paint match',
      upsells: 'Headlight restore (+$120)',
      status: 'Pending',
      created: '1 day ago',
      payerType: 'Fleet'
    },
    {
      id: 4,
      customer: 'David Wilson',
      vehicle: '2021 Ford F-150',
      range: '$3,200 - $3,800',
      prep: 'Bed liner repair, tailgate adjustment',
      upsells: 'Spray-in bedliner upgrade (+$400)',
      status: 'Sent',
      created: '2 days ago',
      payerType: 'Insurance'
    }
  ]

  const statusColors = {
    'Sent': 'bg-blue-500/20 text-blue-400',
    'Accepted': 'bg-green-500/20 text-green-400',
    'Pending': 'bg-yellow-500/20 text-yellow-400',
    'Rejected': 'bg-red-500/20 text-red-400'
  }

  const payerTypeColors = {
    'Cash': 'bg-green-500/20 text-green-400',
    'Insurance': 'bg-blue-500/20 text-blue-400',
    'Fleet': 'bg-purple-500/20 text-purple-400'
  }

  const generateMockQuote = () => {
    const ranges = {
      'front': '$1,800 - $2,400',
      'rear': '$1,200 - $1,600',
      'side': '$2,200 - $2,800',
      'full': '$4,500 - $6,200'
    }
    
    const damageType = newQuote.damage.toLowerCase()
    let range = '$1,500 - $2,000' // default
    
    if (damageType.includes('front')) range = ranges.front
    else if (damageType.includes('rear')) range = ranges.rear
    else if (damageType.includes('side')) range = ranges.side
    else if (damageType.includes('full')) range = ranges.full

    // Adjust for payer type
    if (newQuote.payerType === 'cash') {
      const [min, max] = range.replace(/\$|,/g, '').split(' - ').map(Number)
      range = `$${(min * 0.9).toLocaleString()} - $${(max * 0.9).toLocaleString()}`
    }

    return range
  }

  const handleCreateQuote = () => {
    const mockRange = generateMockQuote()
    // In a real app, this would create the quote
    console.log('Creating quote:', { ...newQuote, range: mockRange })
    setShowNewQuoteModal(false)
    setNewQuote({ vehicle: '', payerType: 'cash', damage: '' })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-white mb-2">Quotes</h1>
          <p className="text-gray-300 font-medium">Manage repair estimates and pricing</p>
        </div>
        
        <button 
          onClick={() => setShowNewQuoteModal(true)}
          className="btn-cta flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>New Quote</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-panel p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <FileText className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">24</div>
              <div className="text-gray-400 font-medium">Total Quotes</div>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">67%</div>
              <div className="text-gray-400 font-medium">Acceptance Rate</div>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
              <Calendar className="h-6 w-6 text-accent-400" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">$2,340</div>
              <div className="text-gray-400 font-medium">Avg Quote Value</div>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-6">
          <div className="text-center">
            <div className="text-accent-400 font-bold text-sm mb-1">+37% on stale estimates</div>
            <div className="text-gray-400 text-xs">Reactivation success</div>
          </div>
        </div>
      </div>

      {/* Quotes List */}
      <div className="grid gap-6">
        {quotes.map((quote, index) => (
          <motion.div
            key={quote.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-6 hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{quote.customer}</div>
                  <div className="flex items-center space-x-2">
                    <Car className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-300">{quote.vehicle}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-lg text-sm font-medium ${payerTypeColors[quote.payerType]}`}>
                  {quote.payerType}
                </span>
                <span className={`px-3 py-1 rounded-lg text-sm font-medium ${statusColors[quote.status]}`}>
                  {quote.status}
                </span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Estimate Range</h4>
                <div className="text-2xl font-black text-success-400">{quote.range}</div>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Prep Notes</h4>
                <div className="text-gray-300 font-medium">{quote.prep}</div>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Upsells</h4>
                <div className="text-accent-400 font-medium">{quote.upsells}</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700/50">
              <div className="text-gray-400 text-sm">Created {quote.created}</div>
              <div className="flex items-center space-x-2">
                <button className="btn-secondary">Edit</button>
                <button className="btn-primary">Send</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* New Quote Modal */}
      {showNewQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-8 max-w-md w-full mx-4"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-white">New Quote</h3>
              <button
                onClick={() => setShowNewQuoteModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Vehicle</label>
                <input
                  type="text"
                  value={newQuote.vehicle}
                  onChange={(e) => setNewQuote({...newQuote, vehicle: e.target.value})}
                  placeholder="2019 Toyota Camry"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Payer Type</label>
                <select
                  value={newQuote.payerType}
                  onChange={(e) => setNewQuote({...newQuote, payerType: e.target.value})}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                >
                  <option value="cash">Cash</option>
                  <option value="insurance">Insurance</option>
                  <option value="fleet">Fleet</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Damage Notes</label>
                <textarea
                  value={newQuote.damage}
                  onChange={(e) => setNewQuote({...newQuote, damage: e.target.value})}
                  placeholder="Front bumper and headlight damage from fender bender"
                  rows={3}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                />
              </div>
              
              {newQuote.vehicle && newQuote.damage && (
                <div className="glass-panel p-4 border border-success-500/30">
                  <div className="text-sm text-gray-400 mb-1">Generated Range:</div>
                  <div className="text-xl font-black text-success-400">{generateMockQuote()}</div>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-3 mt-6">
              <button
                onClick={() => setShowNewQuoteModal(false)}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateQuote}
                disabled={!newQuote.vehicle || !newQuote.damage}
                className="flex-1 btn-cta flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                <span>Create Quote</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Quotes
