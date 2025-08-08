import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, Target, Users } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "+37%",
      label: "Conversion on stale estimates",
      color: "text-green-400"
    },
    {
      icon: Target,
      value: "2-5",
      label: "More booked jobs per week",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      value: "<15min",
      label: "Setup time required",
      color: "text-accent-500"
    },
    {
      icon: Users,
      value: "24/7",
      label: "Lead response time",
      color: "text-purple-400"
    }
  ]

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Results That Matter
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real numbers from collision shops using LeadBrain
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-6`} />
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-6">
              "LeadBrain turned our old CCC estimates into $47,000 in booked work in the first month. 
              It's like having a sales person who never sleeps."
            </blockquote>
            <div className="text-white font-semibold">
              Mike Rodriguez, Owner
            </div>
            <div className="text-gray-400">
              Elite Collision Center
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
