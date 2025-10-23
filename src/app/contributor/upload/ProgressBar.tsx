export default function ProgressBar({ step }: { step: number }) {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-center gap-8 py-4">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-colors ${
                step >= num
                  ? "bg-green-800 border-green-800 text-white"
                  : "border-gray-400 text-gray-400"
              }`}
            >
              {num}
            </div>
            {num !== 3 && (
              <div
                className={`w-16 h-0.5 mx-2 transition-colors ${
                  step > num ? "bg-green-800" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
