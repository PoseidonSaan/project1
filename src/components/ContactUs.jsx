
import { BsFillTelephoneFill, BsFillClockFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";
import TopPage from './TopPage';
import NavBar from './NavBar'
import BottomPage from './BottomPage';


const ContactUs = () => {
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
                    <h1 className='pt-5 pb-0'>Contact Us</h1>
                    <AiOutlineMinus size={150} pt-0 />
                </div>

            </div>

            <div className="mx-4 mb-8 md:mb-0 flex-1 w-full pb-16 items-center">
                <h4 className="text-lg mb-4">Contact Us</h4>
                <div className="flex flex-row mb-4 md:mb-4">
                    <BsFillTelephoneFill size={10} /> <a href="tel:+18002162020" className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold '> 011-41324533 |  +91 8447185912</a>

                </div>
                <div className="flex flex-row mb-4 md:mb-4">
                    <p className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold'> <BsFillClockFill></BsFillClockFill>Mon - Sat: 10.00 am - 8.00 pm</p>
                </div>
                <div className="flex flex-row">
                    <p className='hover:scale-105 duration-200 hover:text-yellow-400 font-bold'><IoLocationSharp></IoLocationSharp>A71, New Friends Colony, New Delhi – 110025</p>
                </div>
            </div>
            <BottomPage/>

        </div>
    )
}

export default ContactUs