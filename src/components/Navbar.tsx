"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DoodleButton } from "./DoodleButton";
import Link from "next/link";
import Image from "next/image";
const SCROLL_THRESHOLD = 80;

const CITIES: { name: string; href: string }[] = [
  { name: "Bucharest", href: "/bucharest" },
  { name: "Constanta", href: "/constanta" },
  { name: "Târgu Jiu", href: "/targu-jiu" },
  { name: "Cluj", href: "/cluj" },
  { name: "Oradea", href: "/oradea" },
];

// Hand-drawn arrow SVG
const DrawnArrow = ({ isOpen }: { isOpen: boolean }) => (
  <svg 
    width="16" height="16" viewBox="0 0 24 24" fill="none" 
    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
  >
    <path 
      d="M5 9c2.5 2.5 4.5 5 7 7 2.5-2-4.5-4.5 7-7" 
      stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" 
    />
  </svg>
);

// Star doodle SVG
const DoodleStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute -top-3 -right-3 text-[#FFD700] animate-pulse-slow">
    <path d="M12 2L15 9L22 10L17 15L18.5 22L12 18L5.5 22L7 15L2 10L9 9L12 2Z" fill="currentColor" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

// Squiggly underline SVG
const SquigglyLine = () => (
  <svg className="absolute -bottom-2 left-0 w-full h-3 text-sw-blue opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 10" preserveAspectRatio="none">
    <path d="M0 5 Q 12.5 0, 25 5 T 50 5 T 75 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

// Doodle house icon for Home
const DoodleHome = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
    <path d="M3 12L12 4l9 8v9H14v-6h-4v6H3z" />
  </svg>
);

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header className="w-full flex items-center justify-between py-2 px-4 md:py-3 md:px-12 sticky top-0 bg-white z-[100] border-b-[3px] border-black">
      {/* Playful Logo */}
      <Link href="/">
      <Image
        src="/logos/sw-romania-techstars.png"
        alt="Startup Weekend Romania Logo"
        width={140}
        height={60}
        className="w-28 md:w-36 h-auto object-contain"
      />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10 font-bold relative text-lg">
        
        {/* Cities Dropdown */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsCitiesOpen(true)}
          onMouseLeave={() => setIsCitiesOpen(false)}
        >
          <button className="flex items-center gap-2 hover:text-sw-blue transition-colors h-10 relative font-heading">
            Cities
            <DrawnArrow isOpen={isCitiesOpen} />
            <SquigglyLine />
          </button>
          
          <AnimatePresence>
            {isCitiesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, rotate: -4, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, rotate: -2, scale: 1 }}
                exit={{ opacity: 0, y: 10, rotate: -4, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                // Post-it note styling
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-[#FEF9C3] doodle-border doodle-shadow p-3 flex flex-col gap-2 z-50 before:content-[''] before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2 before:w-8 before:h-4 before:bg-black/10 before:rounded-full before:blur-sm"
              >
                {/* Pin doodle */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-black z-10 shadow-[2px_2px_0px_black]" />

                <div className="font-hand text-xl text-black/60 mb-1 text-center border-b-2 border-black/10 pb-1">Select a city</div>
                
                {CITIES.map((city, i) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className={`px-4 py-2 hover:bg-white border-2 border-transparent hover:border-black rounded-lg transition-all font-heading font-bold text-center group/item ${i % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'}`}
                  >
                    <span className="group-hover/item:marker-highlight">{city.name}</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Past Events */}
        <Link href="/#past-events" className="relative group font-heading hover:-rotate-2 transition-transform inline-block">
          <span className="relative z-10">Past Events</span>
          <SquigglyLine />
        </Link>



        {/* Mentors */}
        <Link href="/mentors" className="relative group font-heading hover:-rotate-2 transition-transform inline-block">
          <span className="relative z-10">Mentors</span>
          <SquigglyLine />
        </Link>

        {/* Contact */}
        <Link href="/contact" className="relative group font-heading hover:-rotate-2 transition-transform inline-block">
          <span className="relative z-10">Contact</span>
          <SquigglyLine />
        </Link>

        {/* Host in Your City */}
        <Link href="/host" className="relative font-heading text-sw-navy group inline-block">
          <div className="absolute inset-0 bg-sw-blue-washed border-2 border-black transform rotate-2 group-hover:rotate-6 transition-transform rounded-xl"></div>
          <div className="relative px-5 py-2 border-2 border-black bg-white rounded-xl transform -rotate-1 group-hover:-rotate-2 transition-transform shadow-[4px_4px_0px_black] group-hover:shadow-[6px_6px_0px_black] font-bold flex items-center gap-2">
            Host in Your City
            <DoodleStar />
          </div>
        </Link>
      </nav>

      {/* Get Tickets */}
      <div className="hidden md:flex items-center gap-4 z-50">
        <DoodleButton variant="nav" href="/#past-events" className="hover:scale-105 transition-transform">Get Tickets</DoodleButton>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden z-50 p-2 border-3 border-black rounded-xl bg-[#FEF9C3] shadow-[4px_4px_0px_black] active:shadow-[0px_0px_0px_black] active:translate-x-[4px] active:translate-y-[4px] transition-all"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile / Overlay Menu — used by hamburger and floating FAB */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 z-40 md:bg-black/30"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: -2, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, rotate: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20, rotate: -2, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-[72px] left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:w-full md:max-w-md max-h-[calc(100vh-6rem)] md:max-h-none bg-white doodle-border shadow-[8px_8px_0px_rgba(26,26,27,1)] flex flex-col rounded-2xl z-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgwLDAsMCwwLjA1KSIvPjwvc3ZnPg==')]"
            >
            {/* Decorative tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/80 border-2 border-black/20 backdrop-blur-sm transform -rotate-2" />

            {/* Close button — floats outside top-right corner */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#FEF9C3] border-2 border-black flex items-center justify-center cursor-pointer hover:scale-110 hover:rotate-12 active:scale-95 transition-transform z-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="overflow-y-auto overflow-x-hidden flex-1 min-h-0 p-6 flex flex-col gap-6 rounded-b-2xl">
            <div className="flex flex-col gap-4 font-bold text-xl font-heading">
              <div className="flex w-full justify-center items-center">
                <Link
                href="/"
                className="group flex items-center justify-center w-[90%] gap-3 px-4 py-3 bg-[#FFD166] border-2 border-black rounded-xl shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] hover:-translate-y-0.5 active:shadow-[2px_2px_0px_black] active:translate-x-[2px] active:translate-y-[2px] transition-all font-heading -rotate-1 hover:rotate-1 text-sw-navy"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <DoodleHome />
                <span className="font-hand text-2xl">Take me home!</span>
              </Link>

              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sw-navy font-hand text-3xl -rotate-3">Cities</span>
                  <svg width="40" height="10" viewBox="0 0 40 10" className="text-sw-blue">
                    <path d="M0 5 Q 10 0, 20 5 T 40 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {CITIES.map((city, idx) => (
                    <Link
                      key={city.name}
                      href={city.href}
                      className={`px-3 py-2 bg-[#FEF9C3] border-2 border-black rounded-lg text-center shadow-[3px_3px_0px_black] active:shadow-[0px_0px_0px_black] active:translate-x-[3px] active:translate-y-[3px] transition-all ${idx % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="h-0 border-b-[3px] border-dashed border-black/20 my-4 w-full" />

              <Link
                href="/#past-events"
                className="px-4 py-3 hover:bg-sw-blue-washed border-2 border-transparent hover:border-black rounded-xl transition-all font-heading text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Past Events
              </Link>

              <Link
                href="/mentors"
                className="px-4 py-3 hover:bg-sw-blue-washed border-2 border-transparent hover:border-black rounded-xl transition-all font-heading text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mentors
              </Link>

              <Link
                href="/contact"
                className="px-4 py-3 hover:bg-sw-blue-washed border-2 border-transparent hover:border-black rounded-xl transition-all font-heading text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Link
                href="/host"
                className="relative mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-sw-blue-washed border-2 border-black transform rotate-1 rounded-xl"></div>
                <div className="relative px-4 py-4 border-2 border-black bg-white rounded-xl transform -rotate-1 shadow-[4px_4px_0px_black] font-bold flex items-center justify-center gap-2 text-sw-navy">
                  Host in Your City
                  <DoodleStar />
                </div>
              </Link>
            </div>

            <div className="flex flex-col mt-4">
              <DoodleButton
                variant="cta"
                href="/#past-events"
                className="w-full justify-center text-xl py-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Tickets
              </DoodleButton>
            </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>

    {/* Floating sticky-note menu — appears when scrolled, quick access from anywhere */}
    <AnimatePresence>
      {isScrolled && !isMobileMenuOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          exit={{ opacity: 0, scale: 0.5, rotate: -15 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => setIsMobileMenuOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-16 h-16 md:w-20 md:h-20 bg-[#FEF9C3] border-[3px] border-black shadow-[6px_6px_0px_rgba(26,26,27,1)] rounded-xl flex items-center justify-center cursor-pointer hover:shadow-[8px_8px_0px_rgba(26,26,27,1)] hover:-translate-y-1 active:shadow-[2px_2px_0px_rgba(26,26,27,1)] active:translate-x-1 active:translate-y-1 transition-all doodle-shadow-hover"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
    </>
  );
}
