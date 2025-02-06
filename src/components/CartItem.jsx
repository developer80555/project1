import React from "react";

const CartItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-3 flex-col p-3 hover:shadow-lg transition-all duration-700 cursor-pointer">
      <p className=" text-3xl text-red-600">{icon}</p>
      <p className="upper font-semibold text-xl">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default CartItem;
