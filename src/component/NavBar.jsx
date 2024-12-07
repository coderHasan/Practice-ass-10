import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../utils/provider/AuthProvider";

const NavBar = () => {
  const { handleSigOut, user } = useContext(AuthContext);

  return (
    <div className="container mx-auto px-3 md:px-5">
      <div>
        <div className="navbar bg-base-100">
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
            </div>
            <Link to="/" className="btn btn-ghost font-bold text-3xl">
              Crowdcube
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
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
          <div className="navbar-end relative group">
            {user && user.email ? (
              <>
                <img
                  className="w-[50px] h-[50px]  rounded-full"
                  src={user.photoURL}
                  alt=""
                />

                <div
                  onClick={handleSigOut}
                  className=" absolute p-3 rounded-md translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 bg-zinc-600 px-5 text-white top-16 right-0 z-10 transition-all duration-500"
                >
                  <h1 className="mb-2">{user.email}</h1>
                  <h1 className="mb-2">{user.displayName}</h1>
                  <Link className="btn">Log-Out</Link>
                </div>
              </>
            ) : (
              <Link to={"/login"} className="btn">
                LogIn
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
