import React from "react";
// import "./style.css";

function Project(props) {
    return (
        <div className="">
            <div className="img-container">
                <img src={props.picture} />
            </div>
            <div className="content">
                <h1 class="textColor">{props.name}</h1>
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
    );
}

export default Project;