import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

export default function CardTile({ cardImg, cardTitle, cardDescription, projectLink }) {
    return (
        <div>
            <div className="bg-gray-800 bg-opacity-70 rounded-lg w-60 flex flex-col justify-center items-center">
                <img src={cardImg} alt={cardTitle} className="w-full h-full object-cover rounded-t-lg" />
                <div className="flex p-2 gap-3">
                    <h2 className="text-xl font-semibold text-center">{cardTitle}</h2>
                    <a href="https://github.com/kimbencinas" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} className="size-5 xs:size-6 sm:size-5 md:size-5  lg:size-6 p-1" />
                    </a>
                </div>
            </div>
            <p className="text-md text-center mt-2">{cardDescription}</p>
        </div>
    );
}