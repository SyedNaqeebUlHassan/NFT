import React from 'react'
import AboutImage from '../Assests/AboutImage.png'
import NavBar from './NavBar'
function About() {
  return (
    <div style={{background: "linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)"}} className="h-screen pb-[100px] sm:pb-[400px] sm:w-[1450px] sm:h-full">
        <NavBar/>
            <div  className='About-Heading flex justify-center items-center mt-[20px] sm:mt-[173.61px]'>
                <h1 className='text-white font-mono font-bold text-[30px] sm:w-[165px] sm:h-[47px] sm:text-[40px] sm:leading-[47px] '>About<span className='ml-[10px]'>Us</span></h1>
            </div>
            <div className='About-Paragraph flex justify-center items-center mt-[10px]'>
                <p style={{color:"rgba(255, 255, 255, 0.5)"}} className=' text-[15px] sm:w-[443px] sm:h-[60px] font-mono font-medium sm:text-[20px] sm:leading-[30px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='sm:grid sm:grid-cols-2'>
                <div className='About-Picture hidden sm:block sm:mt-[38px] sm:ml-[100px]'>
                    <img
                    className='w=[490px] h-[755px] rounded-xl'
                    src={AboutImage}
                    alt="img"
                    />
                </div>
                <div className='About-Description mt-[20px] pl-[10px] sm:mt-[119px] sm:ml-[110px] sm:mr-[120px]'>
                        <h1 className='DesCription Heading text-white text-[30px] sm:w-[244px] sm:h-[45px] font-mono font-bold sm:leading-[45px]'>Get Popular<span className='ml-[13px]'>NFT</span></h1>
                        <p style={{color:"rgba(255, 255, 255, 0.5)"}} className='mt-[10px] text-[15px] font-mono font-medium sm:text-[20px] sm:leading-[36px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                        <button style={{background:"linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)"}} className='text-white rounded-md w-[100px] h-[25px] sm:rounded-xl p-[10px 20px] sm:w-[154px] sm:h-[50px] mt-[30px] font-mono font-medium flex items-center justify-center gap-[10px] absolute sm:text-[20px] sm:leading-[30px]'>
                            Show More
                        </button>
                </div>
            </div>
    </div>
  )
}

export default About