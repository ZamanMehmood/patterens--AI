 "use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Random lion image (you can change this anytime)
  const profileImg =
    "https://media.istockphoto.com/id/1156682358/photo/studio-portrait-of-a-boy-in-a-plaid-shirt.jpg?s=2048x2048&w=is&k=20&c=sRNA5cie-At8d2ACeM-unn9uUnlJXJ2Rvfj4z6IH9pQ=";

  return (
    <nav className="bg-gray-700 text-white px-6 py-4 flex items-center justify-between relative">
      {/* Left: Logo */}
      <div className="text-xl font-semibold">Patterns</div>

      {/* Center: Nav Links (only visible on md+) */}
      <div className="hidden md:flex flex-1 justify-center gap-8">
        <Link href="/contributor/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
        <Link href="/contributor/upload" className="hover:text-gray-300">
          Upload
        </Link>
        <Link href="/contributor/my-gallery" className="hover:text-gray-300">
          My Gallery
        </Link>
        <Link href="/contributor/my-profile" className="hover:text-gray-300">
          My Profile
        </Link>
      </div>

      {/* Right: Avatar + Hamburger (mobile toggle) */}
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <div className="hidden md:block w-10 h-10 rounded-full overflow-hidden border-2 border-white">
          <Image
            src={profileImg}
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>

        {/* Hamburger Icon (mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-700 flex flex-col items-center py-4 space-y-4 md:hidden z-20 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <Link
          href="/contributor/dashboard"
          className="hover:text-gray-300"
          onClick={() => setIsOpen(false)}
        >
          Dashboard
        </Link>
        <Link
          href="/contributor/upload"
          className="hover:text-gray-300"
          onClick={() => setIsOpen(false)}
        >
          Upload
        </Link>
        <Link
          href="/contributor/my-gallery"
          className="hover:text-gray-300"
          onClick={() => setIsOpen(false)}
        >
          My Gallery
        </Link>
        <Link
          href="/contributor/my-profile"
          className="hover:text-gray-300"
          onClick={() => setIsOpen(false)}
        >
          My Profile
        </Link>

        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
          <Image
            src={profileImg}
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>
    </nav>
  );
}
