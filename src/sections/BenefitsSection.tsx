export const BenefitsSection = () => {
  const benefits = [
    {
      title: "Expert mentors",
      cta: "Join the next events",
      color: "bg-[#FFD166]",
      rotation: "rotate-[-2deg]",
      tapeRotation: "rotate-[-10deg]",
      tapeRight: true,
    },
    {
      title: "Hands-on workshops",
      cta: "Join the next events",
      color: "bg-sw-blue-washed",
      rotation: "rotate-[3deg]",
      tapeRotation: "rotate-[15deg]",
      tapeRight: false,
    },
    {
      title: "Startup community",
      cta: "Join the next events",
      color: "bg-[#EF476F]",
      rotation: "rotate-[-1deg]",
      tapeRotation: "rotate-[5deg]",
      tapeRight: true,
    },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32 relative overflow-hidden border-y-[3px] border-foreground">
      
      {/* Background Grid Pattern is inherited from globals.css */}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16">
        
        {/* Left Column: Title & Text */}
        <div className="lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 h-fit">
          <h2 className="font-heading font-black text-6xl md:text-7xl lg:text-[7rem] leading-[1] uppercase tracking-tighter mb-8">
            Why<br/>
            <span className="text-sw-blue">even</span><br/>
            join?
          </h2>
          <p className="font-medium text-xl text-foreground/80 leading-relaxed mb-8 max-w-[400px]">
            Gain access to Romania&apos;s most accomplished startup mentors, seasoned investors, and industry leaders who are genuinely invested in your success. These experts have navigated the startup landscape and are ready to share their hard-won insights.
          </p>

          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="hidden lg:block text-sw-navy mt-4">
             <path d="M10 20 C 30 10, 80 40, 90 80 M70 80 L90 80 L80 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>

        {/* Right Column: Polaroid Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-8 lg:mt-0 pt-8">
          
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`relative ${index === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
            >
              {/* The Masking Tape */}
              <div 
                className={`absolute -top-5 ${benefit.tapeRight ? 'right-10' : 'left-10'} w-24 h-8 bg-white/60 border border-foreground/10 z-30 backdrop-blur-md shadow-sm ${benefit.tapeRotation}`}
              ></div>

              {/* Polaroid Card */}
              <div className={`doodle-border doodle-shadow p-4 pb-6 bg-white ${benefit.rotation} hover:rotate-0 transition-transform duration-300 group`}>
                
                {/* Photo Placeholder */}
                <div className={`w-full aspect-square md:aspect-[4/3] ${benefit.color} doodle-border rounded-lg mb-6 overflow-hidden relative`}>
                   {/* Abstract shape for placeholder */}
                   <div className="absolute inset-0 opacity-20 mix-blend-multiply flex items-center justify-center">
                     <svg viewBox="0 0 100 100" className="w-3/4 h-3/4 animate-pulse">
                        <circle cx="50" cy="50" r="40" fill="currentColor" />
                     </svg>
                   </div>
                </div>

                <h3 className="font-heading font-bold text-3xl mb-4 text-center">
                  {benefit.title}
                </h3>
                
                <div className="flex justify-center">
                  <a href="#" className="font-hand text-xl text-sw-blue border-b-2 border-transparent hover:border-sw-blue transition-colors flex items-center gap-2">
                    {benefit.cta}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>

              </div>

              {/* Doodle peeking out on the last card */}
              {index === 2 && (
                <div className="absolute -bottom-16 -right-12 w-32 h-32 -z-10 opacity-80 pointer-events-none hidden md:block">
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    {/* Simple abstract doodle character */}
                    <circle cx="50" cy="40" r="15" fill="#fff" />
                    <path d="M35 40 C 35 20, 65 20, 65 40" fill="none" />
                    <circle cx="43" cy="38" r="2" fill="currentColor" />
                    <circle cx="57" cy="38" r="2" fill="currentColor" />
                    <path d="M45 45 Q 50 50 55 45" />
                    <path d="M38 52 Q 20 70 30 90" />
                    <path d="M62 52 Q 80 70 70 90" />
                  </svg>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
