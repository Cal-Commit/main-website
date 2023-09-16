import React from "react";
import bearsimage from "../static/img/3bears.webp";

const JoinLanding = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100 backdrop-filter backdrop-blur-md flex flex-col items-center justify-center overflow-hidden">
      <div className="hover:scale-105 transition duration-300 ease-in-out">
        <img
          src={bearsimage}
          alt="Bears"
          className="w-96 h-auto mb-8 lg:w-120 lg:mb-12"
          initial="hidden"
        />
      </div>
      <div className="text-center">
        <h1 className="font-bold font-dela-gothic text-6xl lg:text-7xl font-bold text-gray-900 mb-6 lg:mb-8">
          Join Our Cal Commit Team!
        </h1>
        <p className="font-dm-sans text-2xl lg:text-3xl text-gray-700 mb-6 lg:mb-8">
          Make a difference in your community while gaining valuable skills and
          experience.
        </p>
      </div>
    </div>
  );
};

export default JoinLanding;
