 "use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashboardPage() {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  // Colors similar to screenshot
  const colors = {
    puma: "#4B5563",
    jaguar: "#D6C6AC",
    lion: "#BFE5C2",
  };

  const speciesData = {
    labels: months,
    datasets: [
      {
        label: "Puma",
        data: [25, 15, 40, 100, 60, 50, 45, 60, 55, 20, 40, 70],
        backgroundColor: colors.puma,
        borderRadius: 4,
      },
      {
        label: "Jaguar",
        data: [40, 80, 90, 100, 55, 100, 95, 98, 60, 35, 45, 60],
        backgroundColor: colors.jaguar,
        borderRadius: 4,
      },
      {
        label: "Lion",
        data: [60, 100, 0, 80, 45, 100, 75, 95, 40, 25, 35, 50],
        backgroundColor: colors.lion,
        borderRadius: 4,
      },
    ],
  };

  const verificationRateData = {
    labels: months,
    datasets: [
      {
        label: "100%",
        data: [20, 60, 70, 100, 80, 60, 90, 75, 50, 40, 60, 80],
        backgroundColor: colors.puma,
        borderRadius: 4,
      },
      {
        label: "67%",
        data: [15, 30, 50, 70, 40, 50, 60, 40, 30, 25, 40, 50],
        backgroundColor: colors.jaguar,
        borderRadius: 4,
      },
      {
        label: "77%",
        data: [10, 20, 40, 60, 30, 45, 50, 55, 25, 20, 30, 40],
        backgroundColor: colors.lion,
        borderRadius: 4,
      },
    ],
  };

  const individualsTrackedData = {
    labels: months,
    datasets: [
      {
        label: "100%",
        data: [25, 45, 70, 95, 80, 50, 75, 85, 40, 30, 55, 90],
        backgroundColor: colors.puma,
        borderRadius: 4,
      },
      {
        label: "67%",
        data: [15, 25, 40, 70, 60, 30, 65, 55, 35, 20, 45, 60],
        backgroundColor: colors.jaguar,
        borderRadius: 4,
      },
      {
        label: "77%",
        data: [10, 20, 35, 60, 40, 25, 55, 45, 25, 15, 35, 50],
        backgroundColor: colors.lion,
        borderRadius: 4,
      },
    ],
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" as const },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { color: "#E5E7EB" },
        ticks: { stepSize: 20 },
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-700">
          {/* Header */}
      <div className="bg-[#4a5e4b] px-6 py-4 text-white text-xl font-light">
        Researcher Dashboard
    
    </div>
    <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
       
      {/* Left Column */}
      <div className="space-y-6">
        {/* Review Queue */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-700 text-lg font-medium mb-2">Review Queue</h2>
          <p className="text-3xl font-semibold text-gray-800 mb-4">42 Observations</p>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Start Reviewing
          </button>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-700 text-lg font-medium mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {Array(6)
              .fill("Jane Doe Verified a Jaguar")
              .map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-blue-500">🔹</span>
                  <span>{item}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-2 space-y-6">
        {/* Total Observations by Species */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-700 text-lg font-medium mb-4">
            Total Observations by Species
          </h2>
          <div className="h-64">
            <Bar data={speciesData} options={commonOptions} />
          </div>
        </div>

        {/* Two smaller graphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Verification Rate Over Time */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-gray-700 text-lg font-medium mb-4">
              Verification Rate Over Time
            </h2>
            <div className="h-56">
              <Bar data={verificationRateData} options={commonOptions} />
            </div>
          </div>

          {/* Individuals Tracked */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-gray-700 text-lg font-medium mb-4">
              Individuals Tracked
            </h2>
            <div className="h-56">
              <Bar data={individualsTrackedData} options={commonOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}
