import React from 'react'
import {SlOptions} from "react-icons/sl"

const Activity = () => {
  return (
    <div className='p-4 bg-white dark:bg-gray-800 duration-300 mx-4 mt-8 lg:mt-0 rounded-md '>
      <div className='font-bold text-gray-700 relative dark:text-white duration-300'>
        Activity
        <SlOptions className="absolute inline right-0 cursor-pointer text-gray-500"/>
        </div>
      <div className=' relative w-80 lg:w-full h-80 mx-auto'>
        <div className=' cursor-pointer absolute top-12 right-10 lg:right-6 xl:right-10 w-48 lg:w-36 xl:w-48 h-48 lg:h-36 xl:h-48 rounded-full flex flex-col justify-center items-center bg-green-400 hover:bg-green-500 duration-300  text-sm'>
          <div className=' font-bold text-base'>$3.20</div>
          <div className='text-gray-600'>Online Shop</div>
        </div>

        <div className='cursor-pointer absolute bottom-12 lg:bottom-16 xl:bottom-12 left-10 lg:left-4 xl:left-10 w-28 h-28 rounded-full flex flex-col justify-center items-center bg-gray-100 hover:bg-gray-200 duration-500 border-4 border-white  text-sm'>
          <div className='font-bold text-base'>$3.20</div>
          <div className=' text-gray-600'>Food</div>
        </div>

        <div className='cursor-pointer absolute bottom-10 lg:bottom-20 xl:bottom-10 left-32 lg:left-24 xl:left-32 w-20 h-20 rounded-full flex flex-col justify-center items-center bg-black border-4 hover:bg-gray-700 duration-500 border-white text-white text-sm'>
          <div className='font-bold text-base'>$3.20</div>
          <div className='text-gray-200'>Tax</div>
        </div>
      </div>

      <div className=' mt-6 mb-6 p-2 rounded overflow-hidden bg-gray-100 dark:bg-gray-700  duration-300'>
        <div className=' mt-8 pl-6 font-semibold mb-5 dark:text-white duration-300'>Comparision (Month)</div>

        <div className=' text-gray-600 dark:text-white duration-300 flex items-center justify-evenly'>
          <span>This Month</span>
          <div className="w-36 bg-white dark:bg-gray-500 rounded-md h-4 cursor-pointer">
            <div className="bg-green-400 hover:bg-green-500   h-4 rounded duration-200" style={{ width: "45%" }}></div>
          </div>
        </div>

        <div className='flex mb-8 mt-2 text-gray-600 dark:text-white duration-300 items-center justify-evenly'>
          <span>Last Month</span>
          <div className="w-36 bg-white dark:bg-gray-500 duration-300 rounded-md h-4">
            <div className="bg-gray-300 dark:bg-gray-600 duration-300 hover:bg-gray-700 cursor-pointer h-4 rounded" style={{ width: "70%" }}></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Activity