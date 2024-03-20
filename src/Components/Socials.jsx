import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faLinkedinIn, faFreeCodeCamp, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Socials() {
    return (
        <div className="flex flex-row gap-7 p-4">
            <FontAwesomeIcon icon={faCodepen} style={{ color: "#ffffff", }} size="lg" />
            <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#ffffff", }} size="lg" />
            <FontAwesomeIcon icon={faFreeCodeCamp} style={{ color: "#ffffff", }} size="lg" />
            <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff", }} size="lg" />
        </div>
    );
}