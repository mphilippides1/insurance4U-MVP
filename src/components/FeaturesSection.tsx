"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🧮",
    title: "Compare Providers",
    description: "Save time and money by seeing all your options in one place."
  },
  {
    icon: "⚡",
    title: "Instant Quotes",
    description: "Get personalized quotes in seconds, no more waiting."
  },
  {
    icon: "📞",
    title: "24/7 Support",
    description: "Our experts are always available to assist you."
  },
  {
    icon: "📄",
    title: "Manage Policies",
    description: "Access and update your insurance policies anytime, anywhere."
  }
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-5xl font-extrabold text-center mb-20 text-black">Why Insurance4U?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#F9F9F9] p-10 rounded-3xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, delay: index * 0.3, repeat: Infinity, repeatType: "reverse" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h4 className="text-2xl font-bold mb-3 text-black">{feature.title}</h4>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      
      </div>
    </section>
  );
}
