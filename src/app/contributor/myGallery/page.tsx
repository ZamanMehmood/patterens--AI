"use client";
import React, { useState } from "react";
import { ChevronDown, Download, Trash2, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MyGallery() {
  const [sortOpen, setSortOpen] = useState(false);
  const router = useRouter();

  const handleSortToggle = () => {
    setSortOpen((prev) => !prev);
  };

  const handleCardClick = (id: number) => {
    router.push(`/contributor/myGallery/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">My Gallery</h1>

        {/* Search + Sort */}
        <div className="relative mt-3 sm:mt-0 flex items-center gap-3">
          <div className="relative flex items-center w-64 border border-gray-300 rounded-md">
            <Search className="absolute left-2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Species Name"
              className="pl-8 pr-2 py-2 w-full rounded-md text-sm outline-none"
            />
          </div>

          <button
            onClick={handleSortToggle}
            className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
          >
            Sort By
            <ChevronDown className={`h-4 w-4 transition-transform ${sortOpen ? "rotate-180" : ""}`} />
          </button>

          {sortOpen && (
            <div className="absolute right-0 top-12 bg-white border border-gray-200 shadow-lg rounded-lg w-56 p-4 z-50 animate-in fade-in duration-200">
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                {["Species", "Status", "Date", "Newest", "Confidence", "Species"].map((opt) => (
                  <span key={opt} className="cursor-pointer hover:text-blue-600">
                    {opt}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          // <div
          //   key={index}
          //   onClick={() => handleCardClick(index + 1)}
          //   className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer"
          // >
          //   <img
          //     src={`https://picsum.photos/400/300?random=${index}`}
          //     alt="Gallery"
          //     className="w-full h-48 object-cover"
          //   />
          //   <div className="p-4 flex justify-between items-center">
          //     <div>
          //       <p className="text-sm font-medium text-gray-800">Image {index + 1}</p>
          //       <p className="text-xs text-gray-500">Species Name</p>
          //     </div>
          //     <div className="flex gap-3">
          //       <Download className="h-4 w-4 text-gray-600 hover:text-blue-600" />
          //       <Trash2 className="h-4 w-4 text-gray-600 hover:text-red-600" />
          //     </div>
          //   </div>
          // </div>
          <div
  key={index}
  onClick={() => handleCardClick(index + 1)}
  className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer"
>
  <img
    src={`https://picsum.photos/400/300?random=${index}`}
    alt="Gallery"
    className="w-full h-48 object-cover"
  />
  <div className="p-4 flex justify-between items-center">
    <div>
      <p className="text-sm font-medium text-gray-800">Image {index + 1}</p>
      <p className="text-xs text-gray-500">Species Name</p>
      <p
        className={`text-xs font-semibold mt-1 ${
          index % 2 === 0 ? "text-green-600" : "text-red-500"
        }`}
      >
        {index % 2 === 0 ? "Active" : "Pending"}
      </p>
    </div>

    <div className="flex gap-3">
      <Download className="h-4 w-4 text-gray-600 hover:text-blue-600" />
      <Trash2 className="h-4 w-4 text-gray-600 hover:text-red-600" />
    </div>
  </div>
</div>

        ))}
      </div>
    </div>
  );
}
