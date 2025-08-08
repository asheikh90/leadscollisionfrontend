import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Users, 
  FileText, 
  Calendar, 
  FolderOpen, 
  Settings,
  X,
  Cpu,
  Activity
} from 'lucide-react'

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation()
  
  const navigation = [
    { name: 'Neural Core', href: '/dashboard/overview', icon: BarChart3, color: 'text-cyan-400' },
    { name: 'Quantum Inbox', href: '/dashboard/inbox', icon: MessageSquare, color: 'text-purple-400' },
    { name: 'Lead Matrix', href: '/dashboard/leads', icon: Users, color: 'text-green-400' },
    { name: 'Quote Engine', href: '/dashboard/quotes', icon: FileText, color: 'text-yellow-400' },
    { name: 'Time Grid', href: '/dashboard/calendar', icon: Calendar, color: 'text-pink-400' },
    { name: 'Data Vault', href: '/dashboard/files', icon: FolderOpen, color: 'text-blue-400' },
    { name: 'System Config', href: '/dashboard/settings', icon: Settings, color: 'text-orange-400' },
  ]

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden bg-gray-900/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : '-100%' }}
        className={`fixed inset-y-0 left-0 z-50 w-72 quantum-panel border-r border-cyan-400/30 lg:translate-x-0 lg:static lg:inset-0 matrix-bg`}
      >
        {/* Neural Grid Background */}
        <div className="absolute inset-0 neural-grid opacity-20"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Scan Line */}
        <div className="scan-line opacity-30"></div>
        
        <div className="flex h-full flex-col relative z-10">
          {/* Logo */}
          <div className="flex h-20 shrink-0 items-center justify-between px-6 border-b border-cyan-400/20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Cpu className="h-10 w-10 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
                <div className="absolute inset-0">
                  <Zap className="h-10 w-10 text-purple-400 animate-pulse" />
                </div>
              </div>
              <div>
                <div className="text-xl font-black hologram-text">LEADBRAIN</div>
                <div className="text-xs text-cyan-400 font-bold tracking-wider">COMMAND CENTER 2.0</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-cyan-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* AI Status */}
          <div className="px-6 py-4 border-b border-cyan-400/20">
            <div className="holographic-card p-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="quantum-orb"></div>
                <div className="text-cyan-400 font-black text-sm">AI CORE STATUS</div>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 text-green-400 animate-pulse" />
                <span className="text-green-400 font-bold text-xs">FULLY OPERATIONAL</span>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                Learning Rate: <span className="text-cyan-400 font-bold">97.3%</span>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-3">
            {navigation.map((item, index) => {
              const isActive = location.pathname === item.href || 
                (item.href === '/dashboard/overview' && location.pathname === '/dashboard')
              
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center px-4 py-4 text-sm font-black rounded-2xl transition-all relative overflow-hidden ${
                      isActive
                        ? 'neural-glass border-cyan-400/50 text-cyan-400'
                        : 'bg-white/5 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-400/30 border border-transparent'
                    }`}
                  >
                    {/* Neural Connection Line */}
                    {isActive && (
                      <div className="neural-connection top-1/2 transform -translate-y-1/2"></div>
                    )}
                    
                    <div className={`mr-4 h-6 w-6 ${isActive ? 'text-cyan-400' : item.color} group-hover:text-cyan-400 transition-colors`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    
                    <span className="tracking-wider">{item.name}</span>
                    
                    {/* Holographic Effect */}
                    {isActive && (
                      <div className="absolute right-4">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </nav>
          
          {/* System Stats */}
          <div className="p-4 border-t border-cyan-400/20">
            <div className="quantum-panel p-4">
              <div className="text-xs text-cyan-400 font-black mb-3 tracking-wider">REAL-TIME METRICS</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-xs">Neural Processing</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
                    </div>
                    <span className="text-cyan-400 font-bold text-xs">100%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-xs">Quantum Sync</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse"></div>
                    </div>
                    <span className="text-green-400 font-bold text-xs">87%</span>
                  </div>
                </div>
                <div className="flex justify-between text-xs mt-3">
                  <div className="text-center">
                    <div className="text-cyan-400 font-black">+12</div>
                    <div className="text-gray-400">LEADS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-black">8</div>
                    <div className="text-gray-400">ACTIVE</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-black">97%</div>
                    <div className="text-gray-400">UPTIME</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar
