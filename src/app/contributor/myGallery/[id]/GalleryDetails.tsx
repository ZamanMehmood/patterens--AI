"use client";

import React from "react";
import { ArrowLeft, Download, Info } from "lucide-react";
import Link from "next/link";

export default function GalleryDetails({ id }: { id: string }) {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-10">
        {/* Back Button */}
        <Link
          href="/contributor/myGallery"
          className="inline-flex items-center text-gray-700 hover:text-blue-600 transition mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Gallery
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={`https://picsum.photos/800/600?random=${id}`}
              alt="Detailed"
              className="rounded-xl w-full object-cover shadow-sm"
            />
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
                Species Name {id}
              </h1>
              <p className="text-gray-500 text-sm mb-4">
                Uploaded on October 8, 2025
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Mammal", "High Confidence", "Active", "Verified"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-100"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                This specimen was captured in the northern forest region. The
                system classified it as a “High Confidence” identification.
                Verified by field expert Dr. John Doe.
              </p>

              {/* Metadata */}
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Status:</span>
                  <span className="text-red-500">Verified</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Date Captured:</span>
                  <span>October 5, 2025</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Confidence:</span>
                  <span>98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Uploaded By:</span>
                  <span>Zaman</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-8">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                <Download className="w-4 h-4" /> Download Image
              </button>
              <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                <Info className="w-4 h-4" /> More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
