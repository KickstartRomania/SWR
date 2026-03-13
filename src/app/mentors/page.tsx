"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { FooterCTASection, Footer } from "@/sections";
import { useState } from "react";

type CityId = "bucharest" | "cluj" | "constanta" | "oradea" | "targu-jiu";

type Mentor = {
  name: string;
  image: string;
  position?: string;
  linkedInUrl?: string;
};

const CITIES: { id: CityId; label: string; folder: string }[] = [
  { id: "bucharest", label: "Bucharest", folder: "bucharest" },
  { id: "cluj", label: "Cluj", folder: "cluj" },
  { id: "constanta", label: "Constanța", folder: "constanta" },
  { id: "oradea", label: "Oradea", folder: "oradea" },
  // Folder on disk is "targujiu"
  { id: "targu-jiu", label: "Târgu Jiu", folder: "targujiu" },
];

const nameFromFilename = (filename: string) => {
  return filename
    .replace(/\.png$/i, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

const BUCURESTI_FILES = [
  "aleodor-tabarcea.png",
  "bogdan-litescu.png",
  "catalin-spiridon.png",
  "cosmin-cosma.png",
  "cristina-toncu.png",
  "florian-tufan.png",
  "ioana-anutoiu.png",
  "liviu-gherghescu.png",
  "petre-gherghinescu.png",
  "tiberiu-avramiuc.png",
  "vlad-andries.png",
];

const TARGU_JIU_FILES = [
  "adi-gheorghe.png",
  "alex-crac.png",
  "andreas-baschir.png",
  "bogdan-ionita.png",
  "bogdan-jufa.png",
  "cosmin-pirvu.png",
  "florian-usurelu.png",
  "george-bonea.png",
  "ionut-vasilica.png",
  "marius-mitroi.png",
  "mihail-olaru.png",
  "ovidiu-dinisor.png",
  "valentin-albu.png",
];

const mentorsByCity: Record<CityId, Mentor[]> = {
  bucharest: BUCURESTI_FILES.map((file) => ({
    name: nameFromFilename(file),
    image: `/images/bucharest/mentors/${file}`,
  })),
  cluj: [],
  constanta: [],
  oradea: [],
  "targu-jiu": TARGU_JIU_FILES.map((file) => ({
    name: nameFromFilename(file),
    image: `/images/targujiu/mentors/${file}`,
  })),
};

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      clipRule="evenodd"
    />
  </svg>
);

const AvatarPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  </div>
);

function MentorCard({
  mentor,
  index,
}: {
  mentor: Mentor;
  index: number;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="bg-[#fcfcfc] p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center group hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow"
    >
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-black mb-4 bg-gray-200 relative">
        {imageError ? (
          <AvatarPlaceholder />
        ) : (
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <h3 className="font-bold text-2xl mb-1">{mentor.name}</h3>
      {mentor.position && (
        <p className="text-sw-blue font-medium mb-4">{mentor.position}</p>
      )}
      {mentor.linkedInUrl && (
        <Link
          href={mentor.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${mentor.name} on LinkedIn`}
          className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-foreground hover:bg-sw-blue hover:text-white hover:border-sw-blue transition-colors"
        >
          <LinkedInIcon />
        </Link>
      )}
    </motion.div>
  );
}

export default function MentorsPage() {
  const [selectedCity, setSelectedCity] = useState<CityId>("bucharest");

  const selectedMentors = mentorsByCity[selectedCity] ?? [];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 w-full">
        <section className="w-full bg-white py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-heading font-bold text-4xl md:text-5xl mb-4"
              >
                Meet your mentors
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-medium text-xl text-foreground/70"
              >
                Expert guidance from mentors across our Startup Weekend cities
              </motion.p>
            </div>

            <div className="mb-10 sticky top-20 z-20 bg-white/90 backdrop-blur-sm">
              {/* Mobile: horizontal, scrollable list */}
              <div className="flex md:hidden gap-3 overflow-x-auto pb-2">
                {CITIES.map((city) => (
                  <button
                    key={city.id}
                    type="button"
                    onClick={() => setSelectedCity(city.id)}
                    className={`px-4 py-2 rounded-full border-2 border-black font-heading text-sm shadow-[3px_3px_0px_rgba(0,0,0,1)] whitespace-nowrap transition-all ${
                      selectedCity === city.id
                        ? "bg-sw-blue text-white"
                        : "bg-[#FEF9C3] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_rgba(0,0,0,1)]"
                    }`}
                  >
                    {city.label}
                  </button>
                ))}
              </div>

              {/* Desktop: horizontal row */}
              <div className="hidden md:flex flex-wrap justify-center gap-3">
                {CITIES.map((city) => (
                  <button
                    key={city.id}
                    type="button"
                    onClick={() => setSelectedCity(city.id)}
                    className={`px-4 py-2 rounded-full border-2 border-black font-heading text-base shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all ${
                      selectedCity === city.id
                        ? "bg-sw-blue text-white"
                        : "bg-[#FEF9C3] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_rgba(0,0,0,1)]"
                    }`}
                  >
                    {city.label}
                  </button>
                ))}
              </div>
            </div>

            {selectedMentors.length === 0 ? (
              <div className="text-center text-foreground/70 font-medium">
                Mentor lineup for this city is coming soon. Stay tuned!
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedMentors.map((mentor, index) => (
                  <MentorCard key={`${selectedCity}-${mentor.name}`} mentor={mentor} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <FooterCTASection />
      <Footer />
    </div>
  );
}
