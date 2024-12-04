import React from "react";
import Banner from "../component/Banner";
import RunningCampaing from "../component/RunningCampaing";

const Home = () => {
  return (
    <main>
      <section className="mb-9 mt-4">
        <Banner />
      </section>
      <section className="my-9">
        <RunningCampaing />
      </section>
    </main>
  );
};

export default Home;
