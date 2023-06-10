import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructor from "../Pages/Instructors/Instructor";

 export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
          {
            path: "/",
            element: <Home></Home>
          },
          {
            path:"/instructors",
            element:<Instructor></Instructor>
          },
          {
            path: "/login",
            element: <Login></Login>
          },
          {
            path:"/register",
            element: <Register></Register>
          }
        ]
    }
]);

