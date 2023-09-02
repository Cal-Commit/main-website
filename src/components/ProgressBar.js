import React from 'react';

const SmoothProgressBar = ({ value }) => {
  const roundedValue = Math.round(value); 

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-gray-200">
            Progress
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-black">
            {roundedValue}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <div
          style={{
            width: `${roundedValue}%`,
            transition: 'width 0.3s ease-in-out',
          }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-black"
        ></div>
      </div>
    </div>
  );
};

export default SmoothProgressBar;
