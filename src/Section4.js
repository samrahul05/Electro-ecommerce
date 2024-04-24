import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tab from "./section3/Tablet.png"
import Printer from "./section3/Printer.png"
import Tab_2 from "./section3/Tab_2.png"
import Tab_3 from "./section3/Tab_3.png"
import img3 from "./section3/cellphone-rb.png"
import Iphone from "./section3/IPhone-removebg-preview.png"
import img1 from "./section3/cell.png"
import img2 from "./section3/watch.png"


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

export default function Section4() {
  return (

    <>
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
    </>
  )
}
