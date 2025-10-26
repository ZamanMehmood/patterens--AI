"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-center text-white overflow-hidden pt-24 sm:pt-28 md:pt-32"

        style={{
          backgroundImage: "url('/viewer-home-bg.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-6">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-wide">
            TRACK WILDLIFE. PROTECT HABITATS.
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#E6D1A6] tracking-wide">
            FIND PATTERNS
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mt-2 md:mt-4">
            AI-powered wildlife tracking that respects animals and identifies
            individuals through their natural patterns.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/viewer/mapExplorer"
              className="bg-[#4a5f52] hover:bg-[#5f7765] text-white px-6 py-3 rounded-md text-base sm:text-lg font-medium transition"
            >
              Try Patterns
            </Link>
            <Link
              href="/viewer/about"
              className="text-gray-200 hover:text-white underline text-base sm:text-lg transition"
            >
              See How it Works
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center items-center my-2 pt-5">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-3xl font-bold text-center">
          Trusted By Researchers Worldwide
        </h1>
      </section>

      <section className="w-full bg-white text-gray-800 py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
            Why Finding Patterns Matters
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Patterns turns camera-trap images into individual IDs and conservation insights
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 text-center font-medium text-gray-700 border-b border-gray-300 pb-2">
            <span>Traditional tag/Collars</span>
            <span>Patterns AI</span>
          </div>

          <div className="divide-y divide-gray-300">
            <div className="grid grid-cols-2 py-4 text-center">
              <span>Limited recognition</span>
              <span className="font-semibold">Individual IDs</span>
            </div>
            <div className="grid grid-cols-2 py-4 text-center">
              <span>Fragmented data</span>
              <span className="font-semibold">Unified insights</span>
            </div>
            <div className="grid grid-cols-2 py-4 text-center">
              <span>Expensive Hardware</span>
              <span className="font-semibold">Accessible &amp; scalable</span>
            </div>
            <div className="grid grid-cols-2 py-4 text-center">
              <span>Invasive and stressful</span>
              <span className="font-semibold">Ethical &amp; non-invasive</span>
            </div>
          </div>
        </div>

        {/* Bottom Descriptions */}
        <div className="max-w-3xl mx-auto mt-16 text-center space-y-8">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              • Non-Invasive Option
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
              Study wildlife using images you already collect—no collars or tranquilizers when not needed.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              • Individual Identification
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
              Distinguish unique individuals by their natural patterns to track movement, health, and behavior over time.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              • Actionable Conservation
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
              Turn observations into corridor protection, population baselines, and management decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f4f5f5] text-gray-800 py-16 px-4 sm:px-8 md:px-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium mb-10">
          How It Works
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row border border-gray-300">
            <div className="flex-1 flex flex-col justify-center p-6 bg-white relative">
              <div className="absolute top-3 left-3 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6">
                Simply drag and drop your images, and we’ll automatically extract their GPS coordinates and capture timestamps.
              </p>
            </div>
            <div className="flex-1 bg-[#5f7765] flex items-center justify-center p-8">
              <img
                src="/laptopIcon.png"
                alt="Laptop Icon"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row border border-gray-300">
            <div className="flex-1 bg-[#5f7765] flex items-center justify-center p-8">
              <img
                src="/routeIcon.png"
                alt="Route Icon"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center p-6 bg-white relative">
              <div className="absolute top-3 right-3 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6 md:text-right">
                Easily extract location, time, and camera details embedded.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* ===========================
   WHY CHOOSE PATTERNS
=========================== */}
      <section className="w-full bg-white text-gray-800 py-16 px-4 sm:px-8 md:px-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
          Why Choose Patterns
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Image */}
          <div className="flex flex-col items-center space-y-6">


            <img
              src="/girlImage.png"
              alt="Ethical and Non-Invasive"
              className="rounded-lg w-[90%] h-auto object-cover mx-auto"
            />

            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-lg">✖</span> Invasive and stressful
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-lg">✖</span> Expensive Hardware
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-lg">✖</span> Limited Data Scope
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex flex-col items-center space-y-6">

            <img
              src="/lionImage.png"
              alt="Ethical and Non-Invasive"
              className="rounded-lg w-[90%] h-auto object-cover mx-auto"
            />

            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-center gap-3">
                <span className="text-green-600 text-lg">✔</span> Ethical and Non-Invasive
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 text-lg">✔</span> Accessible and Scalable
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 text-lg">✔</span> Rich, Actionable Insights
              </li>
            </ul>
          </div>
        </div>
      </section>


      <section className="w-full bg-[#4a5f52] text-gray-100 py-5 px-4 sm:px-8 md:px-16">
        <div className="text-center mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Powered by Cutting-Edge Technology,
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mt-1">Built with the Latest in AI, Cloud, and Scalable Architecture</p>
        </div>




      </section>
      {/* <section> */}
      <section className="w-full bg-black py-5 flex flex-wrap justify-center items-center gap-8 text-sm sm:text-base font-medium text-white">
        <div className="flex flex-col items-center">
          <img src="/pyTrach.png" alt="PyTorch" className="w-8 h-8 mb-2" />
          PyTorch
        </div>
        <div className="flex flex-col items-center">
          <img src="/transferFlow.png" alt="TensorFlow" className="w-8 h-8 mb-2" />
          TensorFlow
        </div>
        <div className="flex flex-col items-center">
          <img src="/fastApi.png" alt="FastAPI" className="w-8 h-8 mb-2" />
          FastAPI
        </div>
        <div className="flex flex-col items-center">
          <img src="/azure.png" alt="Azure" className="w-8 h-8 mb-2" />
          Azure
        </div>
        <div className="flex flex-col items-center">
          <img src="/postgresql.png" alt="PostgreSQL" className="w-8 h-8 mb-2" />
          PostgreSQL
        </div>
        <div className="flex flex-col items-center">
          <img src="/docker.png" alt="Docker" className="w-8 h-8 mb-2" />
          Docker
        </div>
        {/* </div> */}
      </section>

      <section className="w-full">
        {/* CTA Section */}
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/lionImage.png"
              alt="Wildlife"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 bg-[#2b2b2b] text-white flex flex-col justify-center items-center p-10 text-start">
            <h3 className="text-xl sm:text-2xl font-medium mb-2">
              Ready to see the patterns in your data?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-md">
              {/* Join researchers using AI to monitor wildlife ethically and effectively */}
              Join researchers using AI to monitor wildlife ethically and effectively. Our platform empowers scientists, conservationists, and environmental organizations to transform raw imagery into valuable insights. By analyzing visual patterns, location data, and behavior trends, we help track individual animals, understand migration routes, and detect changes in habitats — all without disturbing natural ecosystems. Together, we’re building a future where technology and conservation work hand in hand to protect the planet’s most vulnerable species.
            </p>
            <button className="bg-[#5f7765] text-white px-6 py-3 rounded-sm hover:bg-[#506657] transition">
              Sign up for Beta Access
            </button>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="h-1 bg-white"></div> */}

  
      </section>


    </>
  );
}
