import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../utils/provider/AuthProvider";
import { useLoaderData } from "react-router";

const Update = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const title = form.title.value;
    const desc = form.desc.value;
    const amount = form.amount.value;
    const campainType = form.campainType.value;
    const date = form.date.value;
    const email = form.email.value;
    const name = form.name.value;

    const newCampain = {
      photo,
      title,
      desc,
      amount,
      campainType,
      date,
      email,
      name,
    };

    if (amount < 300) {
      Swal.fire({
        title: "Error!",
        text: "Please check your ammount",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    fetch("http://localhost:5000/addCampaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCampain),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Success",
            text: "Update success",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    form.reset();
  };

  return (
    <div className="container mx-auto px-3 md:px-5">
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold">Add New Campaign!</h1>
            </div>
            <div className="card bg-base-100 w-[600px]">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="md:flex justify-between gap-5">
                  {/* Photo Url */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      name="photo"
                      type="text"
                      defaultValue={data?.photo}
                      placeholder="Photo url"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* title */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Title</span>
                    </label>
                    <input
                      name="title"
                      type="text"
                      defaultValue={data?.title}
                      placeholder="Title"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                {/* Description */}
                <div className="md:flex justify-between gap-5">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      name="desc"
                      defaultValue={data?.desc}
                      type="text"
                      placeholder="description"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* Campaign type */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Campaign type</span>
                    </label>
                    <select
                      name="campainType"
                      defaultValue={data?.campainType}
                      className="select select-bordered w-full "
                    >
                      <option disabled selected>
                        Who shot first?
                      </option>
                      <option>personal issue</option>
                      <option>startup</option>
                      <option>business</option>
                      <option>creative ideas</option>
                    </select>
                  </div>
                </div>
                {/* Donation */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Donation Ammount</span>
                  </label>
                  <input
                    name="amount"
                    defaultValue={data?.amount}
                    type="number"
                    placeholder={300}
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* Date */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    name="date"
                    defaultValue={data?.date}
                    type="date"
                    placeholder="Date/Time"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="md:flex justify-between gap-5">
                  {/* User Email */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      defaultValue={user?.email}
                      readOnly
                      type="text"
                      placeholder="Type your email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* user Name */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="name"
                      defaultValue={user?.displayName}
                      type="text"
                      readOnly
                      placeholder="Type your Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
