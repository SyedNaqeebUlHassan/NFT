import React from 'react'
import NavBar from './NavBar'
import TopCard from './TopCard'

function TopCreator() {
  return (
    <div style={{background: "linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)"}} className="pb-[200px] sm:pb-[400px]  lg:h-full sm:w-[1450px]">
        <NavBar/>
        <div className='Collection-Heading mt-[20px]  sm:mt-[200px] flex justify-center items-center '>
                <h1 className='text-white text-[30px] sm:w-[273px] sm:h-[60px] font-mono font-bold sm:text-[40px] sm:leading-[60px] '>Top<span className='ml-[15px]'>Creator</span></h1>
        </div>
        <div className='Collection-Paragraph flex justify-center items-center mt-[10px] '>
                <p style={{color:"rgba(255, 255, 255, 0.5)"}} className='text-[15px] sm:w-[443px] sm:h-[60px] font-mono font-medium sm:text-[20px] sm:leading-[30px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <TopCard/>
    </div>
  )
}

export default TopCreator