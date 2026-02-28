"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { DoodleButton } from "@/components/DoodleButton";
import { CustomSelect } from "@/components/CustomSelect";
import { FooterCTASection, Footer } from "@/sections";

const COMMITMENT_OPTIONS = [
  { value: "yes", label: "Yes, I can commit fully" },
  { value: "with-some-flexibility", label: "Yes, with some flexibility" },
  { value: "partial", label: "Partial commitment" },
];

const inputBase =
  "w-full px-4 py-3 rounded-xl border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-sw-blue focus:border-transparent";

export default function HostPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 20, stiffness: 100 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-16 md:py-24">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full relative"
        >
          {/* Hero Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight">
              Host Startup Weekend
              <br />
              <span className="relative inline-block px-[0.15em]">
                <span className="absolute inset-0 bg-sw-blue -z-10 rounded-lg" style={{ transform: "rotate(-2deg)" }} />
                <span className="relative text-white">in Your City</span>
              </span>
            </h1>
            <p className="mt-8 font-medium text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Bring the energy of entrepreneurship to your community. As a facilitator, you&apos;ll lead an incredible weekend where ideas become reality, connections are made, and startups are born.
            </p>
          </motion.div>

          {/* Application Form - Bento Grid */}
          <motion.div variants={itemVariants} className="relative">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8">Facilitator Application</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
              {/* Bento cell: Full Name */}
              <div className="doodle-border doodle-shadow rounded-2xl p-6 bg-[#FFD166] rotate-[-1deg] hover:rotate-0 transition-transform">
                <label htmlFor="fullName" className="block font-heading font-bold text-lg mb-2">
                  Full Name <span className="text-[#EF476F]">*</span>
                </label>
                <input id="fullName" type="text" placeholder="John Doe" required className={inputBase} />
              </div>

              {/* Bento cell: Email */}
              <div className="doodle-border doodle-shadow rounded-2xl p-6 bg-white rotate-[1deg] hover:rotate-0 transition-transform">
                <label htmlFor="email" className="block font-heading font-bold text-lg mb-2">
                  Email Address <span className="text-[#EF476F]">*</span>
                </label>
                <input id="email" type="email" placeholder="john@example.com" required className={inputBase} />
              </div>

              {/* Bento cell: Phone */}
              <div className="doodle-border doodle-shadow rounded-2xl p-6 bg-sw-blue-washed rotate-[2deg] hover:rotate-0 transition-transform">
                <label htmlFor="phone" className="block font-heading font-bold text-lg mb-2">
                  Phone <span className="text-[#EF476F]">*</span>
                </label>
                <input id="phone" type="tel" placeholder="+40 123..." required className={inputBase} />
              </div>

              {/* Bento cell: City */}
              <div className="doodle-border doodle-shadow rounded-2xl p-6 bg-white rotate-[-2deg] hover:rotate-0 transition-transform">
                <label htmlFor="city" className="block font-heading font-bold text-lg mb-2">
                  City <span className="text-[#EF476F]">*</span>
                </label>
                <input id="city" type="text" placeholder="Cluj-Napoca" required className={inputBase} />
              </div>

              {/* Bento cell: Commitment - spans 2 cols */}
              <div className="md:col-span-2 doodle-border doodle-shadow rounded-2xl p-6 bg-sw-blue text-white rotate-[1deg] hover:rotate-0 transition-transform relative overflow-hidden">
                <div className="absolute top-4 right-4 text-white/20">
                  <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L55 40 L100 50 L55 60 L50 100 L45 60 L0 50 L45 40 Z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 relative z-10">Commitment</h3>
                <div className="space-y-4 relative z-10">
                  <div>
                    <label id="commitment-label" htmlFor="commitment" className="block font-bold mb-2 text-white/90">
                      Can you commit to 54 hours? <span className="text-[#FFD166]">*</span>
                    </label>
                    <CustomSelect
                      id="commitment"
                      name="commitment"
                      options={COMMITMENT_OPTIONS}
                      placeholder="Select an option"
                      required
                      variant="light"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block font-bold mb-2 text-white/90">Preferred Event Date</label>
                      <input id="preferredDate" type="date" className={`${inputBase} bg-white text-foreground`} />
                    </div>
                    <div>
                      <label htmlFor="linkedin" className="block font-bold mb-2 text-white/90">LinkedIn Profile</label>
                      <input id="linkedin" type="url" placeholder="https://linkedin.com/in/..." className={`${inputBase} bg-white text-foreground`} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bento cell: Professional Background - spans 2 cols */}
              <div className="md:col-span-2 doodle-border doodle-shadow rounded-2xl p-6 bg-white rotate-[-1deg] hover:rotate-0 transition-transform">
                <label htmlFor="professionalBackground" className="block font-heading font-bold text-lg mb-2">
                  Professional Background <span className="text-[#EF476F]">*</span>
                </label>
                <textarea id="professionalBackground" placeholder="Tell us about your professional experience..." rows={5} required className={`${inputBase} resize-none`} />
              </div>

              {/* Bento cell: Event Experience - spans 2 cols */}
              <div className="md:col-span-2 doodle-border doodle-shadow rounded-2xl p-6 bg-[#FEF9C3] rotate-[2deg] hover:rotate-0 transition-transform">
                <label htmlFor="eventExperience" className="block font-heading font-bold text-lg mb-2">
                  Previous Event Organization Experience
                </label>
                <textarea id="eventExperience" placeholder="Have you organized events before?" rows={4} className={`${inputBase} resize-none`} />
              </div>

              {/* Bento cell: Why host - spans 2 cols */}
              <div className="md:col-span-2 doodle-border doodle-shadow rounded-2xl p-6 bg-sw-blue-washed rotate-[-2deg] hover:rotate-0 transition-transform">
                <label htmlFor="whyHost" className="block font-heading font-bold text-lg mb-2">
                  Why host in your city? <span className="text-[#EF476F]">*</span>
                </label>
                <textarea id="whyHost" placeholder="Share your vision and motivation..." rows={5} required className={`${inputBase} resize-none`} />
              </div>

              {/* Bento cell: Additional Comments - full width */}
              <div className="md:col-span-2 lg:col-span-4 doodle-border doodle-shadow rounded-2xl p-6 bg-white rotate-[1deg] hover:rotate-0 transition-transform">
                <label htmlFor="comments" className="block font-heading font-bold text-lg mb-2">
                  Additional Comments
                </label>
                <textarea id="comments" placeholder="Anything else you'd like us to know..." rows={4} className={`${inputBase} resize-none`} />
              </div>

              {/* Submit - full width */}
              <div className="md:col-span-2 lg:col-span-4 pt-4">
                <DoodleButton type="submit" variant="cta" className="w-full justify-center md:max-w-md mx-auto block">
                  Submit Application
                </DoodleButton>
              </div>
            </form>
          </motion.div>
        </motion.section>
      </main>

      <FooterCTASection />
      <Footer />
    </div>
  );
}
