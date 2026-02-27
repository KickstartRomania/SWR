export function EventsSection() {
  return (
    <section className="w-full bg-sw-blue-washed py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative">
          <h2 className="font-heading font-bold text-5xl md:text-6xl max-w-lg leading-[1.1]">
            Join our<br/>
            <span className="relative">
              next events
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-sw-blue" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M2 9.5C40 -2 150 -2 198 9.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          <div className="hidden md:block absolute right-32 -top-10">
             <p className="font-hand text-2xl text-sw-navy rotate-12 mb-2">Get yours now!</p>
             <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className=" absolute left-10  top-10">
               <path d="M45 5C45 5 30 20 10 35M10 35L25 35M10 35L15 20" stroke="#124F6B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Ticket 1: Bucharest */}
          <div className="relative group">
            <div className="doodle-border doodle-shadow bg-white rounded-3xl overflow-hidden flex flex-col sm:flex-row relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
              
              <div className="bg-sw-blue text-white p-8 flex flex-col justify-center items-center sm:w-1/3 relative border-b-4 sm:border-b-0 sm:border-r-4 border-dashed border-foreground/30">
                 <div className="absolute top-[-10px] left-1/2 sm:left-auto sm:top-1/2 sm:right-[-10px] w-5 h-5 bg-sw-blue-washed rounded-full border-b-[3px] sm:border-b-0 sm:border-l-[3px] border-foreground -translate-x-1/2 sm:translate-x-0 sm:-translate-y-1/2 z-20"></div>
                 <div className="absolute bottom-[-10px] left-1/2 sm:left-auto sm:bottom-1/2 sm:right-[-10px] w-5 h-5 bg-sw-blue-washed rounded-full border-t-[3px] sm:border-t-0 sm:border-l-[3px] border-foreground -translate-x-1/2 sm:translate-x-0 sm:translate-y-1/2 z-20 hidden sm:block"></div>
                 
                 <span className="font-heading font-bold text-5xl tracking-tighter mb-1">18-20</span>
                 <span className="font-heading font-semibold text-2xl uppercase tracking-widest">Oct</span>
              </div>

              <div className="p-8 sm:w-2/3 flex flex-col justify-between relative bg-[#fdfdfd]">
                <div>
                  <h3 className="font-heading font-bold text-4xl mb-2 group-hover:text-sw-blue transition-colors">Bucharest</h3>
                  <div className="flex items-center gap-2 text-foreground/70 font-medium text-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Builders House
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button className="doodle-border doodle-shadow-active bg-sw-blue text-white font-heading font-semibold px-6 py-3 rounded-full hover:bg-sw-navy transition-colors">
                    Join now
                  </button>
                </div>

                <svg className="absolute right-4 top-4 text-foreground/5 w-24 h-24 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Ticket 2: Targu Jiu */}
          <div className="relative group">
            <div className="doodle-border doodle-shadow bg-white rounded-3xl overflow-hidden flex flex-col sm:flex-row relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
              
              <div className="bg-sw-navy text-white p-8 flex flex-col justify-center items-center sm:w-1/3 relative border-b-4 sm:border-b-0 sm:border-r-4 border-dashed border-foreground/30">
                 <div className="absolute top-[-10px] left-1/2 sm:left-auto sm:top-1/2 sm:right-[-10px] w-5 h-5 bg-sw-blue-washed rounded-full border-b-[3px] sm:border-b-0 sm:border-l-[3px] border-foreground -translate-x-1/2 sm:translate-x-0 sm:-translate-y-1/2 z-20"></div>
                 <div className="absolute bottom-[-10px] left-1/2 sm:left-auto sm:bottom-1/2 sm:right-[-10px] w-5 h-5 bg-sw-blue-washed rounded-full border-t-[3px] sm:border-t-0 sm:border-l-[3px] border-foreground -translate-x-1/2 sm:translate-x-0 sm:translate-y-1/2 z-20 hidden sm:block"></div>
                 
                 <span className="font-heading font-bold text-5xl tracking-tighter mb-1">18-20</span>
                 <span className="font-heading font-semibold text-2xl uppercase tracking-widest">Oct</span>
              </div>

              <div className="p-8 sm:w-2/3 flex flex-col justify-between relative bg-[#fdfdfd]">
                <div>
                  <h3 className="font-heading font-bold text-4xl mb-2 group-hover:text-sw-blue transition-colors">Târgu Jiu</h3>
                  <div className="flex items-center gap-2 text-foreground/70 font-medium text-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Builders House
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button className="doodle-border doodle-shadow-active bg-sw-blue text-white font-heading font-semibold px-6 py-3 rounded-full hover:bg-sw-navy transition-colors">
                    Join now
                  </button>
                </div>

                <svg className="absolute right-4 top-4 text-foreground/5 w-24 h-24 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
