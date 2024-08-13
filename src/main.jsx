import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Main/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import CheckOut from "./components/CheckOut/CheckOut";
import ErrorPage from "./ErrorPage/ErrorPage";
import Bookings from "./components/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`) 
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`) 
      },
      {
        path: "/bookings", 
        element :<PrivateRoute> <Bookings></Bookings></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<div className="lg:px-8 px-4">
<React.StrictMode>
  <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
</div>
);
