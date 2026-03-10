'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Truck, Award } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-8 sm:py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Левая колонка */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <div className="badge mb-4">
              <span className="indicator" />
              Работаем с 2002 года
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-4">
              Электротехническое и крановое оборудование с гарантией 12 месяцев
            </h1>

            <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-lg">
              Поставка сертифицированного оборудования по всей Беларуси. 
              <span className="text-amber-600 font-medium"> Доставка за 3 дня.</span>
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/catalog" className="btn-primary inline-flex items-center gap-2">
                В каталог
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/selection" className="px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:border-amber-500 hover:text-amber-600 transition-colors">
                Подобрать оборудование
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Гарантия 12 месяцев</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-500" />
                <span>Доставка по Беларуси</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>ГОСТ сертификат</span>
              </div>
            </div>
          </motion.div>

          {/* Правая колонка - статистика */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            <StatCard value="20+" label="лет на рынке" />
            <StatCard value="372" label="товара в каталоге" />
            <StatCard value="500+" label="клиентов" />
            <StatCard value="100%" label="гарантия" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="card text-center p-4 sm:p-5">
      <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  )
}
