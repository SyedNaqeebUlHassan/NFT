import React from 'react'
import CollectionbtnGroup from './CollectionbtnGroup'
import CollectionCard from './CollectionCard'
import NavBar from './NavBar'

function Collections() {
  return (
    <div style={{background: "linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)"}} className="pb-[100px]  sm:w-[1450px]">
        <NavBar/>
        <div className='Collection-Heading mt-[20px] sm:mt-[288px] flex justify-center items-center'>
                <h1 className='text-white text-[30px] sm:w-[273px] sm:h-[60px] font-mono font-bold sm:text-[40px] sm:leading-[60px]'>Colleaction</h1>
        </div>
        <div className='Collection-Paragraph flex justify-center items-center mt-[10px]'>
                <p style={{color:"rgba(255, 255, 255, 0.5)"}} className='text-[15px] sm:w-[443px] sm:h-[60px] font-mono font-medium sm:text-[20px] sm:leading-[30px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <CollectionbtnGroup/>
        <CollectionCard/>
    </div>
  )
}

export default Collections