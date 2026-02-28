import { Navbar } from "@/components/Navbar";
import { FooterCTASection, Footer } from "@/sections";
import { ConstantaHeroSection } from "./_components/ConstantaHeroSection";
import { ConstantaAgendaSection } from "./_components/ConstantaAgendaSection";
import { ConstantaMentorsSection } from "./_components/ConstantaMentorsSection";
import { ConstantaContactSection } from "./_components/ConstantaContactSection";
import { ConstantaPartnersSection } from "./_components/ConstantaPartnersSection";

export default function ConstantaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ConstantaHeroSection />
      <ConstantaAgendaSection />
      <ConstantaMentorsSection />
      <ConstantaContactSection />
      <ConstantaPartnersSection />
      <FooterCTASection />
      <Footer />
    </div>
  );
}
