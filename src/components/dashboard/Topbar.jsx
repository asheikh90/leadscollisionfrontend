import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Menu, 
  Search, 
  Filter, 
  Plus, 
  Bell, 
  User,
  ChevronDown,
  Zap,
  Activity,
  Wifi,
  Shield
} from 'lucide-react'

const Topbar = ({ setSidebarOpen }) => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="sticky top-0 z-30 quantum-panel border-b border-cyan-400/30 matrix-bg">
      {/* Neural Grid Background */}
      <div className="absolute inset-0 neural-grid opacity-10"></div>
      
      {/* Data Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="data-stream"
            style={{
              left: `${20 + i * 30}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${10 + i * 5}s`
            }}
          />
        ))}
      </div>

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex h-20 items-center justify-between">
          {/* Left side */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-cyan-400 hover:text-white transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            {/* System Status */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 text-green-400 animate-pulse" />
                <span className="text-green-400 font-bold text-sm">ONLINE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-400 font-bold text-sm">SYNC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-purple-400" />
                <span className="text-purple-400 font-bold text-sm">SECURE</span>
              </div>
            </div>
            
            {/* Neural Search */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm"></div>
              <div className="relative neural-glass">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cyan-400" />
                <input
                  type="text"
                  placeholder="Neural search across all dimensions..."
                  className="w-80 pl-12 pr-4 py-3 bg-transparent border-0 rounded-2xl text-white placeholder-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 font-medium"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Quantum Filters */}
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn-neural flex items-center space-x-2 px-4 py-2 text-sm"
              >
                <Filter className="h-4 w-4" />
                <span className="font-black">FILTERS</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute top-full left-0 mt-2 w-80 quantum-panel p-6 shadow-2xl"
                >
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-black text-cyan-400 mb-3 block tracking-wider">STATUS MATRIX</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['New', 'Quoted', 'Booked', 'Confirmed'].map((status) => (
                          <button
                            key={status}
                            className="px-3 py-2 text-xs bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-white rounded-xl transition-all font-bold border border-cyan-400/20 hover:border-cyan-400/50"
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-black text-purple-400 mb-3 block tracking-wider">SOURCE VECTORS</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Paid Ads', 'SEO', 'Referral', 'Direct'].map((source) => (
                          <button
                            key={source}
                            className="px-3 py-2 text-xs bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 hover:text-white rounded-xl transition-all font-bold border border-purple-400/20 hover:border-purple-400/50"
                          >
                            {source}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          
          {/* Right side */}
          <div className="flex items-center space-x-6">
            {/* Quantum Lead Generator */}
            <button className="btn-quantum flex items-center space-x-2 px-6 py-3">
              <Plus className="h-5 w-5" />
              <span className="hidden sm:inline font-black">GENERATE LEAD</span>
            </button>
            
            {/* Neural Notifications */}
            <div className="relative">
              <button className="relative p-3 holographic-card hover:scale-110 transition-transform">
                <Bell className="h-6 w-6 text-cyan-400" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-black">3</span>
                </div>
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full animate-ping"></div>
              </button>
            </div>
            
            {/* User Quantum Interface */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 p-2 holographic-card hover:scale-105 transition-all"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }}>
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-cyan-400/30 rounded-full animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-cyan-400 font-black text-sm">OPERATOR</div>
                  <div className="text-purple-400 text-xs font-bold">MIKE'S QUANTUM SHOP</div>
                </div>
                <ChevronDown className="h-4 w-4 text-cyan-400" />
              </button>
              
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute top-full right-0 mt-2 w-64 quantum-panel p-4 shadow-2xl"
                >
                  <div className="space-y-2">
                    <button className="w-full text-left px-4 py-3 text-sm text-cyan-400 hover:text-white hover:bg-cyan-500/10 rounded-xl transition-all font-bold border border-transparent hover:border-cyan-400/30">
                      Neural Profile
                    </button>
                    <button className="w-full text-left px-4 py-3 text-sm text-purple-400 hover:text-white hover:bg-purple-500/10 rounded-xl transition-all font-bold border border-transparent hover:border-purple-400/30">
                      Quantum Billing
                    </button>
                    <button className="w-full text-left px-4 py-3 text-sm text-pink-400 hover:text-white hover:bg-pink-500/10 rounded-xl transition-all font-bold border border-transparent hover:border-pink-400/30">
                      System Logs
                    </button>
                    <hr className="border-cyan-400/20 my-2" />
                    <button className="w-full text-left px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all font-bold border border-transparent hover:border-red-400/30">
                      Disconnect
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
