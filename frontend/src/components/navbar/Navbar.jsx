import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "/#"
  },
  {
    id: "2",
    name: "CARS",
    link: "/#cars"
  },
  {
    id: "3",
    name: "ABOUT US",
    link: "/#About"
  },
  {
    id: "4",
    name: "BOOKINGS",
    link: "/#bookings"
  },
]
const reg = [
  {
  id: "1",
  name: "SIGN-UP",
  link: "/#sign-up"
},
{
  id: "2",
  name: "LOG-IN",
  link: "/#log-in"
}, 
]
  

const Navbar = ({theme, setTheme}) => {
  return (
    //this is for transitioning into dark mode 
    <nav className="shadow-md  bg-white dark:bg-dark dark:text-white duration-300">
      <div className="container">
        <div className="flex justify-between items-center user-select-none">
          <div>
            <h1 className="text-3xl font-bold font-serif text-primary">CarRental</h1>
          </div>
          <div  className="mr-[-5rem]">
            <ul className="flex items-center gap-7">
              {NavLinks.map((data)=> (
              <li key = {data.id} className ="py-4">
                <a className="py-2
                              hover:border-b-2 
                              hover:text-primary
                              hover:border-primary
                              transition-colors duration-500
                              text-md" href={data.link}>
                  {data.name}
                </a>
              </li>
              ))} 
             
                {reg.map((data) => (
                  <li key = {data.id} className="py-4">
                    <a className="py-2
                    hover:border-b-2 
                    hover:text-primary
                    hover:border-primary
                    transition-colors duration-500
                      text-lg font-md font-bold" href ={data.link}>
                    {data.name}
                    </a>
                 
                  </li>
                ))}
          
            </ul>
          </div>
           <div>
            {
              theme === "dark"? (<BiSolidSun
                onClick={ () => setTheme ("light")}
                className="text-xl"
                />):(<BiSolidMoon
                  onClick={()=> setTheme ("dark")}
                  className="text-xl"
                  />)
            }
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
