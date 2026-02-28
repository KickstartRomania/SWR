import { Navbar } from "@/components/Navbar";
import { FooterCTASection, Footer } from "@/sections";
import { TarguJiuHeroSection } from "./_components/TarguJiuHeroSection";
import { TarguJiuAgendaSection } from "./_components/TarguJiuAgendaSection";
import { TarguJiuMentorsSection } from "./_components/TarguJiuMentorsSection";
import { TarguJiuContactSection } from "./_components/TarguJiuContactSection";
import { PartnersMarqueeSection } from "@/sections";

export default function TarguJiuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <TarguJiuHeroSection />
      <TarguJiuAgendaSection />
      <TarguJiuMentorsSection />
      <TarguJiuContactSection />
      <PartnersMarqueeSection />
      <FooterCTASection />
      <Footer />
    </div>
  );
}
