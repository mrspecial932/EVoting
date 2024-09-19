/* eslint-disable @next/next/no-img-element */
import { formatDate, truncate } from '@/services/blockchain'
import { PollStruct } from '@/utils/types'
import { useRouter } from 'next/router'
import React from 'react'

const Polls: React.FC<{ polls: PollStruct[] }> = ({ polls }) => {
  return (
    <div >   
    <div className=' py-12'>
      <h1 className="text-center text-[34px] font-[550px]">Availiable Poll</h1>
      <p className='text-center'> cast your  poll to the right place </p>
      </div>

      <div  className="flex flex-col items-center justify-center ">
      

      <div className="grid grid-cols-1 gap-y-12 md:gap-y-24 gap-x-0 sm:gap-x-24 xl:grid-cols-4 p-0  md:px-12 md:grid-cols-2 auto-rows-[400px]">
        {polls.map((poll, i) => (
          <Poll key={i} poll={poll} />
        ))}
     
      </div>
      </div>

    </div>
  )
}
const Poll: React.FC<{ poll: PollStruct }> = ({ poll }) => {
  const navigate = useRouter()
  return (
    <div className="grid grid-cols-1   gap-[20px] md:grid-cols-2 mx-auto w-full">
      <div
        className="h-[392px]   gap-[20px] md:w-[580px] md:h-[280px]
            grid grid-cols-1 md: justify-start w-full"
      >
        <div className="flex gap-3 h-40 w-[152px]">
          {[...poll.avatars, '/assets/images/question.jpeg', '/assets/images/question.jpeg']
            .slice(0, 2)
            .map((avatar, i) => (
              <img
                key={i}
                src={avatar}
                alt={poll.title}
              
                className=" rounded-[20px] object-cover"
              />
            ))}
        </div>

        <div
          className="w-full h-[257px] gap-[14px] rounded-[24px] space-y-5
                md:w-[320px] md:h-[280px]  bg-[#054136]  px-[15px] py-[18px] md:px-[22px]"
        >
          <h1 className="text-[22px] font-[800px] capitalize">
            {truncate({ text: poll.title, startChars: 30, endChars: 0, maxLength: 33 })}
          </h1>
          <p className="text-[14px] font-[400px]">
            {truncate({ text: poll.description, startChars: 104, endChars: 0, maxLength: 107 })}
          </p>

          <div className="flex justify-between items-center gap-[8px]">
            <div
              className="h-[26px]  bg-[#072023] rounded-full py-[4px] px-[12px]
                text-[12px] font-[400px]"
            >
              {formatDate(poll.startsAt)}
            </div>

            <div className="h-[32px] w-[119px] gap-[5px] flex items-center">
              <div className="h-[32px] w-[32px] rounded-full  bg-[#072023]   " />
              <p className="text-[12px] font-[400px]">
                {truncate({ text: poll.director, startChars: 4, endChars: 4, maxLength: 11 })}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate.push('/polls/' + poll.id)}
            className="h-[44px] w-full rounded-full transition-all duration-300 bg-yellow-400 hover:bg-[#16feb8]"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  )
}

export default Polls
