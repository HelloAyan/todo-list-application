import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className=" flex items-center justify-center bg-gray-100 px-4 py-10">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center mb-2">
                    Create Account
                </h2>
                <p className="text-gray-500 text-center mb-6">
                    Register to start managing your tasks
                </p>

                <form className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="text-sm font-medium">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-center gap-2 text-sm">
                        <input type="checkbox" id="terms" className="cursor-pointer" />
                        <label htmlFor="terms" className="cursor-pointer" >
                            I agree to the Terms & Conditions
                        </label>
                    </div>

                    <button className="w-full bg-blue-600 text-white cursor-pointer py-2 rounded-lg hover:bg-blue-700 transition">
                        Register
                    </button>
                </form>

                <p className="text-center text-sm mt-6">
                    Already have an account?
                    <Link to="/login" className="text-blue-600 font-medium hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
