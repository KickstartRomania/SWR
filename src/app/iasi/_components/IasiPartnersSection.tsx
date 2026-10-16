import Image from "next/image";

type Logo = {
  name: string;
  src: string;
  href?: string;
  /** Intrinsic size of the trimmed logo file. */
  width: number;
  height: number;
};

const organizers: Logo[] = [
  { name: "Kickstart Romania", src: "/images/iasi/partners/kickstart-romania.png", href: "https://kickstartromania.com", width: 893, height: 274 },
  { name: "Fondatori din viitor", src: "/images/iasi/partners/fondatori-din-viitor.png", href: "https://gggg.ro/", width: 1552, height: 112 },
];

const supporters: Logo[] = [
  { name: "Stripe", src: "/images/iasi/partners/stripe.png", href: "https://stripe.com", width: 1280, height: 533 },
  { name: "Cognition", src: "/images/iasi/partners/cognition.png", href: "https://cognition.ai", width: 1600, height: 309 },
  { name: "Devin", src: "/images/iasi/partners/devin.png", href: "https://devin.ai", width: 1600, height: 425 },
];

// Give every logo in a row the same visual area, so a wide wordmark and a
// compact mark read at a similar size instead of one dwarfing the other.
// Organizers sit a step smaller than sponsors.
const SUPPORTER_AREA = 12000;
const ORGANIZER_AREA = 6500;

function displayWidth({ width, height }: Logo, area: number) {
  return Math.round(Math.sqrt(area * (width / height)));
}

function LogoRow({ label, logos, area }: { label: string; logos: Logo[]; area: number }) {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="font-hand text-xl md:text-2xl text-foreground/80 mb-10 -rotate-1 relative z-10">{label}</p>
      <div className="w-full max-w-5xl px-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-10 sm:gap-16 md:gap-20">
        {logos.map((logo) => {
          const image = <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} className="w-full h-auto" />;
          const style = { width: displayWidth(logo, area) };
          return logo.href ? (
            <a
              key={logo.name}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={logo.name}
              className="block max-w-full transition-transform hover:scale-105"
              style={style}
            >
              {image}
            </a>
          ) : (
            <div key={logo.name} className="max-w-full" style={style}>
              {image}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function IasiPartnersSection() {
  return (
    <section className="w-full bg-white py-20 relative overflow-hidden flex flex-col items-center gap-16">
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

      <LogoRow label="Supported by" logos={supporters} area={SUPPORTER_AREA} />
      <LogoRow label="Organized by" logos={organizers} area={ORGANIZER_AREA} />
    </section>
  );
}
