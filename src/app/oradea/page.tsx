import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterCTASection, Footer } from "@/sections";
import { OradeaHeroSection } from "./_components/OradeaHeroSection";
import { OradeaWhatIsSection } from "./_components/OradeaWhatIsSection";
import { OradeaHowItWorksSection } from "./_components/OradeaHowItWorksSection";
import { OradeaAgendaSection } from "./_components/OradeaAgendaSection";
import { OradeaMentorsSection } from "./_components/OradeaMentorsSection";
import { OradeaContactSection } from "./_components/OradeaContactSection";
import { PartnersMarqueeSection } from "@/sections";
import { SITE_URL } from "@/lib/constants";
import { EVENTS } from "@/lib/events";
import { EventJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Startup Weekend Oradea | Startup Weekend Romania",
  description:
    "Join Startup Weekend Oradea! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real. Sign up now!",
  alternates: { canonical: `${SITE_URL}/oradea` },
  openGraph: {
    title: "Startup Weekend Oradea | Startup Weekend Romania",
    description:
      "Join Startup Weekend Oradea! Build a startup in 54 hours. Sign up now!",
    url: `${SITE_URL}/oradea`,
  },
};

export default function OradeaPage() {
  const event = EVENTS.oradea;
  return (
    <div className="flex flex-col min-h-screen">
      <EventJsonLd
        name={event.name}
        url={`${SITE_URL}/oradea`}
        startDate={event.startDate}
        endDate={event.endDate}
        location={event.city}
        description="Join Startup Weekend Oradea! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real."
      />
      <Navbar />
      <OradeaHeroSection />
      <OradeaWhatIsSection />
      <OradeaHowItWorksSection />
      <OradeaAgendaSection />
      <OradeaMentorsSection />
      <OradeaContactSection />
      <PartnersMarqueeSection />
      <FooterCTASection />
      <Footer />
    </div>
  );
}
