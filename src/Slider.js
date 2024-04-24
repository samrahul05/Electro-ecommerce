import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Watch from "./main/watch.png"
import Mobile from "./main/mobile.png"
import Image from "./main/WhatsApp_Image_2024-04-20_at_2.41.26_PM__2_-removebg-preview.png"
const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Slider() {
  return (
    <div>



      <Carousel responsive={responsive} className='mt-10'>
        <section>
          <div className='flex justify-center align-middle'>
            <div className='mx-14 px-4 z-40'>
              <div className='text-gray-800'>
                <h3 className='font-normal text-5xl  '>THE NEW</h3>
                <h3 className='font-normal text-5xl mb-2.5'>STANDARD</h3>
                <h3 className='font-semibold text-base mb-2.5'>UNDER FAVORABLE SMARTWATCHES</h3>
                <h3 className='font-semibold text-base'>FROM</h3>
                <h3 className='mb-2.5'>
                  <span className='text-xl font-bold '>$ <span className='font-bold text-5xl mt-8'>749</span><span className='text-xl font-bold'>99</span></span>
                </h3>
                <button className='bg-yellow-500 rounded-xl  px-10 py-3'>Start Buying</button>
              </div>
            </div>
            <div className='-z-40'>
              <img src={Watch} alt="watch" />
            </div>

          </div>


        </section>

        <section>
          <div className='flex justify-center'>
            <div className='mx-14 px-4 z-40'>
              <div className='text-gray-800'>
                <h3 className='font-bold text-lg mb-2.5 text-blue-300'>SHOP TO GET WHAT YOU LOVE</h3>
                <h3 className='font-normal text-5xl mb-2 '>TIMEPIECES THAT</h3>
                <h3 className='font-normal text-5xl mb-2'>MAKE A STATEMENT</h3>
                <h3 className='mb-2.5'>
                  <span className='font-normal text-5xl '>UP TO <span className='font-bold text-5xl mt-8 mx-2'>40% OFF</span></span>
                </h3>
                <button className='bg-yellow-500 rounded-xl  px-10 py-3'>Start Buying</button>
              </div>
            </div>
            <div className='-z-40'>
              <img src={Image} alt="watch" />
            </div>

          </div>


        </section>

        <section>
          <div className='flex justify-center'>
            <div className='mx-14 px-4 z-40'>
              <div className='text-gray-800'>
                <h3 className='font-normal text-5xl  '>THE NEW</h3>
                <h3 className='font-normal text-5xl mb-2.5'>STANDARD</h3>
                <h3 className='font-semibold text-base mb-2.5'>UNDER FAVORABLE SMARTWATCHES</h3>
                <h3 className='font-semibold text-base'>FROM</h3>
                <h3 className='mb-2.5'>
                  <span className='text-xl font-bold '>$ <span className='font-bold text-5xl mt-8'>749</span><span className='text-xl font-bold'>99</span></span>
                </h3>
                <button className='bg-yellow-500 rounded-xl  px-10 py-3'>Start Buying</button>
              </div>
            </div>
            <div className='-z-40'>
              <img src={Mobile} alt="watch" />
            </div>

          </div>


        </section>


      </Carousel>
    </div>
  )
}
