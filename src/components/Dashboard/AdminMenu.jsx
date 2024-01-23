import { GroupAddOutlined, PeopleOutlineOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <NavLink
        to="all-users"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-white" : "text-pink-600"
          }`
        }
      >
        <PeopleOutlineOutlined className="w-5 h-5" />
        <span className="mx-4 font-medium">All Users</span>
      </NavLink>
      <NavLink
        to="all-bookings"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-white" : "text-pink-600"
          }`
        }
      >
        <GroupAddOutlined className="w-5 h-5" />

        <span className="mx-4 font-medium">All of Bookings</span>
      </NavLink>
    </>
  );
};

export default AdminMenu;
