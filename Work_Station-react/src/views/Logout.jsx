import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  const handleLogout = () => {
    // REMOVE TOKEN FROM LOCALSTORAGE
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/";
  };

  return (
    <Link
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
    >
      Logout
    </Link>
  );
};

export default Logout;
