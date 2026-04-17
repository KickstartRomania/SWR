import Image from "next/image";

export function ConstantaPartnersSection() {
  const partners = [
    { name: "Stripe", logo: "/images/constanta/partners/stripe.png" },
    { name: "CTT", logo: "/images/constanta/partners/ctt.png" },
    { name: "Universitatea Ovidius", logo: "/images/constanta/partners/ovidius.png" },
    { name: "Rarecloud", logo: "/images/constanta/partners/rarecloud.png" },
    { name: "Flip", logo: "/images/constanta/partners/flip.png" },
    { name: "Featherless", logo: "/images/constanta/partners/featherless.png" },
    { name: "Kickstart", logo: "/images/constanta/partners/kickstart.png" },
    { name: "Refold", logo: "/images/constanta/partners/refold.png" },
    { name: "How to Web", logo: "/images/constanta/partners/htw.png" },
    { name: "Startup Weekend Romania", logo: "/images/constanta/partners/swro.png" },
  ];

  // Duplicate the list so the marquee loops seamlessly
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="w-full bg-white border-b-[3px] border-foreground py-20 relative overflow-hidden flex flex-col items-center">
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

      <p className="font-hand text-xl md:text-2xl text-foreground/80 mb-10 -rotate-1 relative z-10">
        Our partners
      </p>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="w-full overflow-hidden relative z-0">
        <div
          className="flex items-center gap-16 md:gap-24 w-max animate-marquee"
        >
          {marqueePartners.map((partner, index) => (
            <div
              key={index}
              className="relative h-20 md:h-28 w-44 md:w-60 flex-shrink-0"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
