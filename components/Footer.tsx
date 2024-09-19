import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      className="w-full h-[192px] py-[37px]
      rounded-t-[24px] flex flex-col items-center justify-center
      bg-[#023b1bf6] bg-opacity-50 px-5"
    >
      <div className=" justify-center items-center space-x-4">
       <h1 className='text-[23px] font-semibold'>Olayinka Yusuff </h1> 
       <h1>Csc/2018/****</h1> 
      </div>

      <hr className="w-full sm:w-[450px] border-t border-gray-400 mt-3" />
      <p className="text-sm font-[500px] mt-5">Obafemi Awolowo University </p>
      <p className="text-sm font-[500px] ">©️{new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
