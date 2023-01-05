import React from 'react'
import manageData from '../data/manage'
import DropDown from './DropDown'

const Manage = () => {
    return (
        <div className='mt-8 text-gray-300'>
            <div className='mb-4 px-3'>MANAGE</div>
            <div className=' p-3'>
                {manageData.map((data, index) => {

                    return (
                        <DropDown index={index} {...data} />

                    )
                })}
            </div>
        </div>
    )
}

export default Manage
