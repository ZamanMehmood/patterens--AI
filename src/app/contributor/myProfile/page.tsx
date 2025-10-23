"use client";
import React, { useState } from "react";
import { RotateCcw, ChevronDown } from "lucide-react";

export default function MyProfile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedVisibility, setSelectedVisibility] = useState("Default Visibility for Uploads");

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleSelect = (value: string) => {
    setSelectedVisibility(value);
    setDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-light text-gray-800 mb-10 text-center">
        Profile and Settings
      </h1>

      {/* Main Container */}
      <div className="w-full max-w-md space-y-8">
        {/* Profile Section */}
        <div>
          <h2 className="text-lg font-normal text-gray-800 mb-4">Profile</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Organization"
              className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Bio"
              className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Preferences Section */}
        <div>
          <h2 className="text-lg font-normal text-gray-800 mb-4">Preferences</h2>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="w-full border border-gray-300 rounded-sm px-3 py-2 text-left flex justify-between items-center focus:outline-none bg-white"
            >
              <span>{selectedVisibility}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-sm shadow-md mt-1 z-50">
                {["Private", "Project", "Public"].map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Password Input */}
          <div className="relative mt-4">
            <input
              type="password"
              placeholder="Input:"
              className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none"
            />
            <RotateCcw className="absolute right-3 top-2.5 h-4 w-4 text-gray-500 cursor-pointer" />
          </div>

          {/* Link */}
          <p className="text-sm text-gray-700 mt-3 underline cursor-pointer hover:text-gray-900">
            Available API endpoints
          </p>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button className="w-full bg-[#4d6254] text-white py-2 rounded-sm shadow hover:bg-[#3f5146] transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
