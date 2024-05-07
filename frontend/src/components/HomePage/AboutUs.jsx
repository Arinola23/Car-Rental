import React from "react";
import redcar from "../../assets/benz.avif"
import {Link } from "react-router-dom"

export const AboutUs = () => {
  return (
    <div className="dark:bg-black bg-slate-100 dark:text-white duration-300
       sm:min-h-[600px] sm:grid:place-items-center ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center pt-24">
            <div data-aos ="fade-down"
            data-aos-duration="1500">
                <img src= {redcar} alt=""
                className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6x_rgba(0,0,0,0.50)]"
                />
            </div>
            <div className="space-y-5 sm:p-16 pb-6">
             <div>
                <h1 data-aos='fade-up'
                className="text 3xl sm:text-4xl font-bold font-serif"> About Us</h1>
                <p data-aos='fade-up'>
                At CarRental, we offer the best smooth ride. We're more than just a car rental service we're your trusted partner in every journey. With years of experience in the industry, we've built a reputation for reliability, affordability, and exceptional customer service.
                </p>
                <div>
                   <a href="#"><button data-aos='fade-up'
                 className=" button-outline">
                     <Link to="/AboutUs">Click</Link>
                </button></a>
                
                </div>
             </div>                  
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
