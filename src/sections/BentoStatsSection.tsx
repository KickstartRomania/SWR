import Image from "next/image";

export function BentoStatsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pb-24 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 pt-12">
        
        {/* Card 1: 54 Hours (The Sticky Note) */}
        <div className="relative group [perspective:1000px]">
          {/* Masking Tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-10 bg-white/60 border border-foreground/10 z-30 backdrop-blur-md shadow-sm rotate-[-4deg] group-hover:rotate-[2deg] group-hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-bottom"></div>
          
          <div className="h-full doodle-border doodle-shadow bg-[#FFD166] p-8 relative flex flex-col justify-center items-center min-h-[260px] rotate-[-2deg] group-hover:rotate-[1deg] group-hover:-translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden">
            
            {/* Animated Starburst Background */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-white opacity-0 group-hover:opacity-40 group-hover:rotate-90 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] scale-50 group-hover:scale-100 pointer-events-none z-0" viewBox="0 0 100 100">
              <path d="M50 0 L55 40 L95 25 L60 50 L95 75 L55 60 L50 100 L45 60 L5 75 L40 50 L5 25 L45 40 Z" fill="currentColor"/>
            </svg>

            <div className="relative z-10 flex flex-col items-center">
              <span className="font-heading font-black text-7xl md:text-8xl text-sw-navy tracking-tighter relative group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                54
                {/* Hand-drawn underline that draws itself */}
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-sw-navy" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,20 100,5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" pathLength="100" strokeDasharray="100" className="[stroke-dashoffset:100] group-hover:[stroke-dashoffset:0] transition-all duration-700 delay-100 ease-out" />
                </svg>
              </span>
              <span className="font-hand text-4xl text-sw-navy font-bold mt-2 rotate-[-4deg] group-hover:rotate-2 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-75">HOURS</span>
            </div>
            
          </div>
        </div>

        {/* Card 2: 5 Cities (The Map Polaroid) */}
        <div className="relative group md:translate-y-6">
          {/* Masking Tape */}
          <div className="absolute -top-5 right-8 w-20 h-8 bg-white/60 border border-foreground/10 z-30 backdrop-blur-md shadow-sm rotate-[6deg] group-hover:rotate-[10deg] group-hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
          
          <div className="h-full doodle-border doodle-shadow bg-white p-8 relative flex flex-col justify-center items-center min-h-[260px] rotate-[2deg] group-hover:rotate-[-1deg] group-hover:-translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            
            <div className="relative w-24 h-24 mb-6 flex flex-col items-center justify-end group-hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
              {/* Target Area */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-sw-blue-washed rounded-full doodle-border scale-100 group-hover:scale-125 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                {/* Inner bullseye */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-sw-blue rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 delay-200"></div>
              </div>
              
              {/* Pin Shadow */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-foreground/20 rounded-[100%] group-hover:scale-50 group-hover:opacity-40 transition-all duration-500"></div>
              
              {/* Jumping Pin */}
              <svg className="relative z-10 text-sw-blue w-12 h-12 -translate-y-4 group-hover:-translate-y-12 group-hover:rotate-12 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#E1F3FA" />
                <circle cx="12" cy="10" r="3" fill="#27A8E0" />
              </svg>
            </div>

            <h3 className="font-heading font-black text-4xl text-center text-foreground group-hover:scale-105 transition-transform duration-300">5 Cities</h3>
            <p className="font-medium text-foreground/70 mt-2 text-center group-hover:text-sw-blue transition-colors duration-300">Across Romania</p>
          </div>
        </div>

        {/* Card 3: 100+ Participants (The Community Card) */}
        <div className="relative group md:translate-y-2">
          {/* Masking Tape */}
          <div className="absolute -top-4 left-8 w-24 h-10 bg-white/60 border border-foreground/10 z-30 backdrop-blur-md shadow-sm rotate-[-8deg] group-hover:rotate-[-4deg] group-hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
          
          <div className="h-full doodle-border doodle-shadow bg-sw-blue p-8 relative overflow-hidden min-h-[260px] rotate-[-1deg] group-hover:rotate-[2deg] group-hover:-translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            
            {/* Animated dashed border inside */}
            <div className="absolute inset-3 border-2 border-dashed border-white/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-20 flex flex-col h-full justify-start">
              <h3 className="font-heading font-black text-4xl text-white leading-tight origin-left group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                100+<br/>Makers
              </h3>
              
              <div className="mt-4 flex origin-left group-hover:scale-110 group-hover:rotate-[-3deg] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-75">
                <div className="bg-[#EF476F] doodle-border text-white px-3 py-1.5 rounded-xl shadow-[4px_4px_0px_rgba(26,26,27,1)] group-hover:shadow-[6px_6px_0px_rgba(26,26,27,1)] transition-all">
                  <p className="font-hand text-2xl font-bold">Per event!</p>
                </div>
              </div>
            </div>

            {/* Group doodle image */}
            <div className="absolute -right-4 -bottom-4 w-48 h-48  origin-bottom group-hover:scale-110 group-hover:-rotate-3 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10">
              <Image 
                src="/images/microphone-characther.png" 
                alt="Group of people doodle" 
                fill 
                className="object-contain object-right-bottom drop-shadow-xl"
              />
            </div>
            
            {/* Some floating particles on hover */}
            <div className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 group-hover:scale-150 transition-all duration-700 ease-out delay-100"></div>
            <div className="absolute top-20 right-24 w-2 h-2 bg-[#FFD166] rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-12 group-hover:scale-150 transition-all duration-1000 ease-out delay-200"></div>

          </div>
        </div>

      </div>
    </section>
  );
}