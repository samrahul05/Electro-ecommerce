import React from 'react'

import img1 from "./section3/cell.png"
import img2 from "./section3/watch.png"
import img3 from "./section3/cellphone-rb.png"
import img4 from "./section3/Printer.png"
import img5 from "./section3/headphone.png"

export default function Section3() {
    return (
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
                </div>
            </div>
        </section>
    )
}
