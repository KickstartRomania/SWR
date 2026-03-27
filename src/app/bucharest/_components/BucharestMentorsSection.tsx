"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { bucharestMentors, type MentorEntry } from "@/lib/mentors-data";

const AvatarPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  </div>
);

function BucharestMentorCard({ mentor, index }: { mentor: MentorEntry; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.05,
        rotate: index % 2 === 0 ? -1 : 1,
        y: -10,
        boxShadow: "8px 10px 0px 0px rgba(0,0,0,1)",
      }}
      className="bg-[#fcfcfc] p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center transition-all duration-300 relative group cursor-pointer"
    >
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-sw-blue animate-pulse-slow">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" />
        </svg>
      </div>
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-black mb-4 bg-gray-200 relative group-hover:border-sw-blue transition-colors duration-300">
        {!mentor.image || imageError ? (
          <AvatarPlaceholder />
        ) : (
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            sizes="128px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <h3 className="font-bold text-2xl mb-1 group-hover:text-sw-blue transition-colors">{mentor.name}</h3>
      {mentor.role && (
        <p className="text-sm font-light text-foreground/65 leading-snug max-w-[280px] mx-auto">{mentor.role}</p>
      )}
    </motion.div>
  );
}

export function BucharestMentorsSection() {
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#1A1A1B 2px, transparent 2px)", backgroundSize: "32px 32px" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 relative inline-block">
            Previous mentors
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300 -z-10 transform -rotate-2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ originX: 0 }}
            />
          </h2>
          <p className="font-medium text-xl text-foreground/70 mt-6">Mentors from our previous Bucharest editions</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bucharestMentors.map((mentor, index) => (
            <BucharestMentorCard key={`${mentor.order}-${mentor.name}`} mentor={mentor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
