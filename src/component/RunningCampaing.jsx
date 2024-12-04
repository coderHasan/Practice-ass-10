import React from "react";
import CampaingCard from "./CampaingCard";

const RunningCampaing = () => {
  return (
    <div className="">
      <div>
        <div>
          <h1 className="text-center text-3xl font-bold text-secondary">
            Our Running Campaing
          </h1>
          <p className="text-zinc-500 my-5 text-center w-6/12 mx-auto">
            Through this campaign, we're bringing together passionate
            individuals and resources to make a tangible difference. With your
            support,
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <CampaingCard />
          <CampaingCard />
          <CampaingCard />
        </div>
      </div>
    </div>
  );
};

export default RunningCampaing;
