import React from "react";
import CampaingCard from "./CampaingCard";

const RunningCampaing = () => {
  return (
    <div className="">
      <div>
        <div>
          <h1>Our Running Campaing</h1>
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
