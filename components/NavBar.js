"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NavBar({ darkBackground }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <motion.div
        key={darkBackground ? "white" : "black"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={darkBackground ? "/logo.svg" : "/logo.svg"}
          alt="Logo"
          width={120}
          height={40}
          priority
        />
      </motion.div>

      {/* Menu Icon */}
      <motion.div
        key={darkBackground ? "menu-white" : "menu-black"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="cursor-pointer"
      >
        {darkBackground ? (
          <svg
            xmlns="/logo.svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </motion.div>
    </nav>
  );
}
