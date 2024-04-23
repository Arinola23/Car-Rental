import React from 'react'
import car1 from "../../assets/car1.webp"
import car2 from "../../assets/car2.webp"
import car3 from "../../assets/redcar.png"
import car4 from "../../assets/orangecar.jpg"
import {Link} from "react-router-dom"

const carlistData = [
    {  
        name: "SUV",
        rentalPrice: "$60/day",
        image: car1,
        aosDelay:"0",
        km: "16km",

    },
    {   
        name: "BMW UX",
        rentalPrice: "$50/day",
        image: car2,
        aosDelay:"300",
        km: "14km",

    },
    {   
        name: "Nissan Red",
        rentalPrice: "$35/day",
        image: car3,
        aosDelay:"600",
        km: "12km",
    },
    {   
        id: '4',
        name: "Nissan",
        rentalPrice: "$40/day",
        image: car4,
        aosDelay:"800",
        km:"16km"
    }
]

const carLists = () => {
  return (
    <div className='pb-14 pt-12 bg-white dark:bg-dark dark:text-white'>
        <div className='container'>
            {/* carlist head */}
            <h1 className='text-3xl sm:text-4xl
            font-semibold font-serif mb-3'>Cars Available for rent</h1>
            <p data-aos="fade-up" className='text-md pb-10'>Choose any car of your choice. 
            <br /> The cars below are available for rent.</p>

              {/* carlist card */}
           <div>
                <div className='grid grid-cols-2
                sm:grid-cols-2 md:grid-cols-3 gap-16'>
                    {
                      carlistData.map((car) => {
                        return (
                            <div
                             key={car.name}
                            data-aos = "fade-up"
                            data-aos-delay={car.aosDelay}
                            className='space-y-4 border-2 border-gray-300 hover:border-primary
                           mt-8 p-4  rounded-xl relative group' 
                            >
                            <div className='w-full-h-[120px]'>
                                <img className='w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16
                                duration-700' 
                                src={car.image} alt="" />
                            </div>
                            <div className='space-y-2'>
                            <h1 className='text-primary font-semibold'>{car.name}</h1>

                            </div>
                            <div className='flex justify-between items-center text-xl font-semibold'>
                                <p>{car.rentalPrice}</p>
                                <a href="#">Details</a>
                            </div >
                            <p className="text-xl font-semibold ">{car.km}</p>
                        </div>          
                        )})}             
                 </div>   
                 <div className='grid place-content-center mt-8'>
                    <button data-aos= "fade-up"
                    className='button-outline'>
                        <Link to="/Bookings">Click to Choose</Link>
                    </button>
                </div>
            </div>
              {/* end of cardlist */}   
                <div className='grid place-content-center mt-8'>
                    <button data-aos= "fade-up"
                    className='button-outline'>
                        Click to Choose
                    </button>
                </div>
        </div>     
    </div>
  )
}

export default carLists