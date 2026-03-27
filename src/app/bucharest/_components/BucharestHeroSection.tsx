"use client";

import { motion } from "framer-motion";
import { DoodleButton } from "@/components/DoodleButton";
import Image from "next/image";
export function BucharestHeroSection() {
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

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-24 md:py-32 flex flex-col items-center text-center overflow-hidden">
      {/* Floating Doodles & Stickers */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        animate={{ opacity: 0.8, scale: 1, rotate: -15 }}
        transition={{ duration: 1, delay: 1, type: "spring" }}
        className="absolute top-40 left-10 md:left-24 hidden lg:block text-yellow-400 pointer-events-none"
      >
        <svg className="animate-pulse-slow" width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="50" cy="50" r="30" strokeDasharray="10 10" />
          <path d="M50 0 L50 20 M50 80 L50 100 M0 50 L20 50 M80 50 L100 50 M15 15 L30 30 M70 70 L85 85 M15 85 L30 70 M70 30 L85 15" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
        animate={{ opacity: 0.8, scale: 1, rotate: 15 }}
        transition={{ duration: 1, delay: 1.2, type: "spring" }}
        className="absolute bottom-40 right-10 md:right-24 hidden lg:block text-sw-blue pointer-events-none"
      >
        <svg className="animate-pulse-slow" width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 10 L50 90 M10 50 L90 50 M25 25 L75 75 M25 75 L75 25" />
        </svg>
      </motion.div>

      {/* Sticker Placeholders */}

      {/* Sticker 1: Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: -12 }}
        transition={{ type: "spring", delay: 1.5, stiffness: 200 }}
        className="absolute top-6 left-4 md:top-24 md:left-12 w-20 h-20 md:w-50 md:h-50 flex items-center justify-center z-20 overflow-hidden pointer-events-none"
      >
        <Image src="/stickers/rocket.png" alt="Sticker 1" width={250} height={100} className="object-contain w-full h-full" />
      </motion.div>

      {/* Sticker 2: Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 45 }}
        animate={{ opacity: 1, scale: 1, rotate: 15 }}
        transition={{ type: "spring", delay: 1.7, stiffness: 200 }}
        className="absolute top-6 right-4 md:top-32 md:right-16 w-20 h-20 md:w-28 md:h-28 bg-gray-100/90 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center z-20 shadow-sm backdrop-blur-sm pointer-events-none"
      >
        <Image src="/stickers/smiley.png" alt="Sticker 1" width={250} height={100} className="object-contain w-full h-full" />
      </motion.div>

      {/* Sticker 3: Bottom Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 8 }}
        transition={{ type: "spring", delay: 1.9, stiffness: 200 }}
        className="absolute bottom-6 left-4 md:bottom-20 md:left-24 w-20 h-20 md:w-40 md:h-40 flex items-center justify-center z-20 pointer-events-none"
      >
        <Image src="/stickers/bucharest.png" alt="Sticker 1" width={200} height={200} className="object-contain w-full h-full" />
      </motion.div>

      {/* Sticker 4: Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 30 }}
        animate={{ opacity: 1, scale: 1, rotate: -15 }}
        transition={{ type: "spring", delay: 2.1, stiffness: 200 }}
        className="absolute bottom-6 right-4 md:bottom-24 md:right-40 w-20 h-20 md:w-50 md:h-40 flex items-center justify-center z-20 pointer-events-none"
      >
        <Image src="/stickers/pbp.png" alt="Sticker 1" width={250} height={100} className="object-contain w-full h-full" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center z-10 w-full"
      >
        <motion.span variants={itemVariants} className="font-hand text-2xl md:text-3xl text-sw-blue mb-4 rotate-[-2deg]">
          Next event: 24-26 April 2026
        </motion.span>

        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.1] tracking-tight max-w-4xl relative z-10">
          <motion.div variants={textBlurVariants} className="inline-block">
            STARTUP WEEKEND
          </motion.div>
          <br />
          <motion.div variants={textBlurVariants} className="inline-block relative mt-2 md:mt-4">
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
                BUCHAREST
              </motion.span>
            </span>
          </motion.div>
        </h1>

        {/* Hand-drawn arrow pointing to CTA */}
        <motion.div
          className="absolute top-[80%] -left-[10%] mt-6 hidden lg:block z-10"
        >
          <svg className="rotate-[-10deg]" width="141" height="172" viewBox="0 0 141 172" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
              d="M10 10 C 50 100, 100 120, 160 160" stroke="#E1AD01" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8"
            />
          </svg>
        </motion.div>

        <motion.p
          variants={textBlurVariants}
          className="mt-8 font-medium text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed"
        >
          Build a startup in one weekend.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 relative"
        >
          <DoodleButton variant="cta">Secure your spot!</DoodleButton>
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
