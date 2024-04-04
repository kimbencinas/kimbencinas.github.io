import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faLinkedinIn, faFreeCodeCamp, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Socials() {
    return (
        <div className="fixed bottom-7 left-0 md:right-3/4 right-0 flex flex-row gap-7 p-4 justify-center">
            <a href="https://codepen.io/kimmuaeong" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCodepen} style={{ color: "#ffffff" }} className="size-5 xs:size-7 sm:size-6 md:size-6 lg:size-7" />
            </a>
            <a href="https://www.linkedin.com/in/kimberly-encinas-656929252/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#ffffff" }} className="size-5 xs:size-7 sm:size-6 md:size-6 lg:size-7" />
            </a>
            <a href="https://www.freecodecamp.org/kimbencinas" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFreeCodeCamp} style={{ color: "#ffffff" }} className="size-5 xs:size-7 sm:size-6 md:size-6 lg:size-7" />
            </a>
            <a href="https://github.com/kimbencinas" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} className="size-5 xs:size-7 sm:size-6 md:size-6 lg:size-7" />
            </a>
        </div>
    );
}