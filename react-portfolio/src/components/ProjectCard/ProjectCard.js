import React, { Component } from "react";
import "./style.css"
import projects from "../../projects.json"

class projectsCard extends Component {

    state = {
        projects
    };
    // Map over this.state.employees and render a employeeCard component for each employee object
    render (){
        return(
        <div>
            {this.state.projects.map(project =>(
                <div className="row">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={project.image} className="card-img" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.text}</p>
                                    <ul>
                                        <small>
                                            <li>GitHub Deployed Link- <a href={project.githubDeployed}
                                                target="blank">{project.githubDeployed}</a></li>
                                        </small>
                                        <small>
                                            <li>GitHub Repo- <a href={project.githubRepo}
                                                target="blank">{project.githubRepo}</a></li>
                                        </small>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        )};

}

export default projectsCard

{/* <div className="row">
<div className="card mb-3">
    <div className="row no-gutters">
        <div className="col-md-4">
            <img src={projects.image} className="card-img" alt="..."></img>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{projects.title}</h5>
                <p className="card-text">{projects.text}</p>
                <ul>
                    <small>
                        <li>GitHub Deployed Link- <a href={projects.githubDeployed}
                            target="blank">{projects.githubDeployed}</a></li>
                    </small>
                    <small>
                        <li>GitHub Repo- <a href={projects.githubRepo}
                            target="blank">{projects.githubRepo}</a></li>
                    </small>
                </ul>
            </div>
        </div>
    </div>
</div>
</div> */}