import { Navbar } from "@/components/Navbar";
import { FooterCTASection, Footer } from "@/sections";
import { ClujHeroSection } from "./_components/ClujHeroSection";
import { ClujAgendaSection } from "./_components/ClujAgendaSection";
import { ClujMentorsSection } from "./_components/ClujMentorsSection";
import { ClujContactSection } from "./_components/ClujContactSection";
import { PartnersMarqueeSection } from "@/sections";

export default function ClujPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ClujHeroSection />
      <ClujAgendaSection />
      <ClujMentorsSection />
      <ClujContactSection />
      <PartnersMarqueeSection />
      <FooterCTASection />
      <Footer />
    </div>
  );
}
