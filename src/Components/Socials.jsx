import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faLinkedinIn, faFreeCodeCamp, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Socials() {
    return (
        <div className="flex flex-row gap-7 p-4">
            <a href="https://codepen.io/kimmuaeong" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCodepen} style={{ color: "#ffffff", }} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/kimberly-encinas-656929252/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#ffffff", }} size="lg" />
            </a>
            <a href="https://www.freecodecamp.org/kimbencinas" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFreeCodeCamp} style={{ color: "#ffffff", }} size="lg" />
            </a>
            <a href="https://github.com/kimbencinas" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} size="lg" />
            </a>
        </div>
    );
}