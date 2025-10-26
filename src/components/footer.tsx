//  "use client";
// import Link from "next/link";
// import React from "react";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#2b2b2b] text-gray-300 py-10 px-6 sm:px-10 lg:px-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
//         {/* Products */}
//         <div>
//           <h4 className="text-white font-semibold mb-3">Products</h4>
//           <ul className="space-y-2 text-sm">
//             <li>Features</li>
//             <li>Map</li>
//             <li>Timeline</li>
//             <li>Projects</li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h4 className="text-white font-semibold mb-3">Company</h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <Link href="/viewer/mapExplorer" className="hover:text-[#E6D1A6] transition">
//                 Map Explorer
//               </Link>
//             </li>
//             <li>
//               <Link href="/viewer/statistics" className="hover:text-[#E6D1A6] transition">
//                 Statistics
//               </Link>
//             </li>
//             <li>
//               <Link href="/viewer/projects" className="hover:text-[#E6D1A6] transition">
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link href="/viewer/about" className="hover:text-[#E6D1A6] transition">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="/viewer/contactUs" className="hover:text-[#E6D1A6] transition">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Resources */}
//         <div>
//           <h4 className="text-white font-semibold mb-3">Resources</h4>
//           <ul className="space-y-2 text-sm">
//             <li>Documentation</li>
//             <li>API</li>
//             <li>Privacy</li>
//             <li>Terms</li>
//           </ul>
//         </div>

//         {/* Connect */}
//         <div>
//           <h4 className="text-white font-semibold mb-3">Connect</h4>
//           <div className="flex space-x-4 text-lg">
//             <i className="fab fa-twitter"></i>
//             <i className="fab fa-github"></i>
//             <i className="fab fa-linkedin"></i>
//             <i className="fab fa-instagram"></i>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Note */}
//       <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
//         <p>© 2023 Patterns. A Grow Jungles Initiative</p>
//         <p className="mt-2 sm:mt-0">Made with ♥ for the planet</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import Link from "next/link";
import React from "react";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 py-12 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10">
        {/* Products */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#E6D1A6] cursor-pointer transition">Features</li>
            <li className="hover:text-[#E6D1A6] cursor-pointer transition">Map</li>
            <li className="hover:text-[#E6D1A6] cursor-pointer transition">Timeline</li>
            <li className="hover:text-[#E6D1A6] cursor-pointer transition">Projects</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/viewer/mapExplorer" className="hover:text-[#E6D1A6] transition">
                Map Explorer
              </Link>
            </li>
            <li>
              <Link href="/viewer/statistics" className="hover:text-[#E6D1A6] transition">
                Statistics
              </Link>
            </li>
            <li>
              <Link href="/viewer/projects" className="hover:text-[#E6D1A6] transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/viewer/about" className="hover:text-[#E6D1A6] transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/viewer/contactUs" className="hover:text-[#E6D1A6] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#E6D1A6] cursor-pointer transition">Documentation</li>
            <li className="hover:text-[#E6D1A6] cursor-pointer transition">API</li>
            <li className="hover:text-[#E6D1A6] cursor-pointer transition">Privacy</li>
            <li className="hover:text-[#E6D1A6] cursor-pointer transition">Terms</li>
          </ul>
        </div>

       
        {/* Connect */}
<div>
  <h4 className="text-white text-lg font-semibold mb-4">Connect</h4>
  <div className="flex flex-col space-y-1 sm:space-x-5 space-y-4 ">
    <Link
      href="https://twitter.com"
      target="_blank"
      className="flex items-center hover:text-[#E6D1A6] transition"
    >
      <Twitter className="w-5 h-5 mr-2" />
      <span className="text-sm">Twitter</span>
    </Link>
    <Link
      href="https://github.com"
      target="_blank"
      className="flex items-center hover:text-[#E6D1A6] transition"
    >
      <Github className="w-5 h-5 mr-2" />
      <span className="text-sm">GitHub</span>
    </Link>
    <Link
      href="https://linkedin.com"
      target="_blank"
      className="flex items-center hover:text-[#E6D1A6] transition"
    >
      <Linkedin className="w-5 h-5 mr-2" />
      <span className="text-sm">LinkedIn</span>
    </Link>
    <Link
      href="https://instagram.com"
      target="_blank"
      className="flex items-center hover:text-[#E6D1A6] transition"
    >
      <Instagram className="w-5 h-5 mr-2" />
      <span className="text-sm">Instagram</span>
    </Link>
  </div>
</div>

      </div>

      {/* Bottom Note */}
      <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 border-t border-gray-700 pt-6">
        <p>© 2025 Patterns. A Grow Jungles Initiative</p>
        <p className="mt-2 sm:mt-0">Made with ❤️ for the planet</p>
      </div>
    </footer>
  );
};

export default Footer;
