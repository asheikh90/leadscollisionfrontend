import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock,
  Shield,
  Save,
  Bell
} from 'lucide-react'

const Settings = () => {
  const [settings, setSettings] = useState({
    shopName: "Mike's Collision Center",
    phone: "267-212-1034",
    address: "123 Main Street, Philadelphia, PA 19103",
    tonePreset: "streetwise-pro",
    followUpCadence: "aggressive",
    notifications: {
      newLeads: true,
      quotes: true,
      appointments: true,
      noShows: false
    }
  })

  const tonePresets = [
    {
      id: 'streetwise-pro',
      name: 'Streetwise Pro',
      description: 'Confident, direct, knows the business inside out',
      example: '"We handle that type of damage daily. Insurance or cash?"'
    },
    {
      id: 'formal',
      name: 'Professional Formal',
      description: 'Polite, structured, corporate-friendly',
      example: '"Thank you for contacting us. We would be happy to provide an estimate."'
    },
    {
      id: 'friendly',
      name: 'Friendly Expert',
      description: 'Warm but knowledgeable, builds rapport',
      example: '"Hey there! I can definitely help get your car looking perfect again."'
    }
  ]

  const followUpOptions = [
    { id: 'light', name: 'Light Touch', description: '1 follow-up after 3 days' },
    { id: 'standard', name: 'Standard', description: '2 follow-ups over 1 week' },
    { id: 'aggressive', name: 'Aggressive', description: '4 follow-ups over 2 weeks' }
  ]

  const handleSave = () => {
    console.log('Saving settings:', settings)
    alert('Settings saved successfully!')
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black text-white mb-2">Settings</h1>
        <p className="text-gray-300 font-medium">Configure your shop and AI behavior</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Business Profile */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel p-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
              <Building className="h-6 w-6 text-primary-400" />
            </div>
            <h2 className="text-xl font-black text-white">Business Profile</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2">Shop Name</label>
              <input
                type="text"
                value={settings.shopName}
                onChange={(e) => setSettings({...settings, shopName: e.target.value})}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={settings.phone}
                  onChange={(e) => setSettings({...settings, phone: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2">Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <textarea
                  value={settings.address}
                  onChange={(e) => setSettings({...settings, address: e.target.value})}
                  rows={2}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Tone Settings */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel p-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-accent-400" />
            </div>
            <h2 className="text-xl font-black text-white">AI Tone Presets</h2>
          </div>
          
          <div className="space-y-4">
            {tonePresets.map((preset) => (
              <div
                key={preset.id}
                onClick={() => setSettings({...settings, tonePreset: preset.id})}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  settings.tonePreset === preset.id
                    ? 'border-accent-500/50 bg-accent-500/10'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-bold">{preset.name}</div>
                  {settings.tonePreset === preset.id && (
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  )}
                </div>
                <div className="text-gray-400 text-sm mb-2">{preset.description}</div>
                <div className="text-gray-300 text-xs italic">"{preset.example}"</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Follow-up Settings */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel p-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <Clock className="h-6 w-6 text-green-400" />
            </div>
            <h2 className="text-xl font-black text-white">Follow-up Cadence</h2>
          </div>
          
          <div className="space-y-3">
            {followUpOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => setSettings({...settings, followUpCadence: option.id})}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  settings.followUpCadence === option.id
                    ? 'border-green-500/50 bg-green-500/10'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="text-white font-bold">{option.name}</div>
                  {settings.followUpCadence === option.id && (
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  )}
                </div>
                <div className="text-gray-400 text-sm">{option.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel p-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Bell className="h-6 w-6 text-purple-400" />
            </div>
            <h2 className="text-xl font-black text-white">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            {Object.entries(settings.notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {key === 'newLeads' && 'Get notified when new leads come in'}
                    {key === 'quotes' && 'Alert when quotes are sent or responded to'}
                    {key === 'appointments' && 'Reminders for upcoming appointments'}
                    {key === 'noShows' && 'Notifications for missed appointments'}
                  </div>
                </div>
                <button
                  onClick={() => setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      [key]: !value
                    }
                  })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? 'bg-primary-600' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Data Ownership Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-panel p-6 border border-success-500/30"
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-success-500/20 rounded-xl flex items-center justify-center">
            <Shield className="h-6 w-6 text-success-400" />
          </div>
          <h2 className="text-xl font-black text-white">Data Ownership</h2>
        </div>
        
        <div className="text-gray-300 font-medium mb-4">
          <strong className="text-success-400">Your data stays yours.</strong> We never sell, mine, or share your customer information. 
          All lead data, conversations, and business details remain completely under your control.
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="glass-panel px-3 py-1">
            <span className="text-success-400 font-bold">100% Private</span>
          </div>
          <div className="glass-panel px-3 py-1">
            <span className="text-primary-400 font-bold">Export Anytime</span>
          </div>
          <div className="glass-panel px-3 py-1">
            <span className="text-accent-400 font-bold">Delete on Request</span>
          </div>
        </div>
      </motion.div>

      {/* Performance Chips */}
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="glass-panel px-4 py-2">
          <span className="text-success-400 font-bold">+37% on stale estimates</span>
        </div>
        <div className="glass-panel px-4 py-2">
          <span className="text-primary-400 font-bold">2–5 more cars/week</span>
        </div>
        <div className="glass-panel px-4 py-2">
          <span className="text-accent-400 font-bold">< 15 min setup</span>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSave}
          className="btn-cta flex items-center space-x-2 px-12 py-4"
        >
          <Save className="h-5 w-5" />
          <span>Save Settings</span>
        </button>
      </div>
    </div>
  )
}

export default Settings
