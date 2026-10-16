import Image from "next/image";

const partners = [
  { name: "Stripe", logo: "/images/iasi/partners/stripe.png", href: "https://stripe.com" },
  { name: "Cognition", logo: "/images/iasi/partners/cognition.png", href: "https://cognition.ai" },
  { name: "Devin", logo: "/images/iasi/partners/devin.png", href: "https://devin.ai" },
];

export function IasiPartnersSection() {
  return (
    <section className="w-full bg-white border-b-[3px] border-foreground py-20 relative overflow-hidden flex flex-col items-center">
      <div className="absolute -top-4 left-4 md:left-10">
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="text-sw-blue opacity-50 rotate-12">
          <path d="M25 5 L28 20 L45 25 L28 30 L25 45 L22 30 L5 25 L22 20 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-4 right-4 md:right-20">
        <svg width="30" height="30" viewBox="0 0 50 50" fill="none" className="text-sw-blue-washed rotate-45">
          <circle cx="25" cy="25" r="15" stroke="currentColor" strokeWidth="6" strokeDasharray="4 4" />
        </svg>
      </div>

      <p className="font-hand text-xl md:text-2xl text-foreground/80 mb-10 -rotate-1 relative z-10">
        Supported by
      </p>

      <div className="w-full max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 md:gap-24">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={partner.name}
            className="relative h-14 md:h-16 w-44 md:w-56 flex-shrink-0 transition-transform hover:scale-105"
          >
            <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
          </a>
        ))}
      </div>
    </section>
  );
}
