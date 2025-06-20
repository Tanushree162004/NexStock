import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-2">
         {/* Stylish Logo on the left */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
          style={{ textDecoration: "none" }}
        >
          <i
            className="fa-solid fa-money-bill-trend-up"
            style={{
              fontSize: "2rem",
              color: "#28a745",
              transform: "rotate(-5deg)",
            }}
          ></i>
          <span
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              color: "#222",
              letterSpacing: "1px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            NexStock
          </span>
          </Link>

        {/* Toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links on the right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0 d-flex align-items-center gap-3">
            <li className="nav-item">
              <Link className="nav-link active" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
