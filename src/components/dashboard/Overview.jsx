import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  FileText, 
  Calendar, 
  UserX, 
  RefreshCw,
  ArrowUp,
  ArrowDown
} from 'lucide-react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

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
    { name: 'Paid Ads', value: 45, color: '#3b82f6' },
    { name: 'SEO', value: 30, color: '#10b981' },
    { name: 'Referral', value: 20, color: '#f59e0b' },
    { name: 'Direct', value: 5, color: '#8b5cf6' }
  ]

  const funnelData = [
    { name: 'Leads', value: 12 },
    { name: 'Quoted', value: 8 },
    { name: 'Booked', value: 6 },
    { name: 'Confirmed', value: 4 }
  ]

  const stuckEstimates = [
    { id: 1, customer: 'Sarah Johnson', vehicle: '2019 Toyota Camry', amount: '$2,400', days: 12 },
    { id: 2, customer: 'Mike Rodriguez', vehicle: '2020 Honda Accord', amount: '$1,850', days: 8 },
    { id: 3, customer: 'Lisa Chen', vehicle: '2018 Subaru Outback', amount: '$3,200', days: 15 },
    { id: 4, customer: 'David Wilson', vehicle: '2021 Ford F-150', amount: '$4,100', days: 6 },
    { id: 5, customer: 'Jennifer Davis', vehicle: '2017 BMW 3 Series', amount: '$2,900', days: 20 }
  ]

  const kpiCards = [
    {
      title: 'Leads Today',
      value: kpis.leadsToday,
      icon: TrendingUp,
      color: 'text-primary-400',
      bgColor: 'bg-primary-500/20',
      change: '+15%',
      changeType: 'up'
    },
    {
      title: 'Quotes Sent',
      value: kpis.quotesSent,
      icon: FileText,
      color: 'text-accent-400',
      bgColor: 'bg-accent-500/20',
      change: '+8%',
      changeType: 'up'
    },
    {
      title: 'Booked',
      value: kpis.booked,
      icon: Calendar,
      color: 'text-success-400',
      bgColor: 'bg-success-500/20',
      change: '+22%',
      changeType: 'up'
    },
    {
      title: 'No-Shows',
      value: kpis.noShows,
      icon: UserX,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      change: '-5%',
      changeType: 'down'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black text-white mb-2">Command Center</h1>
        <p className="text-gray-300 font-medium">Your collision shop's mission control</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-6 hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${kpi.bgColor} rounded-xl flex items-center justify-center`}>
                <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
              </div>
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                kpi.changeType === 'up' ? 'text-success-400' : 'text-red-400'
              }`}>
                {kpi.changeType === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                <span>{kpi.change}</span>
              </div>
            </div>
            <div className="text-3xl font-black text-white mb-1">{kpi.value}</div>
            <div className="text-gray-400 font-medium">{kpi.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Leads by Source */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel p-6"
        >
          <h3 className="text-xl font-black text-white mb-6">Leads by Source</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {sourceData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-gray-300 text-sm font-medium">{item.name}</span>
                <span className="text-white font-bold text-sm">{item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Status Funnel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel p-6"
        >
          <h3 className="text-xl font-black text-white mb-6">Conversion Funnel</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={funnelData} layout="horizontal">
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-center">
            <div className="text-2xl font-black text-success-400">67%</div>
            <div className="text-gray-400 text-sm font-medium">Lead to Quote Rate</div>
          </div>
        </motion.div>
      </div>

      {/* Stuck CCC Estimates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-black text-white">Stuck CCC Estimates</h3>
          <div className="glass-panel px-3 py-1">
            <span className="text-accent-400 font-bold text-sm">+37% on stale estimates</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {stuckEstimates.map((estimate, index) => (
            <motion.div
              key={estimate.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="text-white font-bold">{estimate.customer}</div>
                    <div className="text-gray-400 text-sm">{estimate.vehicle}</div>
                  </div>
                  <div className="text-accent-400 font-bold">{estimate.amount}</div>
                  <div className="text-red-400 text-sm font-medium">{estimate.days} days old</div>
                </div>
              </div>
              <button className="btn-primary flex items-center space-x-2">
                <RefreshCw className="h-4 w-4" />
                <span>Re-activate</span>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Overview
