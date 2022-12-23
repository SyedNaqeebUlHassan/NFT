import React from 'react'
import Line from '../Assests/Line1.png'

function FAQFrom() {
  return (
    <div className='flex justify-between items-center flex-wrap ml-[122px] mr-[120px]'>   
        {array.map((data)=>(      
                <div className='flex justify-center items-center flex-col'>
                    <div style={{color:"rgba(255, 255, 255, 0.5)"}} className='flex justify-between items-center w-[589.8px] font-mono font-medium text-[20px] leading-[30px] mt-[20px]'>
                        <input
                        className='bg-transparent w-[550px]'
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