import React from 'react'
import Tab from "./section3/Tablet.png"
import Tab_2 from "./section3/Tab_2.png"
import Iphone from "./section3/IPhone-removebg-preview.png"
import img4 from "./section3/Printer.png"
import Img5 from './images/360-removebg-preview.png'
import img2 from "./section3/watch.png"
import img1 from "./section3/cell.png"

export default function Section5() {
    return (
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
    )
}
