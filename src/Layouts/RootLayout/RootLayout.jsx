import { Outlet } from "react-router-dom";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../../components/Shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <ScrollUpButton />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
