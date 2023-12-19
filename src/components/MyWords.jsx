import React, { useEffect } from 'react'

const MyWords = () => {
 
    const data = JSON.parse(localStorage.getItem('array'))
   
   

    console.log(data);
  return (
   
    <div className='p-8'>
       {
        data?.map((item)=>(
            <div className='flex  items-center mb-2 bg-gray-200 rounded-[10px]'>
                <h1 className=' py-2 px-3 rounded text-[22px] text-red-600'>{item.english}</h1>
                <p>-</p>
                <p className=' py-2 px-3 rounded font-mono'>{item.uzbek}</p>
            </div>
        ))
       }
    </div>
  )
}

export default MyWords