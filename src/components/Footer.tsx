import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FFE95C] border-t border-gray-200 py-10 px-8 text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Insurance4U</h2>
          <p className="text-sm text-gray-600">Your trusted insurance partner, making life easier and safer.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy"><span className="hover:text-black transition">Privacy Policy</span></Link></li>
            <li><Link href="/terms"><span className="hover:text-black transition">Terms of Service</span></Link></li>
            <li><Link href="/contact"><span className="hover:text-black transition">Contact Us</span></Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#"><FaFacebook size={24} /></a>
            <a href="#"><FaTwitter size={24} /></a>
            <a href="#"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Insurance4U. All rights reserved.
      </div>
    </footer>
  );
}
