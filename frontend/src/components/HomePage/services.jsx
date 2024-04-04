import React from 'react'
import {FaCameraRetro} from "react-icons/fa"
import {GiNotebook} from "react-icons/gi"
import {SlNote} from "react-icons/sl"


const skillsData = [
    {  
        id: "1",
        name: "Best Price",
        icon: (
            <FaCameraRetro className="text-6xl text-primary group-hover:text-black duration-300 mb-8"/>
        ),
        link: "#",
        description: 'We offer the best price and guess what, you get to enjoy discounts',
        aosDelay: "0",   
    }, 
    {
        id: "2",
        name: "Fast and Safe",
        icon: (
            <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300 mb-8"/>
        ),
        link: "#",
        description: 'Our cars are very reliable and safe. It gets tested before every ride by an auto-mobile engineer',
        aosDelay: "500",   
    },  
    {
        id: "3",
        name: "Expirence Drivers",
        icon: (
            <SlNote className="text-5xl text-primary group-hover:text-black duration-200 mb-8"/>
        ),
        link: "#",
        description: 'You also get to meet experienced drivers, if you just want to save yourself the stress of driving.',
        aosDelay: "1000",   
    },   
]

const services = () => {
  return (
    <div className='py-14 dark:bg-black 
    dark:text-white sm:min-h[600px] sm:grid
    sm:place-items-center'>
       <div className="container">
         <div className="pb-12">
            <h1
              className='text-3xl font-semibold
              text-center font-serif sm:text-4xl'>Why Choose Us</h1>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 '>
            {skillsData.map((skill) => (
                    <div key={skill.id}
                        data-aos=" fade-up"
                        data-aos-delay= {skill.aosDelay}
                        className='card-text-center group
                        space-y-3 sm:space-y-6 p-4 sm:py-8 bg-dark hover:bg-primary
                        duration-100 text-white hover:text-black rounded-lg '
                       >
                        <div
                        className='grid place-items-center'>
                          {skill.icon}  
                        </div>
                        <h1>{skill.name}</h1>
                        <p>{skill.description}</p>
                        <a href= {skill.link} className='text-red-500 bg-dark hover:text-white'>Learn More</a>
                    </div>
                ))}
         </div>
       </div>
    </div>
  )
}

export default services