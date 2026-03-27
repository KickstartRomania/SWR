"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const agenda = {
  Friday: [
    { time: "17:30 – 18:00", title: "Registration", description: "Arrive, check in, grab a badge, and meet fellow participants." },
    { time: "18:00 – 19:00", title: "Networking & Dinner", description: "Break the ice, meet new people, and start sharing ideas." },
    { time: "19:00 – 19:15", title: "Welcome & Kickoff", description: "Quick intro, rules, and what to expect." },
    { time: "19:15 – 20:15", title: "Idea Pitches", description: "Pitch your idea or listen to others. Anyone can take the stage." },
    { time: "20:15 – 20:45", title: "Voting & Team Formation", description: "Vote for the best ideas and form teams." },
    { time: "20:45 – 21:00", title: "Validation Basics", description: "Quick guidance on how to validate ideas fast." },
    { time: "21:00 – Late", title: "Start Building", description: "Define your concept, assign roles, and begin working." },
  ],
  Saturday: [
    { time: "09:00 – 09:30", title: "Breakfast", description: "" },
    { time: "09:30 – 10:30", title: "Workshop", description: "" },
    { time: "10:30 – 13:00", title: "Build Sprint #1", description: "" },
    { time: "13:00 – 14:00", title: "Lunch", description: "" },
    { time: "14:00 – 17:00", title: "Mentor Sessions", description: "" },
    { time: "17:00 – 19:00", title: "Build Sprint #2", description: "" },
    { time: "19:00 – 20:00", title: "Dinner", description: "" },
    { time: "20:00 – Late", title: "Pitch Workshop & Late Build", description: "" },
  ],
  Sunday: [
    { time: "09:00 – 09:30", title: "Breakfast", description: "" },
    { time: "09:30 – 12:30", title: "Final Build Sprint", description: "" },
    { time: "12:30 – 13:30", title: "Lunch", description: "" },
    { time: "13:30 – 15:30", title: "Pitch Prep & Tech Check", description: "" },
    { time: "16:00 – 18:00", title: "Final Presentations", description: "" },
    { time: "18:00 – 18:30", title: "Awards & Announcements", description: "Winners revealed, quick wrap-up." },
    { time: "18:30 – 19:30", title: "Networking & Closing", description: "Celebrate, connect, and wrap the weekend." },
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
