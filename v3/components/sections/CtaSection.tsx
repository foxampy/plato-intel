'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Send } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Нужна помощь с выбором?</h2>
          <p className="text-sm text-gray-500 mb-6">Оставьте заявку — специалист свяжется в течение 15 минут</p>

          <div className="card p-4 sm:p-5">
            <form className="grid gap-3">
              <input type="text" placeholder="Ваше имя" className="input" />
              <input type="tel" placeholder="Телефон" className="input" />
              <button type="submit" className="btn-primary flex items-center justify-center gap-2 w-full">
                <Send className="w-4 h-4" />
                <span>Отправить</span>
              </button>
            </form>

            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
              <a href="tel:+375173993123" className="flex items-center gap-1.5 text-gray-600 hover:text-amber-600 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                +375 (17) 399-31-23
              </a>
              <a href="mailto:info@plato-intel.by" className="flex items-center gap-1.5 text-gray-600 hover:text-amber-600 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                info@plato-intel.by
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
