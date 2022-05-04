import React from 'react';
import './css/technical-skills.css';
import renderCard from '../components/infocard';

const programmingSkills = [
    {name: "Python", src: "icons/python.svg", version: "Python 3+", description: "I've been working with Python the last 5 years. I'm confidence with this programming language", tools: ["Django", "FastAPI", "TKinter"]},
    {name: "Javascript", src: "icons/javascript.svg", version: "Javascript ES5+", description: "I worked with Javascript ES5 or superior versions since I started Computer Engineering but I couldn't say I am an expert in it", tools: ["React", "Express"]},
    {name: "Golang", src: "icons/go.svg", version: "Go 1.18+", description: "I used Go in College for a few little projects like allow Remote Procedure Calling between 2 or more machines using single RPC, server-side Streaming, client-side Streaming and bidirectional Streaming", tools: ["gRPC"]},
    {name: "SQL", src: "icons/postgresql.svg", version: "PostgreSQL 12+", description: "In my experience with Relational databases, PostgreSQL has been the cornerstone in every project that came up", tools: ["Multitenant"]},
    {name: "NoSQL", src: "icons/mongodb.svg", version: "MongoDB 4.0+", description: "In a few projects, where the ACID properties weren't required but speed was esential, I used this Documentary Database", tools: ["Cluster"]}
]

const softwareNTools = [
    {name: "Git", src: "icons/git.svg", version: "Github, Gitlab, Bitbucket"},
    {name: "Containers", src: "icons/docker.svg", version: "Docker"},
    {name: "Github Actions", src: "icons/github.svg", version: "Github Integration and Deployment"},
    {name: "Cloud Services", src: "icons/cloud.svg", version: "Amazon Web Services, Google Cloud Platform"},
    {name: "Linux", src: "icons/linux.svg", version: "Ubuntu, Debian, Manjaro"},
    {name: "Windows", src: "icons/windows.svg", version: "Windows 7+"}
]

const TechnicalSkills = () => {
    return (
        <div className='container' id="technical-skills">
            <h2 className='mt-5'> Programming Skills </h2>
            <div className='row row-cols-3 gy-3 mt-1'>
                {programmingSkills.map((lang, index) => renderCard(lang, index))}
            </div>

            <h2 className='mt-5'> Software {"&"} Tools </h2>
            <div className='row row-cols-3 gy-3 mt-1'>
                {softwareNTools.map((elem, index) => renderCard(elem, index))}
            </div>
        </div>
    );
}

export default TechnicalSkills;