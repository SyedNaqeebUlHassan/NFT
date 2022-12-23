import React from 'react'
import FAQFrom from './FAQFrom'
import NavBar from './NavBar'

function FAQ() {
  return (
    <div style={{background: "linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)"}} className="pb-[100px] w-[1450px]">
        <NavBar/>
         <div className='Collection-Heading  mt-[200px] flex justify-center items-center flex-col text-center mr-[100px] text-white font-mono font-bold text-[40px] leading-[72px]'>
                <h1 className=' w-[273px] h-[60px] '>Freaquently<span className='ml-[15px]'>Asked</span></h1>
                <h1 className=' w-[273px] h-[60px] ml-[100px]'>Question</h1>
        </div>
        <div className='Collection-Paragraph flex justify-center items-center mt-[20px]'>
                <p style={{color:"rgba(255, 255, 255, 0.5)"}} className='w-[443px] h-[60px] font-mono font-medium text-[20px] leading-[30px] text-center'>Wanna Ask Something?</p>
        </div>
        <FAQFrom/>
    </div>
  )
}

export default FAQ