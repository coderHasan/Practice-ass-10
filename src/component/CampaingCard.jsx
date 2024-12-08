import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router";

const CampaingCard = ({ data }) => {
  const { title, desc, _id, photo, date, campainType, amount } = data;
  return (
    <div className="">
      <div>
        <Zoom cascade={true}>
          <div className="card  dark:text-black bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-[300px]" src={photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between">
                {title}
                <div className="badge w-[160px] py-6 text-center badge-secondary">
                  Deadline <br /> {date}
                </div>
              </h2>
              <p>{desc.slice(0, 145)}...</p>
              <div className="card-actions justify-between my-5">
                <div className="badge badge-outline">Amount: {amount} </div>
                <div className="badge badge-outline">
                  CampainType: {campainType}
                </div>
              </div>

              <Link
                to={`/details/${_id}`}
                className="btn btn-secondary font-semibold"
              >
                See more
              </Link>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default CampaingCard;
