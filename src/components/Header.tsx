import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-5 bg-white shadow-md">
      <h1 className="text-3xl font-bold text-yellow-600">Insurance4U</h1>
      <button className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
        Sign In
      </button>
    </header>
  );
}
