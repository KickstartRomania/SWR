import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterCTASection, Footer } from "@/sections";
import { ConstantaHeroSection } from "./_components/ConstantaHeroSection";
import { ConstantaAgendaSection } from "./_components/ConstantaAgendaSection";
import { ConstantaMentorsSection } from "./_components/ConstantaMentorsSection";
import { ConstantaContactSection } from "./_components/ConstantaContactSection";
import { ConstantaPartnersSection } from "./_components/ConstantaPartnersSection";
import { SITE_URL } from "@/lib/constants";
import { EVENTS } from "@/lib/events";
import { EventJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Startup Weekend Constanța | Startup Weekend Romania",
  description:
    "Join Startup Weekend Constanța! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real. Sign up now!",
  alternates: { canonical: `${SITE_URL}/constanta` },
  openGraph: {
    title: "Startup Weekend Constanța | Startup Weekend Romania",
    description:
      "Join Startup Weekend Constanța! Build a startup in 54 hours. Sign up now!",
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
        description="Join Startup Weekend Constanța! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real."
      />
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
