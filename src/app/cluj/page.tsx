import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterCTASection, Footer } from "@/sections";
import { ClujHeroSection } from "./_components/ClujHeroSection";
import { ClujWhatIsSection } from "./_components/ClujWhatIsSection";
import { ClujHowItWorksSection } from "./_components/ClujHowItWorksSection";
import { ClujAgendaSection } from "./_components/ClujAgendaSection";
import { ClujMentorsSection } from "./_components/ClujMentorsSection";
import { ClujContactSection } from "./_components/ClujContactSection";
import { PartnersMarqueeSection } from "@/sections";
import { SITE_URL } from "@/lib/constants";
import { EVENTS } from "@/lib/events";
import { EventJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Startup Weekend Cluj | Startup Weekend Romania",
  description:
    "Join Startup Weekend Cluj! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real. Sign up now!",
  alternates: { canonical: `${SITE_URL}/cluj` },
  openGraph: {
    title: "Startup Weekend Cluj | Startup Weekend Romania",
    description:
      "Join Startup Weekend Cluj! Build a startup in 54 hours. Sign up now!",
    url: `${SITE_URL}/cluj`,
  },
};

export default function ClujPage() {
  const event = EVENTS.cluj;
  return (
    <div className="flex flex-col min-h-screen">
      <EventJsonLd
        name={event.name}
        url={`${SITE_URL}/cluj`}
        startDate={event.startDate}
        endDate={event.endDate}
        location={event.city}
        description="Join Startup Weekend Cluj! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real."
      />
      <Navbar />
      <ClujHeroSection />
      <ClujWhatIsSection />
      <ClujHowItWorksSection />
      <ClujAgendaSection />
      <ClujMentorsSection />
      <ClujContactSection />
      <PartnersMarqueeSection />
      <FooterCTASection />
      <Footer />
    </div>
  );
}
