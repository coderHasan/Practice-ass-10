import React, { useContext } from "react";
import { useLoaderData } from "react-router";

const DetailsPage = () => {
  const data = useLoaderData();

  const { photo, desc, title, amount, campainType, date, email, name } =
    data || {};

  const handleDonate = () => {};

  return (
    <section className="my-10">
      <div className="container mx-auto px-3 md:px-5">
        <div>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={photo}
                className="max-w-md h-[300px] rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="py-6">{desc}</p>

                <div className="md:flex gap-5 mb-7">
                  <p className="bg-secondary font-semibold w-fit rounded-full px-10 ">
                    Amount: {amount}
                  </p>
                  <p className="bg-secondary font-semibold w-fit rounded-full px-10 ">
                    CampainType: {campainType}
                  </p>
                  <p className="bg-secondary font-semibold w-fit rounded-full px-10 ">
                    Dedline: {date}
                  </p>
                </div>

                <button
                  onClick={handleDonate}
                  className="btn btn-accent text-lg font-semibold"
                >
                  Get Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
