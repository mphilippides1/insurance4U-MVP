"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 p-6 text-center bg-white">
      <motion.h2
        className="text-6xl font-extrabold mb-6 tracking-tight text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your ultimate digital insurance partner!
      </motion.h2>
      <motion.p
        className="text-2xl mb-10 max-w-3xl text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        We make insurance simple, fast, and transparent. Get the best policy tailored to your needs.
      </motion.p>
      <motion.button
        className="bg-[#FFE95C] text-black font-semibold px-10 py-4 rounded-full shadow-md text-xl hover:opacity-90 transition"
        whileHover={{ scale: 1.05 }}
      >
        Get Your Quote
      </motion.button>
    </section>
  );
}
