import React from "react";
import WorkCard from "./WorkCard";

const WorkWithUs = () => {
  return (
    <div>
      <h1 className="text-center pt-10 text-3xl font-bold text-orange-400">
        Work With us
      </h1>
      <p className="w-4/12 mx-auto text-center mt-3 mb-10">
        many hospital work with us for helping people life. we show some brand
        hospital in this ad
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <WorkCard img="./assets/lif.png" />
        <WorkCard img="./assets/pop.png" />
        <WorkCard img="./assets/ibns.jpg" />
        <WorkCard img="./assets/app.png" />
      </div>
    </div>
  );
};

export default WorkWithUs;
