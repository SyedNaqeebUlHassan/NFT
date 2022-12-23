import React from 'react'
import Line from '../Assests/Line1.png'

function FAQFrom() {
  return (
    <div className='flex justify-between items-center flex-wrap h-screen pb-[100px] sm:ml-[122px] sm:mr-[120px] lg:h-full '>   
        {array.map((data,i)=>(      
                <div className='flex justify-center items-center flex-col' key={i}>
                    <div style={{color:"rgba(255, 255, 255, 0.5)"}} className='text-[15px] flex justify-between items-center sm:w-[589.8px] font-mono font-medium sm:text-[20px] sm:leading-[30px] mt-[20px]'>
                        <input
                        className='bg-transparent w-[300px] sm:w-[550px]'
                        type="text"
                        placeholder='Lorem ipsum ipsum ?'
                        />
                        <p>+</p>
                    </div>
                    <div >
                        <img
                        className="mt-[20px] "
                        src={Line}
                        alt="LineImg"
                        />
                    </div>
                </div>
        ))}   
     </div>
  )
}

export default FAQFrom
const array=[1,2,3,4,5,6]