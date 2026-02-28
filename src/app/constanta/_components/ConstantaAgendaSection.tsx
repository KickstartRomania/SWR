"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const agenda = {
  Friday: [
    { time: "17:30 - 18:00", title: "Registration", description: "Arrive at the venue and get checked in" },
    { time: "18:00 - 18:30", title: "Dinner & networking", description: "Eat food, share ideas, practice pitches, and get to know your fellow participants" },
    { time: "18:30 - 19:00", title: "Welcome", description: "Meet our Techstars facilitator and review agenda for the weekend" },
    { time: "19:00 - 20:00", title: "Pitches", description: "Facilitator gives a walk-through of the pitching process and then pitches begin! Optionally line up to give your pitch" },
    { time: "20:00 - 21:00", title: "Vote for top pitches and form teams", description: "Network, share questions, vote for the top pitches and form teams" },
    { time: "21:00 - 21:30", title: "Workshop: From Idea to Reality", description: "Learn how to validate your idea and start building" },
    { time: "21:30 - 00:00", title: "Start building!", description: "Set up your team workspace for the weekend and start work on the idea. You may stay as late as the venue will allow" },
  ],
  Saturday: [
    { time: "TBA", title: "Schedule coming soon", description: "Stay tuned for the full Saturday program" },
  ],
  Sunday: [
    { time: "TBA", title: "Schedule coming soon", description: "Stay tuned for the full Sunday program" },
  ],
};

export function ConstantaAgendaSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof agenda>("Friday");

  return (
    <section className="w-full bg-[#fcfcfc] py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Notebook Container */}
        <div className="bg-white rounded-r-3xl rounded-l-md border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex min-h-[600px]">

          {/* Notebook Spiral Binding / Punch Holes */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gray-100 border-r-2 border-black flex flex-col justify-evenly items-center py-8 z-20">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#fcfcfc] border-2 border-black inset-shadow"></div>
            ))}
          </div>

          {/* Red Margin Line */}
          <div className="absolute left-16 md:left-24 top-0 bottom-0 w-0.5 bg-red-400/60 z-10"></div>
          <div className="absolute left-[70px] md:left-[100px] top-0 bottom-0 w-0.5 bg-red-400/60 z-10"></div>

          {/* Notebook Ruled Background */}
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-40 ml-8 md:ml-12"
            style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 39px, #60a5fa 39px, #60a5fa 40px)", backgroundPositionY: "40px" }}
          ></div>

          {/* Content Area */}
          <div className="flex-1 ml-8 md:ml-12 pl-12 pr-6 md:pl-20 md:pr-12 pt-16 pb-16 relative z-10">

            <div className="text-left mb-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-hand font-bold text-5xl md:text-6xl mb-2 text-sw-blue tracking-wider transform -rotate-2 inline-block">
                  AGENDA
                </h2>
                <p className="font-hand text-2xl text-foreground/70 transform -rotate-1">How things will probably work</p>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-4 mb-10 border-b-2 border-black/10 pb-6">
              {(Object.keys(agenda) as Array<keyof typeof agenda>).map((day) => (
                <motion.button
                  key={day}
                  onClick={() => setActiveTab(day)}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-1 font-hand text-2xl transition-colors relative ${activeTab === day ? "text-sw-blue font-bold" : "text-foreground/60 hover:text-black"
                    }`}
                >
                  {day}
                  {activeTab === day && (
                    <motion.svg layoutId="dayUnderline" className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                    </motion.svg>
                  )}
                </motion.button>
              ))}
            </div>

            <div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {agenda[activeTab].map((item, index) => (
                    <motion.div
                      key={`${activeTab}-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex flex-col md:flex-row gap-2 md:gap-6 group"
                    >
                      <div className="font-hand font-bold text-sw-blue text-xl md:w-36 pt-1 tracking-wider">{item.time}</div>
                      <div className="flex-1">
                        <h3 className="font-hand font-bold text-2xl mb-1 group-hover:text-sw-blue transition-colors">
                          {item.title}
                        </h3>
                        <p className="font-hand text-xl text-foreground/80 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
