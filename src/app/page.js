import ChatWidget from "@/components/ChatWidget";
import Hero from "@/components/Hero";
import JoinCourses from "@/components/JoinCourses";
import Gmap from "@/components/Map";
import Map from "@/components/Map";
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
      <ChatWidget />
    </div>
  );
};

export default page;
