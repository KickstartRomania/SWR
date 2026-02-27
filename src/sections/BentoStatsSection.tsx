import Image from "next/image";

export function BentoStatsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: 54 Hours */}
        <div className="doodle-border rounded-[32px] bg-sw-blue-washed p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
            <span className="font-heading font-bold text-7xl md:text-8xl text-sw-blue tracking-tighter">54</span>
            <span className="font-hand text-4xl text-foreground font-bold mt-2 rotate-[-2deg]">HOURS</span>
          </div>
          {/* Background decoration */}
          <div className="absolute right-[-20px] top-[-20px] text-white opacity-40 group-hover:rotate-12 transition-transform duration-500">
            <svg width="150" height="150" viewBox="0 0 200 200" fill="currentColor">
              <path d="M100 0L125 75L200 100L125 125L100 200L75 125L0 100L75 75L100 0Z" />
            </svg>
          </div>
        </div>

        {/* Card 2: 5 Cities */}
        <div className="doodle-border rounded-[32px] bg-white p-8 relative flex flex-col justify-center items-center min-h-[200px] hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-center w-20 h-20 bg-sw-blue rounded-full doodle-border mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 className="font-heading font-bold text-4xl text-center">5 Cities</h3>
          <p className="font-medium text-foreground/70 mt-2 text-center">Across Romania</p>
        </div>

        {/* Card 3: 100+ Participants */}
        <div className="doodle-border rounded-[32px] bg-sw-blue p-8 relative text-white overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
            <h3 className="font-heading font-bold text-4xl leading-tight">100+<br/>Participants</h3>
            <p className="font-hand text-2xl mt-4 opacity-90">Per event!</p>
          </div>
          {/* Group doodle image */}
          <div className="absolute right-[-40px] bottom-[-20px] w-48 h-48 opacity-90 mix-blend-multiply">
            <Image 
              src="/images/group-doodle.png" 
              alt="Group of people doodle" 
              fill 
              className="object-contain object-bottom-right"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
