import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-sm p-6 bg-yellow-600 text-white">
      © {new Date().getFullYear()} Insurance4U. All rights reserved.
    </footer>
  );
}