import Link from "next/link";
import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import Map from "../Map";

const MarketingCards = () => {
  return (
    <div className="flex gap-6 flex-col">
      <div className="shadow-xl rounded-lg  overflow-hidden">
        <h2 className="p-4 bg-gray-200 font-semibold text-2xl">Our Services</h2>
        <ul className="py-2">
          {[
            "Digital Marketing",
            "App Development",
            "Graphics Designing",
            "Website Development",
            "Social Media Marketing",
            "Search Engine Optimization",
          ].map((service, index) => (
            <li
              key={index}
              className="flex items-center gap-2 px-4 py-2 transition-transform duration-300 group hover:translate-x-3"
            >
              <FaHandPointRight className="text-red-500 group-hover:scale-110 transition-transform duration-300" />
              <Link href={"/"}>{service}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Courses  Section */}
      <div className="shadow-xl rounded-lg  overflow-hidden">
        <h2 className="p-4 bg-gray-200 font-semibold text-2xl">Our Courses</h2>
        <ul className="py-2">
          {["Web Designing", "Digital Marketing", "Graphics Designing"].map(
            (service, index) => (
              <li
                key={index}
                className="flex items-center gap-2 px-4 py-2 transition-transform duration-300 group hover:translate-x-3"
              >
                <FaHandPointRight className="text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <Link href={"/"}>{service}</Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Contact us */}
      <div className="shadow-xl rounded-lg  overflow-hidden">
        <h2 className="p-4 bg-gray-200 font-semibold text-2xl">Contact us</h2>
        <ul className="py-2">
          {[
            "WhatsApp",
            "View on Map",
            "+91 8954088491",
            "12 , Civili Lines , Bareily, 243001",
          ].map((service, index) => (
            <li
              key={index}
              className="flex items-center gap-2 px-4 py-2 transition-transform duration-300 group hover:translate-x-3"
            >
              <FaHandPointRight className="text-red-500 group-hover:scale-110 transition-transform duration-300" />
              <Link href={"/"}>{service}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Map  */}
      <Map />
    </div>
  );
};

export default MarketingCards;
