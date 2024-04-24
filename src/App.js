
import React from 'react'
import './index.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Img1 from "./images/camera-removebg-preview.png"
import Img2 from './images/images-removebg-preview.png'
import Img3 from './images/pc-removebg-preview.png'
import Img4 from './images/360-removebg-preview.png'
import Img5 from './images/360-removebg-preview.png'

import Tab from "./section3/Tablet.png"
import Tab_2 from "./section3/Tab_2.png"
import Tab_3 from "./section3/Tab_3.png"

import Iphone from "./section3/IPhone-removebg-preview.png"
import Watch from "./main/watch.png"
import Mobile from "./main/mobile.png"
import Image from "./main/WhatsApp_Image_2024-04-20_at_2.41.26_PM__2_-removebg-preview.png"
import Joy from "./section3/JoyStick.png"

import img1 from "./section3/cell.png"
import img2 from "./section3/watch.png"
import img3 from "./section3/cellphone-rb.png"
import img4 from "./section3/Printer.png"
import img5 from "./section3/headphone.png"

import Printer from "./section3/Printer.png"


// For Slider-1
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

// For Section4
const responsives1 = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

// For Section6
const responsive3 = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

// import Navi from "./Navi"
// import Section1 from './Section11'
// import Section2 from './Section22';
// import Section3 from './Section33'
// import Section4 from './Section4'
// import Section5 from './Section5'
// import Slid from './Slider'
// import Section6 from './Section6'







function App() {
  return (
    <div className="App text-gray-500  border border-red-700">

      {/* Navigation Side  */}
      <section>
        <div className=''>
          {/* 1 */}
          <section className=' mx-2 lg:mx-16 hidden lg:flex justify-between align-middle border-b border-gray-100 px-4 py-2'>
            <div className='flex gap-4'>

              <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-yellow-400 mt-0.5">
                  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                </svg>
                <p className='border-r-2 border-gray-100 px-2 font-normal text-sm'>(+800) 123 456 7890</p>
              </div>
              <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-yellow-400 mt-0.5  ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <h3 className='font-normal text-sm px-2'>sample@gmail.com</h3>

              </div>

            </div>
            <div className='flex'>
              <div className='flex align-baseline justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-0.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <h3 className='border-r-2 border-gray-100 px-1  font-normal text-sm '>Store Location</h3>
              </div>

              <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mt-0.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <h3 className='border-r-2 border-gray-100  px-1 font-normal text-sm'>Sign in or Register</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
          </section>

          {/* 2 */}

          <section className='  mx-0 lg:mx-16 px-4 py-2 lg:py-0 bg-yellow-500 lg:bg-white '>
            <div className='grid grid-cols-3 lg:border-b border-gray-100 mt-0 lg:mt-8'>

              <div>
                <h1 className="text-5xl font-sans font-bold tracking-tighter text-gray-700  ">electro<span className=" text-5xl text-yellow-400 ">.</span></h1>
              </div>
              <div className='flex align-baseline'>
                <input type='text ' placeholder='Search' className='hidden  lg:block w-full border-2 border-yellow-500  rounded-full px-5 py-2' />

                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bg-yellow-500 ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />

                </svg> */}

              </div>
              <div>
                <div className='flex justify-end mt-4 '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-5 text-center">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <span>$0.00</span>

                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section className=' hidden lg:block mx-16  px-4 mt-6 '>
            <div className='flex'>
              <div className=' flex gap-4'>

                <button className='px-8 py-3 flex align-baseline  gap-2 border border-yellow-500 bg-yellow-500 rounded-xl'>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 font-bold text-base text-gray-700 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>


                  <h3 className='font-bold text-sm text-gray-700 mt-0.5'>All Departments</h3>
                  <div className=''></div>
                </button>

                <div className=' '>
                  <ul className='flex justify-between  align-baseline mt-3  cursor-pointer '>

                    <li className='mx-4'>
                      <div className='flex  '>
                        <span className='text-sm font-bold text-gray-600 hover:text-red-600'>Home</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 font-bold text-sm text-gray-700 mt-1 hover:text-red-600">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                      </div>

                    </li>
                    <li className='mx-4'>
                      <div className='flex'>
                        <span className='text-sm font-bold text-gray-600 hover:text-red-600 '>Catalog</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 font-bold text-sm text-gray-700 mt-1 hover:text-red-600">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>

                    </li>
                    <li className='mx-4'>
                      <div className='flex'>
                        <span className='text-sm font-bold text-gray-600 hover:text-red-600'>Gift Cards</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 font-bold text-sm text-gray-700 mt-1 hover:text-red-600">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>

                    </li>
                    <li className='mx-4'>
                      <div className='flex'>
                        <span className='text-sm font-bold text-gray-600 hover:text-red-600 '>Pages</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 font-bold text-sm text-gray-700 mt-1 hover:text-red-600">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>

                    </li>
                    <li className='mx-4'>
                      <div className='flex'>
                        <span className='text-sm font-bold text-gray-600 hover:text-red-600 '>Features</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 font-bold text-sm text-gray-700 mt-1 hover:text-red-600">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>

                    </li>
                  </ul>
                </div>

              </div>

              <div className='py-3 pl-4 ml-auto '>
                <p className='text-sm font-bold text-gray-600 mx-auto'>Free Shipping on Orders $500+</p>
              </div>

            </div>



          </section>
        </div>
      </section>

      {/* Slider 1 */}

      <Carousel responsive={responsive} className='mt-1 bg-gray-100 '>
        {/* 1 */}

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

        {/* 2 */}

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
        {/* 3 */}

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


      {/* <Section1 /> */}

      <section>
        <div className='mt-8'>
          <div className='mx-2 lg:mx-14 px-4'>
            <div className='mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3'>

              <div className='bg-gray-100 flex  '>

                <div className='m-auto'>
                  <img src={Img1} alt='img' className=' h-24 w-24 md:h-32 md:w-32 ' />

                </div>
                <div className=' m-auto text-sm font-normal md:text-base'>

                  <p>CATCH BIG </p>
                  <p className='font-semibold text-gray-800'>DEALS <span className='font-normal'> ON THE</span></p>
                  <p> CAMERAS</p>
                  <h3 className='font-semibold text-gray-800'>Shop now</h3>
                </div>


              </div>

              <div className='bg-gray-100 flex justify-center '>

                <div className='m-auto'>
                  <img src={Tab_3} alt='img' className='  h-24 w-24 md:h-32 md:w-32' />

                </div>
                <div className=' m-auto text-sm font-normal md:text-base'>

                  <p>TABLETS</p>
                  <p>SMARTPHONES</p>
                  <p className='font-semibold text-gray-800'>AND MORE</p>

                  <div className='flex '>
                    <div>
                      <p >UP</p>
                      <p className='-mt-2 '>TO</p>
                    </div>
                    <div className='text-gray-800 font-medium text-lg md:font-bold md:text-3xl ml-1'>70%</div>



                  </div>


                </div>



              </div>

              <div className='bg-gray-100 flex justify-center '>

                <div className='m-auto'>
                  <img src={Img3} alt='img' className=' h-24 w-24 md:h-32 md:w-32 ' />
                </div>
                <div className=' m-auto text-sm font-normal md:text-base '>

                  <p>SHOP THE  </p>
                  <p className='font-semibold text-gray-800 '>HOTTEST</p>
                  <p> PRODUCTS</p>
                  <h3 className='font-semibold text-gray-800 mt-1 '>Shop now</h3>
                </div>


              </div>

              <div className='bg-gray-100 flex justify-center '>

                <div className='m-auto'>
                  <img src={Img4} alt='img' className='h-20 w-20 md:h-28 md:w-28 ' />
                </div>
                <div className='m-auto text-sm font-normal md:text-base'>

                  <p>THE NEW</p>
                  <p>STANDARD</p>
                  <p className='font-semibold text-gray-800'>360 CAMERAS</p>

                  <div className='flex '>
                    <div>
                      <p>UP</p>
                      <p className='-mt-2'>TO</p>
                    </div>
                    <div className='text-gray-800 font-medium text-lg md:font-bold md:text-3xl ml-1'>70%</div>



                  </div>


                </div>



              </div>

            </div>
          </div>
        </div>
      </section>

      {/* <Section2 /> */}

      <section className='bg-white'>
        <div className='mt-14 py-5'>
          <div className=' mx-2 lg:mx-14  px-2'>
            <div className=' sm:flex  gap-2'>

              {/* 1 */}
              <div className='lg:w-4/12  sm:h-full w-full  border-2 border-yellow-500 rounded-2xl gap-3 py-0 md:py-5 lg:py-3'>
                <div className='px-5 py-1'>
                  <header className=''>

                    <div className='flex justify-between '>
                      <div className=''>
                        <h3 className='font-normal text-2xl'>Special</h3>
                        <h3 className='font-normal text-2xl px-1'>Offer</h3>
                      </div>

                      <div className='border bg-yellow-500 rounded-full px-6 py-4'>
                        <h3>Save</h3>
                        <p className='font-bold text-base'>30%</p>
                      </div>
                    </div>
                    <div className=''>
                      <img src={Joy} alt='JoyStick' />
                    </div>
                  </header>

                  <footer>
                    <h3 className=' text-blue-700 font-bold text-center text-base'>Black Fashion Zapda</h3>
                    <div className=''>
                      <div className='flex justify-center my-3'>
                        <div className='text-red-500 px-3 text-3xl font-normal'>$350.00</div>
                        <div className='font-normal text-lg line-through mt-2'>$500.00</div>
                      </div>
                      <div className=''>
                        <div className='flex justify-between my-1'>
                          <h3 className='text-sm font-normal'>Already Sold:<span className='font-bold'>6</span></h3>
                          <h3 className='text-sm font-normal'>Available:<span className='font-bold'>60</span></h3>
                        </div>
                        <input type='range' className='w-full mt-2' />
                        <h3 className='text-center'>Hurry Up ! Offer ends in</h3>
                        <div className='flex gap-2 justify-center mt-5'>
                          <button className="border bg-gray-200 rounded-md px-3 py-1">6108 </button>
                          <button className="border bg-gray-200 rounded-md px-3 py-1">7 </button>
                          <button className="border bg-gray-200 rounded-md px-3 py-1">45 </button>
                        </div>

                      </div>
                    </div>
                  </footer>
                </div>
              </div>

              {/* 2 */}

              <div className='lg:w-8/12  w-full '>
                <div className='mt-5 md:mt-0'>
                  <ul className='flex justify-center gap-5  border-b-1 border-gray-100'>
                    <li className=' text-base font-bold border-yellow-400 border-b-2 text-gray-700'>Featured</li>
                    <li>On Sale</li>
                    <li>Top Rated</li>
                  </ul>
                </div>
                <div className='grid lg:grid-cols-4 gap-3 sm:grid-cols-3 grid-cols-2'>
                  {/* 1 */}
                  <div className='py-2'>
                    <section className=' px-5 border-r border-gray-100'>
                      <header>
                        <div>
                          <p className='mb-2 font-normal text-xs'>Bulgari</p>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5 block md:hidden lg:block '>Faxtex product Sample</h3>
                          <h3 className=' hidden md:block lg:hidden   text-blue-700 font-bold text-sm  mb-1.5 '>Faxtex...</h3>
                        </div>

                        <div>
                          <img src={Tab} alt='img' />
                        </div>
                      </header>
                      <footer className='mt-1'>
                        <div className='pb-4 flex justify-between'>

                          <div className=' px-1 '>
                            <h3 className='font-normal text-xl text-red-500'>$110.00</h3>
                            <p className='line-through'>$199.00</p>

                          </div>
                          <div className='px-2 hidden lg:block'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                          </div>
                        </div>
                      </footer>

                    </section>
                  </div>

                  {/* 2 */}
                  <div className='py-2'>
                    <section className=' px-5 border-r border-gray-100'>
                      <header>
                        <div>
                          <p className='mb-2 font-normal text-xs'>Christian Dior</p>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5   block md:hidden lg:block '>Finity Product Sample</h3>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>Finity...</h3>
                        </div>

                        <div>
                          <img src={img4} alt='img' />
                        </div>
                      </header>
                      <footer className='mt-1'>
                        <div className='pb-4 flex justify-between'>

                          <div className=' px-1 '>
                            <h3 className='font-normal text-xl text-red-500'>$95.00</h3>
                            <p className='line-through'>$120.00</p>

                          </div>
                          <div className='px-2 hidden lg:block'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                          </div>


                        </div>
                      </footer>

                    </section>
                  </div>

                  {/* 3 */}
                  <div className='py-2'>
                    <section className='px-5 border-r border-gray-100'>
                      <header>
                        <div>
                          <p className='mb-2 font-normal text-xs'>Dolce&Gabbana</p>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5block md:hidden lg:block '>Fixair Product Sample </h3>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>Fixair..</h3>
                        </div>

                        <div>
                          <img src={Tab_2} alt='img' />
                        </div>
                      </header>
                      <footer className='mt-1'>
                        <div className='pb-4 flex justify-between'>

                          <div className=' px-1  '>
                            <h3 className='font-normal text-xl text-gray-700 py-3'>$210.00</h3>

                          </div>
                          <div className='px-2 hidden lg:block'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                          </div>


                        </div>
                      </footer>

                    </section>
                  </div>
                  {/* 4 */}
                  <div className='py-2'>
                    <section className='px-5 border-r border-gray-100'>
                      <header>
                        <div>
                          <p className='mb-2 font-normal text-xs'>Donna karan</p>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5 block md:hidden lg:block  '>Freecof Product.</h3>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>Freecof ...</h3>
                        </div>

                        <div>
                          <img src={Tab_3} alt='img' />
                        </div>
                      </header>
                      <footer className='mt-1'>
                        <div className='pb-4 flex justify-between'>

                          <div className=' px-1  '>
                            <h3 className='font-normal text-xl text-gray-700 '>SoldOut</h3>

                          </div>
                          <div className='px-2 hidden lg:block'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                          </div>


                        </div>
                      </footer>

                    </section>
                  </div>
                  {/* 5 */}
                  <div className='py-2'>
                    <section className='px-5 border-r border-gray-100'>
                      <header>
                        <div>
                          <p className='mb-2 font-normal text-xs'>Armani</p>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>FreshKix ...</h3>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5 block md:hidden lg:block  '>FreshKix Product Sample</h3>
                        </div>

                        <div>
                          <img src={img3} alt='img' className='' />
                        </div>
                      </header>
                      <footer className='mt-1'>
                        <div className='pb-4 flex justify-between'>

                          <div className=' px-1 '>
                            <h3 className='font-normal text-xl text-red-500'>$120.00</h3>
                            <p className='line-through'>$150.00</p>

                          </div>
                          <div className='px-2 hidden lg:block '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                          </div>


                        </div>
                      </footer>

                    </section>
                  </div>
                  {/* 6 */}
                  <div className='py-2'>
                    <section className=' px-5 border-r border-gray-100'>
                      <header>
                        <div>
                          <p className='mb-2 font-normal text-xs'>Bulgari</p>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5 block md:hidden lg:block '>Georgeous white Bag </h3>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>George... </h3>
                        </div>

                        <div>
                          <img src={Iphone} alt='img' />
                        </div>
                      </header>
                      <footer className='mt-1'>
                        <div className='pb-4 flex justify-between'>

                          <div className=' px-1 my-3 '>
                            <h3 className='font-normal text-xl text-gray-600'>Soldout</h3>

                          </div>
                          <div className='px-2 hidden lg:block'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                          </div>


                        </div>
                      </footer>

                    </section>
                  </div>
                  {/* 7 */}
                  <div className='py-2'>
                    <section className='px-5 border-r border-gray-100'>
                      <header>
                        <div>
                          <p className='mb-2 font-normal text-xs'>Donna Karan</p>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5 block md:hidden lg:block '>Georgeous White Bag</h3>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>Georgeous ...</h3>
                        </div>

                        <div>
                          <img src={img1} alt='img' />
                        </div>
                      </header>
                      <footer className='mt-1'>
                        <div className='pb-4 flex justify-between'>

                          <div className=' px-1 my-3'>
                            <h3 className='font-normal text-xl text-gray-600'>$350.00</h3>

                          </div>
                          <div className='px-2 hidden lg:block'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                          </div>


                        </div>
                      </footer>

                    </section>
                  </div>
                  {/* 8 */}
                  <div className='py-2'>
                    <section className='px-5 border-r border-gray-100'>
                      <header>
                        <div>
                          <p className='mb-2 font-normal text-xs'>Dolce & Gabbana</p>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5 block md:hidden lg:block '>Gold Diamond Chain</h3>
                          <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>Gold...</h3>
                        </div>

                        <div>
                          <img src={img2} alt='img' />
                        </div>
                      </header>
                      <footer className='mt-1'>
                        <div className='pb-4 flex justify-between'>

                          <div className=' px-1 my-3 '>
                            <h3 className='font-normal text-xl text-gray-600'>$399.00</h3>

                          </div>
                          <div className='px-2 hidden lg:block '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                          </div>


                        </div>
                      </footer>

                    </section>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* <Section3 /> */}
      <section className='bg-gray-200'>
        <div className='  mt-7 pt-9 pb-7'>
          <div className=' mx-16 px-4'>
            <div className='mb-4'>
              <ul className='pb-3 flex justify-center gap-5 border-b border-gray-400'>
                <li><button className='border  border-yellow-400 rounded-xl px-2 '>Best Deals</button></li>
                <li>Tv & Video</li>
                <li>Cameras</li>
                <li>Audio</li>
                <li >Cell Phones</li>

              </ul>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 '>
              {/* division-1 */}
              <div className=' py-2  gap-1 grid lg:grid-cols-2 sm:grid-cols-4 grid-cols-2'>
                {/* 1 */}
                <div className='py-0.5'>
                  <section className='py-4 px-5 bg-white'>
                    <header>
                      <div>
                        <p className='mb-2 font-normal text-xs'>Bulgari</p>
                        <h3 className='text-blue-500 font-bold text-sm  mb-1.5'>Georgeous White Bag</h3>
                      </div>

                      <div>
                        <img src={img1} alt='img' />
                      </div>
                    </header>
                    <footer className='mt-3'>
                      <div className='pb-3.5 py-2'>
                        <h3 className='font-normal text-xl text-gray-600'>Sold Out</h3>
                      </div>
                    </footer>

                  </section>
                </div>

                {/* 2 */}
                <div className='py-0.5'>
                  <section className='py-4 px-5 bg-white'>
                    <header>
                      <div>
                        <p className='mb-2 font-normal text-xs'>Dolce & Gabbana</p>
                        <h3 className='text-blue-500 font-bold text-sm  mb-1.5'>Gold Diamond Chain</h3>
                      </div>

                      <div>
                        <img src={img2} alt='img' className='lg:py-0 md:py-2.5' />
                      </div>
                    </header>
                    <footer className='mt-3'>
                      <div className='pb-3.5 py-2'>
                        <h3 className='font-normal text-xl text-gray-600'>Sold Out</h3>
                      </div>
                    </footer>

                  </section>
                </div>

                {/* 3 */}

                <div className='py-0.5'>
                  <section className='py-4 px-5 bg-white'>
                    <header>
                      <div>
                        <p className='mb-2 font-normal text-xs'>Christian Dior</p>
                        <h3 className='text-blue-500 font-bold text-sm  mb-1.5 px-3'>Golddax Product ...</h3>
                      </div>

                      <div>
                        <img src={img3} alt='img' />
                      </div>
                    </header>
                    <footer className='mt-3'>
                      <div className='pb-3.5 py-2'>
                        <h3 className='font-normal text-xl text-gray-600'>$120.00</h3>
                      </div>
                    </footer>

                  </section>
                </div>

                {/* 4 */}

                <div className='py-0.5'>
                  <section className='py-4 px-5 border bg-white'>
                    <header>
                      <div>
                        <p className='mb-2 font-normal text-xs'>Donna Karan</p>
                        <h3 className='text-blue-500 font-bold text-sm  mb-1.5'>Kinairer Product ...</h3>
                      </div>

                      <div>
                        <img src={img4} alt='img' className='lg:py-0 md:py-2.5' />
                      </div>
                    </header>
                    <footer className='mt-3'>
                      <div className='pb-3.5 py-2'>
                        <h3 className='font-normal text-xl text-gray-600'>$320.00</h3>
                      </div>
                    </footer>

                  </section>
                </div>

              </div>

              {/* division-2 */}

              <div className='p-2 '>
                <div className=' bg-white'>
                  <div className='px-5 py-2 '>
                    <header>

                      <div className='flex justify-between'>

                        <div>
                          <p className='mb-2.5 font-normal text-xs'>Givenchy</p>
                          <h3 className='mb-2 text-blue-700 font-bold text-sm'>Dentoex Product Sample</h3>

                        </div>

                        <div className='border bg-yellow-500 rounded-full px-6 py-4 mt-10'>
                          <h3>Save</h3>
                          <p className='font-bold text-base'>10%</p>
                        </div>
                      </div>


                      <div className=''>

                        <div>
                          <img src={img5} alt="img" />
                        </div>

                        <div className='flex '>

                          <div className='ml-2 mb-3.5 border'>
                            <img src={img5} alt='img' className='h-12 w-13' />
                          </div>



                          <div className='ml-2 mb-3.5 border'>
                            <img src={img5} alt='img' className='h-12 w-13' />
                          </div>



                          <div className='ml-2 mb-3.5 border'>
                            <img src={img5} alt='img' className='h-12 w-13' />
                          </div>



                        </div>
                      </div>
                    </header>
                    <footer className='py-2'>
                      <div className='pb-4 flex justify-between'>

                        <div className='flex px-2 '>
                          <h3 className='font-normal text-xl text-red-600 px-3'>$450.00</h3>
                          <div className='line-through'>$499.00</div>
                        </div>
                        <div className='px-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>

                        </div>


                      </div>
                    </footer>
                  </div>
                </div>

              </div>

              {/* division-3 */}

              <div className='py-2 grid lg:grid-cols-2 sm:grid-cols-4 grid-cols-2'>
                {/* 1 */}
                <div className='py-0.5'>
                  <section className='py-4 px-5 bg-white'>
                    <header>
                      <div>
                        <p className='mb-2 font-normal text-xs'>Christian Dior</p>
                        <h3 className='text-blue-500 font-bold text-sm  mb-1.5'>Lexiited Product ...</h3>
                      </div>

                      <div>
                        <img src={img2} alt='img' />
                      </div>
                    </header>
                    <footer className='mt-4'>
                      <div className='pb-4 flex justify-between'>

                        <div className=' px-1 '>
                          <h3 className='font-normal text-xl text-gray-600'>$200.00</h3>

                        </div>
                        <div className='px-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>

                        </div>

                      </div>
                    </footer>

                  </section>
                </div>


                {/* 2 */}
                <div className='py-0.5'>
                  <section className='py-4 px-5 bg-white'>
                    <header>
                      <div>
                        <p className='mb-2 font-normal text-xs'>Dolce & Gabbana</p>
                        <h3 className='text-blue-500 font-bold text-sm  mb-1.5'>Lexiwarm Product...</h3>
                      </div>

                      <div>
                        <img src={img1} alt='img' />
                      </div>
                    </header>
                    <footer className='mt-4'>
                      <div className='pb-4 flex justify-between'>

                        <div className=' px-1 '>
                          <h3 className='font-normal text-xl text-gray-600'>$35.00</h3>

                        </div>
                        <div className='px-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>

                        </div>


                      </div>
                    </footer>

                  </section>
                </div>

                {/* 3 */}

                <div className='py-0.5'>
                  <section className='py-4 px-5  bg-white'>
                    <header>
                      <div>
                        <p className='mb-2 font-normal text-xs'>Dolce & Gabbana</p>
                        <h3 className='text-blue-500 font-bold text-sm  mb-1.5 '>Lexizimin Product...</h3>
                      </div>

                      <div>
                        <img src={img3} alt='img' />
                      </div>
                    </header>
                    <footer className='mt-4'>
                      <div className='pb-4 flex justify-between'>

                        <div className=' px-1 '>
                          <h3 className='font-normal text-xl text-gray-600'>$120.00</h3>

                        </div>
                        <div className='px-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>

                        </div>


                      </div>
                    </footer>

                  </section>
                </div>

                {/* 4 */}

                <div className='py-0.5'>
                  <section className='bg-white py-4 px-5bg-white'>
                    <header>
                      <div>
                        <p className='mb-2 font-normal text-xs'>Armani</p>
                        <h3 className='text-blue-500 font-bold text-sm  mb-1.5'>Soltone Product...</h3>
                      </div>

                      <div>
                        <img src={img4} alt='img' />
                      </div>
                    </header>
                    <footer className='mt-4'>
                      <div className='pb-4 flex justify-between'>

                        <div className=' px-1 '>
                          <h3 className='font-normal text-xl text-gray-600'>$280.00</h3>

                        </div>
                        <div className='px-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>

                        </div>


                      </div>
                    </footer>

                  </section>
                </div>
              </div>

            </div>
          </div >
        </div >
      </section >

      {/* <Section4 /> */}
      <section>
        <div className=' mx-2 lg:mx-14  px-4'>
          <div className='mb-4 flex justify-between border-b border-gray-200 py-3'>
            <h2 className='font-normal text-base text-gray-700'>Best Sellers</h2>
            <ul className='font-normal text-sm flex gap-2'>
              <li className='border-2 border-yellow-500 rounded-xl px-2 '>
                <p className='px-2'>Top 20</p>
              </li>
              <li>
                <p className='px-5'>Phones & Tables</p>
              </li>
              <li>
                <p className='px-5'>Laptops &Computers</p>
              </li>
            </ul>

          </div>

        </div>


        <Carousel responsive={responsives1}>

          <section>
            <div className='mt-10'>
              <div className=' mx-2 lg:mx-14  px-4'>
                <div className='mb-5 flex border-r border-gray-100'>
                  <header className='pr-2.5'>
                    <img src={Tab} alt='Tablet' className='h-32 w-36' />
                  </header>
                  <div className=' pl-2.5'>
                    <p className='mb-2 font-normal text-sm'>Bulgari</p>
                    <h3 className='font-bold text-sm text-blue-700 mb-1'>Faxtax Product</h3>
                    <div className='flex '>
                      <h3 className='font-normal text-base text-red-500 mt-5'>$110.00</h3>
                      <h3 className='font-normal text-sm pl-2.5 line-through mt-6'>$90.00</h3>
                    </div>
                  </div>



                </div>

                <div className='mb-5 flex border-r border-gray-100'>
                  <header className='pr-2.5'>
                    <img src={Printer} alt='Tablet' className='h-32 w-36' />
                  </header>
                  <div className=' pl-2.5'>
                    <p className='mb-2 font-normal text-sm'>Christian Dior</p>
                    <h3 className='font-bold text-sm text-blue-700 mb-1'>Finity Product </h3>
                    <div className='flex '>
                      <h3 className='font-normal text-base text-red-500 mt-5'>$95.00</h3>
                      <h3 className='font-normal text-sm pl-2.5 line-through mt-6'>$120.00</h3>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='mt-10'>
              <div className=' mx-2 lg:mx-14  px-4'>
                <div className='mb-5 flex border-r border-gray-100'>
                  <header className='pr-2.5'>
                    <img src={Tab_2} alt='Tablet' className='h-32 w-36' />
                  </header>
                  <div className=' pl-2.5'>
                    <p className='mb-2'>Dolce Gabanna</p>
                    <h3 className='font-bold text-sm text-blue-700 mb-1'>Fixair Product </h3>
                    <div className='flex '>
                      <h3 className='font-normal text-base text-gray-700 mt-5'>$210.00</h3>

                    </div>
                  </div>



                </div>

                <div className='mb-5 flex border-r border-gray-100'>
                  <header className='pr-2.5'>
                    <img src={Tab_3} alt='Tablet' className='h-32 w-36' />
                  </header>
                  <div className=' pl-2.5'>
                    <p className='mb-2'>Donna Karan</p>
                    <h3 className='font-bold text-sm text-blue-700 mb-1'>Freecof Product ...</h3>
                    <div className='flex '>
                      <h3 className='font-normal text-base text-gray-800 mt-5'>Sold  Out</h3>

                    </div>
                  </div>



                </div>
              </div>
            </div>
          </section>


          <section>
            <div className='mt-10'>
              <div className=' mx-2 lg:mx-14  px-4'>
                <div className='mb-5 flex border-r border-gray-100'>
                  <header className='pr-2.5'>
                    <img src={img3} alt='Tablet' className='h-32 w-36' />
                  </header>
                  <div className=' pl-2.5'>
                    <p className='mb-2'>Armani</p>
                    <h3 className='font-bold text-sm text-blue-700 mb-1'>Freshkix Product  </h3>
                    <div className='flex '>
                      <h3 className='font-normal text-base text-red-500 mt-5'>$120.00</h3>
                      <h3 className='font-normal text-sm pl-2.5 line-through mt-6'>$150.00</h3>
                    </div>
                  </div>



                </div>

                <div className='mb-5 flex border-r border-gray-100'>
                  <header className='pr-2.5'>
                    <img src={Iphone} alt='Tablet' className='h-32 w-36' />
                  </header>
                  <div className=' pl-2.5'>
                    <p className='mb-2'>Bulgari</p>
                    <h3 className='font-bold text-sm text-blue-700 mb-1'>Georgeous white </h3>
                    <div className='flex '>
                      <h3 className='font-normal text-base text-gray-700 mt-5'>Sold Out</h3>

                    </div>
                  </div>



                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='mt-10'>
              <div className=' mx-2 lg:mx-14  px-4'>
                <div className='mb-5 flex border-r border-gray-100'>
                  <header className='pr-2.5'>
                    <img src={img1} alt='Tablet' className='h-32 w-36' />
                  </header>
                  <div className=' pl-2.5'>
                    <p className='mb-2'>Donna Karan</p>
                    <h3 className='font-bold text-sm text-blue-700 mb-1'>Georgeous White ... </h3>
                    <div className='flex '>
                      <h3 className='font-normal text-base text-gray-700 mt-5'>$350.00</h3>
                    </div>
                  </div>



                </div>

                <div className='mb-5 flex border-r border-gray-100'>
                  <header className='pr-2.5'>
                    <img src={img2} alt='Tablet' className='h-32 w-36' />
                  </header>
                  <div className=' pl-2.5'>
                    <p className='mb-2'>Dolce&Gabanna</p>
                    <h3 className='font-bold text-sm text-blue-700 mb-1'>Gold Diamond  </h3>
                    <div className='flex '>
                      <h3 className='font-normal text-base text-gray-800 mt-5'>$399.00</h3>

                    </div>
                  </div>



                </div>
              </div>
            </div>
          </section>


          <section>
            <div className='mt-10'>
              <div className=' mx-2 lg:mx-14  px-4'>
                <div className='mb-5 flex border-r border-gray-100'>
                  <header className='pr-2.5'>
                    <img src={img3} alt='Tablet' className='h-32 w-36' />
                  </header>
                  <div className=' pl-2.5'>
                    <p className='mb-2'>Christian Diar</p>
                    <h3 className='font-bold text-sm text-blue-700 mb-1'>Golddax Product</h3>
                    <div className='flex '>
                      <h3 className='font-normal text-base text-gray-700 mt-5'>$120.00</h3>

                    </div>
                  </div>



                </div>

                <div className='mb-5 flex border-r border-gray-100'>
                  <header className='pr-2.5'>
                    <img src={Tab} alt='Tablet' className='h-32 w-36' />
                  </header>
                  <div className=' pl-2.5'>
                    <p className='mb-2'>Givenchy</p>
                    <h3 className='font-bold text-sm text-blue-700 mb-1'>Hotcum Product </h3>
                    <div className='flex '>
                      <h3 className='font-normal text-base text-red-500 mt-5'>$225.00</h3>
                      <h3 className='font-normal text-sm pl-2.5 line-through mt-6'>$25.00</h3>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </section>





        </Carousel>
      </section>

      {/* <Section5 /> */}
      <section>
        <div className='pt-25 pb-10 '>
          <div className='mx-1 lg:mx-16 px-4 '>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>

              {/* div-1 */}
              <div className='p-4'>
                <h4 className='font-normal text-xl text-gray-700 pb-2 mb-8 border-b border-gray-500'>Featured products</h4>
                <div>
                  <div className='mb-5 flex'>
                    <header className='pr-2.5'>
                      <img src={Tab} alt='Tablet' className='h-24 w-24' />
                    </header>
                    <div className='pl-2.5'>
                      <h3 className='font-bold text-sm text-blue-700 mb-1'>Finity Product </h3>
                      <div className='flex'>
                        <h3 className='font-normal text-base text-red-500 '>$95.00</h3>
                        <h3 className='font-normal text-sm pl-2.5 line-through'>$120.00</h3>
                      </div>
                    </div>



                  </div>

                </div>

                <div>
                  <div className='mb-5 flex'>
                    <header className='pr-2.5'>
                      <img src={Tab_2} alt='Tablet' className='h-24 w-24' />
                    </header>
                    <div className='pl-2.5'>
                      <h3 className='font-bold text-sm text-blue-700 mb-1'>Finity Product </h3>
                      <div className='flex'>
                        <h3 className='font-normal text-base text-red-500'>$110.00</h3>
                        <h3 className='font-normal text-sm pl-2.5 line-through'>$199.00</h3>
                      </div>
                    </div>



                  </div>

                </div>

                <div>
                  <div className='mb-5 flex'>
                    <header className='pr-2.5'>
                      <img src={img4} alt='Tablet' className='h-24 w-24' />
                    </header>
                    <div className='pl-2.5'>
                      <h3 className='font-bold text-sm text-blue-700 mb-1'>Fixair Product </h3>
                      <div className='flex'>
                        <h3 className='font-normal text-base text-gray-700 '>$210.00</h3>

                      </div>
                    </div>



                  </div>

                </div>

              </div>

              {/* 2 */}
              <div className='p-4'>
                <h4 className='font-normal text-xl text-gray-700 pb-2 mb-8 border-b border-gray-500'>Onsale products</h4>

                <div>
                  <div className='mb-5 flex'>
                    <header className='pr-2.5'>
                      <img src={Iphone} alt='Tablet' className='h-24 w-24' />
                    </header>
                    <div className='pl-2.5'>
                      <h3 className='font-bold text-sm text-blue-700 mb-1'>Dentotam Product </h3>
                      <div className='flex'>
                        <h3 className='font-normal text-base text-gray-700 '>$20.00</h3>

                      </div>
                    </div>



                  </div>

                </div>

                <div>
                  <div className='mb-5 flex'>
                    <header className='pr-2.5'>
                      <img src={Iphone} alt='Tablet' className='h-24 w-24' />
                    </header>
                    <div className='pl-2.5'>
                      <h3 className='font-bold text-sm text-blue-700 mb-1'>Donkix Product </h3>
                      <div className='flex'>
                        <h3 className='font-normal text-base text-red-500 '>$60.00</h3>
                        <h3 className='font-normal text-sm pl-2.5 line-through'>$80.00</h3>
                      </div>
                    </div>



                  </div>

                </div>

                <div>
                  <div className='mb-5 flex'>
                    <header className='pr-2.5'>
                      <img src={img4} alt='Tablet' className='h-24 w-24' />
                    </header>
                    <div className='pl-2.5'>
                      <h3 className='font-bold text-sm text-blue-700 mb-1'>Fixair Product </h3>
                      <div className='flex'>
                        <h3 className='font-normal text-base text-red-500 '>$95.00</h3>
                        <h3 className='font-normal text-sm pl-2.5 line-through'>$120.00</h3>

                      </div>
                    </div>



                  </div>

                </div>

              </div>
              {/* 3 */}
              <div className='p-4 '>
                <h4 className='font-normal text-xl text-gray-700 pb-2 mb-8 border-b border-gray-500'>Top Rated Products</h4>

                <div>
                  <div className='mb-5 flex'>
                    <header className='pr-2.5'>
                      <img src={img4} alt='Tablet' className='h-24 w-24' />
                    </header>
                    <div className='pl-2.5'>
                      <h3 className='font-bold text-sm text-blue-700 mb-1'>Soltone Product...</h3>
                      <div className='flex'>
                        <h3 className='font-normal text-base text-gray-700'>$280.00</h3>
                      </div>
                    </div>



                  </div>

                </div>

                <div>
                  <div className='mb-5 flex'>
                    <header className='pr-2.5'>
                      <img src={img2} alt='Tablet' className='h-24 w-24' />
                    </header>
                    <div className='pl-2.5'>
                      <h3 className='font-bold text-sm text-blue-700 mb-1'>Lexiited Product </h3>
                      <div className='flex'>
                        <h3 className='font-normal text-base text-gray-700 '>$200.00</h3>

                      </div>
                    </div>



                  </div>

                </div>

                <div>
                  <div className='mb-5 flex'>
                    <header className='pr-2.5'>
                      <img src={img1} alt='Tablet' className='h-24 w-24' />
                    </header>
                    <div className='pl-2.5'>
                      <h3 className='font-bold text-sm text-blue-700 mb-1'>Lexiwarm Product </h3>
                      <div className='flex'>
                        <h3 className='font-normal text-base text-gray-700 '>$210.00</h3>

                      </div>
                    </div>



                  </div>

                </div>

              </div>
              {/* 4 */}
              <div className='p-4 mt-8 lg:mt-5 h-min bg-gray-100'>
                <header className='flex justify-around align-middle'>
                  <div >
                    <h3 className=' text-2xl text-gray-700 '>smart<span className='text-blue-200'>G3</span></h3>
                    <h2 className='text-xs text-gray-700 ml-4'>now with 4G</h2>
                  </div>
                  <div>
                    <h3 className='text-gray-700 font-bold mt-2 text-xs'>STARTING AT</h3>
                    <h3 className='text-gray-700 font-bold text-xl '><span className='text-xs'>$</span>129.99</h3>
                  </div>
                </header>
                <footer className='mt-5'>
                  <img src={Img5} alt='img' className='w-52 h-52' />
                </footer>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* <Section6 />  */}
      <section className=' mx-2 lg:mx-14  px-4'>
        <h2 className='font-normal text-base text-gray-700 border-b border-gray-200 py-3'>New Arrivals</h2>

        <Carousel Carousel responsive={responsive3}>

          {/* 1 */}
          <div className='py-2 '>
            <section className=' px-5 border-r border-gray-100'>
              <header>
                <div>
                  <p className='mb-2 font-normal text-xs'>Bulgari</p>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5 block md:hidden lg:block '>Faxtex product Sample</h3>
                  <h3 className=' hidden md:block lg:hidden   text-blue-700 font-bold text-sm  mb-1.5 '>Faxtex...</h3>
                </div>

                <div>
                  <img src={Tab} alt='img' />
                </div>
              </header>
              <footer className='mt-1'>
                <div className='pb-4 flex justify-between'>

                  <div className=' px-1 '>
                    <h3 className='font-normal text-xl text-red-500'>$110.00</h3>
                    <p className='line-through'>$199.00</p>

                  </div>
                  <div className='px-2 hidden lg:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                  </div>
                </div>
              </footer>

            </section>
          </div>

          {/* 2 */}
          <div className='py-2'>
            <section className=' px-5 border-r border-gray-100'>
              <header>
                <div>
                  <p className='mb-2 font-normal text-xs'>Christian Dior</p>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5   block md:hidden lg:block '>Finity Product Sample</h3>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>Finity...</h3>
                </div>

                <div>
                  <img src={img4} alt='img' />
                </div>
              </header>
              <footer className='mt-1'>
                <div className='pb-4 flex justify-between'>

                  <div className=' px-1 '>
                    <h3 className='font-normal text-xl text-red-500'>$95.00</h3>
                    <p className='line-through'>$120.00</p>

                  </div>
                  <div className='px-2 hidden lg:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                  </div>


                </div>
              </footer>

            </section>
          </div>

          {/* 3 */}
          <div className='py-2'>
            <section className='px-5 border-r border-gray-100'>
              <header>
                <div>
                  <p className='mb-2 font-normal text-xs'>Dolce&Gabbana</p>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5block md:hidden lg:block '>Fixair Product Sample </h3>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>Fixair..</h3>
                </div>

                <div>
                  <img src={Tab_2} alt='img' />
                </div>
              </header>
              <footer className='mt-1'>
                <div className='pb-4 flex justify-between'>

                  <div className=' px-1  '>
                    <h3 className='font-normal text-xl text-gray-700 py-3'>$210.00</h3>

                  </div>
                  <div className='px-2 hidden lg:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                  </div>


                </div>
              </footer>

            </section>
          </div>
          {/* 4 */}
          <div className='py-2'>
            <section className='px-5 border-r border-gray-100'>
              <header>
                <div>
                  <p className='mb-2 font-normal text-xs'>Donna karan</p>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5 block md:hidden lg:block  '>Freecof Product.</h3>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>Freecof ...</h3>
                </div>

                <div>
                  <img src={Tab_3} alt='img' />
                </div>
              </header>
              <footer className='mt-1'>
                <div className='pb-4 flex justify-between'>

                  <div className=' px-1  '>
                    <h3 className='font-normal text-xl text-gray-700 '>SoldOut</h3>

                  </div>
                  <div className='px-2 hidden lg:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                  </div>


                </div>
              </footer>

            </section>
          </div>
          {/* 5 */}
          <div className='py-2'>
            <section className='px-5 border-r border-gray-100'>
              <header>
                <div>
                  <p className='mb-2 font-normal text-xs'>Armani</p>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>FreshKix ...</h3>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5 block md:hidden lg:block  '>FreshKix Product Sample</h3>
                </div>

                <div>
                  <img src={img3} alt='img' className='' />
                </div>
              </header>
              <footer className='mt-1'>
                <div className='pb-4 flex justify-between'>

                  <div className=' px-1 '>
                    <h3 className='font-normal text-xl text-red-500'>$120.00</h3>
                    <p className='line-through'>$150.00</p>

                  </div>
                  <div className='px-2 hidden lg:block '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                  </div>


                </div>
              </footer>

            </section>
          </div>
          {/* 6 */}
          <div className='py-2'>
            <section className=' px-5 border-r border-gray-100'>
              <header>
                <div>
                  <p className='mb-2 font-normal text-xs'>Bulgari</p>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5 block md:hidden lg:block '>Georgeous white Bag </h3>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>George... </h3>
                </div>

                <div>
                  <img src={Iphone} alt='img' />
                </div>
              </header>
              <footer className='mt-1'>
                <div className='pb-4 flex justify-between'>

                  <div className=' px-1 my-3 '>
                    <h3 className='font-normal text-xl text-gray-600'>Soldout</h3>

                  </div>
                  <div className='px-2 hidden lg:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                  </div>


                </div>
              </footer>

            </section>
          </div>
          {/* 7 */}
          <div className='py-2'>
            <section className='px-5 border-r border-gray-100'>
              <header>
                <div>
                  <p className='mb-2 font-normal text-xs'>Donna Karan</p>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5 block md:hidden lg:block '>Georgeous White Bag</h3>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>Georgeous ...</h3>
                </div>

                <div>
                  <img src={img1} alt='img' />
                </div>
              </header>
              <footer className='mt-1'>
                <div className='pb-4 flex justify-between'>

                  <div className=' px-1 my-3'>
                    <h3 className='font-normal text-xl text-gray-600'>$350.00</h3>

                  </div>
                  <div className='px-2 hidden lg:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                  </div>


                </div>
              </footer>

            </section>
          </div>
          {/* 8 */}
          <div className='py-2'>
            <section className='px-5 border-r border-gray-100'>
              <header>
                <div>
                  <p className='mb-2 font-normal text-xs'>Dolce & Gabbana</p>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5 block md:hidden lg:block '>Gold Diamond Chain</h3>
                  <h3 className='text-blue-700 font-bold text-sm  mb-1.5 hidden md:block lg:hidden '>Gold...</h3>
                </div>

                <div>
                  <img src={img2} alt='img' />
                </div>
              </header>
              <footer className='mt-1'>
                <div className='pb-4 flex justify-between'>

                  <div className=' px-1 my-3 '>
                    <h3 className='font-normal text-xl text-gray-600'>$399.00</h3>

                  </div>
                  <div className='px-2 hidden lg:block '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                  </div>


                </div>
              </footer>

            </section>
          </div>


        </Carousel>

      </section>

    </div >
  );
}

export default App;
