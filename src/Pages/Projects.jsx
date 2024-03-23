import React from 'react';
import CardTile from '../Components/CardTile';

export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center mt-5 gap-4">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-3xl font-medium">Projects</h2>
            <div className="project-cards flex flex-wrap gap-4">
                <CardTile
                    cardTitle="card title #1"
                    cardDescription="my project #1"
                />
                <CardTile
                    cardTitle="card title #2"
                    cardDescription="my project #2"
                />
                <CardTile
                    cardTitle="card title #3"
                    cardDescription="my project #3"
                />
                <CardTile
                    cardTitle="card title #4"
                    cardDescription="my project #4"
                />
            </div>
        </div>
    );
}