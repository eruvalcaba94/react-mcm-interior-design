import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Reviews from "./pages/Reviews.jsx";
import HowItStarted from "./pages/HowItStarted";
import HowItWorks from "./pages/HowItWorks";

const router = createBrowserRouter([
  {
    path: "/react-mcm-interior-design",
    element: <App />,
  },
  {
    path: "/react-mcm-interior-design/reviews",
    element: <Reviews />,
  },
  {
    path: "/react-mcm-interior-design/how-it-started",
    element: <HowItStarted />,
  },
  {
    path: "/react-mcm-interior-design/how-it-works",
    element: <HowItWorks />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
