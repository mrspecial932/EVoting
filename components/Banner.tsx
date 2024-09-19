import { globalActions } from '@/store/globalSlices'
import { RootState } from '@/utils/types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Image from 'next/image';
const Banner = () => {
  const dispatch = useDispatch()
  const { setCreateModal } = globalActions
  const { wallet } = useSelector((states: RootState) => states.globalStates)

  const onPressCreate = () => {
    if (wallet === '') return toast.warning('Connect wallet first!')
    dispatch(setCreateModal('scale-100'))
  }

  return (
    <main className="mx-auto text-center py-12">
     
      <div  className="mt-16 w-full  rounded-[24px]
        flex items-center justify-center overflow-hidden ">
         <Image
    src={require("../public/assets/images/photo1.png")}  // Path to your image
    alt="Description of the image" // Alt text for accessibility
    width={1303}
    height={212}
    className="rounded-[100px] shadow-sm shadow-[#bfca69] " 
    />
    </div>
      <h1 className="text-[45px] font-[800px]    justify-center  pt-10 pb-12 text-center leading-none"> <span className=' text-[#feb87a]'>Vote </span> Without <span className=' text-[#16feb8]'>Rigging</span> </h1>
     
   
      <button
        className="text-black h-[45px] w-[148px] rounded-full transition-all duration-300
        border border-gray-400 bg-white hover:bg-opacity-20 hover:text-white"
        onClick={onPressCreate}
      >
        Create poll
      </button>
    </main>
  )
}

export default Banner
