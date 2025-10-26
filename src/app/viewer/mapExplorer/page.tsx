 

// "use client";
// import { useState } from "react";
// import { SlidersHorizontal } from "lucide-react";

// export default function MapExplorerPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen w-full overflow-hidden bg-gray-50">
//       {/* Sidebar */}
//       <aside
//         className={`fixed md:static top-0 left-0 z-40 w-80 bg-white border-r border-gray-200 shadow-lg h-full p-5 transform transition-transform duration-300 ease-in-out
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
//       >
//         {/* Sidebar Header */}
//         <div className="mb-6 sticky top-0 bg-white z-10 pb-3 border-b flex items-center justify-between">
//           <h2 className="text-lg font-bold text-green-700 flex items-center gap-2">
//             <span className="inline-block w-1.5 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></span>
//             <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
//               Apply Filters
//             </span>
//           </h2>
//         </div>

//         {/* Filter Options Header with X */}
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-base font-semibold text-gray-800">
//             Filter Options
//           </h3>
//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="text-gray-500 hover:text-gray-700 text-xl font-bold"
//           >
//             ×
//           </button>
//         </div>

//         {/* Sidebar Content */}
//         <div className="overflow-y-auto h-[calc(100%-4rem)] pr-2 space-y-6 text-sm">
//           {/* Species */}
//           <div>
//             <p className="font-semibold text-gray-700 mb-2">Species</p>
//             <select className="w-full border border-gray-300 rounded px-2 py-1">
//               <option>Jaguar</option>
//               <option>Puma</option>
//               <option>Leopard</option>
//               <option>Tiger</option>
//             </select>
//           </div>

//           {/* Time Range */}
//           <div>
//             <p className="font-semibold text-gray-700 mb-2">Time Range</p>
//             <select className="w-full border border-gray-300 rounded px-2 py-1">
//               <option>Last Month</option>
//               <option>Last 6 Months</option>
//               <option>Last Year</option>
//               <option>Custom</option>
//             </select>
//           </div>

//           {/* Individuals */}
//           <div>
//             <p className="font-semibold text-gray-700 mb-2">Individuals</p>
//             <select className="w-full border border-gray-300 rounded px-2 py-1">
//               <option>—</option>
//               <option>Alpha</option>
//               <option>Beta</option>
//             </select>
//           </div>

//           {/* Gender */}
//           <div>
//             <p className="font-semibold text-gray-700 mb-2">Gender</p>
//             <div className="flex items-center gap-4">
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="gender" /> <span>Male</span>
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="gender" /> <span>Female</span>
//               </label>
//             </div>
//           </div>

//           {/* Special Attributes */}
//           <div>
//             <p className="font-semibold text-gray-700 mb-2">
//               Special Attributes{" "}
//               <span className="text-gray-400 text-xs">(Not Available)</span>
//             </p>
//             <div className="flex items-center gap-4 text-gray-400">
//               <label className="flex items-center gap-1">
//                 <input type="checkbox" disabled /> <span>Melanistic</span>
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="checkbox" disabled /> <span>Albino</span>
//               </label>
//             </div>
//           </div>

//           {/* Behavior */}
//           <div>
//             <p className="font-semibold text-gray-700 mb-2">
//               Behavior <span className="text-gray-400 text-xs">(Not Available)</span>
//             </p>
//             <div className="flex items-center gap-4">
//               <label className="flex items-center gap-1">
//                 <input type="checkbox" /> <span>Daytime</span>
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="checkbox" /> <span>Nighttime</span>
//               </label>
//             </div>
//           </div>

//           {/* Chart Toggle */}
//           <div className="flex items-center justify-between">
//             <p className="font-semibold text-gray-700">Bar/Line Chart</p>
//             <label className="relative inline-flex items-center cursor-pointer">
//               <input type="checkbox" className="sr-only peer" defaultChecked />
//               <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition"></div>
//               <span className="absolute left-1 top-0.5 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></span>
//             </label>
//           </div>

//           {/* Top 3 Species */}
//           <div>
//             <p className="font-semibold text-gray-700 mb-2">Top 3 Species</p>
//             <ul className="list-disc pl-5 text-gray-600">
//               <li>Jaguar</li>
//               <li>Puma</li>
//               <li>Leopard</li>
//             </ul>
//           </div>

//           {/* Export */}
//           <div>
//             <p className="font-semibold text-gray-700 mb-2">Export as</p>
//             <div className="flex items-center gap-4">
//               <label className="flex items-center gap-1">
//                 <input type="checkbox" /> <span>PNG</span>
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="checkbox" /> <span>SVG</span>
//               </label>
//             </div>
//           </div>

//           {/* Project */}
//           <div>
//             <p className="font-semibold text-gray-700 mb-2">Project</p>
//             <select className="w-full border border-gray-300 rounded px-2 py-1">
//               <option>—</option>
//               <option>Amazon Watch</option>
//               <option>Rainforest Survey</option>
//             </select>
//           </div>

//           {/* Stats */}
//           <div>
//             <p className="font-semibold text-gray-700 mb-2">Stats</p>
//             <p className="text-gray-400 text-xs">Showing “*” Verified Observations</p>
//           </div>

//           {/* Recent Observations */}
//           <div>
//             <p className="font-semibold text-gray-700 mb-2">Recent Observations</p>
//             <div className="space-y-1 text-gray-600 text-sm">
//               <p>📸 Image</p>
//               <p>🐆 Species</p>
//               <p>📅 Date</p>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* Overlay for Mobile */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
//         ></div>
//       )}

//       {/* Main Section */}
//       <main className="flex-1 relative flex flex-col h-full w-full">
        

// <div className="md:hidden absolute top-20 left-4 z-50">
//   <button
//     onClick={() => setSidebarOpen(true)}
//     className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-base font-medium shadow-lg"
//   >
//     <SlidersHorizontal className="w-5 h-5" /> Filters
//   </button>
// </div>

//         {/* Map Container */}
//         <div className="flex-1 flex items-center justify-center p-3 sm:p-4 md:p-0">
//           <div className="w-full h-[50vh] sm:h-[60vh] md:h-full rounded-lg overflow-hidden shadow-md">
//             <iframe
//               title="Wildlife Map"
//               className="w-full h-full border-0"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.062548503005!2d-122.42305752346104!3d37.77492997227196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f9b7b91b%3A0x807b7e3c51b4e07f!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1696012345678!5m2!1sen!2sus"
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function MapExplorerPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-40 w-80 bg-white border-r border-gray-200 shadow-lg h-full p-5 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Sidebar Header */}
        <div className="mb-6 sticky top-0 bg-white z-10 pb-3 border-b flex items-center justify-between">
          <h2 className="text-lg font-bold text-green-700 flex items-center gap-2">
            <span className="inline-block w-1.5 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></span>
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Apply Filters
            </span>
          </h2>
        </div>

        {/* Filter Options Header with X */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-800">
            Filter Options
          </h3>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="overflow-y-auto h-[calc(100%-4rem)] pr-2 space-y-6 text-sm">
          {/* Species */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">Species</p>
            <select className="w-full border border-gray-300 rounded px-2 py-1">
              <option>Jaguar</option>
              <option>Puma</option>
              <option>Leopard</option>
              <option>Tiger</option>
            </select>
          </div>

          {/* Time Range */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">Time Range</p>
            <select className="w-full border border-gray-300 rounded px-2 py-1">
              <option>Last Month</option>
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>Custom</option>
            </select>
          </div>

          {/* Individuals */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">Individuals</p>
            <select className="w-full border border-gray-300 rounded px-2 py-1">
              <option>—</option>
              <option>Alpha</option>
              <option>Beta</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">Gender</p>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" /> <span>Male</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" /> <span>Female</span>
              </label>
            </div>
          </div>

          {/* Special Attributes */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">
              Special Attributes{" "}
              <span className="text-gray-400 text-xs">(Not Available)</span>
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <label className="flex items-center gap-1">
                <input type="checkbox" disabled /> <span>Melanistic</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" disabled /> <span>Albino</span>
              </label>
            </div>
          </div>

          {/* Behavior */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">
              Behavior <span className="text-gray-400 text-xs">(Not Available)</span>
            </p>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> <span>Daytime</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" /> <span>Nighttime</span>
              </label>
            </div>
          </div>

          {/* Chart Toggle */}
          <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-700">Bar/Line Chart</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition"></div>
              <span className="absolute left-1 top-0.5 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></span>
            </label>
          </div>

          {/* Top 3 Species */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">Top 3 Species</p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Jaguar</li>
              <li>Puma</li>
              <li>Leopard</li>
            </ul>
          </div>

          {/* Export */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">Export as</p>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> <span>PNG</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" /> <span>SVG</span>
              </label>
            </div>
          </div>

          {/* Project */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">Project</p>
            <select className="w-full border border-gray-300 rounded px-2 py-1">
              <option>—</option>
              <option>Amazon Watch</option>
              <option>Rainforest Survey</option>
            </select>
          </div>

          {/* Stats */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">Stats</p>
            <p className="text-gray-400 text-xs">Showing “*” Verified Observations</p>
          </div>

          {/* Recent Observations */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">Recent Observations</p>
            <div className="space-y-1 text-gray-600 text-sm">
              <p>📸 Image</p>
              <p>🐆 Species</p>
              <p>📅 Date</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
        ></div>
      )}

      {/* Main Section */}
      <main className="flex-1 relative flex flex-col h-full w-full">
        {/* Filters Button — hidden when sidebar open */}
        {!sidebarOpen && (
          <div className="md:hidden absolute top-20 left-4 z-50">
            <button
              onClick={() => setSidebarOpen(true)}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-base font-medium shadow-lg"
            >
              <SlidersHorizontal className="w-5 h-5" /> Filters
            </button>
          </div>
        )}

        {/* Map Container */}
        <div className="flex-1 flex items-center justify-center p-3 sm:p-4 md:p-0">
          <div className="w-full h-[50vh] sm:h-[60vh] md:h-full rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Wildlife Map"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.062548503005!2d-122.42305752346104!3d37.77492997227196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f9b7b91b%3A0x807b7e3c51b4e07f!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1696012345678!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
