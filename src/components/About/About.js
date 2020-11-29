import React from "react";
import portrait from "./PortraitComp.jpg"
import "./About.css"

function About() {
    return (
        <div>
            <div class="container mt-3">
                <div class="row">
                    <div class="col d-flex justify-content-center">
                        <h1 class="textColor">Web Development Portfolio</h1>
                    </div>
                </div>
            </div>
            <div class="container mt-3">
                <div class="row">
                    <div class="col d-flex justify-content-center">
                        <img
                            src={portrait}
                            class="img-fluid"
                            id="portraitPhoto"
                            alt="Picture of me"
                        />
                    </div>
                </div>
            </div>

            <div class="container mt-3">
                <div class="row">
                    <p class="textColor">
                        Full stack web developer with a passion for arts and creativity.
                        Recently earned a certificate in Full stack development through the
                        University of Minnesota, with experience in HTML, CSS, Javascript and
                        responsive web design. I am excited to give a company a creative and
                        observant team member, with the ability to adapt for whatever position
                        needed. I am ready to give my ideas and input on import development
                        decisions that are made.
        </p>
                </div>
            </div>
        </div>
    );
}

export default About;