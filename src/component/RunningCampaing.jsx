import React from "react";
import { Slide } from "react-awesome-reveal";
import CampaingCard from "./CampaingCard";

const RunningCampaing = ({ data }) => {
  const remainingData = data.slice(0, 6);

  return (
    <div className="container mx-auto px-3 md:px-5">
      <div>
        <div>
          <h1 className="text-center text-3xl font-bold text-secondary">
            <Slide direction="down">Our Running Campaing</Slide>
          </h1>
          <p className="text-zinc-500 my-5 text-center w-6/12 mx-auto">
            Through this campaign, we're bringing together passionate
            individuals and resources to make a tangible difference. With your
            support,
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3">
          {remainingData?.map((item) => (
            <CampaingCard key={item._id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunningCampaing;
