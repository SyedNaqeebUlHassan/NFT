import React from 'react'
import A from '../Assests/A.png'
import B from '../Assests/B.png'
import C from '../Assests/C.png'
import E from '../Assests/E.png'
import I from '../Assests/I.png'
import N from '../Assests/N.png'
import eth from '../Assests/ethereum.png'
import blck from '../Assests/blockchain.png'

function TradingOption() {
  return (
    <div>
        <div className=' flex justify-center items-center flex-col space-y-[20px] mt-[40px] sm:mt-[202.54px] sm:ml-[192.31px] sm:flex sm:justify-around sm:items-center sm:flex-row'>
            <div className='Binance space-x-[5px] sm:space-x-[10.6px] flex'>
                <img
                className=''
                src={B} 
                alt='B'              
                />
                <img
                className=''
                src={I} 
                alt='I'              
                />
                 <img
                className=''
                src={N} 
                alt='N'              
                />
                 <img
                className=''
                src={A} 
                alt='A'              
                />
                 <img
                className=''
                src={N} 
                alt='N'              
                />
                 <img
                className=''
                src={C} 
                alt='C'              
                />
                 <img
                className=''
                src={E} 
                alt='E'              
                />
            </div>
            <div className='etherium'>
                <img
                src={eth}
                alt="eth"
                />
            </div>
            <div>
                <img
                src={blck}
                alt='blck'
                />
            </div>
        </div>
    </div>
  )
}

export default TradingOption