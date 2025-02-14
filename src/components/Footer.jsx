import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-500 pt-6  text-white">
      <div className=" container mx-auto pb-4 grid grid-cols-2 md:grid-cols-3 items-center justify-center ">
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
        <div className="p-3 md:p-4 flex flex-col gap-2 max-md:ml-auto">
          <p className="font-semibold max-sm:text-sm">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"/"}>Twiter</Link>
            </li>
            <li>
              <Link href={"/"}>Linkedin</Link>
            </li>
            <li>
              <Link href={"/"}>Facebook</Link>
            </li>
            <li>
              <Link href={"/"}>Instagram</Link>
            </li>
          </ul>
        </div>
        <div className="p-3 md:p-4 flex flex-col gap-2">
          <p className="font-semibold max-sm:text-sm">CONTACT US</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"/"}>+91 895088691</Link>
            </li>
            <li>
              <Link href={"/"}>Chat on WhatsApp</Link>
            </li>
            <li>
              <Link href={"/"}>Get Directions on Map</Link>
            </li>
            <li>
              <Link href={"/"}>
                12, Civil Lines, Bareilly, Uttar Pradesh, 243001
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-red-700 py-4 md:py-6">
        <div className=" container mx-auto max-md:text-center max-md:px-2 font-semibold">
          <p>© Digi Friction. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
