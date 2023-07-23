import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Store from "./pages/Store.jsx";
import Furniture from "./pages/Furniture.jsx";
import DecorPillows from "./pages/DecorPillows.jsx";
import Lighting from "./pages/Lighting.jsx";
import Cart from "./pages/Cart.jsx";
import Reviews from "./pages/Reviews.jsx";
import HowItStarted from "./pages/HowItStarted";
import Pricing from "./pages/Pricing.jsx";
import Promotions from "./pages/Promotions.jsx";
import HowItWorks from "./pages/HowItWorks";
import TestPage from "./pages/TestPage";

const router = createBrowserRouter([
  {
    path: "/react-mcm-interior-design",
    element: <App />,
  },
  {
    path: "/react-mcm-interior-design/store",
    element: <Store />,
  },
  {
    path: "/react-mcm-interior-design/furniture",
    element: <Furniture />,
  },
  {
    path: "/react-mcm-interior-design/decor-pillows",
    element: <DecorPillows />,
  },
  {
    path: "/react-mcm-interior-design/lighting",
    element: <Lighting />,
  },
  {
    path: "/react-mcm-interior-design/cart",
    element: <Cart />,
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
    path: "/react-mcm-interior-design/pricing",
    element: <Pricing />,
  },
  {
    path: "/react-mcm-interior-design/promotions",
    element: <Promotions />,
  },
  {
    path: "/react-mcm-interior-design/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "/react-mcm-interior-design/test-page",
    element: <TestPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)``;
