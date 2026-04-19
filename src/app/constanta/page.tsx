import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import {
  FooterCTASection,
  Footer,
  FAQSection,
} from "@/sections";
import { ConstantaHeroSection } from "./_components/ConstantaHeroSection";
import { ConstantaWhatIsSection } from "./_components/ConstantaWhatIsSection";
import { ConstantaHowItWorksSection } from "./_components/ConstantaHowItWorksSection";
import { ConstantaAgendaSectionV2 } from "./_components/ConstantaAgendaSectionV2";
import { ConstantaMentorsSection } from "./_components/ConstantaMentorsSection";
import { ConstantaJudgesSection } from "./_components/ConstantaJudgesSection";
import { ConstantaContactSection } from "./_components/ConstantaContactSection";
import { ConstantaPartnersSection } from "./_components/ConstantaPartnersSection";
import { SITE_URL } from "@/lib/constants";
import { EVENTS } from "@/lib/events";
import { EventJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Startup Weekend Constanta | Startup Weekend Romania",
  description:
    "Join Startup Weekend Constanta! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real. Sign up now!",
  alternates: { canonical: `${SITE_URL}/constanta` },
  openGraph: {
    title: "Startup Weekend Constanta | Startup Weekend Romania",
    description:
      "Join Startup Weekend Constanta! Build a startup in 54 hours. Sign up now!",
    url: `${SITE_URL}/constanta`,
  },
};

export default function ConstantaPage() {
  const event = EVENTS.constanta;
  return (
    <div className="flex flex-col min-h-screen">
      <EventJsonLd
        name={event.name}
        url={`${SITE_URL}/constanta`}
        startDate={event.startDate}
        endDate={event.endDate}
        location={event.location}
        address={event.address}
        googleMapsUrl={event.googleMapsUrl}
        description="Join Startup Weekend Constanta! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real."
      />
      <Navbar />
      <ConstantaHeroSection />
      <ConstantaWhatIsSection />
      <ConstantaHowItWorksSection />
      <ConstantaAgendaSectionV2 />
      <ConstantaMentorsSection />
      <ConstantaJudgesSection />
      <ConstantaPartnersSection />
      <ConstantaContactSection />
      <FAQSection />
      <FooterCTASection />
      <Footer />
    </div>
  );
}
