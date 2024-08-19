import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthContext";
import CreateEvent from "./CreateEvent";
import { useState } from "react";
import { Link } from "react-router-dom";
const getRandomColor = () => {
  const letters = "89ABCDEF"; // Restrict to higher range for light colors
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

const Navbar = ({ handleEventChange }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);
  const { vendor, vendorlogout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundColor] = useState(getRandomColor());

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle logout functionality
  const handleLogout = () => {
    if (vendor) {
      vendorlogout();
      navigator.push("/");
    } else setIsAuthenticated(false);
  };

  return (
    <nav
      className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
      style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
    >
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse p-3  text-white font-sans"
        >
          <div className="w-12 h-12 rounded-full bg-pink-700 flex items-center justify-center">
            <span className="text-white text-xl font-bold">EN</span>
          </div>
          <span className="text-pink-700 text-2xl font-bold">
            EventNexusHub
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => setIsCreateEventOpen(true)}
            className="mx-3 text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-lg px-4 py-2 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            Create Event
          </button>

          {isAuthenticated || vendor ? (
            <>
              <div className="relative">
                {/* Avatar Button */}
                <button
                  onClick={toggleDropdown}
                  className="w-10 h-10 rounded-full cursor-pointer"
                >
                  <div
                    className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full"
                    style={{ backgroundColor }}
                  >
                    <span className="font-medium text-gray-900 dark:text-gray-900">
                      PK
                    </span>
                  </div>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute right-0 top-12 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                      <div>Prachi Khivsara</div>
                      <div className="font-medium truncate">
                        prachikhivsara@gmail.com
                      </div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>
                    <div className="py-1" onClick={handleLogout}>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={handleLogout}
                      >
                        Sign out
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <NavLink
              to="/signin"
              className=" text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-lg px-4 py-2 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
            >
              Login
            </NavLink>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg block py-2 px-3  bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 md:dark:text-pink-500"
                    : "text-lg block py-2 px-3 text-gray-900 rounded hover:bg-pink-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500  dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/weddings"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg block py-2 px-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 md:dark:text-pink-500"
                    : "text-lg block py-2 px-3 text-gray-900 rounded hover:bg-pink-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500  dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Weddings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg block py-2 px-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 md:dark:text-pink-500"
                    : "text-lg block py-2 px-3 text-gray-900 rounded hover:bg-pink-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500  dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Events
              </NavLink>
            </li>
            {/* <li>
              <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
              ? "block py-2 px-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 md:dark:text-pink-500"
              : "block py-2 px-3 text-gray-900 rounded hover:bg-pink-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              }
              >
              Services
              </NavLink>
              </li> */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg block py-2 px-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 md:dark:text-pink-500"
                    : "text-lg block py-2 px-3 text-gray-900 rounded hover:bg-pink-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500  dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg block py-2 px-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 md:dark:text-pink-500"
                    : "text-lg block py-2 px-3 text-gray-900 rounded hover:bg-pink-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500  dark:hover:bg-pink-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <CreateEvent
        open={isCreateEventOpen}
        onClose={() => setIsCreateEventOpen(false)}
        handleEventChange={handleEventChange}
      />
    </nav>
  );
};

export default Navbar;
