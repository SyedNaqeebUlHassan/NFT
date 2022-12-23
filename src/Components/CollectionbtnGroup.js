import React from 'react'

function CollectionbtnGroup() {
  return (
      <div className='flex justify-center items-center flex-col space-y-[50px] sm:flex sm:justify-around sm:items-center sm:flex-row sm:space-y-0 mt-[10px] sm:ml-[122px] sm:mr-[120px]'>
        { btnTitle.map((data,i)=>{
          if(i===1)
          {
            return (
              <div key={data.key} className=" flex justify-around items-center">
                <button style={{background: "linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)"}} className='rounded-md w-[200px] h-[30px] flex justify-around items-center mt-[90px] p-[5px 70px] gap-[10px] absolute sm:w-[288px] sm:h-[40px] font-mono font-medium sm:text-[20px] sm:leading-[30px] sm:rounded-xl text-white'>
                  {data.title}
                </button>
              </div>
            )

          }
          else {
          return (
          <div key={data.key} className=" flex justify-around items-center">
              <button style={{background:"rgba(255, 255, 255, 0.1)"}} className='rounded-md w-[200px] h-[30px] flex justify-around items-center mt-[90px] p-[5px 70px] gap-[10px] absolute sm:w-[288px] sm:h-[40px] font-mono font-medium sm:text-[20px] sm:leading-[30px] sm:rounded-xl text-white'>
                  {data.title}
              </button>
          </div>
          )
            }
        })
        }
      </div>
  )
}

export default CollectionbtnGroup
const btnTitle=[{key:1,title:"Art"},{key:2,title:"Sport",},{key:3,title:"Photography"},{key:4,title:"Pattern"}]