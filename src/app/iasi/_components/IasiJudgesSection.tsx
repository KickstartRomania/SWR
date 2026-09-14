"use client";

import { motion } from "framer-motion";

export function IasiJudgesSection() {
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1A1A1B 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 relative inline-block">
            Meet your judges
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300 -z-10 transform -rotate-2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ originX: 0 }}
            />
          </h2>
          <p className="font-heading font-bold text-2xl text-foreground/50 mt-8">
            Jury announced soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
