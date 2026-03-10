# PowerShell скрипт для создания страниц Plato-Intel v3

$basePath = "f:\Work\platointel\v3\app\(main)"

# Создаем директории
$dirs = @("catalog", "about", "contacts", "expert", "lab", "selection")
foreach ($dir in $dirs) {
    $dirPath = Join-Path $basePath $dir
    if (!(Test-Path $dirPath)) {
        New-Item -ItemType Directory -Path $dirPath -Force | Out-Null
    }
    Write-Host "Директория: $dir"
}

# catalog/page.tsx
$catalogContent = @"
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ProductCard } from '@/components/catalog/ProductCard'
import { CategoryFilter } from '@/components/catalog/CategoryFilter'

const categories = [
  { id: 'all', name: 'Все категории' },
  { id: 'circuit-breakers', name: 'Автоматические выключатели' },
  { id: 'contactors', name: 'Контакторы' },
  { id: 'crane-brakes', name: 'Крановые тормоза' },
  { id: 'limit-switches', name: 'Выключатели концевые' },
  { id: 'electromagnets', name: 'Электромагниты' },
  { id: 'controllers', name: 'Командоконтроллеры' },
  { id: 'relays', name: 'Реле' },
  { id: 'hydro-thrusters', name: 'Гидротолкатели' },
]

const products = [
  { id: 1, name: 'Автоматический выключатель ВА57-35', category: 'circuit-breakers', price: 'от 1 250 BYN', image: '/images/products/va57-35.jpg', description: 'Автоматический выключатель для защиты электрических цепей', inStock: true },
  { id: 2, name: 'Контактор КТ 6043', category: 'contactors', price: 'от 890 BYN', image: '/images/products/kt6043.jpg', description: 'Контактор электромагнитный крановый', inStock: true },
  { id: 3, name: 'Крановый тормоз ТКТ-300', category: 'crane-brakes', price: 'от 2 100 BYN', image: '/images/products/tkt300.jpg', description: 'Тормоз крановый электромагнитный', inStock: true },
  { id: 4, name: 'Выключатель концевой ВК-200', category: 'limit-switches', price: 'от 450 BYN', image: '/images/products/vk200.jpg', description: 'Выключатель концевой для кранового оборудования', inStock: true },
  { id: 5, name: 'Электромагнит МИС 310', category: 'electromagnets', price: 'от 1 800 BYN', image: '/images/products/mis310.jpg', description: 'Электромагнит крановый переменного тока', inStock: false },
  { id: 6, name: 'Командоконтроллер ККП-60', category: 'controllers', price: 'от 3 200 BYN', image: '/images/products/kkp60.jpg', description: 'Контроллер крановый командный', inStock: true },
]

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Каталог продукции', href: '/catalog' }]} />
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Каталог продукции</h1>
            <p className="text-gray-600 mb-8">Электротехническое и крановое оборудование с доставкой по всей Республике Беларусь</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0"><CategoryFilter categories={categories} selectedCategory="all" /></aside>
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (<ProductCard key={product.id} product={product} />))}
              </div>
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">← Назад</button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Вперёд →</button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
"@
Set-Content -Path "$basePath\catalog\page.tsx" -Value $catalogContent -Encoding UTF8
Write-Host "✓ catalog/page.tsx"

# about/page.tsx
$aboutContent = @"
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'О компании', href: '/about' }]} />
          <div className="max-w-4xl mx-auto mt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">О компании ООО «ПЛАТО-ИНТЕЛ»</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">ООО «ПЛАТО-ИНТЕЛ» — надежный поставщик электротехнического и кранового оборудования на рынке Республики Беларусь с 2002 года.</p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <p className="text-lg font-medium text-blue-900">«Новые планки честной и профессиональной торговли»</p>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Наша миссия</h2>
              <p className="text-gray-700 mb-4">Мы стремимся обеспечить белорусские предприятия качественным электротехническим и крановым оборудованием, предоставляя полный спектр услуг: от подбора до сервисного обслуживания.</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Почему выбирают нас</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Более 20 лет успешной работы на рынке Беларуси</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Сертифицированная продукция по ГОСТ</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Гарантия до 12 месяцев на всё оборудование</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Доставка по всей Республике Беларусь</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Профессиональная консультация и помощь в подборе</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Выгодные цены и гибкая система скидок</span></li>
              </ul>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Наш ассортимент</h2>
              <p className="text-gray-700 mb-4">Мы предлагаем широкий спектр электротехнического и кранового оборудования:</p>
              <ul className="grid md:grid-cols-2 gap-3 mb-8">
                <li className="text-gray-700">• Автоматические выключатели</li>
                <li className="text-gray-700">• Контакторы электромагнитные</li>
                <li className="text-gray-700">• Крановые тормоза</li>
                <li className="text-gray-700">• Выключатели концевые</li>
                <li className="text-gray-700">• Электромагниты крановые</li>
                <li className="text-gray-700">• Командоконтроллеры</li>
                <li className="text-gray-700">• Реле различных типов</li>
                <li className="text-gray-700">• Гидротолкатели</li>
              </ul>
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Контакты</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Адрес:</strong> г. Минск, ул. М. Лынькова 85, корп.6, офис 20</p>
                <p className="text-gray-700 mb-2"><strong>Телефон:</strong> +375 (17) 399-31-23 (многоканальный)</p>
                <p className="text-gray-700 mb-2"><strong>Мобильный:</strong> +375 (29) 615-56-72 (А1)</p>
                <p className="text-gray-700 mb-2"><strong>Email:</strong> plato-intel@yandex.ru</p>
                <p className="text-gray-700"><strong>График работы:</strong> Пн-Пт 9:00-17:00</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
"@
Set-Content -Path "$basePath\about\page.tsx" -Value $aboutContent -Encoding UTF8
Write-Host "✓ about/page.tsx"

# contacts/page.tsx
$contactsContent = @"
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ContactForm } from '@/components/forms/ContactForm'

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Контакты', href: '/contacts' }]} />
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Контакты</h1>
            <p className="text-gray-600 mb-12">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div><h3 className="font-semibold text-gray-900 mb-1">Адрес</h3><p className="text-gray-600">г. Минск, ул. М. Лынькова 85, корп.6, офис 20</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div><h3 className="font-semibold text-gray-900 mb-1">Телефоны</h3><p className="text-gray-600">+375 (17) 399-31-23 (многоканальный)</p><p className="text-gray-600">+375 (29) 615-56-72 (А1)</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div><h3 className="font-semibold text-gray-900 mb-1">Email</h3><p className="text-gray-600">plato-intel@yandex.ru</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div><h3 className="font-semibold text-gray-900 mb-1">График работы</h3><p className="text-gray-600">Пн-Пт: 9:00 - 17:00</p><p className="text-gray-600">Сб-Вс: Выходной</p></div>
                </div>
              </div>
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Интерактивная карта (Яндекс.Карты или Google Maps)</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Напишите нам</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
"@
Set-Content -Path "$basePath\contacts\page.tsx" -Value $contactsContent -Encoding UTF8
Write-Host "✓ contacts/page.tsx"

# expert/page.tsx
$expertContent = @"
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

const expertArticles = [
  { id: 1, title: 'Как выбрать автоматический выключатель для кранового оборудования', excerpt: 'Подробное руководство по подбору автоматических выключателей', date: '15 февраля 2026', author: 'Александр Петренко', category: 'Подбор оборудования', readTime: '8 мин' },
  { id: 2, title: 'Сравнение крановых тормозов ТКТ и ТКП: что выбрать', excerpt: 'Анализ технических характеристик крановых тормозов', date: '10 февраля 2026', author: 'Александр Петренко', category: 'Обзоры', readTime: '6 мин' },
  { id: 3, title: 'ГОСТы и стандарты для электротехнического оборудования', excerpt: 'Обзор государственных стандартов и требований', date: '5 февраля 2026', author: 'Александр Петренко', category: 'Нормативы', readTime: '10 мин' },
  { id: 4, title: 'Типичные ошибки при эксплуатации контакторов', excerpt: 'Разбор ошибок монтажа и эксплуатации', date: '1 февраля 2026', author: 'Александр Петренко', category: 'Эксплуатация', readTime: '7 мин' },
]

export default function ExpertPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Экспертное мнение', href: '/expert' }]} />
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Экспертное мнение</h1>
            <p className="text-gray-600 mb-12">Статьи, обзоры и рекомендации от наших специалистов</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Александр Петренко</h2>
                <p className="text-blue-600 font-medium mb-3">Ведущий технический специалист, стаж 15 лет</p>
                <p className="text-gray-600 max-w-2xl">Эксперт в области электротехнического и кранового оборудования. Помогаю предприятиям Беларуси подбирать оптимальное оборудование и решать сложные технические задачи с 2011 года.</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {expertArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">{article.category}</span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <button className="text-blue-600 font-medium hover:text-blue-700">Читать далее →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 bg-blue-600 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Нужна консультация эксперта?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Свяжитесь с нами для получения профессиональной консультации по подбору и эксплуатации оборудования</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50">Заказать звонок</button>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600">Написать вопрос</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
"@
Set-Content -Path "$basePath\expert\page.tsx" -Value $expertContent -Encoding UTF8
Write-Host "✓ expert/page.tsx"

# lab/page.tsx
$labContent = @"
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export default function LabPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Лаборатория', href: '/lab' }]} />
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Собственная лаборатория</h1>
            <p className="text-gray-600 mb-12">Контроль качества и тестирование оборудования</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">ООО «ПЛАТО-ИНТЕЛ» располагает собственной испытательной лабораторией для контроля качества поступающего оборудования и проведения предпродажной подготовки.</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Наши возможности</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Входной контроль</h3>
                  <p className="text-gray-600 text-sm">Проверка соответствия продукции заявленным характеристикам и ГОСТ</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Испытания</h3>
                  <p className="text-gray-600 text-sm">Электрические и механические испытания оборудования</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Сертификация</h3>
                  <p className="text-gray-600 text-sm">Подготовка документов для подтверждения соответствия</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Диагностика</h3>
                  <p className="text-gray-600 text-sm">Выявление дефектов и неисправностей оборудования</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Консультации</h3>
                  <p className="text-gray-600 text-sm">Технические консультации по эксплуатации и обслуживанию</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Документация</h3>
                  <p className="text-gray-600 text-sm">Протоколы испытаний и паспорта качества</p>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Оборудование лаборатории</h2>
              <p className="text-gray-700 mb-4">Наша лаборатория оснащена современным оборудованием для проведения полного цикла испытаний:</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Установки для проверки электрической прочности изоляции</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Приборы для измерения сопротивления контактов</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Стенды для механических испытаний крановых тормозов</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Тепловизоры для контроля температурных режимов</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 text-xl">✓</span><span className="text-gray-700">Приборы для проверки времени срабатывания защит</span></li>
              </ul>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Услуги лаборатории</h2>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <p className="text-gray-700 mb-4">Мы предлагаем услуги лаборатории как для собственной продукции, так и для оборудования сторонних производителей:</p>
                <ul className="space-y-2">
                  <li className="text-gray-700">• Предпродажная подготовка и проверка</li>
                  <li className="text-gray-700">• Диагностика неисправностей</li>
                  <li className="text-gray-700">• Экспертиза качества</li>
                  <li className="text-gray-700">• Консультации по эксплуатации</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-blue-600 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Нужна экспертиза оборудования?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Наши специалисты проведут диагностику и предоставят подробное заключение</p>
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50">Заказать консультацию</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
"@
Set-Content -Path "$basePath\lab\page.tsx" -Value $labContent -Encoding UTF8
Write-Host "✓ lab/page.tsx"

# selection/page.tsx
$selectionContent = @"
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { SelectionForm } from '@/components/forms/SelectionForm'

export default function SelectionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Подбор оборудования', href: '/selection' }]} />
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Подбор оборудования</h1>
            <p className="text-gray-600 mb-12">Поможем подобрать оптимальное оборудование под ваши задачи</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Как мы подбираем оборудование</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Анализ задачи</h3>
                      <p className="text-gray-600">Изучаем технические требования, условия эксплуатации и особенности вашего оборудования</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Подбор аналогов</h3>
                      <p className="text-gray-600">Предлагаем несколько вариантов оборудования с разными характеристиками и ценами</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Техническое обоснование</h3>
                      <p className="text-gray-600">Предоставляем расчёты и обоснование выбора конкретного оборудования</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Коммерческое предложение</h3>
                      <p className="text-gray-600">Формируем КП с ценами, сроками поставки и условиями гарантии</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-600 rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Почему стоит обратиться к нам</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><span className="text-blue-200 text-xl">✓</span><span>Более 20 лет опыта подбора оборудования</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-200 text-xl">✓</span><span>Знание ГОСТ и технических требований</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-200 text-xl">✓</span><span>Широкий ассортимент (370+ позиций)</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-200 text-xl">✓</span><span>Собственная лаборатория для проверки</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-200 text-xl">✓</span><span>Гарантия до 12 месяцев</span></li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-sm p-8 sticky top-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Заявка на подбор</h2>
                <p className="text-gray-600 mb-6">Заполните форму, и наш специалист свяжется с вами в течение 1 часа</p>
                <SelectionForm />
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Основные категории оборудования</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Автоматические выключатели', count: '45+ моделей', icon: '⚡' },
                { name: 'Контакторы', count: '32 модели', icon: '🔌' },
                { name: 'Крановые тормоза', count: '28 моделей', icon: '🛑' },
                { name: 'Выключатели концевые', count: '36 моделей', icon: '🔘' },
                { name: 'Электромагниты', count: '24 модели', icon: '🧲' },
                { name: 'Командоконтроллеры', count: '18 моделей', icon: '🎮' },
                { name: 'Реле', count: '52 модели', icon: '📟' },
                { name: 'Гидротолкатели', count: '15 моделей', icon: '⚙️' },
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-500 text-sm">{category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
"@
Set-Content -Path "$basePath\selection\page.tsx" -Value $selectionContent -Encoding UTF8
Write-Host "✓ selection/page.tsx"

Write-Host "`n=========================================="
Write-Host "ВСЕГО СОЗДАНО ФАЙЛОВ: 6"
Write-Host "=========================================="
Write-Host "  • catalog/page.tsx"
Write-Host "  • about/page.tsx"
Write-Host "  • contacts/page.tsx"
Write-Host "  • expert/page.tsx"
Write-Host "  • lab/page.tsx"
Write-Host "  • selection/page.tsx"
Write-Host "=========================================="
