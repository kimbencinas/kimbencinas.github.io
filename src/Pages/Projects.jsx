import React from 'react';
import CardTile from '../Components/CardTile';
import PlaceholderImg from '../img/placeholder-image.jpg'
import Navbar from '../Components/Navbar';
import taskmanager from '../img/taskmanager.png';
import dictionaryapp from '../img/dictionaryapp.png';
import timewiseapp from '../img/timewiseapp.png';
import thesaurusapp from '../img/thesaurusapp.png'

export default function Projects() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center mt-10 gap-10">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-customPurple to-customPink xs:text-4xl sm:text-5xl font-semibold">Projects</h2>
                <div className="project-cards flex flex-wrap justify-center gap-8 sm:mt-7 xs:mt-0">
                    <CardTile
                        cardImg={thesaurusapp}
                        cardTitle="Thesaurus App"
                        githubLink="https://github.com/kimbencinas/thesaurus-react"
                        cardDescription="React, CSS, API"
                    />
                    <CardTile
                        cardImg={taskmanager}
                        cardTitle="Task Manager"
                        githubLink="https://github.com/kimbencinas/task-manager"
                        cardDescription="React, Node, Express, SQL"
                    />
                    <CardTile
                        cardImg={dictionaryapp}
                        cardTitle="Dictionary App"
                        githubLink="https://github.com/kimbencinas/dictionary-app"
                        cardDescription="React, CSS, API"
                    />
                    <CardTile
                        cardImg={timewiseapp}
                        cardTitle="Timewise App"
                        githubLink="https://github.com/Sillor/timewise-client"
                        cardDescription="React, Tailwind, CSS"
                    />
                </div>
            </div>
        </div>
    );
}