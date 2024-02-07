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
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctor from "../../Pages/Dashboard/AddDoctor";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Reviews from "../../Pages/Reviews/Reviews";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors";

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
        path: "/reviews",
        element: <Reviews></Reviews>
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>
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
        element:<AdminRoute><AllUser></AllUser></AdminRoute>
      },
      {
        path: '/dashboard/add-doctor',
        element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
      },
      {
        path: '/dashboard/manage-doctors',
        element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
      },
      {
        path: '/dashboard/payment/:id',
        loader:({params}) => fetch(`https://final-server-rho.vercel.app/bookings/${params.id}`),
        element: <PrivateRoute><Payment></Payment></PrivateRoute>
      }
    ]
  }
])

export default router;
