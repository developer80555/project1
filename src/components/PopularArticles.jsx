import React from "react";
import { popular_articles } from "@/assets/assets";
import CartPopular from "./CartPopular";

const PopularArticles = () => {
  return (
    <div className="bg-gray-100">
      <div className=" container p-2 mx-auto flex flex-col gap-4 py-8 md:py-10 pb-2s md:pb-5 ">
        <h2 className="text-2xl md:text-3xl text-red-600 font-semibold">
          Popular Articles
        </h2>
        <p>
          Read the latest articles and blog posts on website development,
          graphics designing, user-interface designing, search engine
          optimization, and digital marketing techniques. Follow our blog to
          enhance your online marketing and user-interface designing skills
          quickly.
        </p>

        <div className="flex gap-4 overflow-y-auto py-10 px-2">
          {popular_articles.map((item, index) => (
            <CartPopular
              key={index}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularArticles;
