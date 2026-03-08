import React from 'react'

const Header = () => {
    return (
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">

            <h1 className="text-xl font-semibold">
                Task Management Application
            </h1>

            <div className="flex items-center gap-4">

                <button className="text-gray-600 hover:text-black">
                    🔔
                </button>

                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        R
                    </div>

                    <span className="text-sm font-medium">
                        Rabbi
                    </span>
                </div>

            </div>

        </header>
    )
}

export default Header;