"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const agenda = {
  Friday: [
    { time: "17:30 – 18:00", title: "Registration", description: "Arrive, check in, grab a badge, and settle in before kickoff." },
    { time: "18:00 – 18:30", title: "Networking & Dinner", description: "Meet fellow participants over dinner and start exchanging ideas." },
    { time: "18:30 – 19:00", title: "Welcome & Kickoff", description: "Get the weekend overview, rules, and what to expect next." },
    { time: "19:00 – 19:30", title: "Idea Pitches", description: "Anyone can step up, pitch an idea, and inspire a team." },
    { time: "19:30 – 20:00", title: "Voting & Team Formation", description: "Vote for the strongest ideas and gather into teams." },
    { time: "20:00 – Late", title: "Startup Building", description: "Start shaping your concept, dividing roles, and building together." },
  ],
  Saturday: [
    { time: "09:00 – 09:30", title: "Breakfast", description: "Fuel up, reconnect with your team, and plan the day ahead." },
    { time: "10:00 – 11:00", title: "Value Proposition Workshop", description: "Costin Sorici from OVIDIUS University Constanta will help teams sharpen their customer value proposition." },
    { time: "11:00 – 13:00", title: "Build Sprint", description: "Use the morning momentum to test assumptions and move your startup forward." },
    { time: "13:00 – 14:00", title: "Lunch", description: "Take a break, recharge, and compare progress with other teams." },
    { time: "14:00 – 17:00", title: "Mentor Sessions", description: "Meet mentors, get feedback, and pressure-test your direction." },
    { time: "18:00 – 19:00", title: "Pitching Workshop", description: "Cosmin Pirvu from Veridion will share how to craft a stronger, clearer final pitch." },
    { time: "19:00 – 20:00", title: "Dinner", description: "Pause for dinner before heading into the final evening push." },
    { time: "20:00 – Late", title: "Late Build", description: "Keep building late into the night and bring your idea closer to launch." },
  ],
  Sunday: [
    { time: "09:00 – 09:30", title: "Breakfast", description: "Start the final day together and align on what still needs to get done." },
    { time: "10:00 – 11:00", title: "Founder-led Sales Workshop", description: "Learn practical sales lessons founders can apply from day one." },
    { time: "11:00 – 12:30", title: "Final Build Sprint", description: "Push through the last build window and prepare for presentation time." },
    { time: "12:30 – 13:30", title: "Lunch", description: "Reset, regroup, and get ready for the final stretch." },
    { time: "14:00 – 15:00", title: "Final Presentations", description: "Take the stage and present your startup to the judges and audience." },
    { time: "15:30 – 16:00", title: "Awards", description: "Celebrate the standout teams as the weekend winners are announced." },
    { time: "16:00 – 17:00", title: "Networking & Closing", description: "Wrap up the weekend, celebrate together, and stay connected." },
  ],
};

export function ConstantaAgendaSectionV2() {
  const [activeTab, setActiveTab] = useState<keyof typeof agenda>("Friday");

  return (
    <section className="w-full bg-[#fcfcfc] py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 relative">
          <h2 className="font-heading font-bold text-5xl md:text-7xl mb-4 relative inline-block">
            AGENDA
            <svg className="absolute -bottom-6 left-0 w-full h-8 text-sw-blue" viewBox="0 0 300 20" fill="none" preserveAspectRatio="none">
              <path d="M0 10 Q 37.5 20 75 10 T 150 10 T 225 10 T 300 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
            </svg>
          </h2>
          <p className="font-medium text-xl text-foreground/70 max-w-2xl mx-auto mt-8">
            How things will unfold.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {(Object.keys(agenda) as Array<keyof typeof agenda>).map((day) => (
            <button
              key={day}
              onClick={() => setActiveTab(day)}
              className={`px-8 py-3 font-heading font-bold text-xl md:text-2xl transition-all duration-300 rounded-full doodle-border ${
                activeTab === day 
                ? "bg-sw-blue text-white doodle-shadow-active translate-y-[2px]" 
                : "bg-white text-foreground hover:bg-sw-blue-washed doodle-shadow"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Cards container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start"
            >
              {(() => {
                const items = agenda[activeTab];
                const half = Math.ceil(items.length / 2);
                const leftCol = items.slice(0, half);
                const rightCol = items.slice(half);
                const renderCard = (item: typeof items[0], index: number, globalIndex: number) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: globalIndex * 0.05 }}
                    key={globalIndex}
                    className="bg-white doodle-border doodle-shadow-hover rounded-2xl p-5 md:p-6 flex flex-col md:flex-row gap-4 items-start md:items-center transition-transform duration-300"
                  >
                    <div className="shrink-0 bg-sw-blue-washed text-sw-blue font-heading font-bold text-lg px-3 py-1.5 rounded-xl border-2 border-current">
                      {item.time}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-1">{item.title}</h3>
                      {item.description && (
                        <p className="font-medium text-foreground/80 text-base leading-snug">{item.description}</p>
                      )}
                    </div>
                  </motion.div>
                );
                return (
                  <>
                    <div className="flex flex-col gap-4 md:gap-6">
                      {leftCol.map((item, i) => renderCard(item, i, i))}
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                      {rightCol.map((item, i) => renderCard(item, i, half + i))}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
