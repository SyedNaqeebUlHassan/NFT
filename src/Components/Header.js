import React from 'react'
import image1 from '../Assests/Rectangle 15.jpg'
import image2 from '../Assests/Rectangle 16.png'
import image3 from '../Assests/Rectangle 17.png'
import image4 from '../Assests/Rectangle 18.png'
import image5 from '../Assests/Rectangle 19.png'
import image6 from '../Assests/Rectangle 20.png'
import image7 from '../Assests/Rectangle 21.png'
import NavBar from './NavBar'
import TradingOption from './TradingOption'

function Header() {
  return (
        <div style={{background: "linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)"}}  className=' header  sm:w-[1450px] h-full pb-[100px]'>
        <NavBar/>
            <div  className='flex justify-center items-center flex-col sm:grid sm:grid-cols-2'>
                <div className='Header-Description '>
                    <div className='Header Heading mt-[40px] w-full h-[50px] pl-[5px] sm:w-[490px] sm:h-[180px] sm:ml-[122px] sm:mt-[202px] absolute'>
                        <h1 className=' font-mono  sm:text-[50px] font-bold sm:leading-[120%] text-white'>Create, Sell & Collect Your Own Creative NFT</h1>
                    </div>
                    <div className='Header-ParaGraph mt-[100px] ml-[5px] sm:w-[490px]  sm:h-[72px] sm:ml-[122px] sm:mt-[392px]'>
                        <p style={{color:'rgba(255, 255, 255, 0.5)'}} className='font-mono font-medium sm:text-[20px] sm:leading-[180%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>
                    </div>
                    <div className='btn-grup flex justify-around items-center sm:flex mt-[10px]'>
                        <button style={{background:"linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)"}} className='text-white text-[10px] h-[25px] w-[80px] sm:text-[20px] sm:rounded-xl sm:p-[10px 20px] sm:w-[161px] sm:h-[50px] sm:ml-[25px] sm:mt-[72px] font-mono font-medium flex items-center justify-center'>
                            Explore Now
                        </button>
                        <button style={{background:" rgba(255, 255, 255, 0.1"}} className='text-white h-[25px] w-[80px] text-[10px] sm:rounded-xl sm:text-[20px]  sm:p-[10px 20px] sm:w-[117px] sm:h-[50px] sm:ml-[30px] sm:mt-[72px] font-mono font-medium flex items-center justify-center'>
                            Sell NFT
                        </button>
                    </div>
                    <div className='stats' >
                        <div className='mt-[20px] pl-[5px] pr-[10px] sm:ml-[132px] sm:mt-[40px] flex justify-between items-center sm:w-[490px] '>
                            <div>
                                <h1 className='sm:w-[72px] sm:h-[45px] sm:ml-[8px] font-bold sm:text-[30px] sm:leading-[45px] text-white font-mono'>37k+</h1>
                                <p style={{color:"rgba(255, 255, 255, 0.5"}} className='text-[10px] sm:w-[88px] sm:h-[30px] font-medium sm:text-[20px] sm:leading-[30px]'> ArtWorks</p>
                            </div>
                            <div>
                                <h1 className='sm:w-[72px] sm:h-[45px] sm:ml-[8px] font-bold sm:text-[30px] sm:leading-[45px] text-white font-mono'>20k+</h1>
                                <p style={{color:"rgba(255, 255, 255, 0.5"}} className=' text-[10px] sm:w-[88px] sm:h-[30px] font-medium sm:text-[20px] sm:leading-[30px]'> Artists</p>
                            </div>
                            <div>
                                <h1 className='sm:w-[72px] sm:h-[45px] sm:ml-[8px] font-bold sm:text-[30px] sm:leading-[45px] text-white font-mono'>99k+</h1>
                                <p style={{color:"rgba(255, 255, 255, 0.5"}} className=' text-[10px] sm:w-[88px] sm:h-[30px] font-medium sm:text-[20px] sm:leading-[30px]'> Aucations</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='Header-Picture ml-[10px] mt-[10px] sm:mt-[-80px] '>
                            <div className='flex '>
                                <div className='mt-[20px] w-[90px] h-[70px] sm:w-[187px] sm:h-[140px] sm:mt-[180px]  '>
                                    <img
                                    className=' rounded-md sm:rounded-xl'
                                    src={image1}
                                    alt='img'
                                    />
                                </div>
                                <div className=' mt-[20px]  w-[90px] h-[54px] ml-[10px] sm:w-[187px] sm:h-[108px] sm:mt-[180px] sm:ml-[15px] '>
                                    <img
                                    className='rounded-md  sm:rounded-xl'
                                    src={image2}
                                    alt='img'
                                    />
                                </div>
                            </div>
                            <div className='flex '>
                                <div className=' mt-[20px] w-[90px] h-[110px] sm:w-[187px] sm:h-[220px] sm:mt-[15px]'>
                                        <img
                                        className=' rounded-xl'
                                        src={image3}
                                        alt='img'
                                        />
                                </div>  
                                <div className='mt-[20px] w-[90px] h-[110px] ml-[10px] sm:w-[187px] sm:h-[220px] sm:mt-[-15px] sm:ml-[15px]'>
                                        <img
                                        className='rounded-xl'
                                        src={image5}
                                        alt='img'
                                        />
                                </div>   
                            </div> 
                            <div className='flex '>
                                <div className='mt-[20px]  w-[90px] h-[65px] sm:w-[187px] sm:h-[127px] sm:mt-[15px]'>
                                        <img
                                        className='rounded-xl'
                                        src={image4}
                                        alt='img'
                                        />
                                </div>  
                                <div className='mt-[20px] w-[90px] h-[80px] ml-[10px] sm:w-[179px] sm:h-[159px] sm:mt-[-15px] sm:ml-[15px]'>
                                        <img
                                        className='rounded-xl'
                                        src={image6}
                                        alt='img'
                                        />
                                </div>   
                            </div>  
                            <div className='mt-[20px]  sm:w-[187px] sm:h-[412px] sm:mt-[-470px] sm:ml-[405px] hidden sm:block'> 
                                        <img
                                        className='rounded-xl'
                                        src={image7}
                                        alt='img'                                       
                                        />
                            </div>           
                    </div>
                 </div>
                <TradingOption/>
            </div>
  )
}

export default Header