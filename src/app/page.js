import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JoinCourses from "@/components/JoinCourses";
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
      <Footer />
    </div>
  );
};

export default page;
