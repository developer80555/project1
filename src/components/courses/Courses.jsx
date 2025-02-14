"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Courses() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message));
  }, []);

  console.log(data.length);
  return (
    <div className="pb-4">
      <div className="relative w-full h-[200px]">
        <Image
          src={assets.banner}
          alt="Course Banner"
          fill
          objectFit="cover"
          className="-z-10"
        />
        <div className=" absolute bottom-0 right-0 top-0 left-0 bg-black/40"></div>
        <div className="absolute inset-0 flex  items-center container mx-auto p-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Best Digital Marketing Course
            </h2>
            <p className="text-white  text-[18px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
              enim!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-xl ">
        <p className="flex items-center gap-1 text-gray-500 container mx-auto p-2 px-4 text-[18px] font-semibold">
          Home |{" "}
          <span className="text-sm text-red-500">
            Digital Marketing Training Course
          </span>
        </p>
      </div>
      {/* Content of Courses  */}
      <div className="p-4 mt-8 container mx-auto">
        {error && <p className="text-red-500">Error: {error}</p>}
        {data.length === 0 && !error ? (
          <p>Loading...</p>
        ) : (
          data.map((section, index) => (
            <div key={index} className="mb-2">
              <h2 className="text-xl font-bold mb-2">{section.heading}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {(section.topics ?? []).map((column, colIndex) => (
                  <ul key={colIndex} className="space-y-2">
                    {(column ?? []).map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="text-sm text-gray-500 flex items-start gap-2 font-semibold"
                      >
                        <p className="mt-1">
                          <FaArrowRight className="text-blue-600 text-[10px]" />
                        </p>
                        <p>{topic}</p>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>

              {index !== data.length - 1 && (
                <div className="relative flex items-center mb-2 max-md:py-6">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border-[6px]">
                    <MdKeyboardArrowDown className=" text-2xl text-gray-600" />
                  </div>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
