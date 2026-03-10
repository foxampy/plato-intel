import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { CatalogSection } from '@/components/sections/CatalogSection'
import { AdvantagesSection } from '@/components/sections/AdvantagesSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { TrustSection } from '@/components/sections/TrustSection'
import { TelegramChat } from '@/components/layout/TelegramChat'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CatalogSection />
        <AdvantagesSection />
        <AboutSection />
        <TrustSection />
        <CtaSection />
      </main>
      <Footer />
      <TelegramChat />
    </>
  )
}
