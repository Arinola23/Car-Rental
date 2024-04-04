import React from 'react'
import pattern from "../../assets/orang.jpg"
import playStoreImg from "../../assets/google.webp"
import appStoreImg from '../../assets/apple.webp'


const bannerImg = 
  {  
     backgroundImage: `url(${pattern})`,
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     height: "100%",
     width:"100%",
  }


const appStore = () => {
  return (
    <div className='container pb-14'>
        <div className='text-black py-10 sm:min-h-[400px]
        sm:grid sm:place-content-center rounded-xl'
        style={bannerImg}>
            <div>
                <div className='space-y-6 max-w-xl m-auto'>
                    <h1 className='text-2xl text-center
                    sm:text-4xl font-semibold font-serif'>Get started with our app</h1>
                    <p data-aos="fade-up"
                    className='text-center sm:px-20 text-xl pb-4'>Download Our CarRental application on your mobile device for easy and faster usage.</p>
                    <div data-aos="fade-up"
                    className='flex flex-wrap justify-center items-center gap-16'>
                        <a href="#">
                            <img src={playStoreImg} alt="" className='max-w-[200px] sm:max-w-[250px] md:max-h-[200px]' />
                        </a>
                        <a href="#">
                            <img src={appStoreImg} alt="" className='max-w-[200px] sm:max-w-[250px] md:max-h-[200px]' />
                      </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default appStore