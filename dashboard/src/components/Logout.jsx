// import React from "react";

// export default function Logout() {
//   const handleLogout = () => {
//     // Clear login token
//     localStorage.removeItem("token");

//     // Redirect to frontend (port 3001)
//     window.location.href = "http://localhost:3001";
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <div className="text-center">
//         <h2 className="mb-4">Are you sure you want to log out?</h2>
//         <button className="btn btn-danger px-4 py-2" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";


export default function Logout() {
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href ="https://nexstock.onrender.com";
  };

  return (
    <div className="text-center">
      <h2>Are you sure you want to log out?</h2>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}