import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen  text-dark-900" style={{backgroundColor:"2F2F2F"}}>
      <header className="p-4 text-dark text-start font-semibold"  >
        Admin Portal
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
