"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const quotes = [
  {
    title: "Motoring >",
    image: "/sofia-in-the-car.png"
  },
  {
    title: "Home >",
    image: "/sofia-home.png"
  },
  {
    title: "Health >",
    image: "/sofia-medicine.png"
  }
];

export default function QuotesSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-5xl font-extrabold text-center mb-20 text-yellow-600">What type of quotes can you get?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {quotes.map((quote, index) => (
            <Link
              key={index}
              href={`/quote/${quote.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="block"
            >
              <motion.div
                className="bg-yellow-50 p-8 rounded-3xl shadow-xl border border-yellow-100 flex flex-col items-center text-center hover:shadow-2xl transition cursor-pointer"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, delay: index * 0.3, repeat: Infinity, repeatType: "reverse" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={quote.image}
                    alt={quote.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 1024px) 300px, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <h4 className="text-2xl font-bold text-yellow-700">{quote.title}</h4>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
