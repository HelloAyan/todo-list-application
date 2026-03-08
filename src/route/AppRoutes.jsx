import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../route/PrivateRoute";
import TodoList from "../components/TodoList";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

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