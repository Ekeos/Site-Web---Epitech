import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router.jsx";
import axios from "axios";

axios.get("http://localhost:8000/sanctum/csrf-cookie");

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
