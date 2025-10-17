 "use client";

import { useState } from "react";
import Image from "next/image";

export default function Step1AddFiles({ onNext }: { onNext: () => void }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="bg-white rounded-md shadow-sm">
      {/* Top Header */}
      <div className="bg-[#4C5B50] text-white px-4 sm:px-8 py-3 text-sm sm:text-base font-medium">
        Step 1 - Add Files
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 px-4 sm:px-8 py-8">
        {/* Left: Upload Section */}
        <div className="flex-1 flex justify-center">
          <div className="border-2 border-dashed border-gray-400 rounded-lg bg-gray-100 w-full max-w-md h-[260px] sm:h-[300px] flex flex-col items-center justify-center text-center px-4">
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt="Preview"
                width={400}
                height={250}
                className="object-cover w-full h-full rounded-md"
              />
            ) : (
              <>
                <p className="text-lg font-medium text-gray-700">
                  Drag and drop an image, or{" "}
                  <span className="text-[#4C5B50]">browse to upload</span>
                </p>
                <p className="text-xs text-gray-500 mt-2 mb-6">
                  For jaguar identification, upload an image with its rosette pattern showing.
                </p>
                <label className="bg-[#4C5B50] text-white px-6 py-1.5 rounded-md cursor-pointer text-sm hover:bg-[#3d4a41] transition">
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <p className="text-[10px] text-gray-400 mt-3">
                  Files must be JPG, PNG, and up to 50 MB.
                </p>
              </>
            )}
          </div>
        </div>


        {/* Right: Data Section */}
        <div className="flex-1">
          <h3 className="text-center text-gray-700 font-medium mb-4">Data</h3>
          <div className="flex flex-col gap-3">
            {/* Row 1 */}
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 border border-gray-300 rounded-md p-2 text-sm"
              />
              <input
                type="text"
                placeholder="Species"
                className="w-1/2 border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>

            {/* Row 2 */}
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="GPS"
                className="w-1/2 border border-gray-300 rounded-md p-2 text-sm"
              />
              <input
                type="date"
                className="w-1/2 border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>

            {/* Row 3 */}
            <div className="flex gap-3">
              <input
                type="time"
                className="w-1/2 border border-gray-300 rounded-md p-2 text-sm"
              />
              <input
                type="text"
                placeholder="Species"
                className="w-1/2 border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>

            {/* Row 4 */}
            <input
              type="text"
              placeholder="Behaviour"
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
            />

            {/* Notes */}
            <textarea
              placeholder="Notes"
              rows={3}
              className="w-full border border-gray-300 rounded-md p-2 text-sm resize-none"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 mx-8" />

      {/* Bottom Button */}
      <div className="flex justify-center py-6">
        <button
          onClick={onNext}
          className="bg-[#4C5B50] text-white px-10 py-2 rounded-md text-sm hover:bg-[#3d4a41] transition"
        >
          Next: Edit Metadata
        </button>
      </div>
    </div>
  );
}



// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function Step1AddFiles({ onNext }: { onNext: () => void }) {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) setSelectedImage(URL.createObjectURL(file));
//   };

//   return (
//     <div className="bg-white rounded-md shadow-sm w-full max-w-6xl mx-auto">
//       {/* Top Header */}
//       <div className="bg-[#4C5B50] text-white px-4 sm:px-8 py-3 text-sm sm:text-base font-medium">
//         Step 1 - Add Files
//       </div>

//       {/* Content Section */}
//       <div className="flex flex-col lg:flex-row justify-between items-stretch px-4 sm:px-8 py-10 gap-10 relative">
//         {/* Left: Upload Section */}
//         <div className="flex-1 flex justify-center items-center">
//           <div className="border-2 border-dashed border-gray-400 rounded-lg bg-gray-100 w-full max-w-lg h-[320px] sm:h-[360px] flex flex-col items-center justify-center text-center px-6">
//             {selectedImage ? (
//               <Image
//                 src={selectedImage}
//                 alt="Preview"
//                 width={450}
//                 height={280}
//                 className="object-cover w-full h-full rounded-md"
//               />
//             ) : (
//               <>
//                 <p className="text-lg font-medium text-gray-700">
//                   Drag and drop an image, or{" "}
//                   <span className="text-[#4C5B50]">browse to upload</span>
//                 </p>
//                 <p className="text-xs text-gray-500 mt-2 mb-6">
//                   For jaguar identification, upload an image with its rosette pattern showing.
//                 </p>
//                 <label className="bg-[#4C5B50] text-white px-6 py-1.5 rounded-md cursor-pointer text-sm hover:bg-[#3d4a41] transition">
//                   Upload
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                     className="hidden"
//                   />
//                 </label>
//                 <p className="text-[10px] text-gray-400 mt-3">
//                   Files must be JPG, PNG, and up to 50 MB.
//                 </p>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Vertical Divider (Hidden on Mobile) */}
//         <div className="hidden lg:block w-[2px] bg-gray-300 absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2"></div>

//         {/* Right: Data Section */}
//         <div className="flex-1 flex flex-col justify-center">
//           <h3 className="text-center text-gray-700 font-medium mb-5 text-lg">
//             Data
//           </h3>
//           <div className="flex flex-col gap-3">
//             {/* Row 1 */}
//             <div className="flex gap-3">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-1/2 border border-gray-300 rounded-md p-3 text-sm"
//               />
//               <input
//                 type="text"
//                 placeholder="Species"
//                 className="w-1/2 border border-gray-300 rounded-md p-3 text-sm"
//               />
//             </div>

//             {/* Row 2 */}
//             <div className="flex gap-3">
//               <input
//                 type="text"
//                 placeholder="GPS"
//                 className="w-1/2 border border-gray-300 rounded-md p-3 text-sm"
//               />
//               <input
//                 type="date"
//                 className="w-1/2 border border-gray-300 rounded-md p-3 text-sm"
//               />
//             </div>

//             {/* Row 3 */}
//             <div className="flex gap-3">
//               <input
//                 type="time"
//                 className="w-1/2 border border-gray-300 rounded-md p-3 text-sm"
//               />
//               <input
//                 type="text"
//                 placeholder="Species"
//                 className="w-1/2 border border-gray-300 rounded-md p-3 text-sm"
//               />
//             </div>

//             {/* Row 4 */}
//             <input
//               type="text"
//               placeholder="Behaviour"
//               className="w-full border border-gray-300 rounded-md p-3 text-sm"
//             />

//             {/* Notes */}
//             <textarea
//               placeholder="Notes"
//               rows={3}
//               className="w-full border border-gray-300 rounded-md p-3 text-sm resize-none"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <hr className="border-gray-300 mx-8" />

//       {/* Bottom Button */}
//       <div className="flex justify-center py-6">
//         <button
//           onClick={onNext}
//           className="bg-[#4C5B50] text-white px-12 py-2.5 rounded-md text-sm hover:bg-[#3d4a41] transition"
//         >
//           Next: Edit Metadata
//         </button>
//       </div>
//     </div>
//   );
// }
