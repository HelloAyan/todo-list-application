import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/features/authSlice";
import { toast } from "react-toastify";

export default function ResetPassword() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useParams();

    const { loading, message, error } = useSelector((state) => state.auth);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;

        // password required
        if (!password) {
            setPasswordError("New password field required");
            valid = false;
        }

        // confirm password required
        if (!confirmPassword) {
            setConfirmError("Confirm password field required");
            valid = false;
        }

        // password match check
        if (password && confirmPassword && password !== confirmPassword) {
            setConfirmError("Password not match");
            valid = false;
        }

        if (!valid) return;

        dispatch(
            resetPassword({
                token,
                password,
                confirmPassword
            })
        );
    };

    useEffect(() => {

        if (message) {
            toast.success(message);
            navigate("/login");
        }

        if (error) {
            toast.error(error);
        }

    }, [message, error, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

                <h2 className="text-3xl font-bold text-center mb-2">
                    Reset Password
                </h2>

                <p className="text-gray-500 text-center mb-6">
                    Enter your new password below
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* New Password */}
                    <div>
                        <label className="text-sm font-medium">
                            New Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={password}
                            autoComplete="new-password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError("");
                            }}
                            className={`w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2
                            
                            ${passwordError
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-blue-500"}
                            `}
                        />

                        {passwordError && (
                            <p className="text-red-500 text-sm mt-1">
                                {passwordError}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="text-sm font-medium">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setConfirmError("");
                            }}
                            className={`w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2
                            
                            ${confirmError
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-blue-500"}
                            `}
                        />

                        {confirmError && (
                            <p className="text-red-500 text-sm mt-1">
                                {confirmError}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        {loading ? "Resetting..." : "Reset Password"}
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