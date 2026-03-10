'use client'

import { motion } from 'framer-motion'
import { Award, Truck, Shield, Clock, Users, FileCheck } from 'lucide-react'

const advantages = [
  { icon: Award, title: '20+ лет на рынке', description: 'Работаем с 2002 года' },
  { icon: Truck, title: 'Доставка по Беларуси', description: 'Оперативная доставка' },
  { icon: Shield, title: 'Гарантия 12 месяцев', description: 'Полная гарантия' },
  { icon: Clock, title: 'Отгрузка за 24 часа', description: 'Товары в наличии' },
  { icon: Users, title: 'Профи команда', description: 'Квалифицированные специалисты' },
  { icon: FileCheck, title: 'Сертификаты ГОСТ', description: 'Вся продукция сертифицирована' },
]

export function AdvantagesSection() {
  return (
    <section className="py-8 sm:py-12">
      <div className="container">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Почему выбирают нас</h2>
          <p className="text-sm text-gray-500">Технологии, проверенные временем</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {advantages.map((adv, i) => (
            <motion.div 
              key={adv.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card p-4 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                <adv.icon className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-sm font-semibold mb-1">{adv.title}</h3>
              <p className="text-xs text-gray-500">{adv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
