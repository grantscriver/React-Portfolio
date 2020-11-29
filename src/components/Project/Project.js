import React from "react";
// import "./style.css";

function Project(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.picture} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        {props.name}
                    </li>
                    <li>
                        {props.description}
                    </li>
                    <li>
                        {props.gitHub}
                    </li>
                    <li>
                        {props.site}
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Project;