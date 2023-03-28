import React from 'react'
import whitelogo from '../assets/logo.png'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { BsFillTelephoneFill, BsFillClockFill } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { FaLinkedin } from 'react-icons/fa'

const BottomPage = () => (
    <div className='pt-12'>
        <footer className="bg-[#242A36] text-white py-10">
            <div className="flex flex-wrap flex-col justify-center md:flex-row md:justify-between">
                <div className="mx-4 mb-8 md:mb-0 flex flex-col items-center flex-1 w-full"><a href='/project1'>
                    <img src={whitelogo} alt="Company Logo" className="h-20 w-auto mb-4" />
                </a>
                    <div className="max-w-xs text-left ">
                        <p className="text-m overflow-hidden text-gray-400 pb-4" style={{ textOverflow: 'ellipsis' }}>
                            Chambers of Jayant Bhatt caters to varied clients comprising of Governmental and Non-Governmental Bodies, Multinationals, Financial Institutions and individuals in an array of matters.
                        </p>
                    </div>
                </div>
                <div className="mx-4 mb-8 md:mb-0 uppercase item-center flex-1 w-full">
                    <h4 className="text-lg mb-10 capitalize">Useful Links</h4>
                    <ul>
                        <li className="mb-2"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer"><a href='/areapractice'>Areas Of practice</a></span>
                        </div>
                        </li>
                        <li className="mb-2"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer"><a href='/publicationmedia'>Publication And Media </a></span>
                        </div></li>
                        <li className="mb-2 text-sm"><div className="inline-flex items-center font-bold">
                            <IoChevronForwardSharp className="mr-1" />
                            <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer"><a href='/career'>Career</a></span>
                        </div></li>
                    </ul>
                </div>
                <div className="mx-4 mb-8 md:mb-0 flex-1 w-full">
                    <h4 className="text-lg mb-4">Contact Us</h4>
                    <div className="inline-flex items-center font-bold  mb-4 md:px-3">
                        <BsFillTelephoneFill className="mr-1" /> <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer"><a href='tel:+18002162020'> 011-41324533 |  +91 8447185912</a></span>

                    </div>
                    <div className="inline-flex items-center font-bold  mb-4 md:px-3">
                        <BsFillClockFill className='mr-1' />
                        <span className="text-sm font-bold uppercase hover:scale-105 duration-200 hover:text-yellow-400 cursor-pointer"> Mon - Sat: 10.00 am - 8.00 pm</span>
                    </div>
                    <div className="inline-flex items-center font-bold mb-4 md:px-3 ">
                        <IoLocationSharp className='mr-1' />
                        <p className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold'>A71, New Friends Colony, New Delhi – 110025</p>
                    </div>
                </div>
                <div className="mx-4 mb-8 md:mb-0 flex-1 w-full">
                    <h4 className="text-lg mb-4">Location</h4>
                    <div className="h-96 rounded-md overflow-hidden">
                        <iframe
                            className="w-full h-64 mt-4"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56066.12302676169!2d77.271583!3d28.565778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3917c7b2da5%3A0x724ac47598a5d62e!2sChambers%20of%20Jayant%20Bhatt!5e0!3m2!1sen!2sus!4v1679990940074!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 py-4 text-center">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-white text-lg font-bold mb-2">
                        All Rights Reserved © {new Date().getFullYear()} Chambers of Jayant Bhatt
                    </p>
                    <div className="flex flex-row items-center justify-center">
                        <p className="text-gray-400 text-sm">
                            Follow us on LinkedIn:
                        </p>
                        <a href="https://www.linkedin.com/company/chambers-of-jayant-bhatt/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="ml-2 text-gray-400 text-lg hover:text-blue-500 transition-colors duration-200" />
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    </div>
)

export default BottomPage