import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Tab from "./section3/Tablet.png"
import Tab_2 from "./section3/Tab_2.png"
import Tab_3 from "./section3/Tab_3.png"
import Iphone from "./section3/IPhone-removebg-preview.png"
import img1 from "./section3/cell.png"
import img2 from "./section3/watch.png"
import img3 from "./section3/cellphone-rb.png"
import img4 from "./section3/Printer.png"
const responsive3 = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
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


export default function Section6() {
    return (

        <section>
            <h2 className='font-normal text-base mx-2 lg:mx-14  px-4 text-gray-700 border-b border-gray-200 py-3'>Best Sellers</h2>

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
    )
}
