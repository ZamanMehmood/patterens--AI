// import React from "react";

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="min-h-screen  text-dark-900" style={{backgroundColor:"2F2F2F"}}>
//       <header className="p-4 text-dark text-start font-semibold"  >
//         Admin Portal
//       </header>
//       <main className="p-6">{children}</main>
//     </div>
//   );
// }



"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Database,
  Settings,
  FileText,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
  { name: "Users", icon: Users, href: "/admin/users" },
  { name: "Models", icon: Database, href: "/admin/models" },
  { name: "Settings", icon: Settings, href: "/admin/settings" },
  { name: "Audit Log", icon: FileText, href: "/admin/auditLogs" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-20 bg-gray-800 text-white w-64 md:w-60 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h1 className="text-lg font-semibold">Admin Portal</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mt-4 flex flex-col space-y-1">
          {navItems.map(({ name, icon: Icon, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                className={`flex items-center gap-3 px-5 py-3 transition-colors ${
                  isActive
                    ? "bg-gray-900 text-blue-400 border-l-4 border-blue-400"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span>{name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay (mobile) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between bg-gray-900 text-white px-6 py-3 shadow-md">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-400 hover:text-white"
            >
              <Menu size={22} />
            </button>
            {/* <h1 className="text-lg font-semibold">
              {navItems.find((item) => pathname === item.href)?.name || ""}
            </h1> */}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
