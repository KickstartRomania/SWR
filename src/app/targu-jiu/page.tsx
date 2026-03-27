import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterCTASection, Footer } from "@/sections";
import { TarguJiuHeroSection } from "./_components/TarguJiuHeroSection";
import { TarguJiuWhatIsSection } from "./_components/TarguJiuWhatIsSection";
import { TarguJiuHowItWorksSection } from "./_components/TarguJiuHowItWorksSection";
import { TarguJiuAgendaSection } from "./_components/TarguJiuAgendaSection";
import { TarguJiuMentorsSection } from "./_components/TarguJiuMentorsSection";
import { TarguJiuContactSection } from "./_components/TarguJiuContactSection";
import { PartnersMarqueeSection } from "@/sections";
import { SITE_URL } from "@/lib/constants";
import { EVENTS } from "@/lib/events";
import { EventJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Startup Weekend Târgu Jiu | Startup Weekend Romania",
  description:
    "Join Startup Weekend Târgu Jiu! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real. Sign up now!",
  alternates: { canonical: `${SITE_URL}/targu-jiu` },
  openGraph: {
    title: "Startup Weekend Târgu Jiu | Startup Weekend Romania",
    description:
      "Join Startup Weekend Târgu Jiu! Build a startup in 54 hours. Sign up now!",
    url: `${SITE_URL}/targu-jiu`,
  },
};

export default function TarguJiuPage() {
  const event = EVENTS["targu-jiu"];
  return (
    <div className="flex flex-col min-h-screen">
      <EventJsonLd
        name={event.name}
        url={`${SITE_URL}/targu-jiu`}
        startDate={event.startDate}
        endDate={event.endDate}
        location={event.city}
        description="Join Startup Weekend Târgu Jiu! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real."
      />
      <Navbar />
      <TarguJiuHeroSection />
      <TarguJiuWhatIsSection />
      <TarguJiuHowItWorksSection />
      <TarguJiuAgendaSection />
      <TarguJiuMentorsSection />
      <TarguJiuContactSection />
      <PartnersMarqueeSection />
      <FooterCTASection />
      <Footer />
    </div>
  );
}
