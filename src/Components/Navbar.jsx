import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="App-header">
            <div onClick={handleNav}>
            {!nav ? <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff", }} size="lg" /> : <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", }} size="lg" /> }
            </div>
            <div className="flex hidden justify-end gap-7 p-5 font-medium max-w-[1240px] mx-auto">
                <Link to="/" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">Home</Link>
                <Link to="/about" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">About</Link>
                <Link to="/projects" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">Projects</Link>
                <Link to="/contact" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">Contact</Link>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0">
                    Resume
                    </span>
                </button>
            </div>
            <div className="fixed right-0 top-0 w-[50%] h-full border-l border-l-gray-700 bg-gray-900">
                <div className="flex flex-col justify-center mt-20 gap-10 items-center pt-10">
                    <Link to="/" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 p-3 text-xl hover:bg-gray-400">Home</Link>
                    <Link to="/about" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 p-3 text-xl">About</Link>
                    <Link to="/projects" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 p-3 text-xl">Projects</Link>
                    <Link to="/contact" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 p-3 text-xl">Contact</Link>
                    <button class="relative inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 p-3">
                        <span class="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0">
                            Resume
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}