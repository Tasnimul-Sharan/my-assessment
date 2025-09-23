"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">IPSUM</div>

      {/* Menu */}
      <div className="space-x-8 hidden md:flex">
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href="/products" className="text-white hover:text-gray-300">
          Products
        </Link>
        <Link href="/about" className="text-white hover:text-gray-300">
          About
        </Link>
        <Link href="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}
