import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/plainlogo.png'
import Whitelogo from '../assets/logo.png'


const NavBar = () => {

  const [nav, setNav] = useState(false)


  return (
    <div className="flex justify-between items-center w-80% h-20 px-4 text-black mx-10">
      <div>
        <a href='/project1'><img src={Logo} alt="logo" className='cursor-pointer ' /></a>
      </div>

      <ul className='hidden md:flex text-black text-xs font-medium'>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200 hover:text-yellow-400 focus:text-yellow-400'><a href='/home'>Home</a></li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'><a href='/areapractice'>Areas Of Practice</a></li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'><a href='/career'>Career</a></li>
        <li className='px-4 cursor-pointer uppercase font-small
        hover:scale-105 duration-200  hover:text-yellow-400 focus:text-yellow-400'><a href='/publicationmedia'>Publication And Media</a></li>

      </ul>


      <div
        onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
        {nav ? <FaTimes size={30} color="white" /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col items-left text-left absolute top-0 left-0 w-full h-screen bg-stone-800 text-white'>
          <li><img src={Whitelogo} alt="logo" /></li>
          <li className='cursor-pointer uppercase font-small
              hover:scale-105 duration-200 py-2 px-20 mt-20 focus:text-yellow-400'><a href="/home">Home</a></li>
          <li className=' cursor-pointer uppercase font-small
              hover:scale-105 duration-200 py-2 px-20 focus:text-yellow-400'><a href="/areapractice">Areas of Practice</a></li>
          <li className='px-20 py-2 cursor-pointer uppercase font-small
             hover:scale-105 duration-200 focus:text-yellow-400'><a href='/career'>Career</a></li>
          <li className='px-20 py-2 cursor-pointer uppercase font-small
             hover:scale-105 duration-200 focus:text-yellow-400'><a href='/publicationmedia'>Publication And Media</a></li>


        </ul>
      )}



    </div>
  )
}

export default NavBar