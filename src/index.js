import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./Pages/LandingPage";
import DashboardPage from "./Pages/DashboardPage";
import CartPage from "./Pages/CartPage";
import { createBrowserRouter, RouteProvider, Route, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  },
  {
    path: "/cart",
    element: <CartPage />
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>
);
