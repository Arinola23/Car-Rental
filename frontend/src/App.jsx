import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LandInPage from "./components/HomePage/LandInPage";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/RoutedPages/About";
import Carlists from "./components/RoutedPages/CarLists";
import Contact from "./components/RoutedPages/Contact";
import Bookings from "./components/RoutedPages/Bookings";
import LogIn from "./components/RoutedPages/logIn";
import SignUp from "./components/RoutedPages/signUp";
import ViewPage from "./components/RoutedPages/viewPage";
import Delete from "./components/RoutedPages/Delete";
import Edit from "./components/RoutedPages/Edit";
import { SnackbarProvider } from "notistack";

const App = () => {
  //Dark Mode Feature
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  //AOS initialization
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="bg-white dark:bg-black dark:text-white">
        <SnackbarProvider maxSnack={2}>
            <Router>
              <Navbar theme={theme} setTheme={setTheme} />
              <Routes>
                <Route path="/" element={<LandInPage theme={theme} />}/>
                <Route path="/Cars" element={<Carlists/>}/>
                <Route path="/AboutUs" element={<About/>}/>
                <Route path="/ContactUs" element={<Contact/>}/>
                <Route path="/Bookings" element={<Bookings/>}/>
                <Route path="/logIn" element={<LogIn/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path='/bookings/view/:id' element={<ViewPage/>}/>
                <Route path="/bookings/delete/:id" element={<Delete/>}/>
                <Route path="/bookings/edit/:id" element={<Edit/>}/> 
              </Routes>
            </Router>
         </SnackbarProvider>
       
      </div>
    </div>
  );
};
export default App;
/* <Routes>
          <Route path="/" element ={<Home/>}/>
          {/* <Route path="/AboutUs" element ={<About/>}/> */
/* <Route path="/ContactUs" element ={<Contact/>}/>
          <Route path="/CarList" element ={<Carlist/>}/>
          <Route path="/Bookings" element ={<Bookings/>}/>
          <Route path="/SignUp" element ={<SignUp/>}/>
          <Route path="/LogIn" element ={<LogIn/>}/>

          <Router>
            <Routes>
                <Route exact path="/" element = {<Home theme={theme}/>}/>
                <Route path="/AboutUs" element ={<AboutUs/>}/>
                <Route path="/services" element ={<Service/>}/>
                <Route path="/cars" element ={<Carlist/>}/>
              </Routes>
          </Router>

 */
