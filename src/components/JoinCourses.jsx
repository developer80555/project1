import React from "react";
import CartItem from "./CartItem";
import { choose_course } from "@/assets/assets";

const JoinCourses = () => {
  return (
    <div>
      <div className=" container p-2 mx-auto flex flex-col gap-4 mb-10 md:mb-14">
        <h2 className="text-2xl md:text-3xl text-red-600 font-semibold">
          Why choose Digi Friction?
        </h2>
        <p>
          Digi Friction is the leading website development and online
          advertising agency in Bareilly. Here are some reasons to choose our
          services for online success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
          {choose_course.map((item, index) => (
            <CartItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinCourses;
