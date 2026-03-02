import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../route/PrivateRoute";
import TodoList from "../components/TodoList";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route path="/" element={
                <ProtectedRoute>
                    <TodoList />
                </ProtectedRoute>
            }
            />
        </Routes>
    );
}