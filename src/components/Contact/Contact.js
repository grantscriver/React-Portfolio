import React from "react";

function Contact() {
    return (
        <div className="container-fluid mt-3">
            <div className="content-wrap">
                <div className="row mt-3">
                    <div className="col d-flex justify-content-center">
                        <h1 className="textColor display-3">Contact Me!</h1>
                    </div>
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                <h4 className="d-flex justify-content-center">
                <span className="textColor far fa-envelope"> grantscriver@gmail.com
                </span>
                </h4>
                </div>
                
                <div className="row mt-3 d-flex justify-content-center">
                <h4 className="d-flex justify-content-center">
                <span className="textColor fas fa-phone"> 612-875-0809
                </span>
                </h4>
                </div>
                <div className="row mt-3 d-flex justify-content-center">
                <h4 className="d-flex justify-content-center">
                            <a
                                type="button"
                                className="textColor"
                                href={process.env.PUBLIC_URL + "/assets/Grant_Scriver_Resume.pdf"}
                            >Resume</a>
                        </h4>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <h2 className="d-flex justify-content-center">
                            <a
                                type="button"
                                className="textColor fab fa-github"
                                href="https://github.com/grantscriver"
                            ></a>
                            
                        </h2>
                        </div>
                        <div className="col-6">
                        <h2 className="d-flex justify-content-center">
                            <a
                                type="button"
                                className="textColor fab fa-linkedin-in"
                                href="https://www.linkedin.com/in/grant-scriver/"
                            ></a>
                        </h2>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;