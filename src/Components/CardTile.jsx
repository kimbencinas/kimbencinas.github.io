import React from 'react';

export default function CardTile({ cardImg, cardTitle, cardDescription }) {
    return (
        <div>
            <div className="bg-gray-800 bg-opacity-70 rounded-lg h-60 w-60 flex flex-col justify-center items-center">
                <img src={cardImg} alt={cardTitle} />
                <h2 className="text-lg font-medium text-center">{cardTitle}</h2>
            </div>
            <p className="text-md text-center mt-2">{cardDescription}</p>
        </div>
    );
}