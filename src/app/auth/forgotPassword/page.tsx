export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center">
        <img
          src="/lionImage.png"
          alt="Wildlife AI"
          className="w-24 h-24 object-cover mx-auto rounded-full mb-4"
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Forgot Password?
        </h2>
        <p className="text-gray-600 mb-6">
          Enter your registered email below, and we’ll send you a link to reset your password.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-gray-500 text-sm">
          Remembered your password?{" "}
          <a href="/auth/login" className="text-green-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
