"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"branding" | "system">("branding");

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">
        Project and Branding Settings
      </h1>

      <div className="max-w-3xl mx-auto">
        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-6">
          <button
            onClick={() => setActiveTab("branding")}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "branding"
                ? "text-green-800 border-b-2 border-green-700"
                : "text-gray-500"
            }`}
          >
            Global Branding
          </button>
          <button
            onClick={() => setActiveTab("system")}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "system"
                ? "text-green-800 border-b-2 border-green-700"
                : "text-gray-500"
            }`}
          >
            System Settings
          </button>
        </div>

        {/* Global Branding TAB */}
        {activeTab === "branding" && (
          <div>
            {/* Upload Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Upload Logo
                </label>
                <div className="flex items-center justify-center border border-gray-300 rounded-md h-12 cursor-pointer hover:border-gray-400">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4"
                      />
                    </svg>
                    Upload Image
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Upload Favicon
                </label>
                <div className="flex items-center justify-center border border-gray-300 rounded-md h-12 cursor-pointer hover:border-gray-400">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4"
                      />
                    </svg>
                    Upload Image
                  </span>
                </div>
              </div>
            </div>

            {/* Color Pickers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Primary Color
                </label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <div
                    className="w-10 h-10"
                    style={{ backgroundColor: "#6BB45B" }}
                  ></div>
                  <input
                    className="flex-1 h-10 px-2 text-sm text-gray-600 outline-none"
                    value="#6BB45B"
                    readOnly
                  />
                  <div className="p-2 border-l border-gray-300">🏀</div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Secondary Color
                </label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <div
                    className="w-10 h-10"
                    style={{ backgroundColor: "#25D295" }}
                  ></div>
                  <input
                    className="flex-1 h-10 px-2 text-sm text-gray-600 outline-none"
                    value="#25D295"
                    readOnly
                  />
                  <div className="p-2 border-l border-gray-300">🏀</div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button className="px-10 py-3 bg-[#485C4F] text-white rounded-md shadow-sm hover:bg-[#3b4c42] transition">
                Create Project
              </button>
            </div>
          </div>
        )}

        {/* System Settings TAB */}
        {activeTab === "system" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Data Retention Policy
                </label>
                <input
                  type="text"
                  placeholder="5 Years"
                  className="w-full border border-gray-300 rounded-md h-12 px-3 text-sm text-gray-600 focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Upload Favicon
                </label>
                <div className="flex items-center justify-center border border-gray-300 rounded-md h-12 cursor-pointer hover:border-gray-400">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4"
                      />
                    </svg>
                    Upload Image
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-sm text-gray-700 mb-1">
                Privacy Settings
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-12 px-3 text-sm text-gray-600 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex justify-center">
              <button className="px-10 py-3 bg-[#485C4F] text-white rounded-md shadow-sm hover:bg-[#3b4c42] transition">
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
