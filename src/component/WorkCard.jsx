import React from "react";

const WorkCard = ({ img }) => {
  return (
    <div className="container mx-auto px-3 md:px-5">
      <div>
        <div className="card w-[200px] hover:scale-[2] mx-auto transition-all ease-in-out duration-500">
          <div className="card-body">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
