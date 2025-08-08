import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import ProofBar from './components/ProofBar'
import BeforeAfter from './components/BeforeAfter'
import LiveChatDemo from './components/LiveChatDemo'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Results from './components/Results'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyBottomBar from './components/StickyBottomBar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header />
      <Hero />
      <ProofBar />
      <BeforeAfter />
      <LiveChatDemo />
      <Features />
      <HowItWorks />
      <Results />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyBottomBar />
    </div>
  )
}

export default App
