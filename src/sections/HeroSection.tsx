"use client";

import Image from "next/image";
import { DoodleButton } from "@/components/DoodleButton";
import { motion } from "framer-motion";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const textBlurVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-16 pb-24 md:py-32 flex flex-col items-center text-center ">
      {/* Floating Doodles & Images */}
     
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
        animate={{ opacity: 0.8, scale: 1, rotate: 15 }}
        transition={{ duration: 1, delay: 1.2, type: "spring" }}
        className="absolute top-32 right-10 md:right-24 hidden lg:block text-sw-blue pointer-events-none"
      >
        <svg className="animate-pulse-slow" width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 10 L50 90 M10 50 L90 50 M25 25 L75 75 M25 75 L75 25" />
        </svg>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center z-10 w-full"
      >
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.1] tracking-tight max-w-4xl relative z-10">
          <motion.div variants={textBlurVariants} className="inline-block">
            <motion.span 
              initial={{ scale: 0.8, rotate: -15 }}
              animate={{ scale: 1, rotate: -4 }}
              transition={{ type: "spring", delay: 0.95, bounce: 0.5, duration: 0.5 }}
              className="sticker-box sticker-box--yellow inline-block"
            >
              B
            </motion.span>
            UILD A STARTU
            <motion.span 
              initial={{ scale: 0.8, rotate: 15 }}
              animate={{ scale: 1, rotate: 6 }}
              transition={{ type: "spring", delay: 1.05, bounce: 0.5, duration: 0.5 }}
              className="sticker-box inline-block"
            >
              P
            </motion.span>
          </motion.div>
          <br />
          <motion.div variants={textBlurVariants} className="inline-block relative mt-2 md:mt-4">
            IN{" "}
            <span className="relative inline-block px-[0.2em] z-10 whitespace-nowrap">
              {/* Animated Blue Highlight */}
              <motion.span 
                className="absolute top-[5%] left-[-2.5%] w-[105%] h-[100%] bg-sw-blue -z-10 rounded-[8px_12px_10px_8px]"
                style={{ originX: 0 }}
                initial={{ scaleX: 0, rotate: -2 }}
                animate={{ scaleX: 1, rotate: -2 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Text transitioning to white */}
              <motion.span
                initial={{ color: "#1A1A1B" }}
                animate={{ color: "#ffffff" }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="inline-block"
              >
                54 HOURS
              </motion.span>
            </span>
          </motion.div>
        </h1>
        
        {/* Hand-drawn arrow pointing to title */}
        <motion.div 
          className="absolute top-1/2 right-0 mt-6 md:right-[5%] z-10"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10, rotate: -15 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
            className="font-hand text-2xl md:text-3xl text-sw-navy absolute -top-12 -right-5 md:-right-50 hidden sm:block whitespace-nowrap rotate-45"
          >
            No talk, all action!
          </motion.p>
          <svg className="absolute top-10 -right-16 md:-right-50 hidden sm:block rotate-30" width="141" height="172" viewBox="0 0 141 172" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              d="M96.3143 1.00056C152.917 6.59784 180.805 166.848 1.50391 164.275M1.50391 164.275L9.06262 156.815M1.50391 164.275L9.06263 170.315" stroke="#124F6B" strokeWidth="2" strokeLinecap="round"
            />
          </svg>
        </motion.div>

        <motion.p 
          variants={textBlurVariants}
          className="mt-8 font-medium text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed"
        >
          At Startup Weekend developers, designers, marketers, and idea people come together to launch something real. Pitch on Friday, build all weekend, and demo your startup on Sunday.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="mt-12 relative"
        >
          <DoodleButton variant="cta" href="#past-events">Join the vibe</DoodleButton>
        </motion.div>

        {/* Wavy line separator */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 w-full max-w-md mx-auto opacity-50"
        >
          <svg width="100%" height="20" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              d="M0 10 Q 50 20 100 10 T 200 10 T 300 10 T 400 10" stroke="#1A1A1B" strokeWidth="4" strokeLinecap="round" fill="none"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
