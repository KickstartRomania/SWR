export function PartnersMarqueeSection() {
  return (
    <section className="w-full bg-white border-y-[3px] border-foreground py-10 relative overflow-hidden flex flex-col items-center">
      {/* Decorative background doodles */}
      <div className="absolute -top-4 left-4 md:left-10">
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="text-sw-blue opacity-50 rotate-12">
          <path d="M25 5 L28 20 L45 25 L28 30 L25 45 L22 30 L5 25 L22 20 Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute top-4 right-4 md:right-20">
        <svg width="30" height="30" viewBox="0 0 50 50" fill="none" className="text-sw-blue-washed rotate-45">
           <circle cx="25" cy="25" r="15" stroke="currentColor" strokeWidth="6" strokeDasharray="4 4" />
        </svg>
      </div>
      
      <p className="font-hand text-xl md:text-2xl text-foreground/80 mb-6 -rotate-2 relative z-10">
        Supported by our awesome partners
      </p>

      {/* Fading edges to make the scroll look smooth */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] group">
        {/* We duplicate the logos twice for seamless infinite scrolling */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center justify-center gap-16 px-8 sm:gap-24 sm:px-12">
            
            {/* Agorize Logo */}
            <div className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-all duration-300">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-white font-bold">a.</div>
              <span className="font-heading font-bold text-3xl">Agorize</span>
            </div>
            
            {/* Google Logo */}
            <div className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-all duration-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-heading font-bold text-3xl">Google</span>
            </div>

            {/* HTW Logo */}
            <div className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-all duration-300">
              <span className="font-heading font-black text-4xl tracking-tighter border-b-4 border-foreground leading-none">HTW</span>
            </div>

            {/* Startup Wise Guys */}
            <div className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-all duration-300">
              <div className="flex flex-col -gap-1">
                <span className="font-heading font-bold text-xl leading-none text-red-500">STARTUP</span>
                <span className="font-heading font-black text-2xl leading-none">WISE GUYS</span>
              </div>
            </div>

            {/* Techstars */}
            <div className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-all duration-300">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
                 <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
               </svg>
              <span className="font-heading font-bold text-3xl lowercase">techstars_</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
