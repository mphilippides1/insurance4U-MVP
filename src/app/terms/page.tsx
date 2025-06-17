"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function TermsOfService() {
  return (
    <main className="bg-[#F9F9F9] min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#FFE95C] py-24 text-center text-black">
        <h1 className="text-6xl font-extrabold mb-4">Terms of Service</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Please read these terms carefully before using Insurance4U.
        </p>
      </section>

      {/* Content Section */}
      <section className="bg-white py-24 px-6 max-w-5xl mx-auto">
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 text-lg">
              By accessing and using Insurance4U, you agree to comply with and be bound by these terms and all applicable laws and regulations. If you do not agree, you should not use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">2. Services Provided</h2>
            <p className="text-gray-700 text-lg">
              Insurance4U provides an insurance comparison platform allowing users to compare policies, get quotes, and obtain relevant information from multiple providers.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 text-lg">
              You are responsible for providing accurate and complete information during quote requests or form submissions. You must not use our services for any unlawful purpose.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-700 text-lg">
              Insurance4U is not an insurance provider. We are not responsible for the terms, conditions, or coverage provided by third-party insurers. All policies are subject to the respective insurer’s rules.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">5. Modifications</h2>
            <p className="text-gray-700 text-lg">
              We reserve the right to update these Terms of Service at any time. Continued use of the platform after changes constitutes your acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">6. Contact Us</h2>
            <p className="text-gray-700 text-lg">
              If you have any questions regarding these terms, please contact us at support@insurance4u.com.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}