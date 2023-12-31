import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import DetailProduct from "./pages/DetailProduct.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Dashbord from "./pages/Dashbord.jsx";
import Catalog from "./pages/Catalog.jsx";
import Setting from "./pages/Setting.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/", // Daftar product
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/detail",
        element: <DetailProduct />,
      },
      {
        path: "/myprofile",
        element: <MyProfile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/dashbord",
        element: <Dashbord />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
