import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../redux/features/authSlice";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ForgetPassword() {

    const dispatch = useDispatch();
    const { loading, message, error } = useSelector((state) => state.auth);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setEmailError("Email is required");
            return;
        }

        dispatch(forgetPassword(email));
    };

    // input change
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (value) {
            setEmailError("");
        }
    };

    // toast notification
    useEffect(() => {

        if (message) {
            toast.success(message);
        }

        if (error) {
            toast.error(error);
        }

    }, [message, error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

                <h2 className="text-3xl font-bold text-center mb-2">
                    Forgot Password
                </h2>

                <p className="text-gray-500 text-center mb-6">
                    Enter your email to receive a reset link
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            className={`w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2
                            
                            ${emailError
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-blue-500"}
                            `}
                        />

                        {emailError && (
                            <p className="text-red-500 text-sm mt-1">
                                {emailError}
                            </p>
                        )}

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex justify-center items-center gap-2 cursor-pointer"
                    >
                        {loading && (
                            <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 text-white" />
                        )}
                        {loading ? "Sending..." : "Send Reset Link"}
                    </button>

                </form>

                <p className="text-center text-sm mt-6">
                    Remember your password?{" "}
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