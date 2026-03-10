'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3">О компании</h2>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              ООО «ПЛАТО-ИНТЕЛ» работает на рынке электротехнического оборудования с 2002 года.
              За более чем 20 лет мы стали надежным партнером для сотен предприятий Беларуси.
            </p>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Специализируемся на поставках кранового и электротехнического оборудования
              для промышленных предприятий и строительных организаций.
            </p>
            <Link href="/about" className="btn-primary text-sm">
              Узнать больше
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="card p-4 text-center">
              <div className="text-xl font-bold text-amber-500">✓</div>
              <div className="text-xs text-gray-500 mt-1">Сертифицировано</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-xl font-bold text-amber-500">✓</div>
              <div className="text-xs text-gray-500 mt-1">Свой склад</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-xl font-bold text-amber-500">✓</div>
              <div className="text-xs text-gray-500 mt-1">Доставка по РБ</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-xl font-bold text-amber-500">✓</div>
              <div className="text-xs text-gray-500 mt-1">Гарантия</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
