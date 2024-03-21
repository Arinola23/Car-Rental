import React from 'react'
import {useState, useEffect} from 'react'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/HomePage'
import AOS from "aos"
import "aos/dist/aos.css"
import AboutUs from './components/Pages/AboutUs'
import Service from './components/Pages/services'

const App = () => {
  //Dark Mode Feature
  const [theme,setTheme] = useState (
    localStorage.getItem('theme')? localStorage.getItem('theme'): "light"
  )

const element = document.documentElement
useEffect(() => {
  if(theme === "dark"){
    element.classList.add("dark")
    localStorage.setItem('theme', "dark")
  } else {
    element.classList.remove("dark")
    localStorage.setItem('theme', "light")
  }
}, [theme])

//AOS initialization
useEffect(()=>{
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  AOS.refresh()
},[])

  return (
    <div>
      <Navbar  
      theme={theme} setTheme = {setTheme}/>
      <Home theme = {theme}/>
      <AboutUs/>
      <Service/>
    </div>
  )
}

export default App
