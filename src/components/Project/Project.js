import React from "react";

function Project(props) {
    return (
        <div className="container projects">
            <div className="row mt-3">
                <div className="co-12 col-md-5">
                    <div className="img-container pt-3">
                        <img src={process.env.PUBLIC_URL + props.picture}
                            id="portfolioPhoto" />
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="content">
                        <h3 className="textColor">{props.name}</h3>
                        <p className="textColor">{props.description}</p>
                        <p className="textColor">Technologies Used: {props.technologies}</p>
                        <a className="textColor"
                            type="button"
                            className="btn btn-outline-light ml-3"
                            href={props.gitHub}
                        >
                            GitHub
                </a>
                        <a className="textColor"
                            type="button"
                            className="btn btn-outline-light ml-3"
                            href={props.site}
                        >
                            Live Site
                </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;