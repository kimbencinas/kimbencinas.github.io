import React from 'react';
import Socials from '../Components/Socials';
import Navbar from '../Components/Navbar';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div className="max-w-[800px] mt-[-200px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <h2 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-3xl font-medium">Contact</h2>
                <div className="contact-me">
                    <h5 className="md:text-4xl sm:text-4xl text-4xl font-semibold">Get In Touch</h5>
                    <p className="md:text-md sm:text-2xl text-xl p-3">Feel free to contact me. I'd love to get in touch with you regarding any opportunities or questions you may have.</p>
                    <div>
                        <p className="md:text-md sm:text-2xl text-xl">kimbencinas@gmail.com</p>
                    </div>
                </div>
            </div>
            <Socials />
        </div>
    );
}