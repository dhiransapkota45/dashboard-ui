import React, { useState } from 'react'
import { TiWarning } from "react-icons/ti"
import { GiHamburgerMenu } from "react-icons/gi"
import { FiSearch } from "react-icons/fi"
import { SlOptions } from "react-icons/sl"
import SideNav from './SideNav'

const Navbar = () => {
    const [search, setSearch] = useState(false)
    return (
        <>
            <div className={` bg-white duration-300 dark:bg-gray-800 dark:text-white sticky top-0  z-10  flex justify-between p-4  items-center h-16  shadow `}>
                <button className='md:hidden text-2xl cursor-pointer' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><GiHamburgerMenu /></button>

                {/* <SideNav1 /> */}
                <div className='text-xl sm:text-2xl font-bold mx-auto'>Dashboard</div>
                <div className='flex p-2'>
                    <div onClick={() => setSearch((prev) => !prev)} className='p-2 mx-4 rounded-md bg-gray-200 hover:bg-gray-400 cursor-pointer duration-300 dark:bg-gray-900 dark:hover:bg-gray-700'><FiSearch /></div>
                    <div className='p-2 mx-4 rounded-md bg-gray-200 hover:bg-gray-400 cursor-pointer duration-300  dark:bg-gray-900 dark:hover:bg-gray-700'><SlOptions /></div>
                    <div className='  p-2 mx-4 rounded-md bg-gray-200 hover:bg-gray-400 cursor-pointer duration-300  dark:bg-gray-900 dark:hover:bg-gray-700'><TiWarning /></div>
                </div>
                <div className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-gray-700 invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-60" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <SideNav />
                </div>

                
                    {
                        search &&
                        <div className='z-10 absolute right-72 w-32 md:w-72'>
                            <input
                                type="text"
                                className=" dark:bg-gray-700 dark:border-none duration-300 form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput1"
                                placeholder="Search here"
                            />
                        </div>
                    }
            



            </div>
        </>
    )
}

export default Navbar