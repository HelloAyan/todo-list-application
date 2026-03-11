import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex">

            <Sidebar />

            <div className="flex-1 flex flex-col">

                <Header />

                <main className="p-6 bg-gray-100 min-h-screen">
                    <Outlet />
                </main>

            </div>

        </div>
    )
}

export default Dashboard;