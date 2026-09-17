"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type AgendaItem = {
  time: string;
  title: string;
  description: string;
};

export type CityAgenda = {
  Friday: AgendaItem[];
  Saturday: AgendaItem[];
  Sunday: AgendaItem[];
};

export function CityAgendaSection({ agenda }: { agenda: CityAgenda }) {
  const [activeTab, setActiveTab] = useState<keyof CityAgenda>("Friday");

  return (
    <section className="w-full bg-[#fcfcfc] py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 relative">
          <h2 className="font-heading font-bold text-5xl md:text-7xl mb-4 relative inline-block">
            AGENDA
            <svg className="absolute -bottom-6 left-0 w-full h-8 text-sw-blue" viewBox="0 0 300 20" fill="none" preserveAspectRatio="none">
              <path d="M0 10 Q 37.5 20 75 10 T 150 10 T 225 10 T 300 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
            </svg>
          </h2>
          <p className="font-medium text-xl text-foreground/70 max-w-2xl mx-auto mt-8">
            How things will unfold.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {(Object.keys(agenda) as Array<keyof CityAgenda>).map((day) => (
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
                const columns = [items.slice(0, half), items.slice(half)];

                return columns.map((column, columnIndex) => (
                  <div key={columnIndex} className="flex flex-col gap-4 md:gap-6">
                    {column.map((item, itemIndex) => {
                      const globalIndex = columnIndex === 0 ? itemIndex : half + itemIndex;
                      return (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: globalIndex * 0.05 }}
                          key={`${item.time}-${item.title}`}
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
                    })}
                  </div>
                ));
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
