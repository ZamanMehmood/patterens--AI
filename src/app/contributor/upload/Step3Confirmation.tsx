import Image from "next/image";

export default function Step3Confirmation() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
     {/* Local Image from public folder */}
      <Image
        src="/undraw_time_management_re_tk5w.jpg"
        alt="Processing"
        width={250}
        height={250}
        className="object-contain"
        priority
      />
      <h3 className="text-xl font-semibold mt-6">Upload Complete!</h3>
      <p className="text-gray-500 mt-2">6 images are processing...</p>
      <div className="w-40 h-1 bg-green-200 mt-4 relative overflow-hidden rounded-full">
        <div className="absolute top-0 left-0 h-full w-1/3 bg-green-800 animate-pulse"></div>
      </div>
    </div>
  );
}
