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
import { DEFAULT_FAQS, type FAQ } from "@/lib/faqs";
import { SITE_URL } from "@/lib/constants";
import { EVENTS } from "@/lib/events";
import { EventJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Startup Weekend Iasi | Startup Weekend Romania",
  description:
    "Join Startup Weekend Iasi! Build a startup in one weekend. Developers, designers, and idea people come together to launch something real. Sign up now!",
  alternates: { canonical: `${SITE_URL}/iasi` },
  openGraph: {
    title: "Startup Weekend Iasi | Startup Weekend Romania",
    description:
      "Join Startup Weekend Iasi! Build a startup in one weekend. Sign up now!",
    url: `${SITE_URL}/iasi`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Weekend Iasi | Startup Weekend Romania",
    description: "Join Startup Weekend Iasi! Build a startup in one weekend. Sign up now!",
  },
};

// Iasi runs as a two-day edition (Saturday–Sunday), so adapt the shared copy.
const IASI_FAQ_ANSWERS: Record<string, string> = {
  "Do I need to come with an idea?":
    "Not at all! If you have an idea, you can pitch it on Saturday morning. If you don't, you can listen to others' pitches and join a team whose idea excites you.",
  "Can I join without a team?":
    "Yes, absolutely! The whole point of Saturday morning is to meet people, form teams around the best ideas, and start building together.",
  "How much does it cost to join? What does the ticket include?":
    "Tickets usually cover all your meals (5 meals!), snacks, endless coffee, and all the resources you need for the weekend. Plus, an awesome t-shirt!",
  "Can I work on my existing startup?":
    "Startup Weekend is designed to build something from scratch in one weekend. Existing businesses cannot be pitched, but you can always use the weekend to test a new spin-off idea!",
};

const IASI_FAQS: FAQ[] = DEFAULT_FAQS.map((faq) => ({
  ...faq,
  answer: IASI_FAQ_ANSWERS[faq.question] ?? faq.answer,
}));

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
        address={event.address}
        googleMapsUrl={event.googleMapsUrl}
        description="Join Startup Weekend Iasi! Build a startup in one weekend. Developers, designers, and idea people come together to launch something real."
      />
      <Navbar />
      <IasiHeroSection />
      <IasiWhatIsSection />
      <IasiHowItWorksSection />
      <IasiAgendaSection />
      <IasiMentorsSection />
      <IasiJudgesSection />
      <IasiContactSection />
      <FAQSection faqs={IASI_FAQS} />
      <FooterCTASection description="At Startup Weekend, developers, designers, marketers, and future founders come together to build something real. Pitch on Saturday morning, build all day, and present your startup on Sunday." />
      <Footer tagline="One weekend to build a startup. No fluff, just makers." />
    </div>
  );
}
