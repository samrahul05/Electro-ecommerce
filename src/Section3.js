import React from 'react'
import Img2 from "./images/mobile-phone-removebg-preview.png"
import Img3 from './images/headphone-removebg-preview.png'

export default function Section3() {
    return (
        <div className='mt-10 bg-gray-200 h-full'>
            <div  >
                <ul className='flex justify-center gap-4 py-6'>
                    <li><button className=' border border-yellow-400 rounded-lg px-3 '>Best Deals</button> </li>
                    <li>Tv & Audio</li>
                    <li>Cameras </li>
                    <li>Audio</li>
                    <li>Cell Phones</li>
                    <li>Gps &Navi </li>
                </ul>
            </div>
            <div className='grid grid-cols-3'>


                <div className=' grid grid-cols-2 grid-rows-2  bg-white py-5'>
                    {/* 1 */}
                    <div>
                        <div className='border-r-2 border-gray-200'>
                            <div>
                                <p className='text-xs font-light'>Bulgari</p>
                                <h2 className='text-blue-700 font-medium  text-sm '>Faxtex Product Sample</h2>
                            </div>
                            <div>
                                <img src={Img2} className='h-40 w-40' alt='img'/>
                            </div>

                            <h2 className='text-gray-400 mx-3'>Sold Out </h2>
                        </div>
                    </div>

                    {/* 2  */}
                    <div >
                        <div className='border-r-2 border-gray-200'>
                            <div>
                                <p className='text-xs font-light'>Bulgari</p>
                                <h2 className='text-blue-700 font-medium  text-sm '>Faxtex Product Sample</h2>
                            </div>
                            <div>
                                <img src={Img2} className='h-40 w-40' alt='img'/>
                            </div>

                            <h2 className='text-gray-400 mx-3'>$399.00</h2>
                        </div>
                    </div>
                    {/* 3 */}

                    <div >
                        <div className='border-r-2 border-gray-200'>
                            <div>
                                <p className='text-xs font-light'>Bulgari</p>
                                <h2 className='text-blue-700 font-medium  text-sm '>Faxtex Product Sample</h2>
                            </div>
                            <div>
                                <img src={Img2} className='h-40 w-40' alt='img'/>
                            </div>

                            <h2 className='text-gray-400 mx-3'>$120 </h2>
                        </div>
                    </div>

                    {/* 4  */}
                    <div className=''>
                        <div className='border-r-2 border-gray-200'>
                            <div>
                                <p className='text-xs font-light'>Bulgari</p>
                                <h2 className='text-blue-700 font-medium  text-sm '>Faxtex Product Sample</h2>
                            </div>
                            <div>
                                <img src={Img2} className='h-40 w-40' alt='img'/>
                            </div>

                            <h2 className='text-red-600 mx-3'>$110 <span className=' text-gray-400 mx-10'>$199.00</span></h2>
                        </div>
                    </div>

                </div>

                <div className='bg-white'>
                    <div className=''>
                        <p className='text-xs font-normal mx-2 my-2'>Givenchy</p>
                        <h1 className='text-blue-700 font-medium  text-sm m-2'>Dentoex Product Sample </h1>
                        <button className='bg-yellow-400 px-5 py-4 rounded-full text-black'>
                            <h1>Save</h1>
                            <span className='font-bold text-xl'> 10%</span>
                        </button>
                        <img src={Img3} className='h-72 w-72 mx-auto my-10' alt='img' />
                    </div>

                </div>



            </div>

        </div>
    )
}
