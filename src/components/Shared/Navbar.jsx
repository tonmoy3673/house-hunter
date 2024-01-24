import { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  const signOut = () => {
    logout().then(() => {
      navigate("/login");
      setIsDropdownOpen(false);
    });
  };

  const handleOutsideClick = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="container mx-auto flex flex-wrap px-2 md:flex-row items-center justify-between">
        <div className="menu-btn" onClick={toggleMenu}>
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            "X"
          )}
        </div>

        <Link
          to="/"
          className="flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-blue-800 md:mb-0"
        >
          <span className="ml-3 text-2xl font-bold ">House Hunter</span>
        </Link>
        {/*  */}
        <nav>
          <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link
                to="/"
                style={{ "--i": 1 }}
                className="menu-btn"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/houses"
                style={{ "--i": 2 }}
                className="menu-btn"
                onClick={closeMenu}
              >
                Houses
              </Link>
            </li>

            {!user?.email && (
              <>
                <li>
                  <Link to="/login" style={{ "--i": 2 }} className="menu-btn">
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/create-account"
                    style={{ "--i": 1 }}
                    className="menu-btn"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        {user?.email && (
          <div className="relative inline-block ">
            <button
              ref={buttonRef}
              onClick={toggleDropdown}
              className="relative z-10 block text-gray-700 bg-white border border-transparent rounded-full focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300  focus:ring  focus:outline-none"
            >
              {user?.photoURL === " " ? (
                <img
                  className="lg:w-10 w-6 lg:h-10 h-6 rounded-full"
                  src="https://static.independent.co.uk/2022/08/22/10/mark%20zuckerberg%20metaverse%20avatar.png?width=1200"
                  alt=""
                />
              ) : (
                <img
                  className="lg:w-10 w-6 lg:h-10 h-6 rounded-full"
                  src={
                    "https://static.independent.co.uk/2022/08/22/10/mark%20zuckerberg%20metaverse%20avatar.png?width=1200"
                  }
                  alt=""
                />
              )}
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 z-5 w-48 mt-2 rounded-md shadow-xl z-40 bg-gradient-to-r from-pink-500 to-blue-500">
                <Link
                  to="/dashboard"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center px-3 py-3 text-sm text-white capitalize transition-colors duration-200 transform  hover:bg-gray-100 "
                >
                  <svg
                    className="w-5 h-5 mx-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <span className="mx-1">Dashboard</span>
                </Link>
                <hr className="border-gray-200" />
                <div
                  onClick={signOut}
                  className="flex items-center cursor-pointer p-3 text-sm text-white capitalize transition-colors duration-200 transform  hover:bg-gray-100 "
                >
                  <svg
                    className="w-5 h-5 mx-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <span className="mx-1">Sign Out</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
