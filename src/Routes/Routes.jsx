import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import SignupPage from "../Pages/SignUp/SignUp";
import SigninPage from "../Pages/SignIn/SignIn";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import AllHouses from "../Pages/Dashboard/AllHouses";
import ServicesHouse from "../Pages/Houses/Services";
import axios from "axios";
import ServiceDetails from "../Pages/Houses/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <SigninPage />,
      },
      {
        path: "/create-account",
        element: <SignupPage />,
      },
      {
        path: "/houses",
        element: <ServicesHouse />,
      },
      {
        path: "/houses-details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(
            `${import.meta.env.VITE_REACT_SERVER_URL}/houses/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/all-houses",
        element: <AllHouses />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <Navbar />
        <NotFound />
        <Footer />
      </>
    ),
  },
]);
