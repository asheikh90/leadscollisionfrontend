import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Upload, 
  Search, 
  Filter,
  FileImage,
  FileText,
  Download,
  Eye,
  Trash2
} from 'lucide-react'

const Files = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const files = [
    {
      id: 1,
      name: 'front_damage_camry.jpg',
      type: 'image',
      size: '2.4 MB',
      uploaded: '2 hours ago',
      leadName: 'Sarah Johnson',
      vehicle: '2019 Toyota Camry',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'insurance_claim_GC445789.pdf',
      type: 'document',
      size: '156 KB',
      uploaded: '4 hours ago',
      leadName: 'Sarah Johnson',
      vehicle: '2019 Toyota Camry'
    },
    {
      id: 3,
      name: 'rear_bumper_accord.jpg',
      type: 'image',
      size: '1.8 MB',
      uploaded: '1 day ago',
      leadName: 'Mike Rodriguez',
      vehicle: '2020 Honda Accord',
      thumbnail: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=200&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'estimate_outback_repair.pdf',
      type: 'document',
      size: '89 KB',
      uploaded: '1 day ago',
      leadName: 'Lisa Chen',
      vehicle: '2018 Subaru Outback'
    },
    {
      id: 5,
      name: 'side_panel_f150.jpg',
      type: 'image',
      size: '3.1 MB',
      uploaded: '2 days ago',
      leadName: 'David Wilson',
      vehicle: '2021 Ford F-150',
      thumbnail: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=200&h=150&fit=crop'
    },
    {
      id: 6,
      name: 'before_after_bmw.jpg',
      type: 'image',
      size: '2.7 MB',
      uploaded: '3 days ago',
      leadName: 'Jennifer Davis',
      vehicle: '2017 BMW 3 Series',
      thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=150&fit=crop'
    }
  ]

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.leadName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = selectedFilter === 'all' || file.type === selectedFilter
    
    return matchesSearch && matchesFilter
  })

  const FileCard = ({ file }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel p-4 hover:scale-105 transition-transform cursor-pointer group"
    >
      <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
        {file.type === 'image' && file.thumbnail ? (
          <img 
            src={file.thumbnail} 
            alt={file.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center">
            {file.type === 'image' ? (
              <FileImage className="h-8 w-8 text-primary-400" />
            ) : (
              <FileText className="h-8 w-8 text-accent-400" />
            )}
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
          <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <Eye className="h-4 w-4 text-white" />
          </button>
          <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <Download className="h-4 w-4 text-white" />
          </button>
          <button className="p-2 bg-red-500/20 rounded-lg hover:bg-red-500/30 transition-colors">
            <Trash2 className="h-4 w-4 text-red-400" />
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="text-white font-bold text-sm truncate">{file.name}</div>
        <div className="text-gray-400 text-xs">{file.size} • {file.uploaded}</div>
        <div className="text-gray-300 text-xs">
          <div className="font-medium">{file.leadName}</div>
          <div className="text-gray-400">{file.vehicle}</div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-white mb-2">Files</h1>
          <p className="text-gray-300 font-medium">Manage photos, documents, and estimates</p>
        </div>
        
        <button className="btn-cta flex items-center space-x-2">
          <Upload className="h-5 w-5" />
          <span>Upload Files</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-panel p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <FileImage className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">48</div>
              <div className="text-gray-400 font-medium">Total Images</div>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
              <FileText className="h-6 w-6 text-accent-400" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">12</div>
              <div className="text-gray-400 font-medium">Documents</div>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <Upload className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">156</div>
              <div className="text-gray-400 font-medium">MB Used</div>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-6">
          <div className="text-center">
            <div className="text-success-400 font-bold text-sm mb-1">Auto-organized</div>
            <div className="text-gray-400 text-xs">by lead & vehicle</div>
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
            placeholder="Search files, customers, vehicles..."
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          {[
            { key: 'all', label: 'All Files' },
            { key: 'image', label: 'Images' },
            { key: 'document', label: 'Documents' }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                selectedFilter === filter.key
                  ? 'bg-primary-600/20 text-primary-400 border border-primary-500/30'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Files Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {filteredFiles.map((file, index) => (
          <div key={file.id} className="relative">
            <FileCard file={file} />
          </div>
        ))}
      </div>

      {filteredFiles.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-700/50 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-gray-500" />
          </div>
          <div className="text-gray-400 font-medium">No files found</div>
          <div className="text-gray-500 text-sm">Try adjusting your search or filters</div>
        </div>
      )}
    </div>
  )
}

export default Files
