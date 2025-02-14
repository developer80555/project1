import Hero from "@/components/Hero";
import JoinCourses from "@/components/JoinCourses";
import Gmap from "@/components/Map";
import PopularArticles from "@/components/PopularArticles";
import Services from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <JoinCourses />
      <PopularArticles />
      <Gmap />
    </div>
  );
};

export default page;
