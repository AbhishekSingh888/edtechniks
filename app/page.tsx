import CtaSection from "@/components/home/cta-section";
import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/service-section";
import StatsSection from "@/components/home/stat-section";
import WhyChooseUsSection from "@/components/home/why-choose-us";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <div className="pt-16">
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <WhyChooseUsSection />
        <CtaSection />
        <Footer />
      </div>
      <ScrollToTop />
    </main>
  )
}
