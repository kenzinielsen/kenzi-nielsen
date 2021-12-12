import React from 'react';
import projectData from "../../utils/project.json"

function Projects() {
    return (
        <>
            <section>
                <h1>Projects</h1>
            </section>
            {projectData.map(project => (
                
                    <div className="card">
                        <h4>{project.name}</h4>
                        {console.log(project.image)}
                        <img src={require(project.name).default} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Github: <a href={project.github}>{project.github}</a></p>
                            <p className="card-text">Live Link: <a href={project.link}>{project.link}</a></p>
                        </div>
                    </div>

                

            ))}
        </>
    )
}

export default Projects;