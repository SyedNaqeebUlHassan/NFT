import React from 'react'
import Card1 from '../Assests/TopCard1.png'
import Card2 from '../Assests/TopCard2.png'
import Card3 from '../Assests/TopCard3.png'
import Avatar1 from '../Assests/Avatar1.png'
import Avatar2 from '../Assests/Avatar2.png'
import Avatar3 from '../Assests/Avatar3.png'


function TopCard() {
  return (
    <div className='mt-[100px] ml-[122px] flex justify-between items-center mr-[120px] flex-wrap'>

      {Data.map((data)=>(    
             <div style={{background:'rgba(255, 255, 255, 0.1',boxShadow:" 0px 5px 4px rgba(0, 0, 0, 0.25)"}} className='Card-Wrapper w-[389px] h-[525px] rounded-xl flex justify-between items-center flex-col mt-[15px] '>
                        <div className='Card-Img w-[414px] h-[294px] rounded-xl flex justify-between items-center flex-col'>
                                <img
                                className='rounded-xl '
                                src={data.img}
                                alt='cardImg'                
                                />
                                <img 
                                className='rounded-full mt-[-50px]'
                                src={data.avt}
                                alt='avatar'
                                />
                        </div>
                        <div className='Card-Heading'>
                            <h1 className=' text-white font-mono font-bold text-[20px] leading-[30px]' >John Wick</h1>
                        </div>
                        <div className='Card-ParaGraph w-[307px] h-[46px] text-center'>
                            <p style={{color:"rgba(255, 255, 255, 0.5"}} className=' text-white font-mono font-medium text-[15px] leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <button style={{background:"linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)"}} className='mb-[40px] text-white rounded-xl p-[10px 20px] w-[337px] h-[50px] gap-[10px] font-mono font-medium text-[20px] leading-[30px] flex items-center justify-center'>
                            + Follow
                        </button>
             </div>
             ))}
    </div>
  )
}

export default TopCard
const Data=[{img:Card1,avt:Avatar1},{img:Card2,avt:Avatar2},{img:Card3,avt:Avatar3}]