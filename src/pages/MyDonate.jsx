import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import auth from "../utils/firbase/firbase.init";
import { AuthContext } from "../utils/provider/AuthProvider";

const MyDonate = () => {
  const [donate, setDonate] = useState([]);
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(
      `https://donation-app-seven.vercel.app/myDonate/${auth.currentUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDonate(data);
        setLoader(false);
      });
  }, [donate]);

  const remaining = donate.filter((doner) => doner.email === user.email);

  return (
    <div className="container mx-auto px-3 md:px-5 mt-20 ">
      <div className=" ">
        <div className="mb-6 text-3xl font-semibold">
          Total Donate: {remaining.length}
        </div>
        {loader ? (
          <div className="text-center mt-10">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : remaining ? (
          <div>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr className="bg-base-200">
                    <th></th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {remaining?.map((item, index) => (
                    <tr key={index}>
                      <th>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={item.photo}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </th>
                      <td>{item.name}</td>
                      <td>{item.title}</td>
                      <td>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold text-indigo-600">404</p>
              <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Page not found
              </h1>
              <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Go back home
                </Link>
                <a href="#" className="text-sm font-semibold text-gray-900">
                  Contact support <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDonate;
