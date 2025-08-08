import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon,
  Clock,
  User,
  Car,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'

const Calendar = () => {
  const [currentWeek, setCurrentWeek] = useState(0)
  const [selectedSlot, setSelectedSlot] = useState(null)

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ]

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  const appointments = {
    'Monday-9:00 AM': {
      customer: 'Sarah Johnson',
      vehicle: '2019 Toyota Camry',
      service: 'Front bumper repair',
      status: 'confirmed',
      phone: '(555) 123-4567'
    },
    'Tuesday-10:30 AM': {
      customer: 'Mike Rodriguez',
      vehicle: '2020 Honda Accord',
      service: 'Rear panel paint',
      status: 'pending',
      phone: '(555) 234-5678'
    },
    'Wednesday-2:00 PM': {
      customer: 'Lisa Chen',
      vehicle: '2018 Subaru Outback',
      service: 'Door replacement',
      status: 'confirmed',
      phone: '(555) 345-6789'
    },
    'Thursday-11:00 AM': {
      customer: 'David Wilson',
      vehicle: '2021 Ford F-150',
      service: 'Bed liner repair',
      status: 'no-show',
      phone: '(555) 456-7890'
    },
    'Friday-3:30 PM': {
      customer: 'Jennifer Davis',
      vehicle: '2017 BMW 3 Series',
      service: 'Full body work',
      status: 'confirmed',
      phone: '(555) 567-8901'
    }
  }

  const statusColors = {
    'confirmed': 'bg-green-500/20 border-green-500/50 text-green-400',
    'pending': 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400',
    'no-show': 'bg-red-500/20 border-red-500/50 text-red-400'
  }

  const statusIcons = {
    'confirmed': CheckCircle,
    'pending': AlertCircle,
    'no-show': XCircle
  }

  const handleSlotAction = (action, slotKey) => {
    console.log(`${action} for slot:`, slotKey)
    // Mock toast notification
    const actions = {
      book: 'Appointment booked successfully!',
      confirm: 'Appointment confirmed!',
      noshow: 'Marked as no-show'
    }
    
    // In a real app, this would update the backend
    alert(actions[action])
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-white mb-2">Calendar</h1>
          <p className="text-gray-300 font-medium">Manage appointments and availability</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentWeek(currentWeek - 1)}
            className="p-2 glass-panel hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-gray-400" />
          </button>
          <div className="text-white font-bold">This Week</div>
          <button
            onClick={() => setCurrentWeek(currentWeek + 1)}
            className="p-2 glass-panel hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-panel p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">12</div>
              <div className="text-gray-400 font-medium">This Week</div>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">3</div>
              <div className="text-gray-400 font-medium">Pending</div>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <XCircle className="h-6 w-6 text-red-400" />
            </div>
            <div>
              <div className="text-2xl font-black text-white">1</div>
              <div className="text-gray-400 font-medium">No-Shows</div>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-6">
          <div className="text-center">
            <div className="text-primary-400 font-bold text-sm mb-1">2–5 more cars/week</div>
            <div className="text-gray-400 text-xs">AI booking impact</div>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="glass-panel p-6">
        <div className="grid grid-cols-6 gap-4">
          {/* Header */}
          <div className="text-gray-400 font-bold text-sm">Time</div>
          {weekDays.map((day) => (
            <div key={day} className="text-white font-bold text-center">{day}</div>
          ))}
          
          {/* Time slots */}
          {timeSlots.map((time) => (
            <React.Fragment key={time}>
              <div className="text-gray-400 text-sm font-medium py-2">{time}</div>
              {weekDays.map((day) => {
                const slotKey = `${day}-${time}`
                const appointment = appointments[slotKey]
                
                return (
                  <div key={slotKey} className="min-h-16">
                    {appointment ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`p-3 rounded-xl border cursor-pointer hover:scale-105 transition-transform ${statusColors[appointment.status]}`}
                        onClick={() => setSelectedSlot({ ...appointment, slotKey })}
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          {React.createElement(statusIcons[appointment.status], { 
                            className: "h-3 w-3" 
                          })}
                          <span className="font-bold text-xs">{appointment.customer}</span>
                        </div>
                        <div className="text-xs opacity-75">{appointment.vehicle}</div>
                      </motion.div>
                    ) : (
                      <button
                        onClick={() => handleSlotAction('book', slotKey)}
                        className="w-full h-full min-h-16 border-2 border-dashed border-gray-600 hover:border-primary-500 rounded-xl flex items-center justify-center text-gray-500 hover:text-primary-400 transition-colors"
                      >
                        <span className="text-xs font-medium">Available</span>
                      </button>
                    )}
                  </div>
                )
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Appointment Details Modal */}
      {selectedSlot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-8 max-w-md w-full mx-4"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-white">Appointment Details</h3>
              <button
                onClick={() => setSelectedSlot(null)}
                className="text-gray-400 hover:text-white"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-white font-bold">{selectedSlot.customer}</div>
                  <div className="text-gray-400 text-sm">{selectedSlot.phone}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Car className="h-5 w-5 text-gray-400" />
                <div className="text-gray-300">{selectedSlot.vehicle}</div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-400" />
                <div className="text-gray-300">{selectedSlot.service}</div>
              </div>
              
              <div className="flex items-center space-x-3">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
                <div className="text-gray-300">{selectedSlot.slotKey.replace('-', ' at ')}</div>
              </div>
              
              <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-lg ${statusColors[selectedSlot.status]}`}>
                {React.createElement(statusIcons[selectedSlot.status], { 
                  className: "h-4 w-4" 
                })}
                <span className="font-medium capitalize">{selectedSlot.status}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {selectedSlot.status === 'pending' && (
                <button
                  onClick={() => {
                    handleSlotAction('confirm', selectedSlot.slotKey)
                    setSelectedSlot(null)
                  }}
                  className="flex-1 btn-primary"
                >
                  Confirm
                </button>
              )}
              {selectedSlot.status === 'confirmed' && (
                <button
                  onClick={() => {
                    handleSlotAction('noshow', selectedSlot.slotKey)
                    setSelectedSlot(null)
                  }}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-xl transition-colors"
                >
                  Mark No-Show
                </button>
              )}
              <button
                onClick={() => setSelectedSlot(null)}
                className="flex-1 btn-secondary"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Calendar
