import React from 'react'
import { BsFillMoonFill } from "react-icons/bs"
import { MdOutlineSecurity } from "react-icons/md"
import { useContext } from 'react'
import { ToggleContext } from '../context/context'
import { NavLink } from 'react-router-dom'

const Preferences = () => {

    const {toggle, setToggle} = useContext(ToggleContext)
    const toggleHandler = () => {
        localStorage.setItem("darkmode",!toggle)
        setToggle(!toggle)
    }
    return (
        <div className='mt-8 p-2 text-gray-300'>
            <div className='mb-4 px-3'>PERFRENCES</div>
            <div className=' flex items-center justify-start mx-2 relative p-2  cursor-pointer hover:bg-gray-600 duration-300 rounded-md'>
                <BsFillMoonFill />
                <div className='mx-2'>Theme</div>
                <div className='form-check form-switch absolute right-2'>
                    <input checked={toggle} onChange={toggleHandler} className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top  bg-no-repeat bg-contain bg-gray-300 checked:bg-green-400  focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
            </div>
            <NavLink to="security">
            <div className='flex items-center justify-start py-2  cursor-pointer hover:bg-gray-600 duration-300 rounded-md'>
                <MdOutlineSecurity className='text-2xl mx-2' />
                <div>Security</div>
            </div>
            </NavLink>
        </div>
    )
}

export default Preferences