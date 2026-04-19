"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Judge = {
  name: string;
  company: string;
  image?: string;
  linkedIn?: string;
};

const judges: Judge[] = [
  {
    name: "Paul Burca",
    company: "Assista",
    image: "/images/constanta/mentors/paul-burca.jpg",
    linkedIn: "https://www.linkedin.com/in/burcapaul/",
  },
  {
    name: "Oana Radu",
    company: "CiTyINNOHub",
    image: "/images/constanta/mentors/oana-radu.jpeg",
    linkedIn: "https://www.linkedin.com/in/raduoanaroxana/",
  },
  {
    name: "George Serban",
    company: "Monsson Alma",
    image: "/images/constanta/mentors/george-serban.jpeg",
    linkedIn: "https://www.linkedin.com/in/georgeserban/",
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

function JudgeCard({ judge, index }: { judge: Judge; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      key={judge.name}
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
      {judge.linkedIn && (
        <Link
          href={judge.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`${judge.name} on LinkedIn`}
          className="absolute top-4 right-4 w-9 h-9 rounded-full border-2 border-black flex items-center justify-center text-foreground hover:bg-sw-blue hover:text-white hover:border-sw-blue transition-colors duration-200 z-10"
        >
          <LinkedInIcon />
        </Link>
      )}

      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-black mb-4 bg-gray-200 relative group-hover:border-sw-blue transition-colors duration-300">
        {!judge.image || imageError ? (
          <AvatarPlaceholder />
        ) : (
          <Image
            src={judge.image}
            alt={judge.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <h3 className="font-bold text-2xl mb-1 group-hover:text-sw-blue transition-colors">{judge.name}</h3>
      <p className="text-sw-blue font-medium">{judge.company}</p>
    </motion.div>
  );
}

export function ConstantaJudgesSection() {
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
            Meet your judges
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300 -z-10 transform -rotate-2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ originX: 0 }}
            />
          </h2>
          <p className="font-medium text-xl text-foreground/70 mt-6">Industry experts who will evaluate your final pitches</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {judges.map((judge, index) => (
            <JudgeCard key={judge.name} judge={judge} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
