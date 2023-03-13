import React from 'react'
import {GiPistolGun} from 'react-icons/gi'
import {GiHandcuffs} from 'react-icons/gi'
import {MdOutlineFamilyRestroom} from 'react-icons/md'
import {FaBalanceScale} from 'react-icons/fa'
import {FaBriefcaseMedical} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import {FaBusinessTime} from 'react-icons/fa'
import {RiTeamFill} from 'react-icons/ri'

const Services = () => {
    const e1 = document.getElementById('b1');
    e1.addEventListener('click', () => {
        window.open('/businesslaw');
    });
    
  return (
    <div className='w-full h-1/4 md:h-1/2'>
        <div className='grid grid-cols-1 md:grid-cols-4 px-20 py-48 '>

           
                 <div  className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer ' id='b1'>
                    <div className='flex items-center justify-center'>
                       <RiTeamFill className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Business Law</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>

                <div  className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                       < GiPistolGun className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Criminal Law</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>
                

                <div  className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                       <GiHandcuffs className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>White-Collar Crime</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>


                <div  className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                   < FaBusinessTime className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Privacy & Data Protection</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>


                <div  className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                       <MdOutlineFamilyRestroom className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Family Law</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>


                <div  className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                       < FaBalanceScale className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Constitutional law</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>


                <div  className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                       <FaBriefcaseMedical className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Medical Negligence</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>

                <div  className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                    <div className='flex items-center justify-center'>
                       < FaHome className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                    </div>
                    <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                        <p className='group-hover:text-yellow-500'>Civil & Consumer Dispute</p>
                   </div>
                   <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                        Our corporate services help dealing with the crucial and itricate matters efficiently.
                    </div>
                </div>

        </div>      
    </div>
  )
}

export default Services