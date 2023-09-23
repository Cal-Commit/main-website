import React from "react";
import bearsimage from "../static/img/3bears.webp";

const JoinLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100 backdrop-filter backdrop-blur-md flex flex-col items-center justify-center overflow-hidden">
     <div className="hover:scale-105 transition duration-300 ease-in-out flex justify-center items-center w-full">
        <img
          src={bearsimage}
          alt="Bears"
          className="w-1/2 h-auto mb-8 lg:w-3/4 xl:w-1/2 2xl:w-1/3 mt-16"
        />
      </div>
      <div className="text-center px-4">
         <h1 className="font-bold font-dela-gothic text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl mb-6 lg:mb-8">
          Join Our Cal Commit Team!
        </h1>
        <p className="font-dm-sans text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-gray-700 mb-6 lg:mb-8">
          Make a difference in your community while gaining valuable skills and
          experience.
        </p>
      </div>
    </div>
  );
};

export default JoinLanding;
