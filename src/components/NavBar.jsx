import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/plainlogo.png'
import Whitelogo from '../assets/logo.png'


const NavBar = () => {

  const [nav, setNav] = useState(false)


  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black">
      <div>
        <img src={Logo} alt="logo" className='cursor-pointer' />
      </div>

      <ul className='hidden md:flex text-black'>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200 hover:text-yellow-400 focus:text-yellow-400'>Home</li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'>areas of practice</li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'>publication & media</li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'>career</li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'>contact us</li>

      </ul>


      <div
        onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
        {nav ? <FaTimes size={30} color="white" /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col items-left text-left absolute top-0 left-0 w-full h-screen bg-stone-800 text-white'>
          <li><img src={Whitelogo} alt="logo" /></li>
          <li className='cursor-pointer uppercase font-small
              hover:scale-105 duration-200 py-2 px-20 mt-20 focus:text-yellow-400'>Home</li>
          <li className=' cursor-pointer uppercase font-small
              hover:scale-105 duration-200 py-2 px-20 focus:text-yellow-400'>areas of practice</li>
          <li className='px-20 py-2 cursor-pointer uppercase font-small
              hover:scale-105 duration-200 focus:text-yellow-400'>publication & media</li>
          <li className='px-20 py-2 cursor-pointer uppercase font-small
             hover:scale-105 duration-200 focus:text-yellow-400'>career</li>
          <li className='px-20 py-2 cursor-pointer uppercase font-small
             hover:scale-105 duration-200 focus:text-yellow-400'>contact us</li>


        </ul>
      )}



    </div>
  )
}

export default NavBar