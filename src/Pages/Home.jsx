import React from 'react'
import Dashboard from '../layout/Dashboard'

const Home = () => {
    return (
        <>
            <h2 className="text-2xl font-semibold mb-6">
                Dashboard Overview
            </h2>

            <div className="grid grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm">
                        Total Tasks
                    </h3>

                    <p className="text-2xl font-bold mt-2">
                        24
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm">
                        Completed Tasks
                    </h3>

                    <p className="text-2xl font-bold mt-2">
                        18
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm">
                        Pending Tasks
                    </h3>

                    <p className="text-2xl font-bold mt-2">
                        6
                    </p>
                </div>

            </div>
        </>
    )
}

export default Home;