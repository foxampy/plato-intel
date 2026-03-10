'use client'

import { motion } from 'framer-motion'
import { Zap, Settings, Gauge, Shield, Box, Clipboard } from 'lucide-react'
import Link from 'next/link'

const categories = [
  { slug: 'circuit-breakers', name: 'Автоматические выключатели', icon: Zap, count: 45 },
  { slug: 'contactors', name: 'Контакторы', icon: Settings, count: 32 },
  { slug: 'crane-brakes', name: 'Крановые тормоза', icon: Gauge, count: 28 },
  { slug: 'limit-switches', name: 'Выключатели концевые', icon: Shield, count: 38 },
  { slug: 'electromagnets', name: 'Электромагниты', icon: Box, count: 24 },
  { slug: 'command-controllers', name: 'Командоконтроллеры', icon: Clipboard, count: 18 },
]

export function CatalogSection() {
  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Каталог продукции</h2>
          <p className="text-sm text-gray-500">372 наименования оборудования</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/catalog/${cat.slug}`} className="card block h-full p-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-3">
                  <cat.icon className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-sm font-semibold mb-1 line-clamp-2">{cat.name}</h3>
                <div className="text-xs text-gray-500">{cat.count} товаров</div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link href="/catalog" className="btn-primary inline-flex items-center gap-2">
            Весь каталог
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}
