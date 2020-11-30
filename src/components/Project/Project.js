import React from "react";
import "./Project.css";

function Project(props) {
    return (
        <div className="container">
            <div class="row mt-3">
                <div class="co-12 col-md-4">
                    <div className="img-container">
                        <img src={props.picture}
                            id="portfolioPhoto" />
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <div className="content">
                        <h3 class="textColor">{props.name}</h3>
                        <p class="textColor">{props.description}</p>
                        <a class="textColor"
                            type="button"
                            className="btn btn-outline-light"
                            href={props.gitHub}
                        >
                            GitHub
                </a>
                        <a class="textColor"
                            type="button"
                            className="btn btn-outline-light"
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