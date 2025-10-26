"use client";
import { useState } from "react";

export default function SignupPage() {
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
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4D6258] focus:border-[#4D6258] transition-all"
              />
            </div>
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
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4D6258] focus:border-[#4D6258] transition-all"
              />
            </div>

            {/* Role Dropdown */}
            <div className="relative">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#4D6258] focus:border-[#4D6258]"
              >
                <option value="">Role</option>
                <option value="user">User</option>
                <option value="contributor">Contributor</option>
                <option value="researcher">Researcher</option>
              </select>

              {/* Dropdown Icon */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                ▼
              </span>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-[#4D6258] hover:bg-[#3b4c43] text-white py-2 rounded-md transition-colors"
            >
              Sign Up
            </button>

            {/* Info Text */}
            <p className="text-center text-xs text-gray-500 mt-2">
              Your account requires administrator approval
            </p>

            {/* Login Link */}
            <p className="text-center text-sm mt-2 text-gray-700">
              Already have an account?{" "}
              <a
                href="/auth/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
