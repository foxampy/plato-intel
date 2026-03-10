'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '20+', label: 'лет на рынке' },
  { value: '372', label: 'товара' },
  { value: '500+', label: 'клиентов' },
  { value: '100%', label: 'гарантия' },
]

export function TrustSection() {
  return (
    <section className="py-8 sm:py-12">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Нам доверяют</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-amber-500 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
