import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-4 py-4 bg-white shadow-sm">
      <Link href="/dashboard">
        <div className="bg-yellow-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
          Dashboard
        </div>
      </Link>
      <Link href="/quote/motoring-insurance">
        <div className="bg-yellow-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
          Motoring
        </div>
      </Link>
      <Link href="/quote/home-insurance">
        <div className="bg-yellow-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
          Home
        </div>
      </Link>
      <Link href="/quote/health-insurance">
        <div className="bg-yellow-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
          Health 
        </div>
      </Link>
      <Link href="/assistant">
        <div className="bg-yellow-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
          Sophia AI
        </div>
      </Link>
    </nav>
  );
}
