import React from 'react';
import Navbar from '../Components/Navbar';
import PlaceholderImg from '../img/placeholder-image.jpg'
import Socials from '../Components/Socials';

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="max-w-[800px] mt-[-100px] w-full h-screen mx-auto text-center flex flex-col justify-center gap-5">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-customPurple to-customPink md:text-4xl sm:text-4xl text-4xl font-semibold md:text-left">About Me</h2>
                <div className="md:w-1/2 md:order-2">
                    <img src={PlaceholderImg} className="md:mr-10 w-80 md:w-80 sm:w-80 mx-auto" />
                </div>
                <div className="md:w-1/2 md:order-1 md:text-left">
                    <div className="md:text-md sm:text-2xl text-2xl p-2 md:text-left">
                        <p>Hello, my name is Kimberly Encinas, and I have a passion for creating websites. Ever since my CS class in high school, I've developed a love for computers and technology.</p>
                        <p>Besides being a web developer, I love fashion, art, music, and video games :)</p>
                    </div>
                </div>
            </div>
            <Socials />
        </div>
    );
}