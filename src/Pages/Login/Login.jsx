import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center mb-2">
                    Welcome Back 👋
                </h2>
                <p className="text-gray-500 text-center mb-6">
                    Login to manage your tasks
                </p>

                <form className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#" className="text-blue-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Login
                    </button>
                </form>

                <p className="text-center text-sm mt-6">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-600 font-medium hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}
