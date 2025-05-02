import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout"; // The layout component with the Navbar

import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TestAndServices from "./pages/TestAndServices";
import BloodCP from "./tests/BloodCP";
import SpecialChemistry from "./tests/SpecialChemistry";
import ErrorPage from "./pages/ErrorPage";
import Ultrasound from "./tests/Ultrasound";
import ECG from "./tests/ECG";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Navbar with Outlet Element inside this Element
    errorElement: <ErrorPage />,
    children: [
      {
        // index: true => means if user goes to "/", render <App />
        // The index route (index: true) means if the user goes exactly to /, we render <App />.

        // path: "/",
        index: true,
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        // A parent route for "Test and Services"
        path: "test-and-services",
        element: <TestAndServices />,
        // Nested routes under "test-and-services"
        children: [
          {
            path: "blood-test",
            element: <BloodCP />,
          },
          {
            path: "special-chemistry",
            element: <SpecialChemistry />,
          },
          {
            path: "ultrasound",
            element: <Ultrasound />,
          },
          {
            path: "ecg",
            element: <ECG />,
          },
        ],
      },
    ],
  },
]);

// 2) Render the RouterProvider with our custom router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
