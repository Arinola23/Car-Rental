import React from "react";
import { FaUserCircle } from "react-icons/fa";
import {NavLinks} from "../Navbar/navbar";
import {reg} from "../Navbar/navbar";
import {Link} from "react-router-dom"

// const NavLinks = [
//   {
//     id: "1",
//     name: "Home",
//     link: "/#",
//   },
//   {
//     id: "2",
//     name: "Cars",
//     link: "/#cars",
//   },
//   {
//     id: "3",
//     name: "About Us",
//     link: "/#About",
//   },
//   {
//     id: "4",
//     name: "Bookings",
//     link: "/#bookings",
//   },
// ];
//  const reg = [
//   {
//     id: "1",
//     name: "SignUp",
//     link: "/#sign-up",
//   },
//   {
//     id: "2",
//     name: "LogIn",
//     link: "/#log-in",
//   },
// ];

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "-left-full"} fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[60%]
      md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}
    >
      <div className="card">
        <div
          className="flex items-center justify-start
                  gap-3"
        >
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1>Premium user</h1>
          </div>
        </div>
        {/* links */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavLinks.map((data) => {
              return (
                <div key={data.name}>
                  <Link to={data.Link}><li className=" hover:text-primary
                                             hover:border-primary
                                              transition-colors duration-500
                                              text-lg font-md">{data.name}</li></Link>
                </div>
            )})}
                {reg.map((data) => {
              return (
                <div key={data.name}>
                  <Link to={data.Link}><li  className=" hover:text-primary
                                            hover:border-primary
                                             transition-colors duration-500
                                            text-lg font-md font-bold">{data.name}</li></Link>
                </div>
                )})}

          </ul>
        </nav>
      </div>
      {/* footer */}
      <div>
        <h1>
          made with ❤️ by{" "}
          <a
            className="font-bold"
            href="https://github.com/Arinola23/Car-Rental"
          >
            {" "}
            Arinola
          </a>{" "}
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
