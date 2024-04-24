import React from 'react'
import Img1 from './images/360_F_440849125_R7r06mBgJEQSXtmikawAqMGtb18GY6vz-removebg-preview (1).png'
import Img2 from "./images/mobile-phone-removebg-preview.png"

export default function Section2() {
    return (
        <section className='container mx-auto flex bg-red-50 my-10'>

            <div className='  w-1/3 border-2 border-yellow-200 rounded-lg px-10'>
                <h3 className='font-serif font-normal text-xl'>Special </h3>
                <h3 className='font-serif font-normal text-xl'>Offer</h3>
                <img src={Img1} />

                <div>
                    <h3 className='font-bold text-base text-blue-700 text-center'>Black Fashion Zapda</h3>

                    <span className=' font-normal text-3xl text-red-600 text-center'>$350.00</span>
                    <span className='line-through mx-4 text-center'>$500.00</span>
                    <h3 className='flex justify-between '>
                        <span >Already Sold:6</span>
                        <span className="mx-8">Available:60</span>
                    </h3>
                    <input type='range' className='decoration-yellow-400 ' />
                    <p className='text-center text-sm'> Hurry Up! Offer ends in</p>
                </div>
            </div>

            <div className=' bg-white w-2/3 mx-5'>
                <div className='flex justify-center gap-5 text-lg border-b border-gray-200'>
                    <h3 className='text-black font-medium'>Featured</h3>
                    <h3>On Sale</h3>
                    <h3>Top Rated</h3>
                </div>
                <div className=' mx-auto grid grid-cols-4 grid-rows-2  gap-5'>
                    {/* 1 */}
                    <div className='border-r-2 border-gray-200'>
                        <div>
                            <p>Bulgari</p>
                            <h2 className='text-blue-700 font-medium  text-sm '>Faxtex Product Sample</h2>
                        </div>
                        <div>
                            <img src={Img2} className='h-40 w-40' />
                        </div>

                        <h2 className='text-red-600 mx-3'>$110 <span className=' text-gray-400 mx-10'>$199.00</span></h2>
                    </div>

                   

                    {/* 2*/}
                    <div className='border-r-2 border-gray-200'>
                        <div>
                            <p>Christian Dior</p>
                            <h2 className='text-blue-700 font-medium  text-sm '>Finity Product Sample</h2>
                        </div>
                        <div>
                            <img src={Img2} className='h-40 w-40' />
                        </div>
                        <h2 className='text-red-600 mx-3'>$95 <span className=' text-gray-400 mx-10 line-through'>$120.00</span></h2>
                    </div>

                     {/* 3 */}
                     <div className='border-r-2 border-gray-200'>
                        <div>
                            <p>Doice&Gabbana</p>
                            <h2 className='text-blue-700 font-medium  text-sm '>Fixair Product Sample</h2>
                        </div>
                        <div>
                            <img src={Img2} className='h-40 w-40' />
                        </div>

                        <h2 className='text-red-600 mx-3'>$110 <span className=' text-gray-400 mx-10 line-through'>$199.00</span></h2>
                    </div>
                   
                    {/* 4 */}
                    <div className=' border-r-2 border-gray-200'>
                        <div>
                            <p>Donna Karan</p>
                            <h2 className='text-blue-700 font-medium  text-sm '>FreeCof Product Sample</h2>
                        </div>
                        <div>
                            <img src={Img2} className='h-40 w-40' />
                        </div>
                        <h2 className='text-blackmx-3'>Sold Out</h2>
                    </div>
                  {/* 5 */}
                    <div className=' border-r-2 border-gray-200'>
                        <div>
                            <p>Donna Karan</p>
                            <h2 className='text-blue-700 font-medium  text-sm '>FreeCof Product Sample</h2>
                        </div>
                        <div>
                            <img src={Img2} className='h-40 w-40' />
                        </div>
                        <h2 className='text-blackmx-3'>Sold Out</h2>
                    </div>

                     {/* 6 */}
                     <div className=' border-r-2 border-gray-200'>
                        <div>
                            <p>Donna Karan</p>
                            <h2 className='text-blue-700 font-medium  text-sm '>FreeCof Product Sample</h2>
                        </div>
                        <div>
                            <img src={Img2} className='h-40 w-40' />
                        </div>
                        <h2 className='text-blackmx-3'>Sold Out</h2>
                    </div>

                     {/* 7 */}
                     <div className=' border-r-2 border-gray-200'>
                        <div>
                            <p>Donna Karan</p>
                            <h2 className='text-blue-700 font-medium  text-sm '>FreeCof Product Sample</h2>
                        </div>
                        <div>
                            <img src={Img2} className='h-40 w-40' />
                        </div>
                        <h2 className='text-blackmx-3'>Sold Out</h2>
                    </div>

                     {/* 8 */}
                     <div className=' border-r-2 border-gray-200'>
                        <div>
                            <p>Donna Karan</p>
                            <h2 className='text-blue-700 font-medium  text-sm '>FreeCof Product Sample</h2>
                        </div>
                        <div>
                            <img src={Img2} className='h-40 w-40' />
                        </div>
                        <h2 className='text-blackmx-3'>Sold Out</h2>
                    </div>


                </div>



                <div>

                </div>
            </div>

        </section>
    )
}
