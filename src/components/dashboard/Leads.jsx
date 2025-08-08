import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  LayoutGrid, 
  List, 
  Search, 
  Filter,
  Phone,
  Mail,
  Car,
  DollarSign,
  Calendar,
  MoreHorizontal
} from 'lucide-react'

const Leads = () => {
  const [viewMode, setViewMode] = useState('kanban')
  const [searchTerm, setSearchTerm] = useState('')

  const leads = [
    {
      id: 1,
      name: 'Sarah Johnson',
      phone: '(555) 123-4567',
      email: 'sarah.j@email.com',
      vehicle: '2019 Toyota Camry',
      plate: 'ABC123',
      source: 'Paid Ads',
      status: 'Intake',
      value: '$2,400',
      created: '2 hours ago'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      phone: '(555) 234-5678',
      email: 'mike.r@email.com',
      vehicle: '2020 Honda Accord',
      plate: 'XYZ789',
      source: 'SEO',
      status: 'Estimated',
      value: '$1,850',
      created: '4 hours ago'
    },
    {
      id: 3,
      name: 'Lisa Chen',
      phone: '(555) 345-6789',
      email: 'lisa.c@email.com',
      vehicle: '2018 Subaru Outback',
      plate: 'DEF456',
      source: 'Referral',
      status: 'Scheduled',
      value: '$3,200',
      created: '1 day ago'
    },
    {
      id: 4,
      name: 'David Wilson',
      phone: '(555) 456-7890',
      email: 'david.w@email.com',
      vehicle: '2021 Ford F-150',
      plate: 'GHI789',
      source: 'Direct',
      status: 'Confirmed',
      value: '$4,100',
      created: '2 days ago'
    },
    {
      id: 5,
      name: 'Jennifer Davis',
      phone: '(555) 567-8901',
      email: 'jen.d@email.com',
      vehicle: '2017 BMW 3 Series',
      plate: 'JKL012',
      source: 'Paid Ads',
      status: 'No-Show',
      value: '$2,900',
      created: '3 days ago'
    },
    {
      id: 6,
      name: 'Robert Brown',
      phone: '(555) 678-9012',
      email: 'rob.b@email.com',
      vehicle: '2019 Chevrolet Silverado',
      plate: 'MNO345',
      source: 'SEO',
      status: 'Closed Won',
      value: '$3,500',
      created: '1 week ago'
    }
  ]

  const columns = [
    { id: 'Intake', title: 'Intake', color: 'border-blue-500' },
    { id: 'Estimated', title: 'Estimated', color: 'border-yellow-500' },
    { id: 'Scheduled', title: 'Scheduled', color: 'border-purple-500' },
    { id: 'Confirmed', title: 'Confirmed', color: 'border-green-500' },
    { id: 'No-Show', title: 'No-Show', color: 'border-red-500' },
    { id: 'Closed Won', title: 'Closed Won', color: 'border-emerald-500' },
    { id: 'Closed Lost', title: 'Closed Lost', color: 'border-gray-500' }
  ]

  const sourceColors = {
    'Paid Ads': 'bg-blue-500/20 text-blue-400',
    'SEO': 'bg-green-500/20 text-green-400',
    'Referral': 'bg-yellow-500/20 text-yellow-400',
    'Direct': 'bg-purple-500/20 text-purple-400'
  }

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.phone.includes(searchTerm) ||
    lead.plate.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const LeadCard = ({ lead }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel p-4 hover:scale-105 transition-transform cursor-pointer"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="text-white font-bold">{lead.name}</div>
        <button className="text-gray-400 hover:text-white">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm">
          <Phone className="h-3 w-3 text-gray-400" />
          <span className="text-gray-300">{lead.phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Car className="h-3 w-3 text-gray-400" />
          <span className="text-gray-300">{lead.vehicle}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <DollarSign className="h-3 w-3 text-gray-400" />
          <span className="text-success-400 font-bold">{lead.value}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${sourceColors[lead.source]}`}>
          {lead.source}
        </span>
        <span className="text-gray-400 text-xs">{lead.created}</span>
      </div>
    </motion.div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-white mb-2">Leads</h1>
          <p className="text-gray-300 font-medium">Manage your collision repair leads</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 glass-panel p-1">
            <button
              onClick={() => setViewMode('kanban')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'kanban' 
                  ? 'bg-primary-600/20 text-primary-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'table' 
                  ? 'bg-primary-600/20 text-primary-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, phone, or plate..."
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          {['Paid Ads', 'SEO', 'Referral', 'Direct'].map((source) => (
            <button
              key={source}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${sourceColors[source]}`}
            >
              {source}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {viewMode === 'kanban' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6 overflow-x-auto">
          {columns.map((column) => (
            <div key={column.id} className="min-w-72">
              <div className={`glass-panel p-4 border-t-4 ${column.color} mb-4`}>
                <h3 className="text-white font-black mb-2">{column.title}</h3>
                <div className="text-gray-400 text-sm">
                  {filteredLeads.filter(lead => lead.status === column.id).length} leads
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredLeads
                  .filter(lead => lead.status === column.id)
                  .map((lead) => (
                    <LeadCard key={lead.id} lead={lead} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-panel p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700/50">
                  <th className="text-left py-3 px-4 text-gray-400 font-bold">Name</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-bold">Contact</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-bold">Vehicle</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-bold">Source</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-bold">Status</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-bold">Value</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-bold">Created</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead, index) => (
                  <motion.tr
                    key={lead.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-700/30 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="text-white font-bold">{lead.name}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-gray-300 text-sm">{lead.phone}</div>
                      <div className="text-gray-400 text-xs">{lead.email}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-gray-300 text-sm">{lead.vehicle}</div>
                      <div className="text-gray-400 text-xs">{lead.plate}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${sourceColors[lead.source]}`}>
                        {lead.source}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-gray-300 text-sm">{lead.status}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-success-400 font-bold">{lead.value}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-gray-400 text-sm">{lead.created}</span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-gray-400 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default Leads
