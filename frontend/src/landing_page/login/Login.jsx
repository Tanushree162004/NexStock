import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      window.location.href = "http://localhost:3000/positions"; // Redirect to dashboard
    } catch (err) {
      alert("Login failed. Please check your credentials.");
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
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
