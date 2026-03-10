import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: { default: 'ПЛАТО-ИНТЕЛ | Электротехническое и крановое оборудование в Минске', template: '%s | ПЛАТО-ИНТЕЛ' },
  description: 'Поставка электротехнического и кранового оборудования с гарантией 12 месяцев. Доставка по всей Беларуси. Работаем с 2002 года. ☎ +375 (17) 399-31-23',
  keywords: ['электротехническое оборудование', 'крановое оборудование', 'автоматические выключатели', 'контакторы', 'крановые тормоза', 'Минск', 'Беларусь', 'ГОСТ', 'ПЛАТО-ИНТЕЛ'],
  authors: [{ name: 'ООО «ПЛАТО-ИНТЕЛ»' }],
  creator: 'ООО «ПЛАТО-ИНТЕЛ»',
  publisher: 'ООО «ПЛАТО-ИНТЕЛ»',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'ru_BY',
    url: 'https://plato-intel.by',
    siteName: 'ПЛАТО-ИНТЕЛ',
    title: 'ПЛАТО-ИНТЕЛ | Электротехническое и крановое оборудование',
    description: 'Поставка оборудования с гарантией 12 месяцев. Доставка по всей Беларуси.',
  },
  icons: { icon: '/favicon.ico', shortcut: '/favicon-16x16.png', apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
  alternates: { canonical: 'https://plato-intel.by' },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ООО «ПЛАТО-ИНТЕЛ»",
  "url": "https://plato-intel.by",
  "description": "Поставка электротехнического и кранового оборудования",
  "foundingDate": "2002",
  "address": { "@type": "PostalAddress", "streetAddress": "ул. М. Лынькова 85, корп.6, офис 20", "addressLocality": "Минск", "addressCountry": "BY" },
  "contactPoint": { "@type": "ContactPoint", "telephone": "+375-17-399-31-23", "contactType": "sales" }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className="min-h-screen bg-dispatcher-black text-white antialiased">
        <div className="relative min-h-screen">
          <div className="fixed inset-0 dispatcher-grid pointer-events-none" />
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] dispatcher-glow pointer-events-none opacity-50" />
          <div className="relative">{children}</div>
        </div>
      </body>
    </html>
  )
}
