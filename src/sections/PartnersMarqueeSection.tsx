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
                src: "/logos/partners/ambasada.png",
                alt: "Ambasada logo",
              },
              {
                src: "/logos/partners/brewtifi.png",
                alt: "Brewtifi logo",
              },
              {
                src: "/logos/partners/cluj-startups.png",
                alt: "Cluj Startups logo",
              },
              {
                src: "/logos/partners/ctt.png",
                alt: "CTT logo",
              },
              {
                src: "/logos/partners/fed-start.png",
                alt: "Fed Start logo",
              },
              {
                src: "/logos/partners/frisbo.png",
                alt: "Frisbo logo",
              },
              {
                src: "/logos/partners/htw.png",
                alt: "How to Web logo",
              },
              {
                src: "/logos/partners/inno-hub.png",
                alt: "Innno Hub logo",
              },
              {
                src: "/logos/partners/lsac.png",
                alt: "LSAC logo",
              },
              {
                src: "/logos/partners/lsuoc.png",
                alt: "LSUOC logo",
              },
              {
                src: "/logos/partners/multisoft.png",
                alt: "Multisoft logo",
              },
              {
                src: "/logos/partners/neuron-eng.png",
                alt: "Neuron English logo",
              },
              {
                src: "/logos/partners/quartet.png",
                alt: "Quartet logo",
              },
              {
                src: "/logos/partners/san-marco.png",
                alt: "San Marco Pizza logo",
              },
              {
                src: "/logos/partners/techstars.png",
                alt: "TechStars logo",
              },
              {
                src: "/logos/partners/uer.png",
                alt: "UER logo",
              },
              {
                src: "/logos/partners/univ-ct.png",
                alt: "University of Constanta logo",
              },
              {
                src: "/logos/partners/v7capital.png",
                alt: "V7 Capital logo",
              },
              {
                src: "/logos/partners/vip.png",
                alt: "VIP logo",
              }
            ].map((logo) => (
              <div
                key={logo.src}
                className="flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={160}
                  className="h-20 w-20w-auto object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
