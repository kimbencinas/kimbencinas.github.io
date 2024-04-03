import React from 'react';
import Navbar from '../Components/Navbar';
import PlaceholderImg from '../img/placeholder-image.jpg'
import Socials from '../Components/Socials';

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="md:flex flex-row xs:flex-row sm:flex-row justify-center items-center gap-5">
                <div>
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-customPurple to-customPink md:text-4xl sm:text-4xl text-4xl font-semibold">About Me</h2>
                    <p>Hello, my name is Kimberly Encinas, and I have a passion for creating websites. Ever since my CS class in high school, I've developed a love for computers and technology.</p>
                    <p>Besides being a web developer, I love fashion, art, music, and video games :)</p>
                </div>
                <div className="xs:order-1 sm:order-1">
                    <img src={PlaceholderImg} className="md:mr-10 w-80 md:w-80 sm:w-80 mx-auto" />
                </div>
            </div>
            <Socials />
        </div>
    );
}