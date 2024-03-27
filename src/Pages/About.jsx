import React from 'react';
import Navbar from '../Components/Navbar';

export default function About() {
    return (
        <div>
            <Navbar />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-3xl font-medium">About Me</h2>
            <div className="p-4">
                <p>Hello, my name is Kimberly and I have a passion for creating websites. Ever since my CS class in high school, I've developed a love for computers and technology.</p>
                <p>Besides being a web developer, I love fashion, art, music, and video games.</p>
            </div>
        </div>
    );
}