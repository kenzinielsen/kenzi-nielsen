import React from 'react';
import projectData from "../../utils/project.json"

function Projects() {
    return (
        <>
            <section>
                <h1>Projects</h1>
            </section>
            {projectData.map(project => (
                
                    <div className="card row">
                        <h4 className="text-dark">{project.name}</h4>
                        {console.log(project.image)}
                        <img src={require(`../../assets/images/github.png`).default} className="card-img-top" alt="..." />
                        <div className="card-body text-dark" id="projectLinks">
                            <p className="card-text"> <a className="text-dark" href={project.github}>GitHub Link</a></p>
                            <p className="card-text"><a className="text-dark" href={project.link}>Live Link</a></p>
                        </div>
                    </div>

                

            ))}
        </>
    )
}

export default Projects;