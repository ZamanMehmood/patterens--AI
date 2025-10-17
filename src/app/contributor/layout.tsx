import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function ContributorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
}
