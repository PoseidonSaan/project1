import React from 'react'
import TopPage from './TopPage';
import NavBar from './NavBar'
import BottomPage from './BottomPage';
import {AiOutlineMinus } from 'react-icons/ai';
import {GiPistolGun} from 'react-icons/gi'
import {GiHandcuffs} from 'react-icons/gi'
import {MdOutlineFamilyRestroom} from 'react-icons/md'
import {FaBalanceScale} from 'react-icons/fa'
import {FaBriefcaseMedical} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import {FaBusinessTime} from 'react-icons/fa'
import {RiTeamFill} from 'react-icons/ri'
import {GiFullMotorcycleHelmet} from 'react-icons/gi'

const AreaPractice = () => {
  return (
    <div>
          <TopPage/>
            <NavBar/>
            
       <div
          className='uppercase text-5xl bg-yellow-700 bg-opacity-80 text-white text-left font-black font-[sans-serif]  pt-10 pl-20 mx-10 pb-0 mb-32 h-52'
          style={{
            background: "url('https://jayantbhatt.in/wp-content/uploads/2019/01/header_bg-copyright.png') no-repeat center center fixed",
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(232, 150, 19, 0.5)",
            minHeight: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundAttachment: "local",
          }}>
          <h1 className='pt-5 pb-0'>AREAS OF PRACTICE</h1>
          <AiOutlineMinus size={150} pt-0 />
        </div>
        

    <div className='w-80% h-1/4 md:h-1/2 mx-20 bg-slate-200 flex justify-center py-10 mb-20'>
    <div className='grid grid-cols-1 md:grid-cols-3   gap-8 '>

       <div>
             <div  className='group bg-gray-800 grid grid-row-2 p-0 hover:cursor-pointer '>
                <a href='/businesslaw'>
                <div className='flex items-center justify-center'>
                   <RiTeamFill className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Business Law</p>
               </div>
               </a>
            </div>
            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>

        </div>
           
        <div>

            <div  className='group bg-gray-600 grid grid-row-2 p-0 hover:cursor-pointer '>
                <a href='/criminallaw'>
                <div className='flex items-center justify-center'>
                   < GiPistolGun className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Criminal Law</p>
               </div>
               </a>
              
            </div>

            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>

        </div>
            
        <div>
            <div  className='group bg-gray-800 grid grid-row-2 p-0 hover:cursor-pointer '>
            <a href='/whitecollar'>
                <div className='flex items-center justify-center'>
                   <GiHandcuffs className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>White-Collar Crime</p>
               </div>
            </a>
            </div>
            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>
        </div>

        <div>

            <div  className='group bg-gray-600 grid grid-row-2 p-0 hover:cursor-pointer '>
            <a href='/privacylaw'>
                <div className='flex items-center justify-center'>
               < FaBusinessTime className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Privacy & Data Protection</p>
               </div>
            </a>
            </div>
            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>
        </div>

        <div>
            <div  className='group bg-gray-600 grid grid-row-2 p-0 hover:cursor-pointer '>
            <a href='/familylaw'>
                <div className='flex items-center justify-center'>
                   <MdOutlineFamilyRestroom className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Family Law</p>
               </div>
            </a>
            
            </div>
            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>
        </div>

        <div>
            <div  className='group bg-gray-800 grid grid-row-2 p-0 hover:cursor-pointer '>
            <a href='/constitutionallaw'>
                <div className='flex items-center justify-center'>
                   < FaBalanceScale className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Constitutional law</p>
               </div>
            </a>
            
            </div>
            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>
        </div>

        <div>
            <div  className='group bg-gray-600 grid grid-row-2 p-0 hover:cursor-pointer '>
            <a href='/medicallaw'>
                <div className='flex items-center justify-center'>
                   <FaBriefcaseMedical className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Medical Negligence</p>
               </div>
            </a>
              
            </div>
            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
            <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>
        </div>

        <div>
            <div  className='group bg-gray-800 grid grid-row-2 p-0 hover:cursor-pointer '>
            <a href='/civildispute'>
                <div className='flex items-center justify-center'>
                   < FaHome className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                </div>
                <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                    <p className='group-hover:text-yellow-500'>Civil & Consumer Dispute</p>
               </div>
            </a>
             
            </div>
            <div className=' flex text-black px-6 pb-10 pt-4'>
                <p className='justify-center text-justify  text-base font-serif '>
                    Our corporate services help dealing with the crucial and itricate matters efficiently.
                </p>
                </div>
        </div>

        <div>

<div  className='group bg-gray-600 grid grid-row-2 p-0 hover:cursor-pointer '>
<a href='/labourlaw'>
    <div className='flex items-center justify-center'>
   < GiFullMotorcycleHelmet className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
    </div>
    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
        <p className='group-hover:text-yellow-500'>Labour & Employment Law</p>
   </div>
</a>
</div>
<div className=' flex place-content-start justify-center text-justify  text-base font-serif text-black px-6 pb-10 pt-4'>
<p className='justify-center text-justify  text-base font-serif '>
        Our corporate services help dealing with the crucial and itricate matters efficiently.
    </p>
    </div>
</div>

    </div>      
</div>

<BottomPage/>

    </div>

  )
}

export default AreaPractice
