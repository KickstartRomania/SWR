import { Navbar } from "@/components/Navbar";
import { FooterCTASection, Footer } from "@/sections";
import { OradeaHeroSection } from "./_components/OradeaHeroSection";
import { OradeaAgendaSection } from "./_components/OradeaAgendaSection";
import { OradeaMentorsSection } from "./_components/OradeaMentorsSection";
import { OradeaContactSection } from "./_components/OradeaContactSection";
import { PartnersMarqueeSection } from "@/sections";

export default function OradeaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <OradeaHeroSection />
      <OradeaAgendaSection />
      <OradeaMentorsSection />
      <OradeaContactSection />
      <PartnersMarqueeSection />
      <FooterCTASection />
      <Footer />
    </div>
  );
}
