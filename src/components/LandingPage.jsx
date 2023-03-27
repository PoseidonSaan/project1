import React from "react";
import Logo from '../assets/logo.png'
const Landingpage = () => {
    return(
        <div 
        style={{
            background: "url('https://www.legalbites.in/wp-content/uploads/2019/02/Supreme-Court-of-India.jpg') no-repeat center center fixed",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backgroundSize: "cover",
          }} className='h-screen w-screen'
      
>
            <div className="flex pt-12 pl-12">
            <img src={Logo} alt="logo" className='cursor-pointer h-24' />
            </div>
            <div className="px-20 text-white font-semibold">
                <h1 className="text-8xl pt-32 font-medium">Disclaimer</h1>
                <p className="pt-4 pb-12">
Current rules of the Bar Council of India impose restrictions on maintaining a web page and do not permit lawyers to provide information concerning their areas of practice. Chambers of Jayant Bhatt are, therefore, constrained from providing any further information on this web page.
<br></br>
The rules of the Bar Council of India prohibit law offices from soliciting work or advertising in any manner. By clicking on ‘I AGREE’, the user acknowledges that:
<br></br>
The user wishes to gain more information about Chambers of Jayant Bhatt, it’s practice areas and it’s advocates, for their own information and use; The information is made available/provided to the user only on their specific request and any information obtained or material downloaded from this website is completely at the user’s volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer-client relationship; and none of the information contained in the website is in the nature of a legal opinion or otherwise amounts to any legal advice.

Chambers of Jayant Bhatt is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, they in all cases must seek independent legal advice.
    </p>
    <div className="columns-2 w-80 ">
    <div>
    <button class="bg-orange-400 shadow-lg px-8 py-4 justify-center" ><a href="/home">Agree</a></button>
    </div>
    <div>
    <button class="bg-gray-600 shadow-lg px-8 py-4  justify-center" ><a href='/project1'>Disagree</a> </button>

    </div>
    </div>
            </div>
        </div>

    )
}

export default Landingpage;