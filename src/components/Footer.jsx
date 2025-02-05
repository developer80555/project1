import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-500 pt-10  text-white">
      <div className=" container mx-auto pb-8 grid grid-cols-2 md:grid-cols-3 items-center justify-center ">
        <div className="p-3 md:p-4 flex flex-col gap-2">
          <p className="font-semibold max-sm:text-sm">IMPORTENT LINKS</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"/"}>Career</Link>
            </li>
            <li>
              <Link href={"/"}>Service</Link>
            </li>
            <li>
              <Link href={"/"}>Courses</Link>
            </li>
            <li>
              <Link href={"/"}>Crivacy & Policy</Link>
            </li>
          </ul>
        </div>
        <div className="p-3 md:p-4 flex flex-col gap-2">
          <p className="font-semibold max-sm:text-sm">IMPORTENT LINKS</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"/"}>Career</Link>
            </li>
            <li>
              <Link href={"/"}>Service</Link>
            </li>
            <li>
              <Link href={"/"}>Courses</Link>
            </li>
            <li>
              <Link href={"/"}>Crivacy & Policy</Link>
            </li>
          </ul>
        </div>
        <div className="p-3 md:p-4 flex flex-col gap-2">
          <p className="font-semibold max-sm:text-sm">IMPORTENT LINKS</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"/"}>Career</Link>
            </li>
            <li>
              <Link href={"/"}>Service</Link>
            </li>
            <li>
              <Link href={"/"}>Courses</Link>
            </li>
            <li>
              <Link href={"/"}>Crivacy & Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-red-700 py-5 md:py-8">
        <div className=" container mx-auto">
          <p>@ Digi Friction. All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
