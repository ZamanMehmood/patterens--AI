 "use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/viewer/home" },
    { name: "Map Explorer", href: "/viewer/mapExplorer" },
    { name: "Statistics", href: "/viewer/statistics" },
    { name: "Projects", href: "/viewer/projects" },
    { name: "About", href: "/viewer/about" },
    { name: "Contact Us", href: "/viewer/contactUs" },

  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/viewer/home"
          className="text-white text-2xl font-bold tracking-wide hover:text-green-400 transition-colors"
        >
          Patterns
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            <Link
              href="/auth/login"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Log In
            </Link>
            <Link
              href="/auth/signup"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-200 hover:text-white transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-gray-200 space-y-3 px-6 py-4 transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-gray-700 my-2" />
          <Link
            href="/auth/login"
            onClick={() => setIsOpen(false)}
            className="block hover:text-white"
          >
            Log In
          </Link>
          <Link
            href="/auth/signup"
            onClick={() => setIsOpen(false)}
            className="block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
