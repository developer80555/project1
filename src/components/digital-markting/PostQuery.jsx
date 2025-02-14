import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const PostQuery = () => {
  return (
    <div className="bg-blue-600 py-10 ">
      <div className=" container mx-auto px-4 flex flex-col md:flex-row justify-between gap-6 items-center">
        <div className="flex items-center gap-4">
          <FaThumbsUp className="text-5xl md:text-6xl self-start text-white" />
          <div className="self-end">
            <h2 className=" md:text-2xl font-semibold text-white uppercase mb-2">
              Call Us Today On +91-956-098-2716
            </h2>
            <p className="text-white font-semibold text-sm md:text-[18px] uppercase">
              Or Join Our Free Demo with Skype. Our Skype Id is skilltimers.
            </p>
          </div>
        </div>
        <button className="bg-blue-400 py-3 md:py-2 px-8 md:px-6 text-2xl md:text-xl text-white font-semibold  border border-white mr-6 md:mr-10 self-start">
          Post Query
        </button>
      </div>
    </div>
  );
};

export default PostQuery;
