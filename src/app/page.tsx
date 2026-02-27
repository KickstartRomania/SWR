import { Navbar } from "@/components/Navbar";
import {
  HeroSection,
  BentoStatsSection,
  PartnersMarqueeSection,
  EventsSection,
  WhatIsStartupWeekendSection,
  HowItWorksSection,
  BenefitsSection,
  TestimonialsSection,
  FAQSection,
  FooterCTASection,
} from "@/sections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />

      <HeroSection />
      <BentoStatsSection />
      <PartnersMarqueeSection />
      <EventsSection />
      <WhatIsStartupWeekendSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterCTASection />
      
    </div>
  );
}
