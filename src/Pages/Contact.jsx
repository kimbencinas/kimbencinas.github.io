import React from 'react';
import Socials from '../Components/Socials';

export default function Contact() {
    return (
        <div className="container">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-3xl font-medium">Contact</h2>
            <div className="contact-me">
                <h5>Get In Touch</h5>
                <p>Feel free to contact me. I'd love to get in touch with you regarding any opportunities or questions you may have.</p>
                <div>
                    <p>kimbencinas@gmail.com</p>
                    <Socials />
                </div>
            </div>
        </div>
    );
}