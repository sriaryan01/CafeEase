import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./Pages/LandingPage";
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
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
