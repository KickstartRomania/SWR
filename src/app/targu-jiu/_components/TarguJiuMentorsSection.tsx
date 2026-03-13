"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const mentors = [
  {
    name: "Valentin Albu",
    role: "Deputy Chief Executive Officer",
    company: "G Energy Solutions",
    linkedin: true,
    image: "/images/targujiu/mentors/valentin-albu.png",
  },
  {
    name: "Ovidiu Dinisor",
    role: "IT Manager",
    company: "ING",
    linkedin: true,
    image: "/images/targujiu/mentors/ovidiu-dinisor.png",
  },
  {
    name: "Mihail Olaru",
    role: "Antrepenor",
    company: "Conacul Olarilor",
    linkedin: false,
    image: "/images/targujiu/mentors/mihail-olaru.png",
  },
  {
    name: "Marius Mitroi",
    role: "Innovation and Entrepreneurship Advisor",
    company: "UEFISCDI",
    linkedin: true,
    image: "/images/targujiu/mentors/marius-mitroi.png",
  },
  {
    name: "Ionut Vasilica",
    role: "CEO & Co-founder",
    company: "G Energy Solutions",
    linkedin: true,
    image: "/images/targujiu/mentors/ionut-vasilica.png",
  },
  {
    name: "George Bonea",
    role: "Communications Specialist",
    company: "",
    linkedin: true,
    image: "/images/targujiu/mentors/george-bonea.png",
  },
  {
    name: "Florian Usurelu",
    role: "Software Engineer",
    company: "Google",
    linkedin: true,
    image: "/images/targujiu/mentors/florian-usurelu.png",
  },
  {
    name: "Bogdan Jufa",
    role: "Franchise Owner",
    company: "5 to go Tg. Jiu",
    linkedin: true,
    image: "/images/targujiu/mentors/bogdan-jufa.png",
  },
  {
    name: "Bogdan Ionita",
    role: "Chief Product Officer",
    company: "Mirro.io",
    linkedin: true,
    image: "/images/targujiu/mentors/bogdan-ionita.png",
  },
  {
    name: "Andreas Baschir",
    role: "Python LLM Developer",
    company: "Deutche Telekom",
    linkedin: true,
    image: "/images/targujiu/mentors/andreas-baschir.png",
  },
  {
    name: "Alex Crac",
    role: "Founder",
    company: "KRK Transportation Romania",
    linkedin: false,
    image: "/images/targujiu/mentors/alex-crac.png",
  },
  {
    name: "Adi Gheorghe",
    role: "Founder",
    company: "Doers Ventures",
    linkedin: true,
    image: "/images/targujiu/mentors/adi-gheorghe.png",
  },
  {
    name: "Cosmin Pirvu",
    role: "Startup Program Manager",
    company: "Veridion",
    linkedin: true,
    image: "/images/targujiu/mentors/cosmin-pirvu.png",
  },
];

export function TarguJiuMentorsSection() {
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Background Pattern */}
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
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? -1 : 1,
                y: -10,
                boxShadow: "8px 10px 0px 0px rgba(0,0,0,1)"
              }}
              className="bg-[#fcfcfc] p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center transition-all duration-300 relative group cursor-pointer"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-sw-blue animate-pulse-slow">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor" />
                </svg>
              </div>
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-black mb-4 bg-gray-200 relative group-hover:border-sw-blue transition-colors duration-300">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  sizes="128px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-2xl mb-1 group-hover:text-sw-blue transition-colors">{mentor.name}</h3>
              {mentor.role && <p className="text-sw-blue font-medium text-sm mb-0.5">{mentor.role}</p>}
              {mentor.company && <p className="text-foreground/80 text-sm">{mentor.company}</p>}
              {mentor.linkedin && (
                <a
                  href="#"
                  className="mt-2 text-sm text-sw-blue hover:underline flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  LinkedIn
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
