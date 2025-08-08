import React from 'react'
import { Zap, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-sm border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-accent-500" />
              <span className="text-xl font-black text-white">LeadBrain Collision</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md font-medium">
              AI-powered lead conversion built specifically for collision repair shops. 
              Turn more estimates into booked jobs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>hello@leadbraincollision.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>267-212-1034</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-4">Product</h4>
            <div className="space-y-2">
              <a href="#features" className="block text-gray-400 hover:text-white transition-colors font-medium">Features</a>
              <a href="#demo" className="block text-gray-400 hover:text-white transition-colors font-medium">Demo</a>
              <a href="#results" className="block text-gray-400 hover:text-white transition-colors font-medium">Results</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-medium">Integrations</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-4">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-medium">About</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-medium">Blog</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-medium">Support</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-medium">
            © 2024 LeadBrain Collision. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
