import React from 'react'
import balance from '../data/balance'
import {SlOptionsVertical} from "react-icons/sl"


const Balance = () => {
  return (
    <div className=' grid grid-cols-3 gap-4 mx-4 pt-6 '>
        {
            balance.map((balance, index)=>{
                return(
                    <div className=' dark:bg-gray-800 dark:text-white duration-300 rounded-md bg-white p-3 cursor-pointer relative' key={index}>
                        <div className='bg-gray-100 dark:bg-gray-700 duration-300 w-fit p-3 rounded-full'><div className='text-lg md:text-2xl '>{balance.icon} </div></div>
                        <div className='text-gray-500 mt-3 mb-4'>{balance.name}</div>
                        <div className='text-lg md:text-xl font-semibold font-mono'>{balance.price}</div>
                        <div className='absolute top-2 hover:bg-gray-100 p-2 rounded-md right-2'><SlOptionsVertical /></div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Balance