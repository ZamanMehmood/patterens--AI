import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-4 bg-blue-600 text-white text-center font-semibold">
        Admin Portal
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
