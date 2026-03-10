import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container py-8 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-bold text-gray-900 mb-2 block">
              plato-intel
            </Link>
            <p className="text-xs text-gray-500 mb-3">
              Электротехническое оборудование с доставкой по Беларуси
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="indicator" />
              Работаем с 2002 года
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Каталог</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/catalog/circuit-breakers" className="text-gray-500 hover:text-amber-600 transition-colors">Автоматические выключатели</Link></li>
              <li><Link href="/catalog/contactors" className="text-gray-500 hover:text-amber-600 transition-colors">Контакторы</Link></li>
              <li><Link href="/catalog/crane-brakes" className="text-gray-500 hover:text-amber-600 transition-colors">Крановые тормоза</Link></li>
              <li><Link href="/catalog" className="text-amber-600 font-medium">Весь каталог →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Компания</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="text-gray-500 hover:text-amber-600 transition-colors">О компании</Link></li>
              <li><Link href="/lab" className="text-gray-500 hover:text-amber-600 transition-colors">Лаборатория</Link></li>
              <li><Link href="/expert" className="text-gray-500 hover:text-amber-600 transition-colors">Эксперт</Link></li>
              <li><Link href="/contacts" className="text-gray-500 hover:text-amber-600 transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Контакты</h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500">Минск, ул. М. Лынькова 85</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <a href="tel:+375173993123" className="text-gray-500 hover:text-amber-600 transition-colors">+375 (17) 399-31-23</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-500">Пн-Пт 9:00-17:00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <a href="mailto:info@plato-intel.by" className="text-gray-500 hover:text-amber-600 transition-colors">info@plato-intel.by</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-6 sm:mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <div>© {currentYear} ООО «ПЛАТО-ИНТЕЛ»</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-amber-600 transition-colors">Политика конфиденциальности</Link>
            <span className="flex items-center gap-1.5">
              <span className="indicator" />
              Сайт работает
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
