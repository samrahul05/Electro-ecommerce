import React from 'react'
import Joy from "./section3/JoyStick.png"
import Tab from "./section3/Tablet.png"
import Tab_2 from "./section3/Tab_2.png"
import Tab_3 from "./section3/Tab_3.png"
import Iphone from "./section3/IPhone-removebg-preview.png"
import img1 from "./section3/cell.png"
import img2 from "./section3/watch.png"
import img3 from "./section3/cellphone-rb.png"
import img4 from "./section3/Printer.png"
// import img5 from "./section3/headphone.png"


export default function Section2() {
    return (
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
    )
}
