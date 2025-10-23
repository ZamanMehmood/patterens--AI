import { ReactNode } from "react";
import Navbar from "./Navbar";

export const metadata = {
  title: "Researcher Dashboard",
  description: "Researcher portal for observation tracking",
};

export default function ResearcherLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      

      {/* Page Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
