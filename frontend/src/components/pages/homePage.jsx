import React from 'react'
import landingCar from '../../assets/landingCar.jpg'
import orangecar from '../../assets/orangecar.jpg'
const home = ({theme}) => {
  return (
        // <div className='dark:bg-black dark:text-white duration-300 relative -z-20'the -z-20 is wasn't allowing button to hover. This is for the img aspect relative -z-10>
    <div className='dark:bg-black
    dark:text-white duration-300 '>
        <div className='container min-h-[620px] flex'>
            <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
                <div className='order-1 sm:order-2'>
                    <img src= {theme === "dark"? landingCar :orangecar}  alt="car" className=' max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]' />
                </div>
                <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
                    <p className='text-primary
                    text-2xl
                    font-serif '>Smooth-Motion</p>   {/* Smooth Transit */}
                    <h1 className='text-4xl lg:text-7xl font-semibold font-serif'>Car Rental</h1>
                    <p>Rent any car of your choice from us, <br /> at a discounted rate and enjoy a 20% discount <br /> as a first-time hirer. <br /> Regular hirers also receive additional benefits.</p>
                    <button className='btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/85 duration-300'>
                        Get Started
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default home