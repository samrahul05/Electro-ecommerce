import React from 'react'

import Tab_3 from "./section3/Tab_3.png"
import Img1 from "./images/camera-removebg-preview.png"
import Img2 from './images/images-removebg-preview.png'
import Img3 from './images/pc-removebg-preview.png'
import Img4 from './images/360-removebg-preview.png'

export default function Section1() {
    return (
        <section>
            <div className='mt-15'>
                <div className='mx-2 lg:mx-14 px-4'>
                    <div className='mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3'>

                        <div className='bg-gray-100 flex  '>

                            <div className='m-auto'>
                                <img src={Img1} alt='img' className=' h-24 w-24 md:h-32 md:w-32 '/>
                               
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
                                <img src={Img3} alt='img'  className=' h-24 w-24 md:h-32 md:w-32 '/>
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
                                <img src={Img4} alt='img' className='h-20 w-20 md:h-28 md:w-28 '/>
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
    )
}
