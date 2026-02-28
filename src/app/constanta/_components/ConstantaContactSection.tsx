"use client";

import { motion } from "framer-motion";
import { DoodleButton } from "@/components/DoodleButton";

export function ConstantaContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section className="w-full bg-sw-blue py-24 relative overflow-hidden text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        className="absolute top-10 left-10 pointer-events-none"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 50 Q 50 10 90 50 T 170 50" stroke="white" strokeWidth="2" strokeDasharray="5 5" fill="none" />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        className="absolute bottom-10 right-10 pointer-events-none"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="30" stroke="yellow" strokeWidth="4" strokeDasharray="10 10" fill="none" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="font-heading font-bold text-4xl md:text-5xl mb-8 relative inline-block">
            Get in touch
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400 -z-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ originX: 0 }}
            />
          </motion.h2>

          <div className="space-y-8 mt-4">
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-xl mb-2 text-yellow-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email
              </h3>
              <p className="text-lg hover:text-yellow-100 transition-colors cursor-pointer inline-block">constanta@startupweekend.ro</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-xl mb-2 text-yellow-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Phone
              </h3>
              <p className="text-lg hover:text-yellow-100 transition-colors cursor-pointer inline-block">+40 123 456 789</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-xl mb-2 text-yellow-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Location
              </h3>
              <p className="text-lg">Constanta Venue, Constanta</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-xl mb-4 text-yellow-300">Follow Us</h3>
              <div className="flex gap-4">
                <motion.a whileHover={{ scale: 1.15, rotate: -5, backgroundColor: "#fff", color: "#1A1A1B" }} href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, rotate: 5, backgroundColor: "#fff", color: "#1A1A1B" }} href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, rotate: -5, backgroundColor: "#fff", color: "#1A1A1B" }} href="#" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center transition-colors">
                  <span className="sr-only">TikTok</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Signup Form */}
        <motion.div
          id="signup"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
          className="bg-white text-foreground p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
        >
          <svg className="absolute -top-6 -right-6 text-yellow-400 w-16 h-16 animate-pulse-slow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>

          <h3 className="font-heading font-bold text-3xl mb-6">Sign up now</h3>

          <form className="space-y-6">
            <div>
              <label className="block font-bold mb-2">Full Name</label>
              <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-sw-blue/30 transition-all hover:bg-gray-50 bg-white" />
            </div>

            <div>
              <label className="block font-bold mb-2">Email Address</label>
              <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-3 rounded-xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-sw-blue/30 transition-all hover:bg-gray-50 bg-white" />
            </div>

            <div>
              <label className="block font-bold mb-2">Phone Number</label>
              <input type="tel" placeholder="+40 123 456 789" className="w-full px-4 py-3 rounded-xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-sw-blue/30 transition-all hover:bg-gray-50 bg-white" />
            </div>

            <div>
              <label className="block font-bold mb-2">Your Role</label>
              <select className="w-full px-4 py-3 rounded-xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-sw-blue/30 appearance-none bg-white transition-all hover:bg-gray-50 cursor-pointer">
                <option value="">Select your role</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="business">Business / Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-4">
              <DoodleButton variant="cta" className="w-full justify-center">Register Now</DoodleButton>
            </motion.div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
