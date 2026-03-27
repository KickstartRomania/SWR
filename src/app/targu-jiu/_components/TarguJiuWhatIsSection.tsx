export function TarguJiuWhatIsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Text Side */}
        <div className="flex flex-col relative z-10">
          <div className="inline-block mb-4">
            <span className="font-hand text-xl md:text-2xl text-sw-blue border-2 border-foreground rounded-full px-4 py-1 rotate-[-3deg] inline-block bg-white doodle-shadow-active">
              The big question
            </span>
          </div>
          
          <h2 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
            What is <br/>
            <span className="text-sw-blue">Startup Weekend</span><br/>
            Târgu Jiu?
          </h2>
          
          <p className="font-medium text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-lg">
            Startup Weekend Târgu Jiu is a high-energy weekend hackathon where builders, creatives, and future founders come together to launch real startup ideas, from pitch to prototype.
          </p>
        </div>

        {/* Right Collage / Sticky Note Side */}
        <div className="relative h-full min-h-[400px] flex items-center justify-center lg:justify-end">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sw-blue-washed rounded-full blur-3xl opacity-50 -z-10"></div>
          
          <div className="relative w-full max-w-md doodle-border doodle-shadow bg-[#FFD166] rounded-xl p-10 rotate-[4deg] transform hover:rotate-0 transition-transform duration-500 z-10">
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-sw-navy rounded-full border-2 border-foreground shadow-[2px_2px_0px_#1A1A1B] z-20">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/50 rounded-full"></div>
            </div>

            <div className="absolute -top-3 -right-4 w-16 h-6 bg-white/40 rotate-[25deg] border border-foreground/10 z-20 backdrop-blur-sm"></div>

            <h3 className="font-hand text-4xl md:text-5xl font-bold leading-tight mb-6">
              Start building, not planning.
            </h3>
            
            <div className="font-heading font-bold text-2xl text-foreground/90 leading-tight">
              Turn your idea into a real <span className="text-sw-blue bg-white px-2 py-0.5 rounded-md border-2 border-foreground inline-block -rotate-2">startup</span>.
            </div>

            <svg className="absolute -bottom-6 -left-6 text-sw-blue w-16 h-16" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="currentColor"/>
            </svg>
          </div>

          <div className="absolute -bottom-10 right-10 hidden md:block">
             <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
               <path d="M10 90 C 20 50, 80 80, 80 20" stroke="#124F6B" strokeWidth="4" strokeLinecap="round" fill="none" strokeDasharray="8 8"/>
               <path d="M60 30 L80 20 L90 40" stroke="#124F6B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
             </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
