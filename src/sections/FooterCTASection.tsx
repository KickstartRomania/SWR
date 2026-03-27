import Image from "next/image";
import Link from "next/link";

export const FooterCTASection = () => {
  return (
    <section className="w-full relative bg-white pt-10">
      
      {/* The Massive Blue Box */}
      <div className="bg-sw-blue rounded-t-[3rem] md:rounded-t-[5rem] px-6 py-24 md:py-32 relative overflow-hidden border-t-[3px] border-foreground">
        
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white flex flex-col items-center">
          
          <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
            YOUR STARTUP<br/>
            STARTS HERE.
          </h2>
          
          <p className="font-medium text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
            At Startup Weekend, developers, designers, marketers, and future founders come together to build something real. Pitch on Friday, build all weekend, and present your startup on Sunday.
          </p>

        </div>
      </div>
    </section>
  );
};
