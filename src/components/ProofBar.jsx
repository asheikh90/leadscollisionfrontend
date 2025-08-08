import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const ProofBar = () => {
  return (
    <section className="py-12 bg-white/5 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-accent-500 fill-current" />
            ))}
          </div>
          <p className="text-xl md:text-2xl text-white font-bold mb-8">
            Collision operators who close more jobs while doing less chasing
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-gray-300 font-bold text-lg">AutoBody Pro</div>
            <div className="text-gray-300 font-bold text-lg">Collision Masters</div>
            <div className="text-gray-300 font-bold text-lg">Premier Repair</div>
            <div className="text-gray-300 font-bold text-lg">Elite Collision</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProofBar
