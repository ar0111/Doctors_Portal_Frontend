import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import NotFound from "../../Pages/NotFound/NotFound";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Sign Up/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../Pages/Dashboard/MyAppointment";
import AllUser from "../../Pages/Dashboard/AllUser";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      },
    ]
  },
  {
    path:'/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:'/dashboard',
        element:<MyAppointment></MyAppointment>
      },
      {
        path: '/dashboard/all-users',
        element:<AllUser></AllUser>
      }
    ]
  }
])

export default router;
