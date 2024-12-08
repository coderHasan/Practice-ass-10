import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updadeUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const checkPassWord = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    const newUserInfo = { name, email };
    if (checkPassWord.test(password)) {
      createUser(email, password).then((user) => {
        updadeUser(name, photo);
        setUser(user.user);
        console.log(user.user);

        navigate(location.state ? location.state : "/");
        fetch("https://donation-app-seven.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUserInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            setUser(data);
            console.log(data);
          });
      });
    } else {
      console.log("error");
    }
  };

  return (
    <div className="container mx-auto px-3 md:px-5 mt-20">
      <div className="hero bg-gradient-to-br rounded-xl my-6 from-green-400 to-orange-300 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-[500px] shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo url"
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
                  name="password"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-secondary">Register</button>

                <p className="text-center mt-4">
                  If you have an account, please{" "}
                  <Link to="/login" className="text-[crimson] font-bold">
                    LogIn.
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
