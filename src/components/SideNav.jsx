import React from 'react'
import Manage from './Manage'
import Preferences from './Preferences'
import white from "../assets/intelzywhite.png"

const SideNav = () => {

  return (
    <div>
      <div className='flex items-center justify-center p-2 mt-4'>
        <img src={white} alt="" className='w-[90%]  rounded-full mr-4' />
      </div>
      <Manage />
      <Preferences />
    </div>
  )
}

export default SideNav