import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="text-center">

                {/* Animated 404 */}
                <h1 className="text-8xl font-bold text-blue-600 animate-bounce">
                    404
                </h1>

                <h2 className="text-2xl font-semibold mt-4">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mt-2">
                    Sorry, the page you are looking for does not exist.
                </p>

                <Link
                    to="/"
                    className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Go Back Home
                </Link>

            </div>

        </div>
    );
}