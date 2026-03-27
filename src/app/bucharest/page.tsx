import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterCTASection, Footer } from "@/sections";
import { BucharestHeroSection } from "./_components/BucharestHeroSection";
import { BucharestWhatIsSection } from "./_components/BucharestWhatIsSection";
import { BucharestMentorsSection } from "./_components/BucharestMentorsSection";
import { BucharestContactSection } from "./_components/BucharestContactSection";
import { BucharestHowItWorksSection } from "./_components/BucharestHowItWorksSection";
import { PartnersMarqueeSection } from "@/sections";
import { SITE_URL } from "@/lib/constants";
import { EVENTS } from "@/lib/events";
import { EventJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Startup Weekend Bucharest | Startup Weekend Romania",
  description:
    "Join Startup Weekend Bucharest! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real. Sign up now!",
  alternates: { canonical: `${SITE_URL}/bucharest` },
  openGraph: {
    title: "Startup Weekend Bucharest | Startup Weekend Romania",
    description:
      "Join Startup Weekend Bucharest! Build a startup in 54 hours. Sign up now!",
    url: `${SITE_URL}/bucharest`,
  },
};

export default function BucharestPage() {
  const event = EVENTS.bucharest;
  return (
    <div className="flex flex-col min-h-screen">
      <EventJsonLd
        name={event.name}
        url={`${SITE_URL}/bucharest`}
        startDate={event.startDate}
        endDate={event.endDate}
        location={event.city}
        description="Join Startup Weekend Bucharest! Build a startup in 54 hours. Developers, designers, and idea people come together to launch something real."
      />
      <Navbar />
      <BucharestHeroSection />
      <BucharestWhatIsSection />
      <BucharestHowItWorksSection />
      {/* <BucharestMentorsSection /> */}
      <BucharestContactSection />
      <PartnersMarqueeSection />
      <FooterCTASection />
      <Footer />
    </div>
  );
}
