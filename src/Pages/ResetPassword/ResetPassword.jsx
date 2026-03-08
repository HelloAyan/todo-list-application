import { Link } from "react-router-dom";

export default function ResetPassword() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

                <h2 className="text-3xl font-bold text-center mb-2">
                    Reset Password
                </h2>

                <p className="text-gray-500 text-center mb-6">
                    Enter your new password below
                </p>

                <form className="space-y-4">

                    {/* New Password */}
                    <div>
                        <label className="text-sm font-medium">
                            New Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter new password"
                            autoComplete="new-password"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="text-sm font-medium">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                    >
                        Reset Password
                    </button>

                </form>

                <p className="text-center text-sm mt-6">
                    Back to{" "}
                    <Link
                        to="/login"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}