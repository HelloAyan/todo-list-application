import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/features/authSlice";

export default function Register() {
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state) => state.auth); // auth state

    // Form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [terms, setTerms] = useState(false);

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!terms) {
            alert("You must agree to the Terms & Conditions");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Dispatch registration API call
        dispatch(registerUser({ name, email, password }));
    };

    return (
        <div className=" flex items-center justify-center bg-gray-100 px-4 py-10">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center mb-2">
                    Create Account
                </h2>
                <p className="text-gray-500 text-center mb-6">
                    Register to start managing your tasks
                </p>

                {/* Loading/Error/Success messages */}
                {loading && <p className="text-center text-blue-500 mb-2">Registering...</p>}
                {error && <p className="text-center text-red-500 mb-2">{error}</p>}
                {user && <p className="text-center text-green-500 mb-2">Registration successful!</p>}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="text-sm font-medium">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={terms}
                            onChange={(e) => setTerms(e.target.checked)}
                            className="cursor-pointer"
                        />
                        <label htmlFor="terms" className="cursor-pointer">
                            I agree to the Terms & Conditions
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white cursor-pointer py-2 rounded-lg hover:bg-blue-700 transition"
                    >
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