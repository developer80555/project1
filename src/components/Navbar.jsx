"use client";
import { assets, menu } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen), setIsCoursesOpen(false);
  };
  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen), setIsServicesOpen(false);
  };

  return (
    <div className="shadow-lg sticky  top-0 right-0 bg-white z-10">
      <nav className="top-0 container mx-auto flex items-center justify-between relative p-2  px-4 ">
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
              <span className="ml-2">{isServicesOpen ? "▲" : "▼"}</span>
            </button>
            {isServicesOpen && (
              <ul className="absolute top-14 right-0 w-[180px] bg-red-500  text-white p-4">
                <li className="w-full">
                  <Link href={"/services/service1"}>Service 1 Govind ji</Link>
                </li>
                <li>
                  <Link href={"/services/service2"}>Service 2</Link>
                </li>
                <li>
                  <Link href={"/services/service3"}>Service 3</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className={`relative ${
              isCoursesOpen ? "bg-red-500 text-white" : ""
            }`}
          >
            <button onClick={toggleCourses} className="flex items-center">
              <p className="btn">Courses</p>
              <span className="ml-2">{isCoursesOpen ? "▲" : "▼"}</span>
            </button>
            {isCoursesOpen && (
              <ul className=" absolute top-14 right-0 w-[180px] bg-red-500  text-white p-4">
                <li>
                  <Link href={"/courses/course1"}>Course 1</Link>
                </li>
                <li>
                  <Link href={"/courses/course2"}>Course 2</Link>
                </li>
                <li>
                  <Link href={"/courses/course3"}>Course 3</Link>
                </li>
              </ul>
            )}
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

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
      {isMenuOpen ? (
        <ul className="md:hidden fixed flex items-start justify-start flex-col w-full text-sm text-gray-600 transition-all duration-700 p-4 shadow-xl bg-white">
          <li className="py-2">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="py-2">
            <Link href={"/"}>About</Link>
          </li>
          <li className="w-full">
            <button
              onClick={toggleServices}
              className={`flex items-center w-full py-2 ${
                isServicesOpen ? "bg-gray-200" : ""
              } `}
            >
              <p className="btn">Services</p>
              <span className="ml-2 ">{isServicesOpen ? "▲" : "▼"}</span>
            </button>
            {isServicesOpen && (
              <ul className="ml-6">
                <li className="py-2 hover:text-black">
                  <Link href={"/services/service1"}>Service 1 Govind ji</Link>
                </li>
                <li className="py-2 hover:text-black">
                  <Link href={"/services/service2"}>Service 2</Link>
                </li>
                <li className="py-2 hover:text-black">
                  <Link href={"/services/service3"}>Service 3</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="py-2 w-full">
            <button
              onClick={toggleCourses}
              className={`flex items-center w-full py-2 ${
                isCoursesOpen ? "bg-gray-200" : ""
              } `}
            >
              <p className="btn">Courses</p>
              <span className="ml-2">{isCoursesOpen ? "▲" : "▼"}</span>
            </button>
            {isCoursesOpen && (
              <ul className="ml-6">
                <li className="py-2 hover:text-black">
                  <Link href={"/courses/course1"}>Course 1</Link>
                </li>
                <li className="py-2 hover:text-black">
                  <Link href={"/courses/course2"}>Course 2</Link>
                </li>
                <li className="py-2 hover:text-black">
                  <Link href={"/courses/course3"}>Course 3</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="py-2">
            <Link href={"/"}>Career</Link>
          </li>
          <li className="py-2">
            <Link href={"/"}>Contact us</Link>
          </li>
          <li className="py-2">
            <Link href={"/"}>Blog</Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
