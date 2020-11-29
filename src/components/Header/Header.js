import React from "react"
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
    const location = useLocation();
    return (
        <nav
            class="navbar navbar-expand-lg navbar-dark"
        // style="background-color: #454253;"
        >
            <a class="navbar-brand">Grant Scriver</a>
            {/* <!--Button for responsive design--> */}
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            {/* <!--This is where the Navbar is encoded--> */}
            <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
            >
                <ul class="navbar-nav">
                    <li class="nav-item">
                        {/* <a class="nav-link" href="./index.html">About</a> */}
                        <Link
                            to="/about"
                            className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            About
                        </Link>
                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link" href="./contact.html">Portfolio</a> */}
                        <Link
                            to="/project"
                            className={location.pathname === "/project" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
                        </Link>

                    </li>
                    <li class="nav-item">
                        {/* <a class="nav-link" href="./contact.html">Contact</a> */}
                        <Link
                            to="/contact"
                            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact
                        </Link>

                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;