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
    { time: "09:00 - 10:00", title: "Breakfast", description: "Arrive, have breakfast, and get ready for the day" },
    { time: "10:00 - 12:00", title: "Work with your team", description: "Continue working on your prototype and validation" },
    { time: "12:00 - 13:00", title: "Lunch", description: "Grab a bite and network with other teams" },
    { time: "13:00 - 18:00", title: "Mentorship sessions", description: "Mentors will circulate to help you with your challenges" },
    { time: "18:00 - 19:00", title: "Dinner", description: "Refuel for the evening" },
    { time: "19:00 - 00:00", title: "Keep building", description: "Work as late as you need to get your MVP ready" },
  ],
  Sunday: [
    { time: "09:00 - 10:00", title: "Breakfast", description: "Final day begins!" },
    { time: "10:00 - 12:00", title: "Pitch prep", description: "Work on your final presentation and pitch" },
    { time: "12:00 - 13:00", title: "Lunch", description: "Last meal before the big pitches" },
    { time: "13:00 - 15:00", title: "Tech check", description: "Test your slides and demo on the main stage" },
    { time: "15:00 - 17:00", title: "Final Presentations", description: "Pitch your startup to the judges" },
    { time: "17:00 - 18:00", title: "Judging & Awards", description: "Judges deliberate and winners are announced" },
    { time: "18:00 - 20:00", title: "Wrap-up Party", description: "Celebrate with your new friends and network" },
  ],
};

export function BucharestAgendaSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof agenda>("Friday");

  return (
    <section className="w-full bg-[#fcfcfc] py-24 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-sw-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 relative inline-block">
              AGENDA
              <motion.svg
                className="absolute -top-4 -right-8 w-8 h-8 text-sw-blue"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.99 21.01L12.01 20.99M11.5 2.5C11.5 1.5 12.5 1.5 12.5 2.5V3.5C12.5 4.5 11.5 4.5 11.5 3.5V2.5ZM21.5 12.5C22.5 12.5 22.5 11.5 21.5 11.5H20.5C19.5 11.5 19.5 12.5 20.5 12.5H21.5ZM3.5 12.5C2.5 12.5 2.5 11.5 3.5 11.5H4.5C5.5 11.5 5.5 12.5 4.5 12.5H3.5ZM19.07 19.07C19.78 19.78 18.36 18.36 19.07 19.07L18.36 18.36C18.36 18.36 17.65 17.65 18.36 18.36L19.07 19.07ZM4.93 4.93C4.22 4.22 5.64 5.64 4.93 4.93L5.64 5.64C5.64 5.64 6.35 6.35 5.64 5.64L4.93 4.93ZM19.07 4.93C19.78 4.22 18.36 5.64 19.07 4.93L18.36 5.64C18.36 5.64 17.65 6.35 18.36 5.64L19.07 4.93ZM4.93 19.07C4.22 19.78 5.64 18.36 4.93 19.07L5.64 18.36C5.64 18.36 6.35 17.65 5.64 18.36L4.93 19.07Z" />
              </motion.svg>
            </h2>
            <p className="font-medium text-xl text-foreground/70">How things will probably work</p>
          </motion.div>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {(Object.keys(agenda) as Array<keyof typeof agenda>).map((day) => (
            <motion.button
              key={day}
              onClick={() => setActiveTab(day)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-bold text-lg transition-colors ${activeTab === day ? "bg-sw-blue text-white" : "bg-white text-foreground hover:bg-gray-100 border-2 border-black"
                }`}
            >
              {day}
            </motion.button>
          ))}
        </div>

        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {agenda[activeTab].map((item, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.02,
                  rotate: index % 2 === 0 ? -0.5 : 0.5,
                  y: -4,
                  boxShadow: "6px 8px 0px 0px rgba(0,0,0,1)"
                }}
                className="bg-white p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-4 md:gap-8 transition-shadow"
              >
                <div className="font-bold text-sw-blue whitespace-nowrap md:w-32 bg-sw-blue/10 px-3 py-1 rounded-md self-start md:self-center text-center">{item.time}</div>
                <div>
                  <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
