import React from "react";

function Contact() {
    return (



        <div class="container-fluid mt-3">

            {/* <div class="container mt-3"> */}
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <h1 class="textColor">Contact Information</h1>
                </div>
            </div>
            {/* </div> */}


            <div class="row mt-3">
                <div class="col-6">
                    <li class="d-flex justify-content-center">
                        <a
                            type="button"
                            class="btn"
                            class="textColor"
                            href="https://github.com/grantscriver"
                        >GitHub</a>
                    </li>
                    <li class="d-flex justify-content-center">
                        <a
                            type="button"
                            class="btn"
                            class="textColor"
                            href="https://www.linkedin.com/in/grant-scriver-3550431b1/"
                        >LinkedIn</a>
                    </li>
                    <li class="d-flex justify-content-center">
                        <a
                            type="button"
                            class="btn"
                            class="textColor"
                            href="./Assets/GS2020codingresume.pdf"
                        >Resume</a>
                    </li>
                </div>
                <div class="col-3">
                    <ul>
                        <li>
                            <p class="textColor">Email: grantscriver@gmail.com</p>
                        </li>
                        <li>
                            <p class="textColor">Phone: 612-875-0809</p>
                        </li>
                    </ul>
                </div>
                <div class="col-3"></div>
            </div>
        </div>
    );
}

export default Contact;