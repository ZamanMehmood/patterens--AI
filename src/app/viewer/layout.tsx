import Navbar from "./Navbar";
import Footer from "@/components/footer";
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
    <>
      <Navbar />
      {/* <main className="pt-20 min-h-screen bg-gray-50 text-gray-900 font-sans px-4 sm:px-6 lg:px-8"> */}
      <main className=" min-h-screen bg-gray-50 text-gray-900 font-sans  ">
      
        {children}
      </main>
      <Footer />
    </>
  );
}
