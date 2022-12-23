import React from 'react'

function FooterBanner() {
  return (
    <div className='mt-[200px]'>
        <div style={{background:' linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)'}} className='flex justify-center items-center flex-col w-[1197px] h-[320px] rounded-xl ml-[122px] mr-[120px] flex-wrap'>
            <div className='Banner-Heading w-[498px] h-[150px] flex justify-center items-center flex-col'>
                <h1 className='text-white font-bold text-[50px] leading-[75px] text-center'>Get ready to collect our NFT</h1>
            </div>
            <div className='mt-[30px]'>
                <button style={{background:"rgba(255, 255, 255, 0.5)"}} className="w-[155px] h-[50px] rounded-xl p-[10px 20px] gap-[10px] text-white font-mono font-medium text-[20px] leading-[30px]">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default FooterBanner