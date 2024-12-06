import React from "react";
import { useLoaderData } from "react-router";
import CampaingCard from "../component/CampaingCard";

const AllCampaign = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="container mx-auto px-3 md:px-5">
      {data?.map((item) => (
        <CampaingCard key={item._id} data={item} />
      ))}
    </div>
  );
};

export default AllCampaign;
