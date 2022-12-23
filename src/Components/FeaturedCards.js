import React from 'react'
import Card1 from '../Assests/Card1.png'
import Card2 from '../Assests/Card2.png'
import Card3 from '../Assests/Card3.png'

function FeaturedCards() {
  return ( 
        <div className='mt-[20px] pl-[12.5px] pr-[12.5px] sm:pl-0 sm:pr-0 sm:ml-[122px] flex justify-between items-center sm:mr-[120px] flex-wrap '>
        {cardImage.map((data,i)=>{
            return (
                    <div key={i} style={{background:'rgba(255, 255, 255, 0.1',boxShadow:" 0px 5px 4px rgba(0, 0, 0, 0.25)"}} className='Card-Wrapper w-[170px] h-[400px] sm:w-[389px] sm:h-[595px] rounded-xl flex justify-center items-center flex-col mt-[15px]'>
                        <div className='Card-Img w-[150px] h-[190px] sm:w-[337px] sm:h-[380px] rounded-xl '>
                                <img
                                src={data.img}
                                alt='cardImg'                
                                />
                        </div>
                        <div className='Card-Description'>
                            <div style={{color:" rgba(255, 255, 255, 0.5)"}} className='flex justify-between items-center sm:flex sm:justify-between sm:items-center sm:w-[337px] sm:mt-[20px] font-medium font-mono  '>
                                <p className='text-[10px] sm:text-[20px] sm:leading-[30px]'>@Johny</p>
                                <p className='text-[10px] sm:text-[15px] sm:leading-[22px]'>Current Bid</p>
                            </div>
                            <div  className='flex justify-between items-center sm:flex sm:justify-between sm:items-center sm:w-[337px] mt-[20px] font-mono text-white font-bold'>
                                <p className='text-[10px] sm:text-[20px] sm:leading-[30px]'>Yellow Painting</p>
                                <p className='text-[10px] sm:text-[20px] sm:leading-[30px]'>0.005 ETH </p>
                            </div>
                            <button style={{background:"linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)"}} className='text-white rounded-md w-[150px] h-[30px] sm:rounded-xl mt-[20px] p-[10px 20px] gap-[10px] sm:w-[337px] sm:h-[50px] flex items-center justify-center font-medium font-mono sm:text-[20px] sm:leading-[30px]'>
                            Place a bid
                            </button>
                        </div>
                    </div>  
            )
        })
        }        
        </div>
  )
}

export default FeaturedCards
const cardImage=[{img:Card1},{img:Card2},{img:Card3}]