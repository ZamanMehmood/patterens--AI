export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-12 sm:px-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="/lionImage.png"
            alt="Wildlife Monitoring"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-gray-800">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            About Our Mission
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Our project uses <span className="font-semibold text-black">AI-powered image recognition</span> to 
            assist researchers in monitoring wildlife patterns ethically and efficiently. 
            By analyzing photos from field cameras, we can detect species, track movements, 
            and extract valuable insights — all without disturbing their natural habitats.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            We believe in combining technology with conservation. Using frameworks like 
            <span className="font-semibold text-black"> TensorFlow, PyTorch, and FastAPI</span>, our system 
            automates data analysis and helps scientists focus on what truly matters — 
            protecting wildlife and preserving biodiversity.
          </p>

          <p className="text-lg leading-relaxed">
            This project is not just about AI — it’s about making research smarter, 
            faster, and more humane. Every image helps uncover a story in the wild.
          </p>
        </div>
      </div>
    </div>
  );
}
