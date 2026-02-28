import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import TodoList from '../components/TodoList'
import Register from '../Pages/Register/Register'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<TodoList />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}