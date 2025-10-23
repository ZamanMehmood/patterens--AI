"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function ChartSection() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            { label: "Puma", data: [30, 50, 70, 40, 90, 100, 60, 80, 30, 40, 70, 90], backgroundColor: "#2dd4bf" },
            { label: "Jaguar", data: [60, 30, 90, 70, 60, 40, 30, 20, 80, 60, 50, 70], backgroundColor: "#818cf8" },
            { label: "Lion", data: [40, 70, 30, 60, 80, 90, 50, 70, 60, 40, 30, 50], backgroundColor: "#fca5a5" },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { position: "bottom" } },
        },
      });
    }
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Animal Sightings Bar Chart</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
