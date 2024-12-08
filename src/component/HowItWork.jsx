import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

const HowItWork = () => {
  return (
    <div className="container mx-auto px-3 md:px-5">
      <div>
        <h1 className="text-3x  font-bold text-center text-amber-500">
          <span className="text-3xl">How It Works</span>
          <p>
            <Typewriter
              words={[
                " Fund a Campaign",
                " We Do Our Part",
                "Get Solid Updates",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5  justify-center mt-7">
          <div className="text-center">
            <img className="w-[50px] mx-auto" src="./assets/fa.jpg" alt="" />
            <h1 className="text-2xl mb-3 font-semibold text-amber-600 mt-3">
              Fund a Campaign
            </h1>
            <p className="text-zinc-500">
              Meet individuals seeking healthcare and classroom supplies and
              donate as low as $5 to make it possible for them.
            </p>
          </div>

          <div className="text-center">
            <FaUserDoctor className="mx-auto" size={30} />
            <h1 className="text-2xl mb-3 font-semibold text-amber-600 mt-3">
              We Do Our Part
            </h1>

            <p className="text-zinc-500">
              Funds of fully funded campaigns are transferred to healthcare
              partners upon treatment confirmation and handle health insurance
              registration. Likewise, for classroom requests, we purchase
              requested materials and deliver them directly to the school once
              fully funded.
            </p>
          </div>

          <div className="text-center">
            <MdOutlineMessage className="mx-auto" size={30} />
            <h1 className="text-2xl mb-3 font-semibold text-amber-600 mt-3">
              Get Solid Updates
            </h1>
            <p className="text-zinc-500">
              We send you solid updates like photos, videos, cost receipts and
              thank you letters. You will know the impact you have made.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
