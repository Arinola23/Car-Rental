import React from "react";
import sm1Car from "../../assets/sm1car.png";
import gwagon from "../../assets/gwagon.avif";
import AboutUs from "./AboutUs";
import Service from "./services";
import Carlist from "./carList";
import Testimony from "../Testimony/testimony";
import AppStore from "../AppStoreBanner/appStore";
import Contact from "./contact";
import Footer from "../footer/footer";

const home = ({ theme }) => {
  return (
    // <div className='dark:bg-black dark:text-white duration-300 relative -z-20'the -z-20 is wasn't allowing button to hover. This is for the img aspect relative -z-10>
    <div
      className="dark:bg-black
    dark:text-white duration-300 "
    >
      <div className="container min-h-[620px] flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? sm1Car : gwagon}
              alt="car"
              className="
                                                                                     max-h-[600px] 
                                                                                     sm:scale-125 
                                                                                     drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p
              data-aos="fade-up"
              // data-aos-delay="600"
              className="text-primary
                        text-2xl font-serif "
            >
              {" "}
              Smooth Ride
            </p>{" "}
            {/* Smooth Transit */}
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-4xl lg:text-7xl font-semibold font-serif"
            >
              Car Rental
            </h1>
            <div data-aos="fade-up" data-aos-delay="1000">
              <p>
                Rent any car of your choice from us, <br /> at a discounted rate
                and enjoy a 20% discount <br /> as a first-time hirer. <br />{" "}
                Regular hirers also receive additional benefits.
              </p>
              <button className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/85 duration-300 mt-6">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Service />
      <Carlist />
      <Testimony />
      <AppStore />
      <Contact />
      <Footer />
    </div>
  );
};

export default home;
