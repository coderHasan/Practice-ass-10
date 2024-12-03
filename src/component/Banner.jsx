import React from "react";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="container mx-auto px-3 md:px-5">
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700">
          <div className="hero-content text-white flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold">
                Help Save a Life with Your Donation
              </h1>
              <p className="py-6 text-lg">
                Many people around the world need urgent medical assistance.
                Your contributions can make a significant difference in
                someone's life. Together, we can help save lives and bring hope
                to families in need.
              </p>
              <div className="space-x-4">
                <a href="/campaigns/medical" className="btn btn-primary btn-lg">
                  Support Medical Campaigns
                </a>
                <a href="/donate" className="btn btn-outline btn-lg text-white">
                  Donate Now
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img
                src="./assets/img-1.jpg" // Replace with an actual image related to medical help
                alt="Medical Help"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700">
          <div className="hero-content text-white flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold">
                Help Save a Life with Your Donation
              </h1>
              <p className="py-6 text-lg">
                Many people around the world need urgent medical assistance.
                Your contributions can make a significant difference in
                someone's life. Together, we can help save lives and bring hope
                to families in need.
              </p>
              <div className="space-x-4">
                <a href="/campaigns/medical" className="btn btn-primary btn-lg">
                  Support Medical Campaigns
                </a>
                <a href="/donate" className="btn btn-outline btn-lg text-white">
                  Donate Now
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img
                src="./assets/img-2.jpg" // Replace with an actual image related to medical help
                alt="Medical Help"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700">
          <div className="hero-content text-white flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold">
                Help Save a Life with Your Donation
              </h1>
              <p className="py-6 text-lg">
                Many people around the world need urgent medical assistance.
                Your contributions can make a significant difference in
                someone's life. Together, we can help save lives and bring hope
                to families in need.
              </p>
              <div className="space-x-4">
                <a href="/campaigns/medical" className="btn btn-primary btn-lg">
                  Support Medical Campaigns
                </a>
                <a href="/donate" className="btn btn-outline btn-lg text-white">
                  Donate Now
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img
                src="./assets/img-3.jpg" // Replace with an actual image related to medical help
                alt="Medical Help"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
