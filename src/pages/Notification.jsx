import React, { useState } from 'react'

const Notification = () => {

  const images = [
    "https://images.unsplash.com/photo-1670672942264-e3ab41122241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  ];
  const [indexer, setIndexer] = useState(0)

  const height = images.length * 348

  return (
    <>
      <div className=' flex justify-center mt-5'>
        <div className=' w-96 h-[768px] overflow-hidden border'>
          <div style={{ height: height, top: -indexer * 348 }} className=' duration-500 relative'>
            {
              images.map((image, index) => {
                return (
                  <div className={` h-96 ${index===indexer ? " w-full" : " w-1/2"} duration-500 `}>
                    <img className='' src={image} alt="" />
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* btns */}
      </div>
      <div className=''>
        <button disabled={indexer===images.length-1} onClick={() => setIndexer(indexer + 1)} className=' bg-emerald-700'>Increment</button>
        <button disabled={indexer===0} onClick={() => setIndexer(indexer -1 )} className=' bg-red-500'>Decrement</button>
      </div>
    </>
  )
}

export default Notification