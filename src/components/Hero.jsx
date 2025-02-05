import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Heading from "./Heading";

const Hero = () => {
  console.log(assets.logo);
  return (
    <div>
      <Image
        src={assets.banner}
        width={0}
        height={0}
        className="w-full hidden md:flex"
        alt=""
      />
      <Image
        src={assets.banner_min}
        width={0}
        height={0}
        className="w-full flex md:hidden"
        alt=""
      />
      <div className="container mx-auto my-6 mdmy-12 flex flex-col gap-3 p-3">
        <h1 className="text-red-600 text-2xl md:text-3xl">
          Website Development and Digital Marketing Company in Bareilly
        </h1>
        <p className="max-md:text-sm">
          Digi Friction is the most trusted advertising agency in Bareilly that
          deals in web designing, website development, app development, graphics
          designing, digital marketing, and social media marketing services. We
          offer the most effective advertising services to build a small
          business brand. We have proven our skills in web designing, web
          development, graphics designing, lead generation, and brand awareness
          over various digital platforms. We provide a comprehensive range of
          website development, graphics designing, and online advertising
          services.
        </p>
        <p className="max-md:text-sm">
          Digi Friction is the most trusted advertising agency in Bareilly that
          deals in web designing, website development, app development, graphics
          designing, digital marketing, and social media marketing services. We
          offer the most effective advertising services to build a small
          business brand. We have proven our skills in web designing, web
          development, graphics designing, lead generation, and brand awareness
          over various digital platforms. We provide a comprehensive range of
          website development, graphics designing, and online advertising
          services.
        </p>
      </div>
      <Heading
        heading={"Want to Promote Your Business?"}
        btn1={"Contact Us"}
        btn2={"Make call"}
      />
    </div>
  );
};

export default Hero;
