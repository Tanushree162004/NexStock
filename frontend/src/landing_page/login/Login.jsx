import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://nexstock-backend.onrender.com/api/auth/login",
        form,
        { withCredentials: true }
      );

      if (!res.data.token) {
        alert("Login failed: No token received from backend.");
        return;
      }

      localStorage.setItem("token", res.data.token);
      window.location.href = "https://nexstock-dashboard.onrender.com/dashboard";
    } catch (err) {
      console.error("Login Error:", err.response || err);
      const msg =
        err.response?.data?.message || "Login failed. Please check your credentials.";
      alert(msg);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-control"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="form-control"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!form.email || !form.password}
            className={`btn w-100 text-white ${
              form.email && form.password ? "btn-primary" : "btn-secondary disabled"
            }`}
          >
            Log In
          </button>
        </form>

        <div className="text-center mt-3">
          Don't have an account? <a href="https://nexstock.onrender.com/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
