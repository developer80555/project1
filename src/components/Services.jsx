import { Courses_we_offer, services_we_offer } from "@/assets/assets";
import React from "react";
import CartItem from "./CartItem";
import Heading from "./Heading";

const Services = () => {
  return (
    <div>
      <div className=" container mx-auto flex flex-col gap-4 mb-10 p-2 md:mb-14">
        <h2 className="text-2xl md:text-3xl text-red-600 font-semibold">
          Services We offer{" "}
        </h2>
        <p>
          Digi Friction is the fastest growing advertising agency in Bareilly.
          We offer web designing, graphics designing, website development,
          mobile app development, outdoor marketing, social media marketing, and
          digital marketing services to promote a business or brand online. Some
          of the most popular website development and advertising services are
          listed below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 ">
          {services_we_offer.map((item, index) => (
            <CartItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className="bg-gray-100">
        <div className=" container mx-auto flex flex-col gap-4 p-2 py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl text-red-600 font-semibold">
            Courses We Offer
          </h2>
          <p>
            Digi Friction is a premium IT institute to enroll in a job-oriented
            web designing, graphic design, and digital marketing course in
            Bareilly. We help IT & marketing students build their careers in one
            of the most demanding fields of the modern era. Some most popular
            designing and marketing courses are listed below.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 ">
            {Courses_we_offer.map((item, index) => (
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
      <Heading
        heading={"Want to join a Course"}
        btn1={"Contact Us"}
        btn2={"Make call"}
      />
    </div>
  );
};

export default Services;
