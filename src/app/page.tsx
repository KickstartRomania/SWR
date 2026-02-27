import { DoodleButton } from "@/components/DoodleButton";
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
      
      {/* Navbar (Placeholder) */}
      <header className="w-full flex items-center justify-between p-6 md:px-12 relative z-10">
        <div className="font-heading font-bold text-2xl tracking-tight">
          Startup Weekend
        </div>
        <nav className="hidden md:flex gap-6 font-bold">
          <a href="#" className="hover:text-sw-blue transition-colors">Cities</a>
          <a href="#" className="hover:text-sw-blue transition-colors">Past Events</a>
          <a href="#" className="hover:text-sw-blue transition-colors">Host</a>
        </nav>
        <DoodleButton variant="nav">Get Tickets</DoodleButton>
      </header>

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
