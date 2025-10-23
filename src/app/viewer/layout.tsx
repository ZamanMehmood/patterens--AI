// import { ReactNode } from "react";
// import Navbar from "./Navbar";

// export default function ViewerLayout({ children }: { children: ReactNode }) {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
//       <Navbar />
//       <main className="flex-grow p-6">{children}</main>
//     </div>
//   );
// }


// app/viewer/layout.tsx
 
import Navbar from "./Navbar";
export const metadata = {
  title: "Wildlife Tracking Portal",
  description: "AI-powered wildlife tracking and visualization platform",
};

export default function ViewerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
