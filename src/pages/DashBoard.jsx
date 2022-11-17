import React from 'react'
import Balance from '../components/Balance'
import Activity from '../components/Activity'
import Graph from '../components/Graph'
import Transaction from '../components/Transaction'


const DashBoard = () => {

  return (
    <>
      <div className=' dark:bg-gray-900 max-w duration-300 pb-10'>
        <div className=' gap-10 lg:grid grid-cols-12 w-full lg:pt-8'>
          <div className='col-span-8 w-full'>
            <Balance />
            <Graph />
          </div>
          <div className='col-span-4'>
            <Activity />
          </div>
        </div>

        <Transaction />
      </div>



    </>
  )
}

export default DashBoard