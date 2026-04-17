"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Mentor = {
  name: string;
  company: string;
  image?: string;
  linkedIn?: string;
};

const mentors: Mentor[] = [
  {
    name: "Cosmin Pirvu",
    company: "Veridion",
    image: "/images/constanta/mentors/cosmin-pirvu.png",
    linkedIn: "https://www.linkedin.com/in/cosminpirvu/",
  },
  {
    name: "George Faraunu",
    company: "featherless.ai",
    image: "/images/constanta/mentors/george-faraunu.png",
    linkedIn: "https://www.linkedin.com/in/george-farauanu/",
  },
  {
    name: "Paul Burca",
    company: "Assista",
    image: "/images/constanta/mentors/paul-burca.jpg",
    linkedIn: "https://www.linkedin.com/in/burcapaul/",
  },
  {
    name: "Catalin Cenac",
    company: "OKAPI",
    image: "/images/constanta/mentors/catalin-cenac.jpg",
    linkedIn: "https://www.linkedin.com/in/gcatalin/",
  },
  {
    name: "Teodora Moraru",
    company: "Ambasada.pro",
    image: "/images/constanta/mentors/teodora-moraru.jpg",
    linkedIn: "https://www.linkedin.com/in/teodora-moraru-7582bb183/",
  },
  {
    name: "Costin Sorici",
    company: "Neuron English",
    image: "/images/constanta/mentors/costin-sorici.jpg",
    linkedIn: "https://www.linkedin.com/in/costin-sorici-888904/",
  },
  {
    name: "Daniel Draga",
    company: "Platform as a Service",
    image: "/images/constanta/mentors/daniel-draga.jpeg",
    linkedIn: "https://www.linkedin.com/in/daniel-draga/",
  },
  {
    name: "Catalin Draga",
    company: "KubeSage",
    image: "/images/constanta/mentors/catalin-draga.jpeg",
    linkedIn: "https://www.linkedin.com/in/catalin-draga/",
  },
  {
    name: "Mihai Dragan",
    company: "Oveit",
    image: "/images/constanta/mentors/mihai-dragan.jpeg",
    linkedIn: "https://www.linkedin.com/in/mihaidragan/",
  },
  {
    name: "Cosmin Budinschi",
    company: "Software Architect",
    image: "/images/constanta/mentors/cosmin-budinschi.jpeg",
    linkedIn: "https://www.linkedin.com/in/budinschi/",
  },
];

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const AvatarPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center text-gray-400">
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  </div>
);

function MentorCard({ mentor, index }: { mentor: Mentor; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      key={mentor.name}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.05,
        rotate: index % 2 === 0 ? -1 : 1,
        y: -10,
        boxShadow: "8px 10px 0px 0px rgba(0,0,0,1)",
      }}
      className="bg-[#fcfcfc] p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center transition-all duration-300 relative group cursor-pointer"
    >
      {mentor.linkedIn && (
        <Link
          href={mentor.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`${mentor.name} on LinkedIn`}
          className="absolute top-4 right-4 w-9 h-9 rounded-full border-2 border-black flex items-center justify-center text-foreground hover:bg-sw-blue hover:text-white hover:border-sw-blue transition-colors duration-200 z-10"
        >
          <LinkedInIcon />
        </Link>
      )}

      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-black mb-4 bg-gray-200 relative group-hover:border-sw-blue transition-colors duration-300">
        {!mentor.image || imageError ? (
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

      <h3 className="font-bold text-2xl mb-1 group-hover:text-sw-blue transition-colors">{mentor.name}</h3>
      <p className="text-sw-blue font-medium">{mentor.company}</p>
    </motion.div>
  );
}

export function ConstantaMentorsSection() {
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#1A1A1B 2px, transparent 2px)", backgroundSize: "32px 32px" }}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 relative inline-block">
            Meet your mentors
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300 -z-10 transform -rotate-2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ originX: 0 }}
            />
          </h2>
          <p className="font-medium text-xl text-foreground/70 mt-6">Expert guidance to help you build and validate your idea</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <MentorCard key={mentor.name} mentor={mentor} index={index} />
          ))}

          {/* Teaser card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: mentors.length * 0.1, type: "spring", stiffness: 100 }}
            className="bg-[#fcfcfc] p-6 rounded-2xl border-2 border-dashed border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center text-center gap-3 min-h-[220px]"
          >
            <div className="w-14 h-14 rounded-full border-2 border-dashed border-black flex items-center justify-center text-foreground/30">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="font-heading font-bold text-xl text-foreground/50">More mentors</p>
            <p className="font-medium text-foreground/40">announced soon</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
