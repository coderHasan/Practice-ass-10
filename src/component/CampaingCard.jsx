import React from "react";
import { Link } from "react-router";

const CampaingCard = ({ data }) => {
  const { title, desc, _id } = data;
  return (
    <div className="">
      <div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{desc.slice(0, 145)}...</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline"> Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>

            <Link
              to={`/details/${_id}`}
              className="btn btn-secondary font-semibold"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaingCard;
