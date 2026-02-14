import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import TodoList from '../components/TodoList'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<h1>Hello</h1>} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}