"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <main className="bg-[#F9F9F9] min-h-screen flex flex-col">
      <Header />

      {/* Contact Section */}
      <section className="py-24 px-8 flex flex-col lg:flex-row justify-center items-center gap-24 max-w-7xl mx-auto">
        {/* Sofia Image */}
        <div className="flex-shrink-0">
          <Image
            src="/contactusSophia.png"
            alt="Sofia Contact"
            width={450}
            height={450}
            className="rounded-3xl"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-100 w-full max-w-xl">
          <h2 className="text-4xl font-bold mb-10 text-center text-black">Contact Us</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-black">First Name</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFE95C] placeholder-gray-400 text-lg"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-black">Last Name</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFE95C] placeholder-gray-400 text-lg"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Email Address</label>
              <input
                type="email"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFE95C] placeholder-gray-400 text-lg"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Message</label>
              <textarea
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFE95C] placeholder-gray-400 text-lg"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#FFE95C] text-black font-semibold px-10 py-4 rounded-full shadow-md text-lg hover:opacity-90 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
