import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Send,
  Paperclip,
  User,
  Car,
  CreditCard,
  Calendar,
  FileText
} from 'lucide-react'

const Inbox = () => {
  const [selectedConversation, setSelectedConversation] = useState(0)
  const [message, setMessage] = useState('')

  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      lastMessage: 'When can I bring my car in?',
      time: '2 min ago',
      channel: 'SMS',
      unread: 2,
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      lastMessage: 'Got the quote, looks good!',
      time: '15 min ago',
      channel: 'WhatsApp',
      unread: 0,
      avatar: 'MR'
    },
    {
      id: 3,
      name: 'Lisa Chen',
      lastMessage: 'Insurance approved the claim',
      time: '1 hour ago',
      channel: 'Email',
      unread: 1,
      avatar: 'LC'
    },
    {
      id: 4,
      name: 'David Wilson',
      lastMessage: 'Can you send more photos?',
      time: '3 hours ago',
      channel: 'Teams',
      unread: 0,
      avatar: 'DW'
    }
  ]

  const messages = [
    {
      id: 1,
      type: 'customer',
      text: 'Hi, I need a quote for my 2019 Toyota Camry',
      time: '10:30 AM',
      avatar: 'SJ'
    },
    {
      id: 2,
      type: 'ai',
      text: 'Hey Sarah! I\'m Ali from Collision Club. I can definitely help with that. What kind of damage are we looking at?',
      time: '10:31 AM'
    },
    {
      id: 3,
      type: 'customer',
      text: 'Front bumper and headlight from a fender bender',
      time: '10:32 AM',
      avatar: 'SJ'
    },
    {
      id: 4,
      type: 'ai',
      text: 'Got it. Are you going through insurance or paying cash?',
      time: '10:33 AM'
    },
    {
      id: 5,
      type: 'customer',
      text: 'Insurance - Geico',
      time: '10:34 AM',
      avatar: 'SJ'
    },
    {
      id: 6,
      type: 'ai',
      text: 'Perfect! We work with Geico all the time. For a 2019 Camry front end repair, you\'re looking at $2,100-$2,600. We handle all the paperwork. Want to schedule a time to bring it in?',
      time: '10:35 AM'
    },
    {
      id: 7,
      type: 'customer',
      text: 'When can I bring my car in?',
      time: '10:45 AM',
      avatar: 'SJ'
    }
  ]

  const quickReplies = ['Cash', 'Insurance', 'Fleet', 'Send Photos Link']

  const leadProfile = {
    name: 'Sarah Johnson',
    phone: '(555) 123-4567',
    email: 'sarah.j@email.com',
    vehicle: '2019 Toyota Camry, Silver',
    payerType: 'Insurance - Geico',
    claimNumber: 'GC445789',
    estimatedValue: '$2,100 - $2,600'
  }

  const channelColors = {
    SMS: 'bg-blue-500',
    WhatsApp: 'bg-green-500',
    Email: 'bg-purple-500',
    Teams: 'bg-indigo-500',
    Slack: 'bg-red-500'
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6">
      {/* Conversations List */}
      <div className="w-80 glass-panel p-4 flex flex-col">
        <h2 className="text-xl font-black text-white mb-4">Conversations</h2>
        <div className="flex-1 space-y-2 overflow-y-auto">
          {conversations.map((conv, index) => (
            <motion.div
              key={conv.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedConversation(index)}
              className={`p-4 rounded-xl cursor-pointer transition-all ${
                selectedConversation === index
                  ? 'bg-primary-600/20 border border-primary-500/30'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {conv.avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{conv.name}</div>
                    <div className="flex items-center space-x-2">
                      <span className={`w-2 h-2 ${channelColors[conv.channel]} rounded-full`}></span>
                      <span className="text-gray-400 text-xs">{conv.channel}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-400 text-xs">{conv.time}</div>
                  {conv.unread > 0 && (
                    <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">
                      {conv.unread}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-gray-300 text-sm truncate">{conv.lastMessage}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Thread */}
      <div className="flex-1 glass-panel p-6 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-700/50 mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
              {conversations[selectedConversation].avatar}
            </div>
            <div>
              <div className="text-white font-bold">{conversations[selectedConversation].name}</div>
              <div className="flex items-center space-x-2">
                <span className={`w-2 h-2 ${channelColors[conversations[selectedConversation].channel]} rounded-full`}></span>
                <span className="text-gray-400 text-sm">{conversations[selectedConversation].channel}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex ${msg.type === 'customer' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`flex items-start space-x-2 max-w-xs ${msg.type === 'customer' ? '' : 'flex-row-reverse space-x-reverse'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.type === 'customer' 
                    ? 'bg-gray-600 text-white font-bold text-xs' 
                    : 'bg-gradient-to-r from-primary-500 to-accent-500'
                }`}>
                  {msg.type === 'customer' ? msg.avatar : 'AI'}
                </div>
                <div className={`p-3 rounded-2xl ${
                  msg.type === 'customer' 
                    ? 'bg-white/10 text-white' 
                    : 'bg-primary-600/20 text-white border border-primary-500/30'
                }`}>
                  <div className="text-sm">{msg.text}</div>
                  <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Replies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => setMessage(reply)}
              className="px-3 py-1 bg-white/10 hover:bg-primary-600/20 text-gray-300 hover:text-white rounded-lg text-sm transition-colors"
            >
              {reply}
            </button>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Paperclip className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
          />
          <button className="btn-primary p-2">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Lead Profile */}
      <div className="w-80 glass-panel p-6">
        <h3 className="text-xl font-black text-white mb-6">Lead Profile</h3>
        
        <div className="space-y-6">
          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wide">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-400" />
                <span className="text-white font-medium">{leadProfile.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">{leadProfile.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">{leadProfile.email}</span>
              </div>
            </div>
          </div>

          {/* Vehicle Info */}
          <div>
            <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wide">Vehicle</h4>
            <div className="flex items-center space-x-2">
              <Car className="h-4 w-4 text-gray-400" />
              <span className="text-white font-medium">{leadProfile.vehicle}</span>
            </div>
          </div>

          {/* Payment Info */}
          <div>
            <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wide">Payment</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-4 w-4 text-gray-400" />
                <span className="text-white font-medium">{leadProfile.payerType}</span>
              </div>
              <div className="text-gray-300 text-sm">Claim: {leadProfile.claimNumber}</div>
              <div className="text-success-400 font-bold">{leadProfile.estimatedValue}</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wide">Quick Actions</h4>
            <div className="space-y-2">
              <button className="w-full btn-primary flex items-center justify-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Draft Quote</span>
              </button>
              <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Book Slot</span>
              </button>
              <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span>Day-Before Check-in</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inbox
