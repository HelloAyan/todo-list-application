import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/features/authSlice";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Register() {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.auth);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [terms, setTerms] = useState(false);
    const [errors, setErrors] = useState({});

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validate = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = "Full Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        else if (!emailRegex.test(email)) newErrors.email = "Invalid email format";
        if (!password) newErrors.password = "Password is required";
        else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (!confirmPassword) newErrors.confirmPassword = "Confirm your password";
        else if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
        if (!terms) newErrors.terms = "You must agree to the Terms & Conditions";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        dispatch(registerUser({
            fullName: name,
            email,
            password,
            acceptedTerms: terms
        }))
            .unwrap()
            .then(() => {
                toast.success("Registration successful!", {
                    position: "bottom-right",
                    duration: 8000, // more time
                    style: { fontSize: "14px", padding: "12px 20px", borderRadius: "10px" },
                });
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setTerms(false);
                setErrors({});
            })
            .catch((err) => {
                toast.error(err || "Registration failed", {
                    position: "bottom-right",
                    duration: 8000, // more time
                    style: { fontSize: "14px", padding: "12px 20px", borderRadius: "10px" },
                });
            });
    };

    const handleChange = (setter, field) => (e) => {
        setter(e.target.value);
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
    };

    return (
        <div className="flex items-center justify-center bg-gray-100 px-4 py-10 min-h-screen">
            <Toaster />
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
                <p className="text-gray-500 text-center mb-6">Register to start managing your tasks</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={handleChange(setName, "name")}
                            className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 outline-none ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                }`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChange(setEmail, "email")}
                            className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 outline-none ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={handleChange(setPassword, "password")}
                            autoComplete="new-password"
                            className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 outline-none ${errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                }`}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="text-sm font-medium">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={handleChange(setConfirmPassword, "confirmPassword")}
                            autoComplete="new-password"
                            className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 outline-none ${errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                }`}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                    </div>

                    {/* Terms */}
                    <div className="flex items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={terms}
                            onChange={(e) => {
                                setTerms(e.target.checked);
                                if (errors.terms) setErrors((prev) => ({ ...prev, terms: null }));
                            }}
                            className="cursor-pointer"
                        />
                        <label htmlFor="terms" className="cursor-pointer">I agree to the Terms & Conditions</label>
                    </div>
                    {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}

                    {/* Submit button with loader icon */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white cursor-pointer py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex justify-center items-center gap-2"
                    >
                        {loading && <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 text-white" />}
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                <p className="text-center text-sm mt-6">
                    Already have an account?
                    <Link to="/login" className="text-blue-600 font-medium hover:underline ml-1">Login</Link>
                </p>
            </div>
        </div>
    );
}