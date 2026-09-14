import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import {
  FooterCTASection,
  Footer,
  FAQSection,
} from "@/sections";
import { IasiHeroSection } from "./_components/IasiHeroSection";
import { IasiWhatIsSection } from "./_components/IasiWhatIsSection";
import { IasiHowItWorksSection } from "./_components/IasiHowItWorksSection";
import { IasiAgendaSection } from "./_components/IasiAgendaSection";
import { IasiMentorsSection } from "./_components/IasiMentorsSection";
import { IasiJudgesSection } from "./_components/IasiJudgesSection";
import { IasiContactSection } from "./_components/IasiContactSection";
import { SITE_URL } from "@/lib/constants";
import { EVENTS } from "@/lib/events";
import { EventJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Startup Weekend Iasi | Startup Weekend Romania",
  description:
    "Join Startup Weekend Iasi! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real. Sign up now!",
  alternates: { canonical: `${SITE_URL}/iasi` },
  openGraph: {
    title: "Startup Weekend Iasi | Startup Weekend Romania",
    description:
      "Join Startup Weekend Iasi! Build a startup in 54 hours. Sign up now!",
    url: `${SITE_URL}/iasi`,
  },
};

export default function IasiPage() {
  const event = EVENTS.iasi;
  return (
    <div className="flex flex-col min-h-screen">
      <EventJsonLd
        name={event.name}
        url={`${SITE_URL}/iasi`}
        startDate={event.startDate}
        endDate={event.endDate}
        location={event.location}
        description="Join Startup Weekend Iasi! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real."
      />
      <Navbar />
      <IasiHeroSection />
      <IasiWhatIsSection />
      <IasiHowItWorksSection />
      <IasiAgendaSection />
      <IasiMentorsSection />
      <IasiJudgesSection />
      <IasiContactSection />
      <FAQSection />
      <FooterCTASection />
      <Footer />
    </div>
  );
}
