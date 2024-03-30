import React from 'react';
import Socials from '../Components/Socials';
import Navbar from '../Components/Navbar';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div className="max-w-[900px] xs:mt-[-180px] sm:mt-[-140px] md:mt-[-220px] w-full h-screen mx-auto text-center sm:text-left sm:p-8 md:p-6 flex flex-col justify-center">
                <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-customPurple to-customPink text-4xl xs:mb-5 sm:mb-6 md:mb-5">Contact</h2>
                <div className="contact-me">
                    <h5 className="text-4xl font-semibold xs:mb-8 sm:mb-9 md:mb-12">Get In Touch</h5>
                    <p className="sm:text-2xl md:text-md text-xl xs:mb-7 sm:mb-12 md:mb-9 xs:px-7 sm:px-0">Feel free to contact me. I'd love to get in touch with you regarding any opportunities or questions you may have.</p>
                    <div>
                        <p className="text-xl sm:text-2xl md:text-md">kimbencinas@gmail.com</p>
                    </div>
                </div>
            </div>
            <Socials />
        </div>
    );
}