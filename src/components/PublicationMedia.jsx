import React from "react";
import NavBar from "./NavBar";
import TopPage from "./TopPage";
import BottomPage from "./BottomPage";

const PublicationMedia = () => {
    return (
        <div>
            <TopPage />
            <NavBar />
            <div className="grid grid-cols-2 gap-4">
                <iframe
                    className="w-full"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                    allowFullScreen
                />
                <iframe
                    className="w-full"
                    height="315"
                    src="https://www.youtube.com/embed/ScNNfyq3d_w"
                    title="Lofi Hip Hop Radio - Beats to Study/Game/Relax"
                    allowFullScreen
                />
                <iframe
                    className="w-full"
                    height="315"
                    src="https://www.youtube.com/embed/t7z0hbZgW3Y"
                    title="Baby Shark Dance | Sing and Dance | @Baby Shark Official | PINKFONG Songs for Children"
                    allowFullScreen
                />
                <iframe
                    className="w-full"
                    height="315"
                    src="https://www.youtube.com/embed/uzjFEMmM0Y0"
                    title="Adele - Someone Like You (Official Music Video)"
                    allowFullScreen
                />
            </div>
            <BottomPage />
        </div>
    );
};

export default PublicationMedia;
