export default function ResetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center">
        <img
          src="/lionImage.png"
          alt="Wildlife AI"
          className="w-24 h-24 object-cover mx-auto rounded-full mb-4"
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Reset Your Password
        </h2>
        <p className="text-gray-600 mb-6">
          Enter your new password below to regain access to your account.
        </p>

        <form className="space-y-4">
          <input
            type="password"
            placeholder="New password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Reset Password
          </button>
        </form>

        <p className="mt-6 text-gray-500 text-sm">
          Back to{" "}
          <a href="/auth/login" className="text-green-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
