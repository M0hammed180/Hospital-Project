import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  const navLinks = [{ name: "Home", path: "/" }];
  const username = useSelector((state) => state.login.user?.username);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return (
    <div>
      {/* component */}
      <div className=" fixed min-w-full z-50">
        <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
          <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div
              x-data="{ open: true }"
              className="flex flex-col  px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
            >
              <div className="flex flex-row items-center justify-between p-4">
                <NavLink
                  to="/"
                  className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                >
                  Hospital
                </NavLink>
                <p className="pl-5 text-lg font-semibold tracking-widest text-gray-900  rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                  {isLoggedIn ? `Hi ${username}  ` : ""}
                </p>
                <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path
                      x-show="!open"
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    {/* <path
                      x-show="open"
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    /> */}
                  </svg>
                </button>
              </div>
              <nav className="flex-col  hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 focus:outline-none ${
                        isActive
                          ? "bg-gray-200 text-gray-900"
                          : "bg-transparent text-gray-500 hover:bg-gray-200"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                {isLoggedIn ? (
                  <NavLink
                    onClick={() => dispatch({ type: "LOGOUT" })}
                    className={({ isActive }) =>
                      `px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 focus:outline-none ${
                        isActive
                          ? "bg-gray-200 text-gray-900"
                          : "bg-transparent text-gray-500 hover:bg-gray-200"
                      }`
                    }
                  >
                    Logout
                  </NavLink>
                ) : (
                  <>
                    {" "}
                    <NavLink
                      to="./login"
                      className={({ isActive }) =>
                        `px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 focus:outline-none ${
                          isActive
                            ? "bg-gray-200 text-gray-900"
                            : "bg-transparent text-gray-500 hover:bg-gray-200"
                        }`
                      }
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="./register"
                      className={({ isActive }) =>
                        `px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 focus:outline-none ${
                          isActive
                            ? "bg-gray-200 text-gray-900"
                            : "bg-transparent text-gray-500 hover:bg-gray-200"
                        }`
                      }
                    >
                      Register
                    </NavLink>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
