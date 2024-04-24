import React from 'react'
import './index.css'
import Img1 from "./images/camera-removebg-preview.png"
import Img2 from './images/images-removebg-preview.png'
import Img3 from './images/pc-removebg-preview.png'
import Img4 from './images/360-removebg-preview.png'

export default function Section1() {
  return (
    <section className=' px-12 mx-auto gap-4 grid grid-cols-4  mt-16'>

      <div className=' h-36 bg-gray-100 border border-white flex px-5 rounded-sm'>

        <div>
          <img src={Img1} className='h-28 w-24' />
        </div>

        <div className='text-gray-500 mx-auto font-normal text-base '>

          <p className='text-gray-500 mt-5 '>CATCH BIG </p>
          <p className='text-black font-medium text-bold'>DEALS <span className='text-gray-500 font-normal'> ON THE</span></p>
          <p> CAMERAS</p>
          <h3 className='mt-4 text-black font-medium text-bold'>Shop now</h3>
        </div>

      </div>
      <div className='h-36 bg-gray-100 border border-white flex gap-2 px-5 rounded-sm'>

        <div className='my-1'>
          <img src={Img2} className='h-28 w-24' />
        </div>
        <div className='text-gray-500 mx-auto font-normal text-base'>
          <p className='mt-4'>TABLETS,</p>
          <p >SMARTPHONES</p>
          <p className='text-black font-semibold'>AND  MORE</p>

          <div className='flex gap-1 mt-2 '>
            <div>
              <p className="text-xs">UP</p>
              <p className="text-xs -mt-1">TO</p>
            </div>
            <h1 className='text-black font-bold text-3xl  -mt-1'>70%</h1>
          </div>
        </div>

      </div>

      <div className=' h-36 bg-gray-100 border border-white flex px-5 rounded-sm'>

        <div className='m-auto'>
          <img src={Img3} className='h-28 w-24' />
        </div>
        <div className='text-gray-500 m-auto font-normal text-base'>

          <p className='text-gray-500 mt-2 '>SHOP THE </p>
          <p className='text-black font-medium '>HOTTEST</p>
          <p>PRODUCTS</p>
          <h3 className='mt-7 font-medium text-black'>Shop now</h3>
        </div>

      </div>

      <div className=' h-36 bg-gray-100 border border-white flex px-5 rounded-sm'>

        <div className='m-auto'>
          <img src={Img4} className='h-28 w-24' />
        </div>

        <div className='text-gray-500 m-auto font-normal text-base'>

          <p className='text-gray-500 mt-2 font-normal '>THE NEW</p>
          <p className=''>STANDARD</p>
          <p className='text-black font-medium '>360 CAMERAS</p>

          <div className='flex gap-1 mt-2 '>
            <div>
              <p className="text-xs">UP</p>
              <p className="text-xs -mt-1">TO</p>
            </div>
            <h1 className='text-black font-bold text-3xl  -mt-1'>70%</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
