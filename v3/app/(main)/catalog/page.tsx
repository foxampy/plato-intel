import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-white">Каталог </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dispatcher-amber to-dispatcher-amber-glow">продукции</span>
          </h1>
          <p className="text-gray-400 mb-8">Более 372 наименований электротехнического оборудования</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Автоматические выключатели', count: 45 },
              { name: 'Контакторы', count: 32 },
              { name: 'Крановые тормоза', count: 28 },
              { name: 'Выключатели концевые', count: 38 },
              { name: 'Электромагниты', count: 24 },
              { name: 'Командоконтроллеры', count: 18 },
            ].map((cat) => (
              <div key={cat.name} className="p-6 bg-dispatcher-gray border border-dispatcher-steel rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">{cat.name}</h3>
                <p className="text-sm text-gray-400">{cat.count} товаров</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
