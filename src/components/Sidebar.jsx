import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white shadow-md h-screen p-5">

            <h2 className="text-lg font-semibold mb-6">
                Dashboard
            </h2>

            <nav className="flex flex-col gap-4">

                <Link
                    to="/dashboard"
                    className="text-gray-700 hover:text-blue-600"
                >
                    📊 Overview
                </Link>

                <Link
                    to="/tasks"
                    className="text-gray-700 hover:text-blue-600"
                >
                    ✅ My Tasks
                </Link>

                <Link
                    to="/completed"
                    className="text-gray-700 hover:text-blue-600"
                >
                    ✔ Completed
                </Link>

                <Link
                    to="/settings"
                    className="text-gray-700 hover:text-blue-600"
                >
                    ⚙ Settings
                </Link>

            </nav>

        </aside>
    );
}