import React from 'react'
import FAQFrom from './FAQFrom'
import NavBar from './NavBar'

function FAQ() {
  return (
    <div style={{background: "linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)"}} className="sm:pb-[800px] sm:h-full lg:h-screen sm:w-[1450px] lg:pb-[1000px]">
        <NavBar/>
         <div className='Collection-Heading mt-[20px] text-[30px] sm:mt-[200px] flex justify-center items-center flex-col text-center sm:mr-[100px] text-white font-mono font-bold sm:text-[40px] sm:leading-[72px]'>
                <h1 className=' sm:w-[273px] sm:h-[60px] '>Freaquently<span className='ml-[15px]'>Asked</span></h1>
                <h1 className=' sm:w-[273px] sm:h-[60px] sm:ml-[100px]'>Question</h1>
        </div>
        <div className='Collection-Paragraph flex justify-center items-center mt-[20px]'>
                <p style={{color:"rgba(255, 255, 255, 0.5)"}} className='text-[15px] sm:w-[443px] sm:h-[60px] font-mono font-medium sm:text-[20px] sm:leading-[30px] text-center'>Wanna Ask Something?</p>
        </div>
        <FAQFrom/>
    </div>
  )
}

export default FAQ