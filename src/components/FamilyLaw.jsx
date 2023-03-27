import React from 'react'
import { AiOutlineMinus } from "react-icons/ai"
import { IoChevronForwardSharp } from 'react-icons/io5'
import TopPage from './TopPage';
import NavBar from './NavBar'
import BottomPage from './BottomPage';
const FamilyLaw = () => {
    return (
        <div>
               <TopPage/>
            <NavBar/>
            <div className='pt-20'>
                <div
                    className='uppercase text-5xl bg-yellow-5G00 bg-opacity-80 text-white text-left font-black font-[sans-serif]  pt-10 pl-20 mx-10 pb-0 mb-32 h-52'
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
                    <h1 className='pt-5 pb-0'>CONSTITUTIONAL LAW</h1>
                    <AiOutlineMinus size={150} pt-0 />
                </div>

                <div
                    className="flex flex-col md:flex-row md:px-[10vw] px:auto mx-24"
                    style={{
                        background: "url('https://jayantbhatt.in/wp-content/uploads/2019/02/family-law-.jpg') no-repeat center center fixed",
                        backgroundBlendMode: "overlay",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        backgroundSize: "cover",
                    }}
                >

                    {/* Left half */}
                    <div className="md:w-1/2 p-4">
                        <img
                            src='https://jayantbhatt.in/wp-content/uploads/2019/02/family-law-.jpg'
                            alt="businesslaws"
                            className="w-full mb-4"
                        />
                        <ul>
                            <li className="mb-2"><div className="inline-flex items-center ">
                                <IoChevronForwardSharp size={20} className="mr-1" />
                                <span className="text-sm  uppercase">FAMILY LAWS – DIVORCE AND DISSOLUTION </span>
                            </div>
                            </li>
                            <li className="mb-2"><div className="inline-flex items-center ">
                                <IoChevronForwardSharp size={20} className="mr-1" />
                                <span className="text-sm  uppercase">CUSTODY AND GUARDIANSHIP OF CHILDREN</span>
                            </div></li>
                            <li className="mb-2"><div className="inline-flex items-center ">
                                <IoChevronForwardSharp size={20} className="mr-1" />
                                <span className="text-sm  uppercase">MAINTENANCE CASES
                                </span>
                            </div></li>
                            <li className="mb-2"><div className="inline-flex items-center ">
                                <IoChevronForwardSharp size={20} className="mr-1" />
                                <span className="text-sm  uppercase">CASES UNDER DOMESTIC VIOLENCE</span>
                            </div></li>
                            <li className="mb-2"><div className="inline-flex items-center ">
                                <IoChevronForwardSharp size={20} className="mr-1" />
                                <span className="text-sm  uppercase">CHILD CUSTODY MATTERS</span>
                            </div></li>
                            <li className="mb-2"><div className="inline-flex items-center ">
                                <IoChevronForwardSharp size={20} className="mr-1" />
                                <span className="text-sm  uppercase">RIGHTS OF WOMEN IN UNDIVIDED PROPERTY</span>
                            </div></li>
                            
                        </ul>
                    </div>

                    {/* Right half */}
                    <div className="md:w-1/2 p-4">
                        <h1 className="text-4xl font-bold font-[sans-serif] mb-4">Congruous Redressal of Matrimonial Disputes</h1>
                        <p className="mb-4 font-[sans-serif] text-justify font-thin">
                        With an ever-evolving society and rapidly changing laws, it’s easy for a person to find himself stuck in its complications with no other efficacious remedy left but to enter litigation. Tussles in a marriage are unavoidable and can lead to civil as well as criminal proceedings. 

                        </p>
                        <p className="mb-4 font-[sans-serif] text-justify font-thin">
                        Depending upon the relationship a couple shares, divorce may be contested or can take shape of mutual divorce. In both cases, it is necessary to take proper steps, ensuring one’s peace of mind. 



                        </p>
                        <p className="mb-4 font-[sans-serif] text-justify font-thin">
                        The Chamber deals with most commonly brought up grounds including but not limited to cruelty, separation, desertion, and adultery. Proving these grounds involves a lot of care and scrutiny while drafting and framing the pleadings. This is where our team provides you with the best legal drafting and timely assistance. 
                        </p>
                        <p className="mb-4 font-[sans-serif] text-justify font-thin">
                        The office has always strived to create and implement innovative and effective methods of providing cost-effective, quality representation, and services for our clients and will continue to meet and exceed the expectations of our valued clients. While providing legal solutions for Matrimonial and Family Disputes, the Chamber advices its foreign and domestic clientele on all aspects of matrimonial and family matters.
                        </p>


                    </div>
                </div>






            </div>
            <BottomPage/>
        </div>
    )
}

export default FamilyLaw