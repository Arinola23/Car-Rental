import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

 const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#About",
    },
    {
        title: "Contact",
        link: "/#Contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white mt-14 rounded-t-3xl">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* company's details */}
          <div className="py-8 px-4">
            <h1
              className="text-xl sm:text-3xl font-bold sm:text-left text-justify
                 mb-3 gap-3 flex items-center"
            >
              CarRental
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              illo voluptas exercitationem nostrum nobis tempore dignissimos
              quod quis doloremque ullam, blanditiis dolorum repellendus,
              facilis fuga quos atque alias, ratione doloribus!
            </p>
            <br />
            <div className="flex items-center gap-3 py-4">
              <FaLocationArrow />
              <p>Lagos, Nigeria</p>
            </div>
            <div className="flex items-center gap-3 py-4">
              <FaMobileAlt />
              <p>+234902466626</p>
            </div>
            {/*social handles*/}
            <div className="flex item-center gap-3 mt-6 ">
              <a href="#">
                <FaInstagram
                  className="text-3xl
                                    hover:text-primary duration-300 mr-4"
                />
              </a>
              <a href="#">
                <FaFacebook
                  className="text-3xl
                                    hover:text-primary duration-300 mr-4"
                />
              </a>
              <a href="#">
                <FaLinkedin
                  className="text-3xl
                                    hover:text-primary duration-300 mr-4"
                />
              </a>
            </div>
          </div>
          {/* NavLinks */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
             {/* first cols */}
            <div className="py-10 px-4">
              <h1 className="text-xl font-bold sm:text-left text-justify mb:3">
                Important links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((data) => {
                  return (
                    <li
                      key={data.title}
                      className="cursor-pointer hover:text-primary duration-300"
                    >
                      <span className="mr-2 ">&#11162;</span>
                      <a href={data.link}>{data.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
             {/* second cols */}
             <div className="py-10 px-4">
              <h1 className="text-xl font-bold sm:text-left text-justify mb:3">
                Important links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((data) => {
                  return (
                    <li
                      key={data.title}
                      className="cursor-pointer hover:text-primary duration-300"
                    >
                      <span className="mr-2 ">&#11162;</span>
                      <a href={data.link}>{data.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
             {/* third cols */}
             <div className="py-10 px-4">
              <h1 className="text-xl font-bold sm:text-left text-justify mb:3">
                Important links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((data) => {
                  return (
                    <li
                      key={data.title}
                      className="cursor-pointer hover:text-primary duration-300"
                    >
                      <span className="mr-2 ">&#11162;</span>
                      <a href={data.link}>{data.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
