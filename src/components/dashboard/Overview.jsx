import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  FileText, 
  Calendar, 
  UserX, 
  RefreshCw,
  ArrowUp,
  ArrowDown,
  Zap,
  Activity,
  Cpu,
  Database
} from 'lucide-react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts'

const Overview = () => {
  const [kpis, setKpis] = useState({
    leadsToday: 0,
    quotesSent: 0,
    booked: 0,
    noShows: 0
  })

  const finalKpis = {
    leadsToday: 12,
    quotesSent: 8,
    booked: 6,
    noShows: 2
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setKpis(prev => ({
        leadsToday: Math.min(prev.leadsToday + 1, finalKpis.leadsToday),
        quotesSent: Math.min(prev.quotesSent + 1, finalKpis.quotesSent),
        booked: Math.min(prev.booked + 1, finalKpis.booked),
        noShows: Math.min(prev.noShows + 1, finalKpis.noShows)
      }))
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const sourceData = [
    { name: 'Neural Ads', value: 45, color: '#00ffff' },
    { name: 'Quantum SEO', value: 30, color: '#ff00ff' },
    { name: 'Bio Referral', value: 20, color: '#00ff00' },
    { name: 'Direct Link', value: 5, color: '#ffff00' }
  ]

  const funnelData = [
    { name: 'Leads', value: 12, color: '#00ffff' },
    { name: 'Quoted', value: 8, color: '#ff00ff' },
    { name: 'Booked', value: 6, color: '#00ff00' },
    { name: 'Confirmed', value: 4, color: '#ffff00' }
  ]

  const neuralActivity = [
    { time: '00:00', activity: 65 },
    { time: '04:00', activity: 45 },
    { time: '08:00', activity: 89 },
    { time: '12:00', activity: 95 },
    { time: '16:00', activity: 78 },
    { time: '20:00', activity: 67 },
  ]

  const stuckEstimates = [
    { id: 1, customer: 'Sarah Johnson', vehicle: '2019 Toyota Camry', amount: '$2,400', days: 12, priority: 'high' },
    { id: 2, customer: 'Mike Rodriguez', vehicle: '2020 Honda Accord', amount: '$1,850', days: 8, priority: 'medium' },
    { id: 3, customer: 'Lisa Chen', vehicle: '2018 Subaru Outback', amount: '$3,200', days: 15, priority: 'critical' },
    { id: 4, customer: 'David Wilson', vehicle: '2021 Ford F-150', amount: '$4,100', days: 6, priority: 'low' },
    { id: 5, customer: 'Jennifer Davis', vehicle: '2017 BMW 3 Series', amount: '$2,900', days: 20, priority: 'critical' }
  ]

  const kpiCards = [
    {
      title: 'Neural Leads',
      value: kpis.leadsToday,
      icon: TrendingUp,
      color: 'text-cyan-400',
      bgColor: 'from-cyan-500/20 to-blue-500/20',
      change: '+15%',
      changeType: 'up',
      glowColor: 'shadow-cyan-500/25'
    },
    {
      title: 'Quantum Quotes',
      value: kpis.quotesSent,
      icon: FileText,
      color: 'text-purple-400',
      bgColor: 'from-purple-500/20 to-pink-500/20',
      change: '+8%',
      changeType: 'up',
      glowColor: 'shadow-purple-500/25'
    },
    {
      title: 'Locked Bookings',
      value: kpis.booked,
      icon: Calendar,
      color: 'text-green-400',
      bgColor: 'from-green-500/20 to-emerald-500/20',
      change: '+22%',
      changeType: 'up',
      glowColor: 'shadow-green-500/25'
    },
    {
      title: 'Ghost Signals',
      value: kpis.noShows,
      icon: UserX,
      color: 'text-red-400',
      bgColor: 'from-red-500/20 to-orange-500/20',
      change: '-5%',
      changeType: 'down',
      glowColor: 'shadow-red-500/25'
    }
  ]

  const priorityColors = {
    critical: 'border-red-500/50 bg-red-500/10',
    high: 'border-orange-500/50 bg-orange-500/10',
    medium: 'border-yellow-500/50 bg-yellow-500/10',
    low: 'border-green-500/50 bg-green-500/10'
  }

  return (
    <div className="space-y-8 matrix-bg">
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-black hologram-text mb-4">NEURAL COMMAND CENTER</h1>
          <p className="text-cyan-400 font-bold text-xl tracking-wider">Your collision shop's quantum operating system</p>
          <div className="mt-4 flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-green-400 animate-pulse" />
              <span className="text-green-400 font-bold">AI CORE ACTIVE</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cpu className="h-5 w-5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span className="text-cyan-400 font-bold">PROCESSING</span>
            </div>
            <div className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-purple-400 animate-pulse" />
              <span className="text-purple-400 font-bold">SYNCED</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* KPI Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {kpiCards.map((kpi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`quantum-panel p-8 hover:scale-110 transition-all duration-500 ${kpi.glowColor} cyber-border`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${kpi.bgColor} rounded-2xl flex items-center justify-center relative`}>
                <kpi.icon className={`h-8 w-8 ${kpi.color}`} />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 rounded-2xl"></div>
              </div>
              <div className={`flex items-center space-x-2 text-sm font-black ${
                kpi.changeType === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {kpi.changeType === 'up' ? <ArrowUp className="h-5 w-5" /> : <ArrowDown className="h-5 w-5" />}
                <span className="text-lg">{kpi.change}</span>
              </div>
            </div>
            <div className={`text-5xl font-black ${kpi.color} mb-2 animate-count-up`}>{kpi.value}</div>
            <div className="text-gray-300 font-bold text-lg tracking-wider">{kpi.title}</div>
            
            {/* Neural Activity Indicator */}
            <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${kpi.bgColor} animate-pulse`} style={{ width: `${(kpi.value / 15) * 100}%` }}></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quantum Analytics Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Neural Source Matrix */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="quantum-panel p-8"
        >
          <h3 className="text-2xl font-black text-cyan-400 mb-6 tracking-wider">NEURAL SOURCE MATRIX</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  dataKey="value"
                  stroke="rgba(0,255,255,0.3)"
                  strokeWidth={2}
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {sourceData.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 holographic-card p-3">
                <div 
                  className="w-4 h-4 rounded-full animate-pulse" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <div>
                  <span className="text-white font-bold text-sm">{item.name}</span>
                  <div className="text-xs" style={{ color: item.color }}>{item.value}%</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quantum Conversion Funnel */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="quantum-panel p-8"
        >
          <h3 className="text-2xl font-black text-purple-400 mb-6 tracking-wider">CONVERSION FUNNEL</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={funnelData} layout="horizontal">
                <XAxis type="number" hide />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9ca3af', fontSize: 14, fontWeight: 'bold' }} 
                />
                <Bar 
                  dataKey="value" 
                  radius={[0, 8, 8, 0]}
                  fill="url(#quantumGradient)"
                />
                <defs>
                  <linearGradient id="quantumGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="50%" stopColor="#ff00ff" />
                    <stop offset="100%" stopColor="#00ff00" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 text-center holographic-card p-4">
            <div className="text-4xl font-black text-green-400 animate-pulse">67%</div>
            <div className="text-gray-300 font-bold tracking-wider">NEURAL CONVERSION RATE</div>
          </div>
        </motion.div>

        {/* AI Activity Monitor */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="quantum-panel p-8"
        >
          <h3 className="text-2xl font-black text-green-400 mb-6 tracking-wider">AI NEURAL ACTIVITY</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={neuralActivity}>
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                />
                <YAxis hide />
                <Line 
                  type="monotone" 
                  dataKey="activity" 
                  stroke="#00ff00" 
                  strokeWidth={3}
                  dot={{ fill: '#00ff00', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#00ff00', strokeWidth: 2, fill: '#00ff00' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="text-center holographic-card p-3">
              <div className="text-2xl font-black text-cyan-400">89%</div>
              <div className="text-xs text-gray-400">EFFICIENCY</div>
            </div>
            <div className="text-center holographic-card p-3">
              <div className="text-2xl font-black text-purple-400">24/7</div>
              <div className="text-xs text-gray-400">UPTIME</div>
            </div>
            <div className="text-center holographic-card p-3">
              <div className="text-2xl font-black text-green-400">∞</div>
              <div className="text-xs text-gray-400">LEARNING</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quantum Estimate Reactivation Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="quantum-panel p-8"
      >
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-black text-orange-400 tracking-wider">QUANTUM ESTIMATE REACTIVATION</h3>
          <div className="holographic-card px-6 py-3">
            <span className="text-cyan-400 font-black text-lg">+37% SUCCESS RATE</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {stuckEstimates.map((estimate, index) => (
            <motion.div
              key={estimate.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center justify-between p-6 rounded-2xl border-2 ${priorityColors[estimate.priority]} hover:scale-105 transition-all duration-300 relative overflow-hidden`}
            >
              {/* Neural Connection Lines */}
              <div className="absolute inset-0 opacity-20">
                <div className="neural-connection top-1/2"></div>
              </div>
              
              <div className="flex-1 relative z-10">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-black text-white">{estimate.customer.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${
                      estimate.priority === 'critical' ? 'bg-red-500' :
                      estimate.priority === 'high' ? 'bg-orange-500' :
                      estimate.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    } animate-pulse`}></div>
                  </div>
                  <div>
                    <div className="text-white font-black text-xl">{estimate.customer}</div>
                    <div className="text-gray-300 font-bold">{estimate.vehicle}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-cyan-400 font-black text-2xl">{estimate.amount}</div>
                    <div className="text-gray-400 text-sm">QUANTUM VALUE</div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-400 font-black text-xl">{estimate.days}</div>
                    <div className="text-gray-400 text-sm">DAYS DORMANT</div>
                  </div>
                </div>
              </div>
              <button className="btn-quantum flex items-center space-x-3 relative z-10">
                <RefreshCw className="h-5 w-5" />
                <span>REACTIVATE</span>
                <Zap className="h-5 w-5 animate-pulse" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Overview
