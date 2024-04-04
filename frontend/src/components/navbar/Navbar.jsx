import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import {Link} from "react-router-dom"

 export const NavLinks = [
  {
    id: "1",
    name: "Home",
    Link: "/",
        // Link: `${<Link to ="/#"/>}`

  },
  {
    id: "2",
    name: "Cars",
    Link: "/Cars",

    // Link: `${<Link to ="/#Cars"/>}`

  },
  {
    id: "3",
    name: "About Us",
    Link: '/AboutUs',
    // Link: `${<Link to ="/#AboutUs"/>}`

  },
  {
    id: "3",
    name: "Contact Us",
    Link: '/ContactUs',
    // Link: `${<Link to ="/#AboutUs"/>}`

  },
  {
    id: "4",
    name: "Bookings",
    Link: "/bookings",
  },
];
export const reg = [
  {
    id: "1",
    name: "SignUp",
    Link: "/signUp",
  },
  {
    id: "2",
    name: "LogIn",
    Link: "/logIn",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    //this is for transitioning into dark mode
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40">
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-serif text-primary">
              CarRental
            </h1>
          </div>
          <div className="mr-[-5rem] hidden md:block">
                <ul className="flex items-center gap-8">
                      {NavLinks.map((data) => (
                          <li key={data.id} className="py-4">
                          <Link to={data.Link} className="
                                            py-2 hover:border-b-2
                                             hover:text-primary
                                             hover:border-primary 
                                             transition-colors duration-500 text-md">
                            {data.name}
                          </Link>
                        </li>
                          // <li key={data.id} className="py-4 <a className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500  text-md"
                          //     href={data.Link}>{data.name}</a> </li>
                    ))}
                      {reg.map((data)=>(
                        <li key={data.id} className="py-4">
                            <Link to={data.Link} className="
                                            hover:text-primary
                                            hover:border-primary
                                             transition-colors duration-500
                                            text-lg font-md font-bold">
                            {data.name}
                          </Link>
                        </li>
                        // <li key={data.id} className="py-4 <a className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500  text-md"
                          //     href={data.Link}>{data.name}</a> </li>
                    ))}
              </ul>
          </div>

          {/* div for both darkmode and menu bar */}
          <div className="flex gap-4 item-center">
            {/* Dark mode icons */}
            <div>
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-xl"
                />
              )}
            </div>
            <div className="md:hidden">
              {/* mobile Hamburger menu */}
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  size={30}
                  className="cursor-pointer transition-all"
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  size={30}
                  className="cursor-pointer transition-all"
                />
              )}
            </div>
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
