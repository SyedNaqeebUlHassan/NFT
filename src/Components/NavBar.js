import React,{useState} from 'react'
import Search from '../Assests/Vector.svg'
import { Link } from "react-router-dom";

function NavBar() {
    const [showing,setShowing]=useState(false);
    const handleClick=()=>{
        setShowing(!showing);
    }
  return (
    <div>
        <div className='hidden sm:block md:block lg:block'>
            <div style={{background: "linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)"}}  className='header  w-[1450px] h-full pb-[50px] flex justify-around items-center pt-[19px]  flex-wrap'>
                <div className='flex justify-around items-center space-x-[33px]'>
                    <div className='Logo'>
                        <h1 className='text-white '>NFT <span className='text-[#B75CFF] text-[20px]'>Marketplace</span></h1>
                        </div>
                    <div style={{background:"rgba(255, 255, 255, 0.1"}} className='Input-Div  w-[384px] h-[50px] flex items-center justify-around ml-[324px] rounded-xl'>
                        <img
                        src={Search}
                        alt="img"
                        />
                        <input
                            placeholder='Search items and collections'
                            className='Input text-[rgba(255, 255, 255, 0.5)] font-sans font-[500] text-[20px] bg-transparent w-[292px] h-[30px]'
                        />
                    </div>
                </div>
                <div className='featureList font-mono flex justify-around items-center'>
                    <div className=' text-white  flex justify-around items-center space-x-[40px] '>
                        <Link to='/'>Home</Link>
                        <Link to='/About'>About</Link>
                        <Link to='/Collections'>Collections</Link>
                        <Link to='/FeturedArtWorks'>FeturedArtWorks</Link>
                        <Link to='/TopCreator'>TopCreator</Link>
                        <Link to='/FAQ'>FAQ</Link>
                        <button style={{background:"linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)"}} className='text-white rounded-xl p-[10px 20px] w-[171px] h-[50px] font-mono font-medium flex items-center justify-center'>
                            Select Wallet
                        </button>
                    </div>
                </div>
            </div>
        </div>


                         {/* //////////////FOR MOBILE//////////////////////////////////////// */}


        <div style={{background: "linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)"}}  className=' header pt-[20px] pb-[20px] w-screen sm:hidden md:hidden lg:hidden'>
                <div className='flex justify-around items-center space-x-[33px]'>
                    <div className='Logo text-[15px]'>
                        <h1 className='text-white '>NFT <span className='text-[#B75CFF] '>Marketplace</span></h1>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <p className='text-[#B75CFF]' onClick={handleClick}>Menu</p>
                        {showing &&
                        <div className='bg-black flex justify-center items-center flex-col text-white w-[150px] rounded-xl z-50'>
                            <Link to='/'>Home</Link>
                            <Link to='/About'>About</Link>
                            <Link to='/Collections'>Collections</Link>
                            <Link to='/FeturedArtWorks'>FeturedArtWorks</Link>
                            <Link to='/TopCreator'>TopCreator</Link>
                            <Link to='/FAQ'>FAQ</Link>
                        </div>
                        }                       
                    </div>

                </div>
        </div>
    </div>
  )
}

export default NavBar