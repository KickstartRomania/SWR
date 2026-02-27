import Image from "next/image";
import { DoodleButton } from "@/components/DoodleButton";

export function HeroSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-16 pb-24 md:py-32 flex flex-col items-center text-center">
      {/* Floating Doodles & Images */}
      <div className="absolute top-10 -left-10 md:-left-18 rotate-[-12deg] w-24 h-24 md:w-60 md:h-60 pointer-events-none opacity-90 hidden sm:block">
        <Image 
          src="/images/falling.png" 
          alt="Falling character doodle" 
          fill 
          className="object-contain"
          priority
        />
      </div>
      <div className="absolute top-32 right-10 md:right-24 rotate-[15deg] hidden lg:block text-sw-blue opacity-80 pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 10 L50 90 M10 50 L90 50 M25 25 L75 75 M25 75 L75 25" />
        </svg>
      </div>

      <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.1] tracking-tight max-w-4xl relative z-10">
        <span className="sticker-box sticker-box--yellow">B</span>UILD A STARTU<span className="sticker-box">P</span><br />
        IN <span className="marker-highlight">54 HOURS</span>
      </h1>
      
      {/* Hand-drawn arrow pointing to title */}
      <div className="absolute top-1/2 right-0 mt-6">
        <p className="font-hand text-2xl md:text-3xl text-sw-navy rotate-[-5deg] absolute -top-12 -right-32 md:-right-40 hidden sm:block">
          No talk, all action!
        </p>
        <svg className="absolute -top-6 -right-16 md:-right-20 hidden sm:block" width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 5C45 5 30 20 10 35M10 35L25 35M10 35L15 20" stroke="#124F6B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <p className="mt-8 font-medium text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
        At Startup Weekend developers, designers, marketers, and idea people come together to launch something real. Pitch on Friday, build all weekend, and demo your startup on Sunday.
      </p>

      <div className="mt-12 relative">
        <DoodleButton variant="cta">Join the vibe</DoodleButton>
      </div>

      {/* Wavy line separator */}
      <div className="mt-20 w-full max-w-md mx-auto opacity-50">
        <svg width="100%" height="20" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 10 Q 50 20 100 10 T 200 10 T 300 10 T 400 10" stroke="#1A1A1B" strokeWidth="4" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
    </section>
  );
}
