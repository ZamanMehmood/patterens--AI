// export default function ReviewQueuePage() {
//   const data = [
//     {
//       id: 1,
//       image: "https://picsum.photos/200/100?random=1",
//       species: "Panthera Onca Onca",
//       confidence: "30%",
//       uploader: "David Parker",
//       date: "19/09/2025",
//     },
//     {
//       id: 2,
//       image: "https://picsum.photos/200/100?random=2",
//       species: "Panthera Onca Palustris",
//       confidence: "90%",
//       uploader: "Bruce Banner",
//       date: "9/09/2025",
//     },
//     {
//       id: 3,
//       image: "https://picsum.photos/200/100?random=3",
//       species: "Panthera Onca",
//       confidence: "66%",
//       uploader: "Oliver Queen",
//       date: "19/08/2025",
//     },
//     {
//       id: 4,
//       image: "https://picsum.photos/200/100?random=4",
//       species: "Panthera Onca Centralis",
//       confidence: "98%",
//       uploader: "Bruce Banner",
//       date: "1/07/2025",
//     },
//     {
//       id: 5,
//       image: "https://picsum.photos/200/100?random=5",
//       species: "Panthera Onca Onca",
//       confidence: "11%",
//       uploader: "Oliver Queen",
//       date: "5/06/2024",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white text-gray-700">
//       {/* Header */}
//       <div className="bg-[#4a5e4b] px-6 py-4 text-white text-xl font-light">
//         Review Queue
//       </div>

//       {/* Table Container */}
//       <div className="overflow-x-auto p-4">
//         <div className="inline-block min-w-full align-middle border border-gray-200 rounded-md shadow-sm">
//           <table className="min-w-full border-collapse text-sm">
//             <thead>
//               <tr className="bg-gray-50 border-b text-left text-gray-600">
//                 <th className="p-3 font-normal">Select</th>
//                 <th className="p-3 font-normal">Thumbnail</th>
//                 <th className="p-3 font-normal">Predicted Species</th>
//                 <th className="p-3 font-normal">Confidence</th>
//                 <th className="p-3 font-normal">Uploader</th>
//                 <th className="p-3 font-normal">Date</th>
//                 <th className="p-3 font-normal">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => (
//                 <tr
//                   key={item.id}
//                   className="border-b hover:bg-gray-50 transition-colors"
//                 >
//                   <td className="p-3 text-center">
//                     <input
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-green-500"
//                     />
//                   </td>
//                   <td className="p-3">
//                     <img
//                       src={item.image}
//                       alt="thumbnail"
//                       className="h-16 w-28 object-cover rounded-md border"
//                     />
//                   </td>
//                   <td className="p-3">{item.species}</td>
//                   <td className="p-3">{item.confidence}</td>
//                   <td className="p-3">{item.uploader}</td>
//                   <td className="p-3">{item.date}</td>
//                   <td className="p-3 text-gray-400">—</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-wrap justify-end gap-2 mt-4">
//           <button className="px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white rounded text-sm shadow-sm transition-colors">
//             Approve Selected
//           </button>
//           <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm shadow-sm transition-colors">
//             Reject Selected
//           </button>
//           <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded text-sm shadow-sm transition-colors">
//             Add to Review Batch
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



export default function ReviewQueuePage() {
  const data = [
    {
      id: 1,
      image: "https://picsum.photos/200/100?random=1",
      species: "Panthera Onca Onca",
      confidence: "30%",
      uploader: "David Parker",
      date: "19/09/2025",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/100?random=2",
      species: "Panthera Onca Palustris",
      confidence: "90%",
      uploader: "Bruce Banner",
      date: "9/09/2025",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/100?random=3",
      species: "Panthera Onca",
      confidence: "66%",
      uploader: "Oliver Queen",
      date: "19/08/2025",
    },
    {
      id: 4,
      image: "https://picsum.photos/200/100?random=4",
      species: "Panthera Onca Centralis",
      confidence: "98%",
      uploader: "Bruce Banner",
      date: "1/07/2025",
    },
    {
      id: 5,
      image: "https://picsum.photos/200/100?random=5",
      species: "Panthera Onca Onca",
      confidence: "11%",
      uploader: "Oliver Queen",
      date: "5/06/2024",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-700">
      {/* Header */}
      <div className="bg-[#4a5e4b] px-6 py-4 text-white text-xl font-light">
        Review Queue
      </div>

      <div className="p-4 space-y-4">
        {/* Buttons - now above table */}
        <div className="flex flex-wrap justify-end gap-2">
          <button className="px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white rounded text-sm shadow-sm transition-colors">
            Approve Selected
          </button>
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm shadow-sm transition-colors">
            Reject Selected
          </button>
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded text-sm shadow-sm transition-colors">
            Add to Review Batch
          </button>
        </div>

        {/* Table - now fully responsive */}
        <div className="w-full overflow-hidden border border-gray-200 rounded-md shadow-sm">
          <table className="hidden md:table min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b text-left text-gray-600">
                <th className="p-3 font-normal">Select</th>
                <th className="p-3 font-normal">Thumbnail</th>
                <th className="p-3 font-normal">Predicted Species</th>
                <th className="p-3 font-normal">Confidence</th>
                <th className="p-3 font-normal">Uploader</th>
                <th className="p-3 font-normal">Date</th>
                <th className="p-3 font-normal">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3 text-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-green-500"
                    />
                  </td>
                  <td className="p-3">
                    <img
                      src={item.image}
                      alt="thumbnail"
                      className="h-16 w-24 object-cover rounded-md border"
                    />
                  </td>
                  <td className="p-3">{item.species}</td>
                  <td className="p-3">{item.confidence}</td>
                  <td className="p-3">{item.uploader}</td>
                  <td className="p-3">{item.date}</td>
                  <td className="p-3 text-gray-400">—</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Card Layout */}
          <div className="block md:hidden">
            {data.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-200 p-3 flex flex-col space-y-2"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-green-500"
                    />
                    <span className="font-medium text-gray-800">
                      {item.species}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{item.confidence}</span>
                </div>

                <img
                  src={item.image}
                  alt="thumbnail"
                  className="w-full h-32 object-cover rounded-md border"
                />

                <div className="text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Uploader:</span>{" "}
                    {item.uploader}
                  </div>
                  <div>
                    <span className="font-medium">Date:</span> {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
