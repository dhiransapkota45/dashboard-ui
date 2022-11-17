import React from 'react'
import transaction from '../data/transaction'


const Transaction = () => {
  return (
    <div className='my-6 mx-6 bg-white dark:bg-gray-800 dark:text-white duration-300 p-2 rounded-md'>
      <div className='font-bold p-2'>Transaction history</div>
      <div className='mx-4'>
        <div className="overflow-auto">
          <table className="min-w-full relative">
            <tbody>
              {
                transaction.map((userdata, index) => {
                  return (
                      <tr key={index} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap  "> <div className='flex items-center'>
                          <img className='w-12 h-12 mr-2  rounded-full' src={userdata.image} />

                          {userdata.name}</div></td>
                        <td className="  px-6 py-4 whitespace-nowrap">
                          {userdata.paymentType}
                        </td>
                        <td className=" px-6 py-4 whitespace-nowrap">
                          {userdata.time}
                        </td>
                        <td className=" px-6 py-4 whitespace-nowrap">
                          {userdata.price}
                        </td>
                        <td className=" px-6 py-4 whitespace-nowrap">
                          {userdata.status}
                        </td>
                      </tr>


                  )
                })
              }
            </tbody>
          </table>
        </div>


      </div>
    </div>
  )
}

export default Transaction