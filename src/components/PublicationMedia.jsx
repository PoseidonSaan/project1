import React from "react";
import NavBar from "./NavBar";
import TopPage from "./TopPage";
import BottomPage from "./BottomPage";
import { AiOutlineMinus } from "react-icons/ai";

const PublicationMedia = () => {
    const videos = [
        {
            title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
            src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
            title: "Lofi Hip Hop Radio - Beats to Study/Game/Relax",
            src: "https://www.youtube.com/embed/ScNNfyq3d_w",
        },
        {
            title: "Baby Shark Dance | Sing and Dance | @Baby Shark Official | PINKFONG Songs for Children",
            src: "https://www.youtube.com/embed/t7z0hbZgW3Y",
        },
        {
            title: "Adele - Someone Like You (Official Music Video)",
            src: "https://www.youtube.com/embed/uzjFEMmM0Y0",
        },
    ];
    return (
        <div>
            <TopPage />
            <NavBar />
            <div
                className='uppercase text-5xl bg-yellow-500 bg-opacity-80 text-white text-left font-black font-[sans-serif]  pt-10 pl-20 mx-10 pb-0 mb-32 h-52'
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
                <h1 className='pt-5 pb-0'>PUblication and</h1>
                <AiOutlineMinus size={150} pt-0 />
            </div>
            <div className="grid grid-cols-2 gap-4">
                {videos.map((video, index) => (
                    <div key={index}>
                        <iframe
                            className="w-full"
                            height="315"
                            src={video.src}
                            title={video.title}
                            allowFullScreen
                        />
                        <p>{video.title}</p>
                        <a href={video.src} target="_blank" rel="noopener noreferrer">
                            <button className="bg-black text-yellow-500 p-6 items-center ">Show more </button>
                        </a>
                    </div>
                ))}
            </div>
            <BottomPage />
        </div>
    );
};

export default PublicationMedia;
