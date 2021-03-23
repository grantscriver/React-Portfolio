import React, { Component } from "react";
import Project from "../Project/Project"
import Wrapper from "../Wrapper/Wrapper"
import projects from "../../projects.json"




class Portfolio extends Component {

    state = {
        projects
    }

    render() {
        return (
            <Wrapper>
                <h1 className="textColor display-3 d-flex justify-content-center">Sample Projects</h1>
                {this.state.projects.map(project => (
                    <Project
                        id={project.id}
                        picture={project.picture}
                        name={project.name}
                        description={project.description}
                        technologies={project.technologies}
                        gitHub={project.gitHub}
                        site={project.site}
                    />
                ))}
            </Wrapper>
        )
    }
}

export default Portfolio;