import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructor from "../Pages/Instructors/Instructor";
import Classes from "../Pages/Classes/Classes";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import StudentHome from "../Pages/Dashboard/StudentHome/StudentHome";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";

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
            path:"/classes",
            element:<Classes></Classes>
          },

          {
            path: "/login",
            element: <Login></Login>
          },
          {
            path:"/register",
            element: <Register></Register>
          }
        ],
    },
    {
      path:"dashboard",
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children : [
        {
        path: "student-home",
        element: <StudentHome></StudentHome>
        },
        {
          path:"selected-class",
          element: <SelectedClass></SelectedClass>
        },
        {
          path:"enrolled-class",
          element: <EnrolledClass></EnrolledClass>
        },
        {
          path:"manage-users",
          element: <ManageUsers></ManageUsers>
        },
        {
          path:"manage-classes",
          element: <ManageClasses></ManageClasses>
        },
        {
          path:"add-class",
          element: <AddClass></AddClass>
        }
      ]
    }
  
]);

