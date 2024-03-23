import React from 'react';
import CardTile from '../Components/CardTile';

export default function Projects() {
    return (
        <div>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-3xl font-medium">Projects</h2>
            <CardTile
                cardTitle="hi"
                cardDescription="my project"
            />
        </div>
    );
}