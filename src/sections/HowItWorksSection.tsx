"use client";

import { motion } from "framer-motion";

export const HowItWorksSection = () => {
  const steps = [
    {
      id: "01",
      title: "Connect & Network",
      description: "Meet your future co-founders and teammates. It all starts with getting to know the diverse group of developers, designers, and enthusiasts who are ready to build.",
      tags: ["Icebreakers", "Networking", "Team Formation"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      color: "bg-[#FFD166]",
    },
    {
      id: "02",
      title: "Pitch Your Idea",
      description: "Have a spark of inspiration? You have 60 seconds to pitch your idea to the crowd. No slides, just you and your vision. Not pitching? Vote for your favorites!",
      tags: ["60s Pitch", "Voting", "Selection"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M3 11l18-5v12L3 14v-3z"></path>
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
        </svg>
      ),
      color: "bg-sw-blue-washed",
    },
    {
      id: "03",
      title: "Form A Team",
      description: "The top voted ideas form teams. Find the skills you need or join a project that inspires you. This is where the magic of collaboration begins.",
      tags: ["Skill Matching", "Role Assignment", "Brainstorming"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M8 13h2"></path>
          <path d="M8 17h2"></path>
          <path d="M14 13h2"></path>
          <path d="M14 17h2"></path>
        </svg>
      ),
      color: "bg-[#EF476F]",
      textColor: "text-white",
    },
    {
      id: "04",
      title: "Build MVP",
      description: "Roll up your sleeves. It's time to turn concepts into prototypes. Work with your team to build a Minimum Viable Product that demonstrates your core value.",
      tags: ["Prototyping", "Coding", "Designing"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      color: "bg-sw-blue",
      textColor: "text-white",
    },
    {
      id: "05",
      title: "Validate & Pivot",
      description: "Get out of the building (literally or virtually)! Talk to real customers, validate your assumptions, and pivot if necessary. Mentors will guide you through the chaos.",
      tags: ["Customer Validation", "Mentorship", "Iteration"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
      color: "bg-white",
    },
    {
      id: "06",
      title: "Demo Day",
      description: "The grand finale. Pitch your startup to a panel of judges and the community. Celebrate what you've built in just 54 hours and launch your startup journey.",
      tags: ["Final Pitch", "Judging", "Celebration"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
          <path d="M4 22h16"></path>
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
        </svg>
      ),
      color: "bg-[#06D6A0]",
    },
  ];

  return (
    <section className="w-full bg-[#fcfcfc] py-24 md:py-32 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0">
        {/* Subtle dot grid fading out at the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(#1A1A1B_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-[10%] left-[5%] text-sw-blue/10 animate-float-slow hidden md:block">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
            <path d="M45.7,96.5c-24.6,0-44.5-19.9-44.5-44.5S21.1,7.5,45.7,7.5s44.5,19.9,44.5,44.5S70.3,96.5,45.7,96.5z"/>
          </svg>
        </div>

        <div className="absolute top-[20%] right-[10%] text-[#FFD166]/20 animate-float-delayed">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor" className="animate-spin-slow origin-center">
            <polygon points="50,15 90,85 10,85" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="absolute top-[45%] left-[10%] text-[#EF476F]/15 animate-pulse-slow hidden lg:block">
          <svg width="160" height="160" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
            <circle cx="50" cy="50" r="40" strokeDasharray="8 8" />
          </svg>
        </div>

        <div className="absolute top-[65%] right-[5%] text-[#06D6A0]/20 animate-float-medium">
          <svg width="90" height="90" viewBox="0 0 100 100" fill="currentColor" className="rotate-12">
            <rect x="25" y="25" width="50" height="50" rx="8" />
          </svg>
        </div>

        <div className="absolute bottom-[10%] left-[15%] text-sw-navy/10 animate-float-fast">
          <svg width="70" height="70" viewBox="0 0 100 100" fill="currentColor" className="animate-spin-slow origin-center">
            <path d="M40,10 h20 v30 h30 v20 h-30 v30 h-20 v-30 h-30 v-20 h30 z" />
          </svg>
        </div>
        
        <div className="absolute bottom-[25%] right-[15%] text-foreground/10 animate-float-slow hidden md:block">
          <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M10,40 Q25,10 50,40 T90,40" strokeLinecap="round" />
            <path d="M10,60 Q25,30 50,60 T90,60" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 relative">
          <h2 className="font-heading font-bold text-5xl md:text-7xl mb-4 relative inline-block">
            HOW IT WORKS
            {/* Wavy underline */}
            <svg className="absolute -bottom-6 left-0 w-full h-8 text-sw-blue" viewBox="0 0 300 20" fill="none" preserveAspectRatio="none">
              <path d="M0 10 Q 37.5 20 75 10 T 150 10 T 225 10 T 300 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
            </svg>
          </h2>
          <p className="font-medium text-xl text-foreground/70 max-w-2xl mx-auto mt-8">
          From meeting strangers on Friday to pitching a startup together on Sunday.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* The Central Dashed Winding Line (Desktop Only) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 hidden md:block z-0">
             <svg width="10" height="100%" viewBox="0 0 10 100%" preserveAspectRatio="none" fill="none">
               <line x1="5" y1="0" x2="5" y2="100%" stroke="#1A1A1B" strokeWidth="4" strokeDasharray="12 12" strokeLinecap="round"/>
             </svg>
          </div>

          <div className="space-y-12 md:space-y-0 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0;
              
              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Center Node (Number) */}
                  <div className="md:absolute left-1/2 md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white doodle-border doodle-shadow z-20 mb-6 md:mb-0 rotate-[-5deg] group-hover:rotate-0 transition-transform">
                    <span className="font-heading font-black text-2xl">{step.id}</span>
                  </div>

                  {/* Card Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}>
                    <div className={`doodle-border doodle-shadow-hover rounded-3xl p-8 relative group transition-transform duration-300 ${step.color} ${step.textColor || 'text-foreground'}`}>
                      
                      {/* Decorative icon background */}
                      <div className="absolute top-6 right-6 opacity-20 group-hover:scale-110 transition-transform group-hover:rotate-12">
                        {step.icon}
                      </div>

                      <span className="font-hand text-xl opacity-80 mb-2 block">Step {step.id}</span>
                      <h3 className="font-heading font-bold text-3xl mb-4 leading-tight">{step.title}</h3>
                      <p className={`font-medium mb-8 leading-relaxed opacity-90`}>
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {step.tags.map(tag => (
                          <span key={tag} className={`text-sm font-bold px-3 py-1 rounded-full border-2 border-current bg-white/20 backdrop-blur-sm`}>
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Doodle pointing down to next section */}
        <div className="flex justify-center mt-20">
           <div className="relative">
             <span className="font-hand text-2xl text-sw-navy absolute -left-32 top-4 -rotate-12">And then...</span>
             <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
                <path d="M20 0 L20 50 M10 40 L20 55 L30 40" stroke="#1A1A1B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
           </div>
        </div>

      </div>
    </section>
  );
};
