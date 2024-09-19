import { connectWallet, truncate } from '@/services/blockchain'
import { RootState } from '@/utils/types'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { wallet } = useSelector((states: RootState) => states.globalStates)

  return (
    <nav
      className="h-[60px] flex justify-between items-center 
      fixed w-full bg-[#061b17]  shadow-lg bg-opacity-80 backdrop-filter backdrop-blur-lg  mx-auto p-4  lg:px-24   border-r-slate-700 opacity-1 
      "
    >
      <Link href="/" className="text-[20px]  sm:text-[24px]">
        <span className="text-yellow-300  font-bold">Chain</span>voting
      </Link>
      {wallet ? (
        <button
          className="h-[36px] w-[130px] 
          sm:w-[148px] px-3 rounded-full text-sm font-bold
          transition-all duration-300  bg-yellow-600 hover:bg-blue-500"
        >
          {truncate({ text: wallet, startChars: 4, endChars: 4, maxLength: 11 })}
        </button>
      ) : (
        <button
          className="h-[48px] w-[130px] 
          sm:w-[148px] px-3 rounded-full text-sm font-bold
          transition-all duration-300 bg-[#1B5CFE] hover:bg-blue-500"
          onClick={connectWallet}
        >
          Connect wallet
        </button>
      )}
    </nav>
  )
}

export default Navbar
