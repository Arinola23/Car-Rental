import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const Contact = () => {
  return (
 <div>
    <div className="h-screen p-[80px]">
    <h1
              className="text-xl sm:text-3xl font-bold sm:text-left text-justify
                 mb-3 gap-3 flex items-center "
            >
             Reach Us
            </h1>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              illo voluptas exercitationem nostrum nobis tempore dignissimos
              quod quis doloremque ullam, blanditiis dolorum repellendus,
              facilis fuga quos atque alias, ratione doloribus!
            </p> */}
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
    </div>
);
};

export default Contact;


