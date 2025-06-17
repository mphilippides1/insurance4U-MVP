"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FaCar, FaHome, FaHeartbeat } from "react-icons/fa";

export default function Page() {
  return (
    <main className="bg-[#F9F9F9] min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#FFE95C] py-24 text-center text-black">
        <h1 className="text-6xl font-extrabold mb-4">About Insurance4U</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Simplifying insurance, saving you time and money.
        </p>
      </section>

      {/* Company Story */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-black">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Insurance4U is your digital insurance partner, making the complex world of insurance simple and transparent. With just a few clicks, you can compare prices from multiple providers and get the best deals instantly. Our mission is to empower users with fast, objective, and reliable information, saving both time and money while offering excellent support throughout your insurance journey. Whether you&apos;re looking for car, home or health insurance, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#F9F9F9] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 text-center">
              <FaCar className="text-6xl text-[#FFE95C] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-black">Motoring Insurance</h3>
              <p className="text-gray-600">Comprehensive car insurance solutions tailored to your needs.</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 text-center">
              <FaHome className="text-6xl text-[#FFE95C] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-black">Home Insurance</h3>
              <p className="text-gray-600">Protect your home and valuable belongings with ease.</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 text-center">
              <FaHeartbeat className="text-6xl text-[#FFE95C] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-black">Health Insurance</h3>
              <p className="text-gray-600">Affordable and flexible health coverage for you and your family.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-black">Why Trust Insurance4U?</h2>
          <div className="flex justify-center mb-16">
            <Image src="/sophia-pointing.png" alt="Sofia" width={250} height={250} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl bg-[#F9F9F9] shadow-md border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#FFE95C] rounded-full text-2xl font-bold text-black">1</div>
              <h3 className="text-xl font-semibold mb-3 text-black">We are independent & objective</h3>
              <p className="text-gray-600">Our recommendations are unbiased, ensuring you always get the best deal available based on your needs.</p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F9F9F9] shadow-md border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#FFE95C] rounded-full text-2xl font-bold text-black">2</div>
              <h3 className="text-xl font-semibold mb-3 text-black">Top-notch support</h3>
              <p className="text-gray-600">Our experienced agents guide you through every step, both before and after purchasing your policy.</p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F9F9F9] shadow-md border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#FFE95C] rounded-full text-2xl font-bold text-black">3</div>
              <h3 className="text-xl font-semibold mb-3 text-black">Fast & secure comparison platform</h3>
              <p className="text-gray-600">Quickly compare providers and policies in seconds using our simple, transparent, and secure platform.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
