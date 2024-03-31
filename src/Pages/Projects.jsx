import React from 'react';
import CardTile from '../Components/CardTile';
import PlaceholderImg from '../img/placeholder-image.jpg'
import Navbar from '../Components/Navbar';

export default function Projects() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center mt-10 gap-4">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-customPurple to-customPink text-4xl font-bold">Projects</h2>
                <div className="project-cards flex flex-wrap justify-center gap-5 mt-8">
                    <CardTile
                        cardImg={PlaceholderImg}
                        cardTitle="Dictionary App"
                        cardDescription=""
                    />
                    <CardTile
                        cardImg={PlaceholderImg}
                        cardTitle="Task Manager"
                        cardDescription=""
                    />
                    <CardTile
                        cardImg={PlaceholderImg}
                        cardTitle="Thesaurus App"
                        cardDescription=""
                    />
                    <CardTile
                        cardImg={PlaceholderImg}
                        cardTitle="Timewise App"
                        cardDescription=""
                    />
                </div>
            </div>
        </div>
    );
}