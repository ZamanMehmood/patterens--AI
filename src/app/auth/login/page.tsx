"use client";
import { useState } from "react";
import Link from "next/link";


export default function LoginPage() {
  const [role, setRole] = useState("");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Side Image */}
      <div
        className="lg:w-1/2 h-[250px] lg:h-auto bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/signupL.png')",
        }}
      ></div>

      {/* Right Side Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-medium text-center text-gray-800 mb-8">
            Join Patterns
          </h2>

          {/* Form */}
          <form className="space-y-4">
             
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4D6258] focus:border-[#4D6258] transition-all"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4D6258] focus:border-[#4D6258] transition-all"
              />
            </div>
            

            

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-[#4D6258] hover:bg-[#3b4c43] text-white py-2 rounded-md transition-colors"
            >
              Log In
            </button>

            {/* Info Text */}
          <p className="text-center text-xs text-gray-500 mt-2">
  <Link
    href="/auth/forgotPassword"
    className="text-green-600 hover:underline hover:text-green-700 transition duration-200"
  >
    Forgot password?
  </Link>
</p>

            {/* Login Link */}
            <p className="text-center text-sm mt-2 text-gray-700">
              New to Patterens?{" "}
              <a
                href="/auth/signup"
                className="text-blue-600 hover:underline font-medium"
              >
                signup
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
