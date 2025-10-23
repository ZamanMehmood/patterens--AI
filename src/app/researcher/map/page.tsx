// "use client";
// import { useState } from "react";
// import { ChevronDown, ChevronUp, X, Menu } from "lucide-react";

// export default function MapPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [openSections, setOpenSections] = useState<Record<string, boolean>>({
//     Species: true,
//     TimeRange: false,
//     CameraID: false,
//     ModelVersion: false,
//     Reviewer: false,
//     Project: false,
//     Stats: false,
//     Tools: false,
//     Individuals: false,
//   });

//   const toggleSection = (name: string) => {
//     setOpenSections((prev) => ({ ...prev, [name]: !prev[name] }));
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100 text-gray-700">
//       {/* Header */}
//       <div className="bg-[#4a5e4b] text-white px-6 py-3 text-xl font-light flex items-center justify-between">
//         <span>Advanced Map Analysis</span>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden p-1 rounded hover:bg-[#5b725c]"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {/* Main Layout */}
//       <div className="flex flex-1 overflow-hidden relative">
//         {/* Sidebar */}
//         <aside
//           className={`${
//             sidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } fixed md:static top-0 left-0 z-50 w-72 bg-white h-[100vh] border-r border-gray-200 transform transition-transform duration-300 ease-in-out flex flex-col shadow-md`}
//         >
//           <div className="flex items-center justify-between px-4 py-3 border-b">
//             <h2 className="font-medium text-gray-800 text-lg">
//               Wildlife Observations
//             </h2>
//             <button
//               className="md:hidden p-1"
//               onClick={() => setSidebarOpen(false)}
//             >
//               <X size={18} />
//             </button>
//           </div>

//           {/* Scrollable filter list */}
//           <div className="flex-1 overflow-y-auto text-sm bg-white">
//             {/* Filters */}
//             <div className="px-4 py-2 font-semibold text-gray-500">Filters</div>

//             {[
//               "Species",
//               "TimeRange",
//               "CameraID",
//               "ModelVersion",
//               "Reviewer",
//               "Project",
//               "Stats",
//               "Tools",
//               "Individuals",
//             ].map((section) => (
//               <div key={section} className="border-t">
//                 <button
//                   className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-50"
//                   onClick={() => toggleSection(section)}
//                 >
//                   <span>{section.replace(/([A-Z])/g, " $1").trim()}</span>
//                   {openSections[section] ? (
//                     <ChevronUp size={16} />
//                   ) : (
//                     <ChevronDown size={16} />
//                   )}
//                 </button>
//                 {openSections[section] && (
//                   <div className="px-6 py-2 text-gray-500 space-y-1 bg-white">
//                     {section === "Species" && (
//                       <>
//                         <div>Jaguar</div>
//                         <div>Puma</div>
//                       </>
//                     )}
//                     {section === "TimeRange" && (
//                       <>
//                         <div>Last Month</div>
//                         <div>Last Year</div>
//                         <div>Custom</div>
//                       </>
//                     )}
//                     {section === "Stats" && (
//                       <div className="text-xs italic">
//                         Showing *** Verified Observations
//                       </div>
//                     )}
//                     {section === "Tools" && (
//                       <div className="flex items-center gap-2 text-gray-500">
//                         <span className="text-lg">🧰</span> Measurement Tool
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))}

//             {/* Bottom Section */}
//             <div className="mt-2 border-t">
//               <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">
//                 Recent Observations
//               </button>
//               <div className="px-6 py-2 text-gray-500 space-y-1 text-sm">
//                 <div>Image</div>
//                 <div>Species</div>
//                 <div>Date</div>
//               </div>
//             </div>
//           </div>
//         </aside>

//         {/* Map Area */}
//         <div className="flex-1 relative bg-gray-200">
//           <div className="w-full h-[100vh]">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27201.70836164866!2d74.4062976!3d31.545753599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1760628823133!5m2!1sen!2s"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>

//           {/* Overlay Example (satellite toggle placeholder) */}
//           <div className="absolute bottom-6 left-6 bg-white rounded shadow px-3 py-2 flex items-center gap-2 text-sm">
//             <span>🛰️</span> Satellite View
//           </div>

//           {/* Zoom controls placeholder */}
//           <div className="absolute bottom-6 right-6 flex flex-col bg-white rounded shadow">
//             <button className="p-2 border-b hover:bg-gray-100">+</button>
//             <button className="p-2 hover:bg-gray-100">−</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, X, Menu } from "lucide-react";

export default function MapPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Species: true,
    TimeRange: false,
    CameraID: false,
    ModelVersion: false,
    Reviewer: false,
    Project: false,
    Stats: false,
    Tools: false,
    Individuals: false,
  });

  const toggleSection = (name: string) => {
    setOpenSections((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  // ✅ Fix: automatically show sidebar when screen ≥768px (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // run once on load
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-700">
      {/* Header */}
      <div className="bg-[#4a5e4b] text-white px-6 py-3 text-xl font-light flex items-center justify-between">
        <span>Advanced Map Analysis</span>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-1 rounded hover:bg-[#5b725c]"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed md:static top-0 left-0 z-50 w-72 bg-white h-[100vh] border-r border-gray-200 transform transition-transform duration-300 ease-in-out flex flex-col shadow-md`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h2 className="font-medium text-gray-800 text-lg">
              Wildlife Observations
            </h2>
            <button
              className="md:hidden p-1"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable filter list */}
          <div className="flex-1 overflow-y-auto text-sm bg-white">
            <div className="px-4 py-2 font-semibold text-gray-500">Filters</div>

            {[
              "Species",
              "TimeRange",
              "CameraID",
              "ModelVersion",
              "Reviewer",
              "Project",
              "Stats",
              "Tools",
              "Individuals",
            ].map((section) => (
              <div key={section} className="border-t">
                <button
                  className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-50"
                  onClick={() => toggleSection(section)}
                >
                  <span>{section.replace(/([A-Z])/g, " $1").trim()}</span>
                  {openSections[section] ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                {openSections[section] && (
                  <div className="px-6 py-2 text-gray-500 space-y-1 bg-white">
                    {section === "Species" && (
                      <>
                        <div>Jaguar</div>
                        <div>Puma</div>
                      </>
                    )}
                    {section === "TimeRange" && (
                      <>
                        <div>Last Month</div>
                        <div>Last Year</div>
                        <div>Custom</div>
                      </>
                    )}
                    {section === "Stats" && (
                      <div className="text-xs italic">
                        Showing *** Verified Observations
                      </div>
                    )}
                    {section === "Tools" && (
                      <div className="flex items-center gap-2 text-gray-500">
                        <span className="text-lg">🧰</span> Measurement Tool
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-2 border-t">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700">
                Recent Observations
              </button>
              <div className="px-6 py-2 text-gray-500 space-y-1 text-sm">
                <div>Image</div>
                <div>Species</div>
                <div>Date</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Map Area */}
        <div className="flex-1 relative bg-gray-200">
          <div className="w-full h-[100vh]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27201.70836164866!2d74.4062976!3d31.545753599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1760628823133!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Overlay Example */}
          <div className="absolute bottom-6 left-6 bg-white rounded shadow px-3 py-2 flex items-center gap-2 text-sm">
            <span>🛰️</span> Satellite View
          </div>

          {/* Zoom controls */}
          <div className="absolute bottom-6 right-6 flex flex-col bg-white rounded shadow">
            <button className="p-2 border-b hover:bg-gray-100">+</button>
            <button className="p-2 hover:bg-gray-100">−</button>
          </div>
        </div>
      </div>
    </div>
  );
}
