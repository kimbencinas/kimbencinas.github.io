import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <header className="App-header">
            <div className="flex justify-end gap-4 p-5 font-medium">
                <Link to="/" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">Home</Link>
                <Link to="/about" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">About</Link>
                <Link to="/projects" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">Projects</Link>
                <Link to="/contact" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">Contact</Link>
                <button className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">Resume</button>
            </div>
        </header>
    )
}