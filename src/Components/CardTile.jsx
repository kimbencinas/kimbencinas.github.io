import React from 'react';

export default function CardTile({ cardImg, cardTitle, cardDescription }) {
    return (
        <div className="bg-gray-800 rounded-lg h-24 w-48">
            <img src={cardImg} alt={cardTitle} />
            <div>
                <h2>{cardTitle}</h2>
                <p>{cardDescription}</p>
            </div>
        </div>
    );
}