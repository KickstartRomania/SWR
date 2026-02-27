import Image from "next/image";

export const FooterCTASection = () => {
  return (
    <footer className="w-full relative bg-white pt-10">
      
      {/* Decorative top characters sitting on the footer edge */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-24 z-20 pointer-events-none hidden md:block">
         <Image 
           src="/images/falling-guy.png" 
           alt="Doodle character looking down" 
           fill 
           className="object-contain object-bottom rotate-180 opacity-90"
         />
      </div>

      {/* The Massive Blue Box */}
      <div className="bg-sw-blue rounded-t-[3rem] md:rounded-t-[5rem] px-6 py-24 md:py-32 relative overflow-hidden border-t-[3px] border-foreground">
        
        {/* Background doodle starbursts */}
        <div className="absolute top-10 left-10 text-white/20">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 L55 40 L100 50 L55 60 L50 100 L45 60 L0 50 L45 40 Z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 text-white/20 rotate-45 scale-75">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 L55 40 L100 50 L55 60 L50 100 L45 60 L0 50 L45 40 Z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 text-white flex flex-col items-center">
          
          <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
            THE FUN HASN&apos;T<br/>
            EVEN BEGUN...
          </h2>
          
          <p className="font-medium text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mb-12">
            At Startup Weekend developers, designers, marketers, and idea people come together to launch something real. Pitch on Friday, build all weekend, and demo your startup on Sunday.
          </p>
          
          <button className="doodle-border doodle-shadow-active bg-white text-sw-blue font-heading font-bold text-2xl px-12 py-5 rounded-full inline-flex items-center gap-4 hover:bg-sw-blue-washed transition-colors group">
            Contact us
            <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>

        </div>
      </div>

      {/* Tiny Bottom Bar */}
      <div className="bg-foreground text-white py-6 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium opacity-80">
          <p>© {new Date().getFullYear()} Startup Weekend Romania. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sw-blue hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-sw-blue hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
