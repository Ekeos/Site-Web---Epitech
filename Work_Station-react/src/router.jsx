import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Advertisement from "./views/Advertisement";
import Login from "./views/Login";
import Signup from "./views/Signup";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import ErrorPage from "./error-page";
import Applyform from "./views/apply_form";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./views/DashboardAdmin";
import UsersDB from "./views/PeopleDB";
import CompaniesDB from "./views/CompaniesDB";
import AdvertisementDB from "./views/AdvertisementDB";
import PostulateDB from "./views/PostulateDB";
import TypeDB from "./views/TypeDB";
import Applied from "./views/Applied";
import SectorDB from "./views/SectorDB";
import Profil from "./views/Profil";

const token = localStorage.getItem("token");
let parsedToken = JSON.parse(token);
let admin;
if (token !== null) {
  admin = parsedToken.isAdmin;
} else {
  admin = 0;
}

const router = createBrowserRouter([
  // ROUTES ALLOWED IF NOT CONNECTED
  token === null && {
    path: "/",
    element: <GuestLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/ad/:id",
        element: <Advertisement />,
      },
      {
        path: "ad/:id/applyform",
        element: <Applyform />,
      },
      {
        path: "/applied",
        element: <Applied />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Dashboard />,
      },
    ],
  },
  // ROUTE IF CONNECTED
  token !== null &&
    admin === 0 && {
      path: "/",
      element: <DefaultLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/profil",
          element: <Profil />,
        },
        {
          path: "/applied",
          element: <Applied />,
        },
        {
          path: "/ad/:id",
          element: <Advertisement />,
        },
        {
          path: "ad/:id/applyform",
          element: <Applyform />,
        },
        {
          path: "*",
          element: <Dashboard />,
        },
      ],
    },
  // ROUTE IF CONNECTED AND ADMIN
  token !== null &&
    admin === 1 && {
      path: "/",
      element: <AdminLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/profil",
          element: <Profil />,
        },
        {
          path: "/applied",
          element: <Applied />,
        },
        {
          path: "/admin/ad/:id",
          element: <Advertisement />,
        },
        {
          path: "/admin/ad/:id/applyform",
          element: <Applyform />,
        },
        {
          path: "/ad/:id",
          element: <Advertisement />,
        },
        {
          path: "ad/:id/applyform",
          element: <Applyform />,
        },
        {
          path: "*",
          element: <Dashboard />,
        },
        {
          path: "/admin",
          element: <AdminDashboard />,
        },
        {
          path: "/admin/users",
          element: <UsersDB />,
        },
        {
          path: "/admin/companies",
          element: <CompaniesDB />,
        },
        {
          path: "/admin/advertisements",
          element: <AdvertisementDB />,
        },
        {
          path: "/admin/postulates",
          element: <PostulateDB />,
        },
        {
          path: "/admin/types",
          element: <TypeDB />,
        },
        {
          path: "/admin/sectors",
          element: <SectorDB />,
        },
      ],
    },
]);

export default router;
