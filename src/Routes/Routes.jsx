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
