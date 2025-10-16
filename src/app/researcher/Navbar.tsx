// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "Dashboard", href: "/researcher/dashboard" },
//     { name: "Review Queue", href: "/researcher/review-queue" },
//     { name: "Map", href: "/researcher/map" },
//     { name: "Timeline", href: "/researcher/timeline" },
//     { name: "Projects", href: "/researcher/projects" },
//     { name: "Exports", href: "/researcher/exports" },
//     { name: "Settings", href: "/researcher/settings" },
//   ];

//   return (
//     <nav className="bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
//         {/* Left: Logo */}
//         <span className="font-semibold text-gray-900 text-base">Patterns</span>

//         {/* Center: Nav links (desktop) */}
//         <div className="hidden md:flex flex-1 justify-center">
//           <div className="flex items-center space-x-6 text-sm font-medium text-gray-700">
//             {links.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={`hover:text-green-900 transition-colors ${
//                   pathname === link.href ? "text-green-900 font-semibold" : ""
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Right: Hamburger (mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-700 hover:text-green-900 focus:outline-none"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile dropdown
//       {menuOpen && (
//         <div className="md:hidden border-t border-gray-200 bg-white">
//           <div className="flex flex-col items-center space-y-3 py-3 text-sm font-medium text-gray-700">
//             {links.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setMenuOpen(false)}
//                 className={`hover:text-green-900 transition-colors ${
//                   pathname === link.href ? "text-green-900 font-semibold" : ""
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )} */}
//     </nav>
//   );
// }




 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Dashboard", href: "/researcher/dashboard" },
    { name: "Review Queue", href: "/researcher/review-queue" },
    { name: "Map", href: "/researcher/map" },
    { name: "Timeline", href: "/researcher/timeline" },
    { name: "Projects", href: "/researcher/projects" },
    { name: "Exports", href: "/researcher/exports" },
    { name: "Settings", href: "/researcher/settings" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
        {/* Left: Logo */}
        <span className="font-semibold text-gray-900 text-base">Patterns</span>

        {/* Center: Nav links (desktop) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center space-x-6 text-sm font-medium text-gray-700">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-green-900 transition-colors ${
                  pathname === link.href ? "text-green-900 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Hamburger (mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-green-900 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile dropdown (shows names, works correctly) */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white animate-fadeIn">
          <div className="flex flex-col items-center space-y-3 py-3 text-sm font-medium text-gray-700">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`hover:text-green-900 transition-colors ${
                  pathname === link.href ? "text-green-900 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
