"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen), setIsServicesOpen(false);
  };
  const excludeRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (
        excludeRef.current &&
        !excludeRef.current.contains(event.target) &&
        isServicesOpen
      ) {
        setTimeout(() => setIsServicesOpen(false), 100);
      }
    };

    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, [isServicesOpen]);

  return (
    <div className="shadow-lg sticky  top-0 right-0 bg-white z-10">
      <nav className="top-0 container mx-auto flex items-center justify-between relative max-md:p-2  px-4 ">
        <Image
          src={assets.logo}
          height={0}
          width={0}
          alt="logo"
          className="w-[150px] md:w-[180px]"
        />

        <ul className="hidden md:flex items-center justify-center gap-2">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li
            className={`relative ${
              isServicesOpen ? "bg-red-500 text-white" : ""
            }`}
          >
            <button onClick={toggleServices} className={`flex items-center`}>
              <p className="btn">Services</p>
              <span className="ml-[3px]">
                {isServicesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>
            {isServicesOpen && (
              <ul
                ref={excludeRef}
                className="absolute top-16 right-0 w-[210px] bg-red-500 text-white px-4 service rounded-b-lg"
              >
                {[
                  { name: "Digital Marketing", link: "/digital-marketing" },
                  { name: "App Development", link: "/" },
                  { name: "Graphics Designing", link: "/" },
                  { name: "Website Development", link: "/" },
                  { name: "Social Media Marketing", link: "/" },
                  { name: "Search Engine Optimization", link: "/" },
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.link}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link href={"/"}>Courses</Link>
          </li>
          <li>
            <Link href={"/"}>Career</Link>
          </li>
          <li>
            <Link href={"/"}>Contact us</Link>
          </li>
          <li>
            <Link href={"/"}>Blog</Link>
          </li>
        </ul>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <Image
              src={assets.close}
              width={10}
              height={10}
              className="w-6 mr-4"
              alt="close"
            />
          ) : (
            <Image
              src={assets.openMenu}
              width={10}
              height={10}
              className="w-6 mr-4"
              alt="close"
            />
          )}
        </div>
      </nav>

      {/* Mobileection  */}
      {isMenuOpen && (
        <ul className="md:hidden fixed flex flex-col items-start w-full text-sm text-gray-600 transition-all duration-700 p-4 shadow-xl bg-white">
          {[
            { name: "Home", link: "/" },
            { name: "About", link: "/" },
          ].map((item, index) => (
            <li key={index} className="py-2 w-full">
              <Link href={item.link} onClick={toggleMenu}>
                {item.name}
              </Link>
            </li>
          ))}

          {/* Services Dropdown - Placed in the Middle */}
          <li className="w-full">
            <button
              onClick={toggleServices}
              className={`flex items-center w-full py-2 ${
                isServicesOpen ? "bg-gray-200 pl-2" : ""
              } `}
            >
              <p className="btn">Services</p>
              <span className="ml-2">
                {isServicesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>
            {isServicesOpen && (
              <ul className="ml-6 mobile-menu">
                {[
                  { name: "Digital Marketing", link: "/digital-marketing" },
                  { name: "App Development", link: "/" },
                  { name: "Graphics Designing", link: "/" },
                  { name: "Website Development", link: "/" },
                  { name: "Social Media Marketing", link: "/" },
                  { name: "Search Engine Optimization", link: "/" },
                ].map((service, index) => (
                  <li key={index}>
                    <Link href={service.link} onClick={toggleMenu}>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Remaining Menu Items */}
          {[
            { name: "Courses", link: "/" },
            { name: "Career", link: "/" },
            { name: "Contact us", link: "/" },
            { name: "Blog", link: "/" },
          ].map((item, index) => (
            <li key={index} className="py-2 w-full">
              <Link href={item.link} onClick={toggleMenu}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
