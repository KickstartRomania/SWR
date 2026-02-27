import { Navbar } from "@/components/Navbar";
import { FooterCTASection } from "@/sections";
import { BucharestHeroSection } from "./_components/BucharestHeroSection";
import { BucharestAgendaSection } from "./_components/BucharestAgendaSection";
import { BucharestMentorsSection } from "./_components/BucharestMentorsSection";
import { BucharestContactSection } from "./_components/BucharestContactSection";
import { PartnersMarqueeSection } from "@/sections";

export default function BucharestPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <BucharestHeroSection />
      <BucharestAgendaSection />
      <BucharestMentorsSection />
      <BucharestContactSection />
      <PartnersMarqueeSection />
      <FooterCTASection />
    </div>
  );
}
