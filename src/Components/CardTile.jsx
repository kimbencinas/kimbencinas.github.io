import React from 'react';

export default function CardTile({ cardImg, cardTitle, cardDescription }) {
    return (
        <div className="bg-gray-400 rounded-lg">
            <img src={cardImg} alt={cardTitle} />
            <div>
                <h2>{cardTitle}</h2>
                <p>{cardDescription}</p>
            </div>
        </div>
    );
}