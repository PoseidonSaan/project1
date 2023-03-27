import React from 'react'
import { AiOutlineMinus } from "react-icons/ai"
import { IoChevronForwardSharp } from 'react-icons/io5'
import TopPage from './TopPage';
import NavBar from './NavBar'
import BottomPage from './BottomPage';
const Career = () => {
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
                    <h1 className='pt-5 pb-0'>CAREER ASSOCIATE</h1>
                    <AiOutlineMinus size={150} pt-0 />
                </div>
                <div className="flex justify-center">
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-lg font-bold mb-2">Intern Application Form</h2>
                        <iframe
                            title="Intern Application Form"
                            src="https://forms.gle/swJGZxcLbkodLa529"
                            width="100%"
                            height="1000"
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                        >
                            Loading...
                        </iframe>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-lg font-bold mb-2">Job Application Form</h2>
                        <iframe
                            title="Job Application Form"
                            src="https://forms.gle/RGZreo6YeHpda2JA9"
                            width="100%"
                            height="1000"
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                        >
                            Loading...
                        </iframe>
                    </div>
                </div>

            </div>
            <BottomPage/>
        </div>
    )
}

export default Career