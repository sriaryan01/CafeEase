import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./Pages/LandingPage";
import DashboardPage from "./Pages/DashboardPage";
import {
  createBrowserRouter,
  RouteProvider,
  Route,
  RouterProvider
} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path:"/dashboard",
    element: <DashboardPage/>
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
