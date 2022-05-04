import React from 'react';
import renderCard from '../components/infocard';

const externalProjects = [
    {name: "Finteku", src: "icons/finteku.png", version: <a href="https://clu.finteku.com" target="_blank" rel="noopener noreferrer"> Site </a>, tools: ["Source Code not available for confidentiality", "Django", "Django Rest Framework"]},
    {name: "Feria de Software", src: "icons/fesw.png", tools: [<a href="https://gitlab.labcomp.cl/joyanede/inf322-tareas/-/tree/master/Proyecto/codigo" target="_blank" rel="noopener noreferrer"> Source Code </a>, "React"]},
    {name: "Go RPC", src: "icons/college.svg", version: "Site no available", tools: ["Go", "gRPC"]}
]

const personalProjects = [
    {name: "This portfolio (Frontend)", src: "icons/default.svg", version: "Site: this site", tools: [<a href="https://github.com/joyanedel/fastapi-mongodb" target="_blank" rel="noopener noreferrer"> Source Code </a>, "React"]},
    {name: "This portfolio (Backend)", src: "icons/default.svg", version: "Site: this site", tools: [<a href="https://github.com/joyanedel/fastapi-mongodb" target="_blank" rel="noopener noreferrer"> Source Code </a>, "Fast API", "MongoDB"]},
    //{name: "Golang API", src: "icons/default.svg"},
    {name: "My own schedule", src: "icons/default.svg", version: <a href="https://joyanedel.github.io/Schedule/" target="_blank" rel="noopener noreferrer"> Site </a>, tools: [<a href="https://github.com/joyanedel/Schedule" target="_blank" rel="noopener noreferrer"> Source Code </a>, "React", "Redux"]}
]

const ProjectsPage = () => {
    return (
        <div className='container' id='technical-skills'>
            <h2 className='mt-5'> External projects </h2>
            <div className='row rpw-col-3 gy-3 mt-1' id='externals'>
                {externalProjects.map((e, i) => renderCard(e, i))}
            </div>

            <h2 className='mt-5'> Personal projects</h2>
            <div className='row rpw-col-3 gy-3 mt-1' id='personals'>
                {personalProjects.map((e, i) => renderCard(e, i))}
            </div>
        </div>
    );
}

export default ProjectsPage;