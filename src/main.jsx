import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Store from './pages/Store.jsx'
import Cart from './pages/Cart.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/react-mcm-interior-design",
    element: <App />,
  },
  {
    path: "/store",
    element: <Store />
  },
  {
    path: "/cart",
    element: <Cart />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
