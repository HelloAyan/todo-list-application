import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../route/PrivateRoute";
import TodoList from "../components/TodoList";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import NotFound from "../Pages/NotFound";
import Dashboard from "../layout/Dashboard";
import Home from "../Pages/Home";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />

            {/* Protected Routes */}
            <Route path="/" element={
                <ProtectedRoute>
                    {/* <TodoList /> */}
                    {/* <Dashboard /> */}
                    <Home />
                </ProtectedRoute>
            }
            />
        </Routes>
    );
}