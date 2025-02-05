import React from "react";

const Heading = ({ heading, btn1, btn2 }) => {
  return (
    <div
      className="flex items-center justify-center flex-col gap-6 bg-red-600 py-10 text-white mb-10 mb:m-16
    "
    >
      <div className="flex items-center gap-2">
        <span className="bg-white w-3 h-[3px] inline-block"></span>
        <span className="bg-white w-10 h-[3px] inline-block"></span>
        <span className="bg-white w-3 h-[3px] inline-block"></span>
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold">{heading}</h2>
      <div className="flex gap-2 md:gap-4 font-semibold">
        <button className="border-2 border-white py-[7px] px-8 rounded hover:scale-105 hover:border-black transition-all duration-500 hover:bg-gray-100 hover:text-gray-600">
          {btn1}
        </button>
        <button className="border-2 border-white py-[7px] px-8 rounded hover:scale-105 hover:border-black transition-all duration-500 hover:bg-gray-100 hover:text-gray-600">
          {btn2}
        </button>
      </div>
    </div>
  );
};

export default Heading;
