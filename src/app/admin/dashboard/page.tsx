// "use client";
// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import {
//   LayoutDashboard,
//   Users,
//   Boxes,
//   Settings,
//   FileText,
//   Menu,
//   X,
// } from "lucide-react";

// // Register Chart.js components
// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// const chartData = (color: string) => ({
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
//   datasets: [
//     {
//       label: "",
//       data: [20, 40, 60, 30, 50, 70, 65, 90],
//       borderColor: color,
//       backgroundColor: color,
//       pointBackgroundColor: "#fff",
//       borderWidth: 2,
//       tension: 0.4,
//     },
//   ],
// });

// const chartOptions = {
//   responsive: true,
//   plugins: { legend: { display: false } },
//   scales: {
//     y: { beginAtZero: true },
//     x: { grid: { display: false } },
//   },
// };

// export default function AdminPage() {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const menuItems = [
//     { id: "dashboard", label: "Dashboards", icon: <LayoutDashboard size={22} /> },
//     { id: "users", label: "Users", icon: <Users size={22} /> },
//     { id: "models", label: "Models", icon: <Boxes size={22} /> },
//     { id: "settings", label: "Settings", icon: <Settings size={22} /> },
//     { id: "audit", label: "Audit Log", icon: <FileText size={22} /> },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside
//         className={`fixed md:static top-0 left-0 h-full bg-gray-900 text-white flex flex-col py-6 transition-transform duration-300 z-50 w-64 ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//         }`}
//       >
//         <div className="px-6 mb-8">
//           <h1 className="text-xl font-semibold tracking-wide">Admin Portal</h1>
//         </div>

//         <nav className="flex flex-col space-y-2">
//           {menuItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.id)}
//               className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
//                 activeTab === item.id
//                   ? "bg-gray-800 text-white border-l-4 border-blue-500"
//                   : "text-gray-400 hover:bg-gray-800 hover:text-white"
//               }`}
//             >
//               <span className="mr-3">{item.icon}</span>
//               {item.label}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* Mobile overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Top Bar */}
//         <header className="flex items-center justify-between bg-gray-900 text-white px-6 py-4 md:hidden">
//           <h1 className="text-lg font-semibold" >Admin Portal</h1>
//           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//             {isSidebarOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </header>

//         <main className="flex-1 p-8">
//           <h1 className="text-2xl font-semibold mb-6">System Health Dashboard</h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* API Response Time */}
//             <div className="bg-white p-4 rounded shadow">
//               <h2 className="text-sm font-medium mb-2">API Response Time</h2>
//               <Line data={chartData("#14b8a6")} options={chartOptions} />
//             </div>

//             {/* Error Rate */}
//             <div className="bg-white p-4 rounded shadow">
//               <h2 className="text-sm font-medium mb-2">Error Rate</h2>
//               <Line data={chartData("#fb923c")} options={chartOptions} />
//             </div>

//             {/* Active Users */}
//             <div className="bg-white p-4 rounded shadow">
//               <h2 className="text-sm font-medium mb-2">Active Users</h2>
//               <Line data={chartData("#ef4444")} options={chartOptions} />
//             </div>

//             {/* Storage Capacity */}
//             <div className="bg-white p-4 rounded shadow">
//               <h2 className="text-sm font-medium mb-2">Storage Capacity</h2>
//               <Line data={chartData("#f59e0b")} options={chartOptions} />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const chartData = (color: string) => ({
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "",
      data: [20, 40, 60, 30, 50, 70, 65, 90],
      borderColor: color,
      backgroundColor: color,
      pointBackgroundColor: "#fff",
      borderWidth: 2,
      tension: 0.4,
    },
  ],
});

const chartOptions = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    y: { beginAtZero: true },
    x: { grid: { display: false } },
  },
};

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">System Health Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm font-medium mb-2">API Response Time</h2>
          <Line data={chartData("#14b8a6")} options={chartOptions} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm font-medium mb-2">Error Rate</h2>
          <Line data={chartData("#fb923c")} options={chartOptions} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm font-medium mb-2">Active Users</h2>
          <Line data={chartData("#ef4444")} options={chartOptions} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm font-medium mb-2">Storage Capacity</h2>
          <Line data={chartData("#f59e0b")} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
