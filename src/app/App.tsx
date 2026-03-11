import { useState } from "react";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ProductsSection } from "./components/products-section";
import { AdvantagesSection } from "./components/advantages-section";
import { LogosSection } from "./components/logos-section";
import { LogoVariantsSection } from "./components/logo-variants-section";
import { PresentationSection } from "./components/presentation-section";
import { SolutionsSection } from "./components/solutions-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { TelegramWidget } from "./components/telegram-widget";
import { InfoPopup } from "./components/info-popup";
import { AboutPage } from "./pages/about-page";
import { CatalogPage } from "./pages/catalog-page";
import { DeliveryPage } from "./pages/delivery-page";
import { PaymentPage } from "./pages/payment-page";
import { ContactsPage } from "./pages/contacts-page";
import { ProductCategoryPage } from "./pages/product-category-page";

type Page = "home" | "about" | "catalog" | "delivery" | "payment" | "contacts" | "product";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [infoPopupOpen, setInfoPopupOpen] = useState(false);
  const [infoPopupContent, setInfoPopupContent] = useState({ title: "", description: "" });

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openInfoPopup = (title: string, description: string) => {
    setInfoPopupContent({ title, description });
    setInfoPopupOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage />;
      case "catalog":
        return <CatalogPage onSelectCategory={(cat) => { setSelectedCategory(cat); navigateTo("product"); }} />;
      case "delivery":
        return <DeliveryPage />;
      case "payment":
        return <PaymentPage />;
      case "contacts":
        return <ContactsPage />;
      case "product":
        return <ProductCategoryPage categoryId={selectedCategory} onBack={() => navigateTo("catalog")} />;
      default:
        return (
          <>
            <HeroSection />
            <ProductsSection onSelectCategory={(cat) => { setSelectedCategory(cat); navigateTo("product"); }} />
            <AdvantagesSection />
            <LogosSection />
            <LogoVariantsSection />
            <PresentationSection />
            <SolutionsSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="app">
      <Header 
        currentPage={currentPage} 
        onNavigate={navigateTo}
        onOpenInfo={openInfoPopup}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <TelegramWidget />
      <InfoPopup 
        isOpen={infoPopupOpen} 
        onClose={() => setInfoPopupOpen(false)}
        content={infoPopupContent}
      />

      <style>{`
        .app {
          min-height: 100vh;
          background: var(--background-primary);
        }

        main {
          padding-top: 72px;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}
