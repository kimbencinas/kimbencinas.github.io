import React from 'react';
import CardTile from '../Components/CardTile';
import PlaceholderImg from '../img/placeholder-image.jpg'
import Navbar from '../Components/Navbar';

export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center mt-10 gap-4">
            <Navbar />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-3xl font-medium">Projects</h2>
            <div className="project-cards flex flex-wrap gap-5 mt-8">
                <CardTile
                    cardImg={PlaceholderImg}
                    cardTitle="Dictionary App"
                    cardDescription="React, CSS, APIs"
                />
                <CardTile
                    cardImg={PlaceholderImg}
                    cardTitle="Task Manager"
                    cardDescription="React, Node, Express, SQL, RESTfulAPI, JWT"
                />
                <CardTile
                    cardImg={PlaceholderImg}
                    cardTitle="Thesaurus App"
                    cardDescription="React, Fetch API, CSS"
                />
                <CardTile
                    cardImg={PlaceholderImg}
                    cardTitle="Timewise App"
                    cardDescription="React, CSS, responsive design, form handling"
                />
            </div>
        </div>
    );
}