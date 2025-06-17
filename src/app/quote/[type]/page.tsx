"use client";
import React from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const insuranceInfo: Record<string, { title: string; description: string }> = {
  "motoring-insurance": {
    title: "Motoring Insurance",
    description: "Protect your vehicle with flexible and affordable motor insurance plans. Compare multiple providers instantly and get the best offers for your needs.",
  },
  "home-insurance": {
    title: "Home Insurance",
    description: "Safeguard your home and belongings with comprehensive home insurance packages designed to give you peace of mind.",
  },
  "health-insurance": {
    title: "Health Insurance",
    description: "Stay covered with personalized health insurance solutions for you and your family. Compare policies and choose the best one with ease.",
  },
};

export default function Page() {
  const { type } = useParams();
  const insurance = insuranceInfo[type as string];

  if (!insurance) {
    return (
      <div className="flex justify-center items-center min-h-screen text-black text-2xl">
        Insurance type not found.
      </div>
    );
  }

  return (
    <main className="bg-[#F9F9F9] min-h-screen flex flex-col">
      <Header />

      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-black mb-8">{insurance.title}</h1>
        <p className="text-lg text-gray-700 mb-16">{insurance.description}</p>

        <div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-black">Request a Quote</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Full Name</label>
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFE95C] placeholder-gray-400 text-lg"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Email</label>
              <input
                type="email"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFE95C] placeholder-gray-400 text-lg"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Phone</label>
              <input
                type="tel"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFE95C] placeholder-gray-400 text-lg"
                placeholder="+123456789"
              />
            </div>

            <button
              type="submit"
              className="bg-[#FFE95C] text-black font-semibold px-8 py-4 rounded-full shadow-md text-lg hover:opacity-90 transition w-full"
            >
              Get My Quote
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
