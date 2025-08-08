import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, Target, Users } from 'lucide-react'

const Results = () => {
  const [counters, setCounters] = useState({
    conversion: 0,
    jobs: 0,
    setup: 0,
    response: 0
  })

  const finalValues = {
    conversion: 37,
    jobs: 5,
    setup: 15,
    response: 24
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCounters(prev => ({
        conversion: Math.min(prev.conversion + 1, finalValues.conversion),
        jobs: Math.min(prev.jobs + 1, finalValues.jobs),
        setup: Math.min(prev.setup + 1, finalValues.setup),
        response: Math.min(prev.response + 1, finalValues.response)
      }))
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      icon: TrendingUp,
      value: `+${counters.conversion}%`,
      label: "Higher conversion on stale estimates",
      color: "text-green-400"
    },
    {
      icon: Target,
      value: `${counters.jobs}`,
      label: "More booked jobs per week",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      value: `${counters.setup}min`,
      label: "Setup time required",
      color: "text-accent-500"
    },
    {
      icon: Users,
      value: `${counters.response}/7`,
      label: "Lead response availability",
      color: "text-purple-400"
    }
  ]

  return (
    <section id="results" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Results That Matter
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
            Real numbers from collision shops using LeadBrain
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 text-center hover:scale-105 transition-transform duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-6 group-hover:scale-110 transition-transform`} />
              </motion.div>
              <motion.div 
                className={`text-4xl font-black ${stat.color} mb-2`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-300 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-panel p-12 max-w-4xl mx-auto border-accent-500/30">
            <blockquote className="text-2xl md:text-3xl text-white font-bold italic mb-8">
              "LeadBrain turned our old CCC estimates into <span className="text-accent-500">$47,000</span> in booked work in the first month. 
              It's like having a sales person who never sleeps."
            </blockquote>
            <div className="text-white font-black text-xl">
              Mike Rodriguez, Owner
            </div>
            <div className="text-gray-400 font-semibold">
              Elite Collision Center
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Results
