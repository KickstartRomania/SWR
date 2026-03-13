import Image from "next/image";

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
          <div
            key={i}
            className="flex items-center justify-center gap-16 px-8 sm:gap-24 sm:px-12"
          >
            {[
              {
                src: "/logos/agorize.png",
                alt: "Agorize logo",
              },
              {
                src: "/logos/google.png",
                alt: "Google logo",
              },
              {
                src: "/logos/htw.png",
                alt: "HTW logo",
              },
              {
                src: "/logos/startupwiseguys.png",
                alt: "Startup Wise Guys logo",
              },
              {
                src: "/logos/techstars.png",
                alt: "Techstars logo",
              },
              {
                src: "/logos/sw-romania.png",
                alt: "Startup Weekend Romania logo",
              },
            ].map((logo) => (
              <div
                key={logo.src}
                className="flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={48}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
