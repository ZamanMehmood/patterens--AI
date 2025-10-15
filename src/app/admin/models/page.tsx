 "use client";

import React, { useState } from "react";
import { Download, Trash2 } from "lucide-react";

export default function ModelsPage() {
  const models = [
    { version: 1, dateTrained: "20/09/2025", accuracy: "90%", status: true },
    { version: 2, dateTrained: "15/09/2025", accuracy: "66%", status: true },
    { version: 3, dateTrained: "20/09/2025", accuracy: "80%", status: true },
    { version: 4, dateTrained: "08/09/2025", accuracy: "28%", status: true },
    { version: 5, dateTrained: "08/09/2025", accuracy: "10%", status: true },
  ];

  const [threshold, setThreshold] = useState(65);

  return (
    <div className="min-h-screen bg-gray-50 p-10 flex flex-col">
      {/* Page Title */}
      <h1 className="text-2xl font-light text-gray-800 mb-10">
        AI Model Management
      </h1>

      {/* Split Layout */}
      <div className="flex flex-col lg:flex-row gap-10 mt-5">
        {/* Left Section - Table */}
        <div className="flex-1">
          <h2 className="text-xl font-light text-center mb-6">Model Registry</h2>

          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <table className="min-w-full text-left text-sm text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-4 px-6 font-medium">Version</th>
                  <th className="py-4 px-6 font-medium">Date Trained</th>
                  <th className="py-4 px-6 font-medium">Accuracy (F1)</th>
                  <th className="py-4 px-6 font-medium">Status</th>
                  <th className="py-4 px-6 font-medium text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {models.map((model) => (
                  <tr
                    key={model.version}
                    className="bg-white border-b border-gray-200 hover:shadow-sm transition-all"
                  >
                    <td className="py-5 px-6">{model.version}</td>
                    <td className="py-5 px-6">{model.dateTrained}</td>
                    <td className="py-5 px-6">{model.accuracy}</td>
                    <td className="py-5 px-6">
                      {model.status ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 bg-gray-50 text-green-600">
                          ✔
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 bg-gray-50 text-gray-400">
                          ⭕
                        </span>
                      )}
                    </td>
                    <td className="py-5 px-6 flex justify-center gap-3">
                      <button className="text-white bg-gray-600 hover:bg-gray-700 p-1 rounded">
                        <Download size={16} />
                      </button>
                      <button className="text-white bg-red-500 hover:bg-red-600 p-1 rounded">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-gray-300"></div>

        {/* Right Section - Settings */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-xl font-light text-center mb-8">Settings</h2>

          <div className="px-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confidence Threshold
            </label>

            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="100"
                value={threshold}
                onChange={(e) => setThreshold(Number(e.target.value))}
                className="w-full accent-gray-700 cursor-pointer"
              />
              <span className="text-sm text-gray-700">{threshold}%</span>
            </div>

            <p className="text-xs text-gray-500 mt-2">Uncertainty Handling</p>
          </div>
        </div>
      </div>
    </div>
  );
}
