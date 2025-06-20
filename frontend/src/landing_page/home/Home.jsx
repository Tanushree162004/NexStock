import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

const isLoggedIn = () => !!localStorage.getItem("token");

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
