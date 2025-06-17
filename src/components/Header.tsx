import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="flex justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-bold text-black">
          <Link href="/">Insurance4U</Link>
        </h1>

        <nav className="flex items-center gap-8">
          <Link href="/quote/motoring-insurance">
            <span className="text-base text-gray-800 hover:text-[#FFE95C] transition">Motor</span>
          </Link>
          <Link href="/quote/home-insurance">
            <span className="text-base text-gray-800 hover:text-[#FFE95C] transition">Home</span>
          </Link>
          <Link href="/quote/health-insurance">
            <span className="text-base text-gray-800 hover:text-[#FFE95C] transition">Health</span>
          </Link>        
          <Link href="/about">
            <span className="text-base text-gray-800 hover:text-[#FFE95C] transition">About Us</span>
            </Link>
          <Link href="/account">
            <span className="text-base text-gray-800 hover:text-[#FFE95C] transition">Account</span>
          </Link>

          <Link href="/get-a-quote">
            <button className="bg-[#FFE95C] text-black font-semibold px-6 py-2 rounded-full shadow hover:opacity-90 transition">
              Get a Quote
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
