import Link from "next/link";
import { DoodleButton } from "@/components/DoodleButton";

const CITIES = [
  { name: "Bucharest", href: "/bucharest" },
  { name: "Constanta", href: "/constanta" },
  { name: "Târgu Jiu", href: "/targu-jiu" },
  { name: "Cluj", href: "/cluj" },
  { name: "Oradea", href: "/oradea" },
] as const;

const MAIN_LINKS = [
  { name: "Home", href: "/" },
  { name: "Past Events", href: "/#past-events" },
  { name: "Contact", href: "/contact" },
  { name: "Mentors", href: "/mentors" },
  { name: "Host", href: "/host" },
] as const;

export const Footer = () => {
  return (
    <footer className="w-full bg-background border-t-[4px] border-foreground relative mt-24 overflow-hidden z-10 flex flex-col">

      {/* Ticker tape */}
      <div className="w-full bg-[#FEF9C3] border-b-[4px] border-foreground py-4 -rotate-1 scale-[1.05] origin-center shadow-[0_8px_0px_rgba(26,26,27,1)] relative z-20 flex items-center">
        <div className="flex w-fit animate-marquee">
          <div className="flex whitespace-nowrap">
            {Array(8).fill("BUILD SOMETHING REAL • STARTUP WEEKEND • ").map((text, i) => (
              <span key={i} className="mx-4 font-heading font-black text-foreground text-3xl md:text-4xl uppercase tracking-widest">{text}</span>
            ))}
          </div>
          <div className="flex whitespace-nowrap" aria-hidden="true">
            {Array(8).fill("BUILD SOMETHING REAL • STARTUP WEEKEND • ").map((text, i) => (
              <span key={i} className="mx-4 font-heading font-black text-foreground text-3xl md:text-4xl uppercase tracking-widest">{text}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="flex flex-col md:flex-row gap-20 md:gap-16 justify-between items-start">

          {/* Left / Main Branding */}
          <div className="flex-1 max-w-xl">
            <h2 className="font-heading font-black text-[5.5rem] md:text-[7rem] leading-[0.85] tracking-tighter uppercase relative">
              <span className="block mb-2">SW</span>
              <span
                className="block text-white relative z-10 -rotate-2"
                style={{ textShadow: "-3px -3px 0 #1A1A1B, 3px -3px 0 #1A1A1B, -3px 3px 0 #1A1A1B, 3px 3px 0 #1A1A1B, 8px 8px 0 #1A1A1B" }}
              >
                ROMANIA
              </span>

              {/* Highlight doodle behind text */}
              <div className="absolute top-[40%] left-[-10%] w-[110%] h-[35%] bg-sw-blue-washed -z-10 -rotate-2 rounded-full hidden md:block"></div>
            </h2>

            <p className="font-hand text-3xl md:text-4xl text-foreground font-bold mt-12 md:mt-16 -rotate-2 max-w-sm leading-relaxed">
              54 hours to build a startup. No fluff, just makers.
            </p>

            <div className="mt-14 flex items-center gap-6">
              <Link href="/host" className="doodle-border doodle-shadow-hover doodle-shadow-active bg-sw-blue text-white font-heading font-bold text-xl md:text-2xl px-8 py-4 rounded-xl cursor-pointer inline-block -rotate-2 hover:rotate-0 transition-all">
                Host an event
              </Link>

              {/* Arrow pointing to button */}
              <svg className="hidden md:block w-16 h-16 text-foreground -rotate-[30deg] scale-x-[-1]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M90 50 L10 50 M30 30 L10 50 L30 70" />
              </svg>
            </div>
          </div>

          {/* Right / Links */}
          <div className="flex flex-wrap sm:flex-nowrap gap-16 md:gap-32 lg:gap-40 md:pt-10">

            {/* Nav */}
            <div className="flex flex-col gap-6 w-1/2 sm:w-auto">
              <div className="font-hand font-bold text-4xl text-sw-blue -rotate-2 mb-2">Explore</div>
              {MAIN_LINKS.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-heading font-black text-2xl md:text-3xl uppercase text-foreground hover:text-sw-blue hover:translate-x-2 hover:-rotate-2 transition-transform w-fit origin-left"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Cities */}
            <div className="flex flex-col gap-6 w-1/2 sm:w-auto">
              <div className="font-hand font-bold text-4xl text-[#E1AD01] rotate-2 mb-2">Cities</div>
              {CITIES.map(city => (
                <Link
                  key={city.name}
                  href={city.href}
                  className="font-heading font-black text-2xl md:text-3xl uppercase text-foreground hover:text-[#E1AD01] hover:translate-x-2 hover:rotate-2 transition-transform w-fit origin-left"
                >
                  {city.name}
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-32 pt-10 border-t-[4px] border-dashed border-foreground/30 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-heading font-black text-xl md:text-2xl uppercase tracking-widest flex items-center gap-2">
            © {new Date().getFullYear()} Startup Weekend
          </p>
          <div className="flex gap-8 font-heading font-black text-xl md:text-2xl uppercase tracking-widest">
            <Link href="#" className="hover:text-sw-blue hover:-translate-y-1 transition-transform inline-block">Privacy</Link>
            <Link href="#" className="hover:text-sw-blue hover:-translate-y-1 transition-transform inline-block">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
