import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsArrowRightShort, BsArrowDownShort } from "react-icons/bs"


const DropDown = ({ icon, name, path, dropdown, index }) => {
    const [dropdownToggle, setDropdownToggle] = useState(() => localStorage.getItem("down") === "true" ? true : false)
    const drop = useRef(null)
    const handleDropdown = () => {
        localStorage.setItem("down", !dropdownToggle)
        setDropdownToggle(!dropdownToggle)
    }
    return (

        dropdown ?
            <>
                <div className={` hover:bg-gray-600  p-2   duration-300 rounded-md cursor-pointer`}>
                    <div onClick={handleDropdown} className='flex items-center relative'>
                        <div className=' text-xl mr-3 '>{icon}</div>
                        <div>{name}</div>
                        <div className='absolute right-2 duration-300 top-1'>{dropdownToggle ? <BsArrowDownShort /> : <BsArrowRightShort />}</div>
                    </div>
                </div>
                {
                    // dropdownToggle &&
                    <div style={{ height: dropdownToggle ? drop?.current?.clientHeight + "px" : "0px" }} className={` ml-3 duration-300 rounded-b-md overflow-hidden`}>

                        <div ref={drop}>{
                            dropdown.map((data, index) => {
                                const { icon, name, path } = data
                                return (
                                    <NavLink activeclassname="active" key={index} to={path} className={`     rounded-md`}>

                                        <div className='flex items-center p-1 hover:bg-gray-600 duration-300 rounded-md'>
                                            <div className='text-xl mr-3 '>{icon}</div>
                                            <div>{name}</div>
                                        </div>

                                    </NavLink>
                                )
                            })
                        }
                        </div>
                    </div>
                }
            </>
            :
            <NavLink activeclassname="active" key={index} to={path} className={`flex items-center hover:bg-gray-600  p-2   duration-300 rounded-md`}>

                <div className=' text-xl mr-3 '>{icon}</div>
                <div>{name}</div>

            </NavLink>
    )
}

export default DropDown