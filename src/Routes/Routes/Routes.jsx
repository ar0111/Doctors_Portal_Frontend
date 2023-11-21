import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import NotFound from "../../Pages/NotFound/NotFound";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";


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
        path: "*",
        element: <NotFound></NotFound>
      },
    ]
  }
])

export default router;
