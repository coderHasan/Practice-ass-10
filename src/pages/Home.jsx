import React from "react";
import Banner from "../component/Banner";
import RunningCampaing from "../component/RunningCampaing";
import HowItWork from "../component/HowItWork";
import WorkWithUs from "../component/WorkWithUs";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  return (
    <main>
      <section className="mb-9 mt-20">
        <Banner />
      </section>
      <section className="my-9 ">
        <RunningCampaing data={data} />
      </section>
      <section className="my-10">
        <HowItWork />
      </section>
      <section className="my-10">
        <WorkWithUs />
      </section>
    </main>
  );
};

export default Home;
