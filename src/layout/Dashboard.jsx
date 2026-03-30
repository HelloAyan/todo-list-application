import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import TodoList from '../components/TodoList';

const Dashboard = () => {
    return (
        <div className="w-full h-auto">
            <Header />
            <div className='w-full h-auto flex'>
                <div className='w-20'> hello</div>
                <TodoList />
            </div>

        </div>
    )
}

export default Dashboard;