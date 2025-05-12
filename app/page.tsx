import CtaSection from "@/components/home/cta-section";
import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/service-section";
import StatsSection from "@/components/home/stat-section";
import WhyChooseUsSection from "@/components/home/why-choose-us";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="pt-16">
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <WhyChooseUsSection />
        <CtaSection />
      </div>
    </main>
  )
}
