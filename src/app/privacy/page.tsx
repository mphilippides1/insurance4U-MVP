"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#F9F9F9] min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#FFE95C] py-24 text-center text-black">
        <h1 className="text-6xl font-extrabold mb-4">Privacy Policy</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Your privacy is very important to us. Please read this carefully.
        </p>
      </section>

      {/* Content Section */}
      <section className="bg-white py-24 px-6 max-w-5xl mx-auto">
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">1. Data Collection</h2>
            <p className="text-gray-700 text-lg">
              We collect personal information such as your name, email, and any details you provide while using our services or filling out forms on our platform. We may also collect technical data such as IP address, browser type, and usage information to improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">2. Use of Information</h2>
            <p className="text-gray-700 text-lg">
              The information we collect is used to personalize your experience, provide accurate insurance quotes, improve our services, and communicate with you regarding your requests and updates.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">3. Data Sharing</h2>
            <p className="text-gray-700 text-lg">
              We do not sell or rent your personal information. We may share your data with trusted partners and insurance providers strictly for the purpose of delivering the services you requested.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">4. Security</h2>
            <p className="text-gray-700 text-lg">
              We implement advanced security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">5. Your Rights</h2>
            <p className="text-gray-700 text-lg">
              You have the right to access, correct, or delete your personal information. You may also request to restrict or object to certain types of data processing.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">6. Contact Us</h2>
            <p className="text-gray-700 text-lg">
              If you have any questions or concerns regarding this Privacy Policy, please contact us at support@insurance4u.com.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
