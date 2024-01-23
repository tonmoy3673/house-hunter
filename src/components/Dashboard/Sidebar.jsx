import { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import { MenuOutlined } from "@mui/icons-material";
import AdminMenu from "./AdminMenu";

const Sidebar = () => {
  const [isActive, setActive] = useState(true);
  const [role, setRole] = useState("admin");

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-[#111] text-white flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link
              className="flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 md:mb-0"
              to="/"
            >
              House Hunter
            </Link>
          </div>
        </div>

        {isActive ? (
          <button
            onClick={() => handleToggle()}
            className="mobile-menu-button focus:outline-none focus:bg-gradient-to-r p-4 from-pink-500 to-blue-500"
          >
            <MenuOutlined className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={() => handleToggle()}
            className="mobile-menu-button p-4 focus:outline-none focus:bg-green-400 text-center bg-green-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#111] text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <h2 className="text-3xl cursor-pointer font-semibold text-center">
            <Link
              to="/"
              className="flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 md:mb-0"
            >
              House Hunter
            </Link>
          </h2>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {role && role !== "requested" ? (
                <>{role === "admin" ? <AdminMenu /> : <HostMenu />} </>
              ) : (
                <UserMenu />
              )}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <PrimaryButton className="flex block w-full rounded-full items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform">
            {/* <ArrowRightOnRectangleIcon className='w-5 h-5' /> */}

            <span className="mx-4 font-medium">Logout</span>
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
