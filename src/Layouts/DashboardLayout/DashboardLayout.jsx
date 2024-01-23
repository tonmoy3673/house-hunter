import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // getRole(user?.email).then(data => {
    //     setRole(data)
    //     setLoading(false)
    // })
  }, []);

  return (
    <div className="min-h-screen md:flex">
      <Sidebar></Sidebar>
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
