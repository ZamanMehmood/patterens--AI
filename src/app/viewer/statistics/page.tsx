"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function StatisticsPage() {
  // Bar chart data
  const barData = {
    labels: [
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
    ],
    datasets: [
      {
        label: "Puma",
        data: [25, 10, 0, 95, 60, 20, 0, 50, 0, 40, 55, 70],
        backgroundColor: "#36443B",
      },
      {
        label: "Jaguar",
        data: [0, 75, 68, 97, 60, 55, 100, 90, 45, 30, 40, 20],
        backgroundColor: "#C9C1A7",
      },
      {
        label: "Lion",
        data: [55, 65, 55, 0, 40, 0, 0, 0, 60, 0, 40, 65],
        backgroundColor: "#A9CBB7",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" as const },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: "#eee" },
      },
    },
  };

  // Doughnut chart data
  const doughnutData = {
    labels: ["Lion", "Puma", "Jaguar"],
    datasets: [
      {
        data: [30, 93, 50],
        backgroundColor: ["#A9CBB7", "#36443B", "#C9C1A7"],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    cutout: "70%",
    plugins: {
      legend: {
        position: "right" as const,
        labels: { usePointStyle: true, boxWidth: 8 },
      },
    },
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-xl font-medium text-gray-700 mb-6">
        Population Insights
      </h1>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Bar Chart */}
        <div className="bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6">
          <h2 className="text-gray-700 font-medium mb-4">
            Sightings Overtime
          </h2>
          <div className="h-[300px] sm:h-[350px]">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white rounded-lg shadow border border-gray-200 p-4 sm:p-6 flex flex-col justify-center">
          <h2 className="text-gray-700 font-medium mb-4">
            Species Distribution
          </h2>
          <div className="h-[300px] sm:h-[350px] flex items-center justify-center">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { title: "Total Observations", value: 900 },
          { title: "Species Tracked", value: 300 },
          { title: "Active Tracked", value: 600 },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#4D6258] text-white rounded-md p-6 flex flex-col items-center justify-center"
          >
            <p className="text-sm font-light">{item.title}</p>
            <p className="text-3xl font-semibold mt-1">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
