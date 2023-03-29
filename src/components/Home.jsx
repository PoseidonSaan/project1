import React from 'react';
import TopPage from './TopPage';
import NavBar from './NavBar'
import BottomPage from './BottomPage';

import { GiPistolGun } from 'react-icons/gi'
import { GiHandcuffs } from 'react-icons/gi'
import { MdOutlineFamilyRestroom } from 'react-icons/md'
import { FaBalanceScale } from 'react-icons/fa'
import { FaBriefcaseMedical } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaBusinessTime } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'




function Home() {
    return (
        <div>
            <TopPage />
            <NavBar />
            <div className='w-100% h-fit   text-black md:px-20 px-5'>
                <div className='flex flex-col justify-center w-full h-full text-sm font-light'>
                    <div className='pb-4'>
                        <h2 className='inline font-bold text-4xl border-b-4 border-yellow-600 text-yellow-500'>About Us</h2>
                    </div>
                    <div className='pb-2 text-base font-medium'>
                        Spear-headed by Adv. Vaibhav Srivastava, the Chamber provides litigation-related diligence, counseling, and solutions. His office caters to varied clients comprising of Governmental and Non-Governmental Bodies, Multinationals, Financials Institutions and individuals in an array of matters.
                    </div>
                    <div className='flex-row md:flex'>
                        <div className='md:w-1/5 w-1/3 mx-3'>
                            <img
                                src="https://vaibhavsrivastava.netlify.app/static/media/profilePic.13b1b11457a6e4705700.jpg"
                                alt="profilePic"
                                className="w-full mb-4"
                            />

                        </div>
                        <div className=' w-4/5'>
                            <p className='my-3 md:mx-3 mx-0'>
                                Vaibhav Srivastava is a learning enthusiast, law and policy researcher. He is a law graduate of the integrated Bachelor of Arts and Bachelor of Laws (B.A. LL.B.) program from CALC, University of Lucknow, India. He has a deeply vested interest in Business Law, Criminal Law, Human Rights and Social Policy. He has also successfully represented himself on numerous international legal platforms and has sparked the interest of many students in the field of social upliftment, and legal awareness by taking the initiative to organise workshops, talks, and competitions.

                            </p>

                            <p className='my-3 md:mx-3'>
                                He is currently pursuing a Master of Business Laws with the National Law School of India University, Bengaluru and practising advocate at the High Court of Judicature at Allahabad, Lucknow Bench, Lucknow. His contribution to legal research has been praised and sighted by a Hon'ble judge of Allahabad High Court, Lucknow Bench, demonstrating his professional abilities. His academic excellence is felicitated by the Hon'ble Shri Brajesh Pathak, Minister of Law and Justice, Uttar Pradesh Government.

                            </p>

                            <p className='my-3 md:mx-3'>
                                He has a very strong sense of community and teamwork, with an undeniable passion for the field of law and management. He has been involved in advocacy, social inclusion and rights awareness from the very start of his college days; and also, has wide experience in the implementation of novel ideas and programs. His initiative during COVID-19, Table to Screen, includes raising funds for migrant workers and underprivileged children through online activities.

                            </p>
                            <p className='my-3 md:mx-3'>
                                Apart from this, Vaibhav has had a profoundly vested interest in photography, graphic design, video editing & cinematography since his school days. He has got seven international recognition for his short film, Blind Day. During his association with Lucknow-based event companies, he has collaborated with various government authorities and schools, to conduct competitions for the holistic development of the young generation.

                            </p>

                        </div>



                    </div>

                </div>

            </div>

            <div className='w-full h-1/4 md:h-1/2'>
                <div className='grid grid-cols-1 md:grid-cols-4 px-20 pb-48 pt-8 '>


                    <div className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <a href='/businesslaw'>
                            <div className='flex items-center justify-center'>
                                <RiTeamFill className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                            </div>
                            <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                                <p className='group-hover:text-yellow-500'>Business Law</p>
                            </div>
                            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                                Our corporate services help dealing with the crucial and itricate matters efficiently.
                            </div>
                        </a>
                    </div>

                    <div className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <a href='/criminallaw'>
                            <div className='flex items-center justify-center'>
                                < GiPistolGun className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                            </div>
                            <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                                <p className='group-hover:text-yellow-500'>Criminal Law</p>
                            </div>
                            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                                Our corporate services help dealing with the crucial and itricate matters efficiently.
                            </div>
                        </a>
                    </div>


                    <div className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <a href='/whitecollar'>
                            <div className='flex items-center justify-center'>
                                <GiHandcuffs className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                            </div>
                            <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                                <p className='group-hover:text-yellow-500'>White-Collar Crime</p>
                            </div>
                            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                                Our corporate services help dealing with the crucial and itricate matters efficiently.
                            </div>
                        </a>
                    </div>


                    <div className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <a href='/privacylaw'>
                            <div className='flex items-center justify-center'>
                                < FaBusinessTime className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                            </div>
                            <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                                <p className='group-hover:text-yellow-500'>Privacy & Data Protection</p>
                            </div>
                            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                                Our corporate services help dealing with the crucial and itricate matters efficiently.
                            </div>
                        </a>
                    </div>


                    <div className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <a href='/familylaw'>
                            <div className='flex items-center justify-center'>
                                <MdOutlineFamilyRestroom className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                            </div>
                            <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                                <p className='group-hover:text-yellow-500'>Family Law</p>
                            </div>
                            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                                Our corporate services help dealing with the crucial and itricate matters efficiently.
                            </div>
                        </a>
                    </div>


                    <div className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <a href='/constitutionallaw'>
                            <div className='flex items-center justify-center'>
                                < FaBalanceScale className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                            </div>
                            <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                                <p className='group-hover:text-yellow-500'>Constitutional law</p>
                            </div>
                            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                                Our corporate services help dealing with the crucial and itricate matters efficiently.
                            </div>
                        </a>
                    </div>


                    <div className='group bg-gray-600 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <a href='/medicallaw'>
                            <div className='flex items-center justify-center'>
                                <FaBriefcaseMedical className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                            </div>
                            <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                                <p className='group-hover:text-yellow-500'>Medical Negligence</p>
                            </div>
                            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                                Our corporate services help dealing with the crucial and itricate matters efficiently.
                            </div>
                        </a>
                    </div>

                    <div className='group bg-gray-800 grid grid-row-3 p-8 hover:cursor-pointer '>
                        <a href='/civildispute'>
                            <div className='flex items-center justify-center'>
                                < FaHome className='h-1/2 w-1/2 duration:150 group-hover:scale-105 group-hover:fill-white' color='#f59e0b' />
                            </div>
                            <div className='flex place-content-start justify-center text-2xl text-white pb-10'>
                                <p className='group-hover:text-yellow-500'>Civil & Consumer Dispute</p>
                            </div>
                            <div className=' flex place-content-start justify-center text-justify  text-base font-serif text-gray-200 px-6 pb-10'>
                                Our corporate services help dealing with the crucial and itricate matters efficiently.
                            </div>
                        </a>
                    </div>


                </div>
            </div>
            <BottomPage />




        </div>

    );
}

export default Home;