 "use client";

import Image from "next/image";

export default function Step2EditMetadata({ onNext }: { onNext?: () => void }) {
  const rows = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1528238344097-a8994f7c74e4?auto=format&fit=crop&q=80&w=687",
      gps: "40.74, -74.03",
      time: "00:27",
      species: "Panthera Onca Onca",
      number: 30,
      behavior: "Resting",
      tag: "A1",
      notes: "Near river bank",
      project: "Project Alpha",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1528238344097-a8994f7c74e4?auto=format&fit=crop&q=80&w=687",
      gps: "10.76, -78.03",
      time: "10:27",
      species: "Panthera Onca Palustris",
      number: 53,
      behavior: "Hunting",
      tag: "B3",
      notes: "Dense forest",
      project: "Wildlife South",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1528238344097-a8994f7c74e4?auto=format&fit=crop&q=80&w=687",
      gps: "80.75, -54.03",
      time: "24:26",
      species: "Panthera Onca",
      number: 65,
      behavior: "Walking",
      tag: "C2",
      notes: "Open field",
      project: "Savannah Watch",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1528238344097-a8994f7c74e4?auto=format&fit=crop&q=80&w=687",
      gps: "10.76, -60.03",
      time: "15:57",
      species: "Panthera Onca Centralis",
      number: 17,
      behavior: "Sleeping",
      tag: "D9",
      notes: "Under tree shade",
      project: "Central Zone",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1528238344097-a8994f7c74e4?auto=format&fit=crop&q=80&w=687",
      gps: "90.74, -34.03",
      time: "18:47",
      species: "Panthera Onca Onca",
      number: 20,
      behavior: "Playing",
      tag: "E5",
      notes: "Waterhole area",
      project: "Rainforest Team",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#4C5B50] text-white px-6 sm:px-10 py-4 text-base sm:text-lg font-medium">
        Step 2 - Edit Metadata
      </div>

      

      {/* Table Section */}
      <div className="w-full overflow-x-auto px-4 sm:px-8 py-8">
        {/* Submit Button */}
      <div className="flex justify-end px-4 sm:px-8 pb-8">
        <button
          onClick={onNext}
          className="bg-[#4C5B50] text-white px-6 py-2 rounded-md hover:bg-[#3d4a41] transition text-sm sm:text-base"
        >
          Submit Upload
        </button>
      </div>
        <table className="w-full border-collapse border-gray-200 text-sm sm:text-base">
          <thead>
            <tr className="border-b border-gray-300 text-gray-700">
              <th className="text-left py-3 px-3 font-medium">Thumbnail</th>
              <th className="text-left py-3 px-3 font-medium">GPS</th>
              <th className="text-left py-3 px-3 font-medium">Timestamp</th>
              <th className="text-left py-3 px-3 font-medium">Species</th>
              <th className="text-left py-3 px-3 font-medium">
                Number of Animals
              </th>
              <th className="text-left py-3 px-3 font-medium">Behavior</th>
              <th className="text-left py-3 px-3 font-medium">Tag</th>
              <th className="text-left py-3 px-3 font-medium">Notes</th>
              <th className="text-left py-3 px-3 font-medium">Projects</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-3">
                  <Image
                    src={row.image.trim()}
                    alt="thumbnail"
                    width={80}
                    height={50}
                    className="rounded-md object-cover w-20 h-12 sm:w-24 sm:h-14"
                  />
                </td>
                <td className="py-3 px-3">{row.gps}</td>
                <td className="py-3 px-3">{row.time}</td>
                <td className="py-3 px-3">{row.species}</td>
                <td className="py-3 px-3">{row.number}</td>
                <td className="py-3 px-3">{row.behavior}</td>
                <td className="py-3 px-3">{row.tag}</td>
                <td className="py-3 px-3">{row.notes}</td>
                <td className="py-3 px-3">{row.project}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
}
