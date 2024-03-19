import React from 'react'
import {useState, useEffect} from 'react'

import Navbar from './components/navbar/Navbar'
import Home from './components/pages/homePage'

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

  return (
    <div>
      <Navbar  
      theme={theme} setTheme = {setTheme}/>
      <Home theme = {theme}/>
    </div>
  )
}

export default App
