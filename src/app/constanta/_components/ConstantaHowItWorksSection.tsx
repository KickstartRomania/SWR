"use client";

import { motion } from "framer-motion";

export const ConstantaHowItWorksSection = () => {
  const steps = [
    {
      id: "01",
      title: "Connect & Network",
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
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 relative">
          <h2 className="font-heading font-bold text-5xl md:text-7xl mb-4 relative inline-block">
            HOW IT WORKS
            <svg className="absolute -bottom-6 left-0 w-full h-8 text-sw-blue" viewBox="0 0 300 20" fill="none" preserveAspectRatio="none">
              <path d="M0 10 Q 37.5 20 75 10 T 150 10 T 225 10 T 300 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
            </svg>
          </h2>
          <p className="font-medium text-xl text-foreground/70 max-w-2xl mx-auto mt-8">
            From meeting strangers on Friday to pitching a startup together on Sunday.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <div className={`doodle-border doodle-shadow-hover rounded-3xl p-7 relative group transition-transform duration-300 h-full ${step.color} ${step.textColor || "text-foreground"}`}>

                {/* Decorative icon */}
                <div className="absolute top-5 right-5 opacity-20 group-hover:scale-110 transition-transform group-hover:rotate-12">
                  {step.icon}
                </div>

                <span className="font-hand text-lg opacity-70 mb-1 block">Step {step.id}</span>
                <h3 className="font-heading font-bold text-2xl mb-4 leading-tight">{step.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {step.tags.map(tag => (
                    <span key={tag} className="text-sm font-bold px-3 py-1 rounded-full border-2 border-current bg-white/20 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
