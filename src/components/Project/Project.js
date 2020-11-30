import React from "react";
// import "./style.css";

function Project(props) {
    return (
        <div className="">
            <div className="img-container">
                <img src={props.picture} />
            </div>
            <div className="content">
                <h1>{props.name}</h1>
                {props.description}
                <a
                    type="button"
                    className="btn"
                    href={props.gitHub}
                >
                    GitHub

                </a>
                {props.site}
            </div>
        </div>
    );
}

export default Project;