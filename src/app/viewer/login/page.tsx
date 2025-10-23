export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left Image Section */}
      <div className="w-1/2 hidden md:block relative">
        <img
          src="/jSignup.jpg"
          alt="Login Visual"
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Welcome Back to <span className="text-green-700">Patterns</span>
          </h2>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none shadow-sm hover:shadow-md transition-all"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none shadow-sm hover:shadow-md transition-all"
            />

            <button
              type="button"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="text-green-700 font-medium hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
