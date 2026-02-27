"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { DoodleButton } from "@/components/DoodleButton";
import { FooterCTASection } from "@/sections";

export default function ContactPage() {
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

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full relative"
        >
          {/* Hero Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-6 font-medium text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Have questions about Startup Weekend Romania? Want to partner with us or just say hello? We&apos;d love to hear from you!
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          >
            {/* Contact Form - Doodle Card */}
            <div className="order-2 lg:order-1">
              <div className="bg-white text-foreground p-8 rounded-3xl border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(26,26,27,1)]">
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
                  Send us a message
                </h2>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-bold mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-sw-blue focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-sw-blue focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-bold mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What is this about?"
                      className="w-full px-4 py-3 rounded-xl border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-sw-blue focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-bold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message here..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-sw-blue focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <DoodleButton type="submit" variant="cta" className="w-full justify-center">
                      Send Message
                    </DoodleButton>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info - Blue Section */}
            <div className="order-1 lg:order-2">
              <div className="bg-sw-blue py-12 px-8 md:px-10 rounded-3xl border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(26,26,27,1)] h-full text-white relative overflow-hidden">
                {/* Background doodle */}
                <div className="absolute top-6 right-6 text-white/20">
                  <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L55 40 L100 50 L55 60 L50 100 L45 60 L0 50 L45 40 Z" />
                  </svg>
                </div>

                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 relative z-10">
                  Contact Info
                </h2>

                <div className="space-y-8 relative z-10">
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#FEF9C3]">Email</h3>
                    <a
                      href="mailto:hello@startupweekend.ro"
                      className="text-lg hover:underline"
                    >
                      hello@startupweekend.ro
                    </a>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#FEF9C3]">Phone</h3>
                    <a
                      href="tel:+40712345678"
                      className="text-lg hover:underline"
                    >
                      +40 712 345 678
                    </a>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#FEF9C3]">Location</h3>
                    <p className="text-lg">Bucharest, Romania</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 text-[#FEF9C3]">Follow Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        aria-label="Instagram"
                        className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-sw-blue transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-sw-blue transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        aria-label="TikTok"
                        className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-sw-blue transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <FooterCTASection />
    </div>
  );
}
