import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { DoodleButton } from "@/components/DoodleButton";
import { FooterCTASection, Footer } from "@/sections";
import { SITE_URL } from "@/lib/constants";
import { PAST_EVENTS, type PastEvent } from "@/lib/past-events";

export const metadata: Metadata = {
  title: "Past Events | Startup Weekend Romania",
  description:
    "Every Techstars Startup Weekend we have organized across Romania since 2023, in Bucharest, Constanța, Târgu Jiu, Cluj-Napoca and Oradea.",
  alternates: { canonical: `${SITE_URL}/past-events` },
  openGraph: {
    title: "Past Events | Startup Weekend Romania",
    description:
      "Every Techstars Startup Weekend we have organized across Romania since 2023.",
    url: `${SITE_URL}/past-events`,
  },
};

const YEAR_ROTATIONS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

function groupByYear(events: PastEvent[]) {
  const groups = new Map<string, PastEvent[]>();
  for (const event of [...events].sort((a, b) => b.startDate.localeCompare(a.startDate))) {
    const year = event.startDate.slice(0, 4);
    groups.set(year, [...(groups.get(year) ?? []), event]);
  }
  return [...groups.entries()];
}

function EventCard({ event }: { event: PastEvent }) {
  const isExternal = event.href.startsWith("http");

  return (
    <Link
      href={event.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group bg-[#fcfcfc] p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading font-bold text-2xl md:text-3xl group-hover:text-sw-blue transition-colors">
          {event.city}
        </h3>
        <span aria-hidden="true" className="text-xl text-foreground/40 group-hover:text-sw-blue transition-colors">
          {isExternal ? "↗" : "→"}
        </span>
      </div>

      {event.note && (
        <span className="self-start text-sm font-bold uppercase tracking-wider bg-sw-blue-washed border-2 border-black rounded-full px-3 py-0.5">
          {event.note}
        </span>
      )}

      <p className="font-medium text-lg text-sw-blue">{event.dates}</p>

      {event.venue && (
        <p className="flex items-center gap-2 text-foreground/70">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {event.venue}
        </p>
      )}
    </Link>
  );
}

export default function PastEventsPage() {
  const years = groupByYear(PAST_EVENTS);
  const cityCount = new Set(PAST_EVENTS.map((event) => event.city)).size;
  const firstYear = years[years.length - 1][0];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16 md:mb-20">
          <span className="font-hand text-2xl md:text-3xl text-sw-blue rotate-[-2deg] block mb-4">
            {PAST_EVENTS.length} editions · {cityCount} cities · since {firstYear}
          </span>
          <h1 className="font-heading font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight relative inline-block">
            Past events
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300 -z-10 transform -rotate-2" aria-hidden="true" />
          </h1>
          <p className="mt-8 font-medium text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Every Techstars Startup Weekend we&apos;ve organized across Romania. 54 hours each, from first pitch to final demo.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {years.map(([year, events], index) => (
            <section key={year} aria-labelledby={`year-${year}`}>
              <div className="flex items-center gap-4 mb-8">
                <h2
                  id={`year-${year}`}
                  className={`font-heading font-black text-3xl md:text-4xl bg-sw-navy text-white border-2 border-black rounded-xl px-5 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${YEAR_ROTATIONS[index % YEAR_ROTATIONS.length]}`}
                >
                  {year}
                </h2>
                <div className="flex-1 h-0 border-b-[3px] border-dashed border-black/20" />
                <span className="font-hand text-xl text-foreground/60">
                  {events.length} {events.length === 1 ? "edition" : "editions"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {events.map((event) => (
                  <EventCard key={`${event.city}-${event.startDate}`} event={event} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="font-heading font-bold text-2xl md:text-3xl mb-6">Want to be part of the next one?</p>
          <DoodleButton variant="cta" href="/#next-events">
            See upcoming events
          </DoodleButton>
        </div>
      </main>

      <FooterCTASection />
      <Footer />
    </div>
  );
}
