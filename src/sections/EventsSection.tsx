"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function EventsSection() {
  const tickets = [
    {
      city: "Constanta",
      slug: "constanta",
      date: "17-19",
      month: "April",
      color: "bg-sw-blue",
      rotation: -6,
      xOffset: -40,
      yOffset: 20,
      initialX: 20,
      initialY: 15,
      initialRotate: 0,
    },
    {
      city: "Bucharest",
      hasDiffUrl: true,
      slug: "https://startupweekendbucharest.com/",
      date: "24-26",
      month: "April",
      color: "bg-sw-navy",
      rotation: 8,
      xOffset: 40,
      yOffset: -10,
      initialX: -80,
      initialY: -15,
      initialRotate: 0,
    }
  ];

  return (
    <section id="past-events" className="w-full  py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6 relative z-30">
          <h2 className="font-heading font-bold text-5xl md:text-7xl max-w-2xl leading-[1.1]">
            Join our<br />
            <span className="relative">
              next events
              <svg className="absolute -bottom-4 left-0 w-full h-5 text-sw-blue" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M2 9.5C40 -2 150 -2 198 9.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <div className="hidden md:block absolute right-32 -top-10">
            <p className="font-hand text-3xl text-sw-navy rotate-12">Get yours now!</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0 mt-10">

          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.city}
              initial={{ rotate: ticket.initialRotate ?? 0, x: ticket.initialX ?? 0, y: ticket.initialY ?? 0, scale: 0.92 }}
              whileInView={{
                rotate: ticket.rotation,
                x: ticket.xOffset,
                y: ticket.yOffset,
                scale: 1
              }}
              whileHover={{ scale: 1.02, zIndex: 40 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", bounce: 0.6, duration: 1.4, delay: index * 0.12 }}
              className={`md:relative w-full max-w-3xl ${index > 0 ? 'md:-ml-56 z-20' : 'z-10'}`}
            >
              <div className="doodle-border doodle-shadow bg-white rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative group w-full h-full">

                {/* Stub (Left Side) */}
                <div className={`${ticket.color} text-white p-10 flex flex-col justify-center items-center md:w-[32%] relative border-b-4 md:border-b-0 md:border-r-[4px] border-dashed border-foreground/30`}>
                  {/* Top Cutout */}
                  <div className="absolute top-[-24px] right-[-24px] w-12 h-12 bg-sw-blue-washed rounded-full border-[3px] border-foreground z-20 hidden md:block"></div>
                  {/* Bottom Cutout */}
                  <div className="absolute bottom-[-24px] right-[-24px] w-12 h-12 bg-sw-blue-washed rounded-full border-[3px] border-foreground z-20 hidden md:block"></div>

                  <span className="font-heading font-black text-7xl md:text-8xl tracking-tighter mb-2">{ticket.date}</span>
                  <span className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-widest">{ticket.month}</span>
                </div>

                {/* Main Content (Right Side) */}
                <div className="p-10 md:p-14 md:w-[68%] flex flex-col justify-between relative bg-[#fdfdfd]">
                  <div className="flex justify-between items-start mb-16">
                    <div>
                      <h3 className="font-heading font-black text-5xl md:text-6xl mb-4">{ticket.city}</h3>
                      <div className="flex items-center gap-3 text-foreground/70 font-medium text-xl md:text-2xl">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        Builders House
                      </div>
                    </div>
                    {/* Fake QR / Logo block */}
                    <div className="w-20 h-20 border-[3px] border-foreground rounded-2xl opacity-10 p-1.5 flex flex-wrap gap-1.5 hidden sm:flex">
                      <div className="w-4 h-4 bg-foreground rounded-sm"></div>
                      <div className="w-4 h-4 bg-foreground rounded-sm"></div>
                      <div className="w-4 h-4 bg-foreground rounded-sm"></div>
                      <div className="w-4 h-4 bg-foreground rounded-sm"></div>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                    <div className="font-mono text-foreground/40 font-bold text-xl tracking-wider">
                      GENERAL<br />ADMISSION
                    </div>
                    <Link
                      href={ticket.hasDiffUrl ? ticket.slug : `/${ticket.slug}#signup`}
                      className="doodle-border doodle-shadow-active bg-sw-blue text-white font-heading font-bold text-2xl px-10 py-4 rounded-full hover:bg-sw-navy hover:scale-105 transition-all w-full sm:w-auto cursor-pointer text-center inline-block"
                    >
                      Join now
                    </Link>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
