import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="container mx-auto px-3 md:px-5">
      <div className="hero bg-gradient-to-br rounded-xl my-6 from-green-400 to-orange-300 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-[500px] shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary ">Login</button>

                <p className="text-center mt-4">
                  If you are new this site, please{" "}
                  <Link to="/register" className="text-[crimson] font-bold">
                    register.
                  </Link>
                </p>
              </div>

              <div className="text-center ">
                <p className="text-xl font-semibold text-sky-500 mb-3">
                  Or Login with
                </p>
                <button className="btn btn-wide btn-accent font-semibold ">
                  <FaGoogle /> Login with google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
