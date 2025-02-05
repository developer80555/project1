import React from "react";

const CartPopular = ({ title, date, description }) => {
  return (
    <div className="flex items-start gap-4 flex-col p-3 transition-all duration-700 md:hover:scale-105 cursor-pointer h-[260px] min-w-[300px] max-w-[360px]  relative pb-16 rounded-lg shadow-md border border-gray-300">
      <div className="flex items-start gap-2 flex-col overflow-y-auto ">
        <p className="upper font-semibold text-xl">{title}</p>
        <p className="text-gray-500 text-sm">{date}</p>
        <p>{description}</p>
      </div>
      <button className="bg-red-600 text-center absolute bottom-6 right-4 left-4 mx-auto text-white py-2  font-semibold rounded-md cursor-pointer">
        READ MORE
      </button>
    </div>
  );
};

export default CartPopular;
