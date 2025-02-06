import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import MarketingCards from "./MarketingCards";
import { FaHandPointRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10 md:flex-row ">
      <div className="w-full md:w-[65%] shadow-xl">
        <Image
          src={assets.digital_marketing}
          alt="digital marketing"
          width={0}
          height={0}
          className="w-full"
        />
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">
            Best Digital Marketing Company in Bareilly
          </h1>
          <p className="mb-2">
            Are you finding the right digital marketing agency in Bareilly to
            increase brand awareness, promote your business, or generate leads
            for your services and products online? If yes, Digi Friction is the
            most suitable digital marketing company in Bareilly.
          </p>
          <p className="mb-2">
            We help small and large businesses boost organic traffic, increase
            brand awareness, and generate potential leads. We also help them
            promote their products and services with the help of various digital
            utilities such as search engines and social media networks.
          </p>
          <p className="mb-2">
            We have the industry's best digital marketers, social media
            marketers, and search engine optimization folks. They are experts in
            optimizing click-through rate, conversion optimization, and
            analyzing the needs to optimize a business.
          </p>
          <p className="mb-2">
            They also have the best predications to design a successful
            marketing strategy for a business. We have served more than 150
            small and large businesses in getting recognition among their
            targeted audience. It's why we are the best digital marketing
            company in Bareilly.
          </p>
          <p className="mb-2">
            If you want to grow organic traffic to your business website, we
            will help you boost your business among search engines and Google's
            local places and services. We have proven our SEO and local business
            optimization skills by placing our customers in the top 3 results.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Search Engine Optimization
          </h2>
          <p className="mb-2">
            Social media marketing (SMM) is the process of promoting a business
            on social media platforms. It is a completely paid service. To
            promote a business on social media, we need to analyze the audience,
            interest, age group, and targeted area.
          </p>
          <p className="mb-2">
            Want to promote your business on social media platforms? If yes,
            Digi Friction is the best social media marketing company in Bareilly
            to help you design the right social media marketing strategy for
            your business.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Facebook Marketing
          </h2>
          <p className="mb-2">
            Facebook marketing is the art of creating content and promoting it
            among the targeted audience to increase brand awareness and generate
            leads. Facebook is the most popular social media website, so it's
            the best place to target the interested audience online.
          </p>
          <p className="mb-2">
            Are you looking for the best advertising agency in Bareilly to
            manage your Facebook marketing campaign? If yes, contact us. We will
            help you create informative, creative images, content and distribute
            it to the targeted audience in your service area.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">
            YouTube Marketing
          </h2>
          <p className="mb-2">
            The art of creating video content and promoting it on YouTube is
            YouTube marketing. YouTube is the #1 video search platform. Everyone
            is using YouTube to search and watch videos online. YouTube is the
            right platform to advertise your content to the audience interested
            in your products and services.
          </p>
          <p className="mb-2">
            Are you looking for the best digital marketing company in Bareilly
            to help you manage your YouTube marketing campaign? Digi Friction
            will help you achieve your goal. We have industries best YouTube
            marketing executives with vast experience in content creation and
            promotion.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Content Writing</h2>
          <p className="mb-2">
            Content writing is the art of creating unique and quality content
            for websites, articles, and blogs. Content writing plays a huge role
            in the overall online marketing strategy. High-quality content plays
            a huge role in search engine optimization.
          </p>
          <p className="mb-2">
            If you need a content writer to outsource the content for your
            website, blog, or articles, Digi Friction is the best content
            writing company in Bareilly. We know what type of content is
            suitable for users and search engines
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Search Engine Marketing
          </h2>
          <p className="mb-2">
            Search engine marketing is the art of promoting a website among
            different search engines to generate leads and increase awareness of
            the business. Like social media marketing, it's also a paid service.
            You have to pay an amount to search engines on every click. It's
            also known as pay-per-click.
          </p>
          <p className="mb-2">
            If you want to promote your business via search engine marketing or
            pay-per-click, Digi Friction is the best search engine marketing
            company in Bareilly. We have a lot of experience to bring the most
            suitable audience for your business.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Local Business Optimization
          </h2>
          <p className="mb-2">
            Local business optimization is the art of optimizing the small
            business in their local area or city. If you are running a
            location-based business or service, this service can help you find
            potential customers organically. It's cost-effective and affordable
            to adopt for a local business.
          </p>
          <p className="mb-2">
            Want to grab a local business optimization service? Digi Friction is
            the best advertising agency in Bareilly to fulfill your marketing
            needs. We have an expert team of marketers who have optimized many
            local businesses in a short period.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">
            What is Digital Marketing?
          </h2>
          <p className="mb-2">
            Digital marketing is the art of promoting a brand or business
            through the internet. It's the modern way of marketing. It's easy to
            target the audience, increase the reach and awareness, and generate
            leads and orders from digital utilities.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Why Choose Digital Marketing?
          </h2>
          <p className="mb-2">
            Everyone is using smartphones, video streaming sites, and social
            media platforms. So these platforms are the best way to promote your
            business and increase awareness.
          </p>
          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Why Choose Digi Friction for Digital Marketing?
          </h2>
          <p className="mb-2">
            As you know, everyone is using smartphones, video streaming sites,
            and social media platforms. So these platforms are the best way to
            promote your business and increase awareness of your business. It's
            time to choose digital marketing instead of traditional marketing.
            It's cost-effective and affordable..
          </p>

          <ul className="space-y-2 mt-4">
            <li className="flex items-center gap-2">
              <FaHandPointRight className="text-red-500" /> We help our
              customers fulfill their marketing goals.
            </li>
            <li className="flex items-center gap-2">
              <FaHandPointRight className="text-red-500" /> We have an eye over
              all the online advertising trends.
            </li>
            <li className="flex items-center gap-2">
              <FaHandPointRight className="text-red-500" /> We offer various
              advertising services at an affordable cost.
            </li>
            <li className="flex items-center gap-2">
              <FaHandPointRight className="text-red-500" /> Digi Friction is the
              fastest-growing digital marketing agency in Bareilly.
            </li>
            <li className="flex items-center gap-2">
              <FaHandPointRight className="text-red-500" /> We have proven our
              expertise by helping thousands of businesses and brands.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-[35%]">
        <MarketingCards />
      </div>
    </div>
  );
};

export default Hero;
