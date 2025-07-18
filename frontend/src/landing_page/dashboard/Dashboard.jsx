// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Please log in to access the dashboard.");
//       navigate("/login");
//     }
//   }, [navigate]);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">Welcome to NexStock Dashboard</h1>
//       <p className="mt-2">You are now logged in and can view your portfolio.</p>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to access the dashboard.");
      navigate("/login");
    } else {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) return null;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome to NexStock Dashboard</h1>
      <p>You are now logged in.</p>
    </div>
  );
}
