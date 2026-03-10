import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ProductsSection } from "./components/products-section";
import { AdvantagesSection } from "./components/advantages-section";
import { SolutionsSection } from "./components/solutions-section";
import { DigitalTransformation } from "./components/digital-transformation";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { SupportChat } from "./components/support-chat";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("/");

  const handleNavigate = (page: string) => {
    if (page === "/transformation") {
      window.location.href = "/transformation.html";
    } else if (page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (currentPage !== "/") {
    return null;
  }

  return (
    <div className="app">
      <Header onNavigate={handleNavigate} />
      <main>
        <HeroSection />
        <ProductsSection />
        <AdvantagesSection />
        <SolutionsSection />
        <DigitalTransformation onNavigate={handleNavigate} />
        <ContactSection />
      </main>
      <Footer />
      <SupportChat />

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