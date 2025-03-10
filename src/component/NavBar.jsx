import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../utils/provider/AuthProvider";

const NavBar = ({ darkMode, setDarkMode }) => {
  const { handleSigOut, user } = useContext(AuthContext);

  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <div className="dark:bg-black bg-white">
        <div className="container mx-auto px-3 md:px-5">
          <div>
            <div className="navbar ">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  {darkMode ? (
                    <ul
                      tabIndex={0}
                      className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li>
                        <Link to={"/allCampaign"}>All Campaign</Link>
                      </li>
                      <li>
                        <Link to={"/campaing"}>Add New Campaign</Link>
                      </li>
                      <li>
                        <Link to={"/myCampaign"}>My Campaign</Link>
                      </li>
                      <li>
                        <Link to={"/myDonate"}>My Donations</Link>
                      </li>
                    </ul>
                  ) : (
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li>
                        <Link to={"/allCampaign"}>All Campaign</Link>
                      </li>
                      <li>
                        <Link to={"/campaing"}>Add New Campaign</Link>
                      </li>
                      <li>
                        <Link to={"/myCampaign"}>My Campaign</Link>
                      </li>
                      <li>
                        <Link to={"/myDonate"}>My Donations</Link>
                      </li>
                    </ul>
                  )}
                </div>
                <Link to="/" className="btn btn-ghost font-bold text-3xl">
                  Crowdcube
                </Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu  menu-horizontal px-1">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/allCampaign"}>All Campaign</Link>
                  </li>
                  <li>
                    <Link to={"/campaing"}>Add New Campaign</Link>
                  </li>
                  <li>
                    <Link to={"/myCampaign"}>My Campaign</Link>
                  </li>
                  <li>
                    <Link to={"/myDonate"}>My Donations</Link>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-600 focus:outline-none"
                >
                  <span
                    className={`absolute w-6 h-6 top-1 left-0 bg-white dark:bg-gray-800 rounded-full transform transition-transform ${
                      darkMode ? "translate-x-6" : "translate-x-0"
                    }`}
                  ></span>
                </button>
              </div>
              <div className="navbar-end relative ">
                {user && user.email ? (
                  <div className="group">
                    <img
                      className="w-[50px] h-[50px]  rounded-full"
                      src={user.photoURL}
                      alt=""
                    />

                    <div
                      onClick={handleSigOut}
                      className=" absolute p-2 rounded-md translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 bg-zinc-600 px-5 text-white top-6 right-0 z-10 transition-all duration-500"
                    >
                      <h1 className="mb-2">{user.email}</h1>
                      <h1 className="mb-2">{user.displayName}</h1>
                      <button className="btn">Log-Out</button>
                    </div>
                  </div>
                ) : (
                  <Link to={"/login"} className="btn">
                    LogIn
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
