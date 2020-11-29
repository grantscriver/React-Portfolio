import React from "react";
// import "./style.css";

function Project(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.picture} />
            </div>
            <div className="content">
                {props.name}
                {props.description}
                {props.gitHub}
                {props.site}
            </div>
        </div>
    );
}

export default Project;