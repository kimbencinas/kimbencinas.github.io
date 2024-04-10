import React from 'react';
import Navbar from '../Components/Navbar';
import PlaceholderImg from '../img/placeholder-image.jpg'
import Socials from '../Components/Socials';
import catselfie from '../img/catselfie.jpg';

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="md:flex flex-row xs:flex-row sm:flex-row justify-center items-center md:gap-10 text-center md:text-left xs:p-5 sm:p-4 md:p-28 mb-24">
                <div>
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-customPurple to-customPink md:text-5xl sm:text-4xl text-4xl font-semibold xs:mb-4 md:mb-20 md:ml-6">About Me</h2>
                    <div className="xs:mb-5 sm:mb-7 text-lg">
                        <p>Hello, my name is Kimberly Encinas, and I have a passion for creating websites. Ever since my CS class in high school, I've developed a love for computers and technology.
                            Besides being a web developer, I love fashion, art, music, video games, and my cat :)</p>
                    </div>
                </div>
                <div className="xs:order-1 sm:order-1">
                    <img src={catselfie} className="sm:w-30 md:mt-3 md:mr-10 sm:w-96 md:w-svw md:ml-25" />
                </div>
            </div>
            <Socials />
        </div>
    );
}