import React from "react";
import { useLoaderData } from "react-router";
import CampaingCard from "../component/CampaingCard";

const AllCampaign = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto px-3 md:px-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {data?.map((item) => (
          <CampaingCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default AllCampaign;
