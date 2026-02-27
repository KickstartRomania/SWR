"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Iacob Mihai",
      city: "Bucharest",
      quote: "Fuel your brain with 7 meals, endless snacks, and as much coffee as you need. We've got the energy covered — so you can stay focused on building something great.",
      color: "bg-[#FFD166]",
    },
    {
      name: "John Doe",
      city: "Cluj",
      quote: "At Startup Weekend developers, designers, marketers, and idea people come together to launch something real. Pitch on Friday, build all weekend, and demo your startup on Sunday.",
      color: "bg-sw-blue-washed",
    },
    {
      name: "Jane Smith",
      city: "Timișoara",
      quote: "The best weekend of my life! I met amazing people and built something I'm proud of. The energy and creativity in the room was incredible.",
      color: "bg-[#EF476F]",
      textColor: "text-white",
    },
    {
      name: "Alex Popescu",
      city: "Iași",
      quote: "Startup Weekend changed my perspective on entrepreneurship. In just 54 hours, we went from an idea to a working prototype and a pitch that got investors interested.",
      color: "bg-sw-blue",
      textColor: "text-white",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      y: -50,
      opacity: 0,
      rotate: direction > 0 ? 5 : -5,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      position: "absolute" as const,
      top: 0,
      left: 0,
      right: 0,
      x: direction < 0 ? 500 : -500,
      y: 50,
      opacity: 0,
      rotate: direction < 0 ? 5 : -5,
      scale: 0.95,
    })
  };

  return (
    <section className="w-full bg-[#fcfcfc] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 relative">
          <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6">
            What our past<br />
            <span className="relative inline-block mt-2">
              participants say
              {/* Highlight background */}
              <span className="absolute -inset-2 bg-sw-blue -z-10 rotate-[-2deg] rounded-lg"></span>
              <span className="text-white relative z-10">participants say</span>
            </span>
          </h2>

          {/* Decorative quotes doodle */}
          <div className="absolute top-0 right-10 md:right-32 text-sw-navy opacity-20 hidden sm:block">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
              <path d="M30 20 C 10 20, 10 50, 30 50 L 30 70 L 50 50 C 60 50, 50 20, 30 20 Z" />
              <path d="M70 20 C 50 20, 50 50, 70 50 L 70 70 L 90 50 C 100 50, 90 20, 70 20 Z" />
            </svg>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">

          <div className="flex justify-between items-center mb-8 px-4">
            <button
              onClick={handlePrev}
              className="doodle-border doodle-shadow-active w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-sw-blue-washed transition-colors group"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="font-hand text-xl text-foreground/60">
              {currentIndex + 1} / {testimonials.length}
            </span>

            <button
              onClick={handleNext}
              className="doodle-border doodle-shadow-active w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-sw-blue-washed transition-colors group"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="relative min-h-[450px]">
            <AnimatePresence custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 120, damping: 25 },
                  y: { type: "spring", stiffness: 120, damping: 25 },
                  opacity: { duration: 0.4 },
                  rotate: { type: "spring", stiffness: 120, damping: 25 },
                  scale: { duration: 0.4 }
                }}
                className="w-full"
              >
                {/* The Speech Bubble */}
                <div className={`doodle-border doodle-shadow rounded-[40px] p-8 md:p-12 relative min-h-[300px] flex flex-col justify-center transition-colors duration-500 ${testimonials[currentIndex].color} ${testimonials[currentIndex].textColor || 'text-foreground'}`}>

                  {/* Giant quotation marks watermark */}
                  <div className="absolute top-6 left-6 opacity-10 pointer-events-none">
                    <span className="font-heading font-black text-9xl">"</span>
                  </div>

                  <p className="font-medium text-2xl md:text-3xl lg:text-4xl leading-relaxed relative z-10">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  {/* The "Tail" of the speech bubble */}
                  <div className={`absolute -bottom-8 left-16 md:left-24 w-12 h-12 ${testimonials[currentIndex].color} doodle-border border-t-0 border-l-0 transform rotate-45 transition-colors duration-500`}></div>
                </div>

                {/* Author Info */}
                <div className="mt-12 ml-16 md:ml-24 flex items-center gap-4">
                  {/* Hand-drawn arrow pointing from the tail to the author */}
                  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="text-sw-navy rotate-[-30deg] -mt-6">
                    <path d="M10 10 Q 30 20 40 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <path d="M30 40 L 40 40 L 40 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>

                  <div>
                    <h4 className="font-heading font-bold text-2xl">{testimonials[currentIndex].name}</h4>
                    <span className="font-hand text-xl text-sw-blue block -mt-1">
                      Startup Weekend {testimonials[currentIndex].city}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
