import React from 'react';
import bearsimage from '../static/img/3bears.webp';
const JoinLanding = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100 backdrop-filter backdrop-blur-md flex flex-col items-center justify-center">
      <div className="hover:scale-105 transition duration-300 ease-in-out">
        <img src={bearsimage} alt="Bears" className="w-60 h-auto mb-4"  />
      </div>
      <div className="text-center">
        <h1 className="font-dm-sans text-5xl font-bold text-gray-900 mb-4">Join Our Cal Commit Team!</h1>
        <p className="fnot-dm-sans text-lg text-gray-700 mb-4">Make a difference in your community while gaining valuable skills and experience.</p>
      </div>
    </div>
  );
};

export default JoinLanding;
