"use client";

import Image from "next/image";

export default function Dashboard() {
    const jagurImg = "https://images.unsplash.com/photo-1528238344097-a8994f7c74e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
  const uploads = [
    { id: 1, thumb: jagurImg, date: "19/09/2025", name: "Bill", confidence: "90%", color: "bg-green-300" },
    { id: 2, thumb: jagurImg, date: "9/09/2025", name: "Onyx", confidence: "80%", color: "bg-blue-400" },
    { id: 3, thumb: jagurImg, date: "19/08/2025", name: "Aztec", confidence: "60%", color: "bg-yellow-400" },
    { id: 4, thumb: jagurImg, date: "17/07/2025", name: "Luna", confidence: "40%", color: "bg-orange-400" },
    { id: 5, thumb: jagurImg, date: "5/06/2024", name: "Cruz", confidence: "10%", color: "bg-green-200" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Hello, David</h1>

      {/* Stats Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-500 text-white rounded-lg p-6 text-center">
          <p className="text-lg mb-2">Your Uploads</p>
          <p className="text-3xl font-bold">100</p>
        </div>
        <div className="bg-blue-500 text-white rounded-lg p-6 text-center">
          <p className="text-lg mb-2">Pending Review</p>
          <p className="text-3xl font-bold">100</p>
        </div>
      </div>

      {/* Upload Button */}
      <div className="flex justify-center">
        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
          Upload Images
        </button>
      </div>

      {/* Activities Feed */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Activities Feed</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-3 py-2 border">#</th>
                <th className="px-3 py-2 border">Thumbnail</th>
                <th className="px-3 py-2 border">Date</th>
                <th className="px-3 py-2 border">Name</th>
                <th className="px-3 py-2 border">Confidence %</th>
                <th className="px-3 py-2 border">Status Badge</th>
              </tr>
            </thead>
            <tbody>
              {uploads.map((u) => (
                <tr key={u.id} className="text-center">
                  <td className="border px-3 py-2">{u.id}</td>
                  <td className="border px-3 py-2">
                    <Image
                      src={u.thumb}
                      alt={u.name}
                      width={70}
                      height={70}
                      className="rounded object-cover"
                    />
                  </td>
                  <td className="border px-3 py-2">{u.date}</td>
                  <td className="border px-3 py-2">{u.name}</td>
                  <td className="border px-3 py-2">{u.confidence}</td>
                  <td className="border px-3 py-2">
                    <div className={`w-4 h-4 mx-auto rounded ${u.color}`}></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
