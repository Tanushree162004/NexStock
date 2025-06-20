import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", form);

      // ✅ On success, store token and go to dashboard
      localStorage.setItem("token", res.data.token);
      window.location.href = "http://localhost:3000/positions";
    } catch (err) {
      const msg = err.response?.data?.message || "Signup failed";

      if (msg.toLowerCase().includes("user already exists")) {
        alert("User already exists. Redirecting to login...");
        navigate("/login"); // ✅ Go to login page
      } else {
        alert(msg);
      }
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="form-control"
              required
            />
          </div>

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
            disabled={!form.name || !form.email || !form.password}
            className={`btn w-100 text-white ${
              form.name && form.email && form.password
                ? "btn-primary"
                : "btn-secondary disabled"
            }`}
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-3">
          Already have an account? <a href="/login">Log In</a>
        </div>
      </div>
    </div>
  );
}
