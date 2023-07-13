import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Store from './pages/Store.jsx'
import Furniture from './pages/Furniture.jsx'
import DecorPillows from './pages/DecorPillows.jsx'
import Lighting from './pages/Lighting.jsx'
import Cart from './pages/Cart.jsx'
import Reviews from './pages/Reviews.jsx'

const router = createBrowserRouter([
  {
    path: "/react-mcm-interior-design",
    element: <App />,
  },
  {
    path: "/react-mcm-interior-design/store",
    element: <Store />
  },
  {
    path: "/react-mcm-interior-design/furniture",
    element: <Furniture />
  },
  {
    path: "/react-mcm-interior-design/decor-pillows",
    element: <DecorPillows />
  },
  {
    path: "/react-mcm-interior-design/lighting",
    element: <Lighting />
  },
  {
    path: "/react-mcm-interior-design/cart",
    element: <Cart />
  },
  {
    path: "/react-mcm-interior-design/reviews",
    element: <Reviews />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
