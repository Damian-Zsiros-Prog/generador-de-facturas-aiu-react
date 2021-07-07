import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Generador de facturas AIU
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <div class="d-flex">
                            <ul className="social-icons-list">
                                <li>
                                    <a
                                        class="social-icon social-github"
                                        target="_blank"
                                        href="https://github.com/Damian-Zsiros-Prog"
                                        rel="noreferrer"
                                    >
                                        <i class="fab fa-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="social-icon social-instagram"
                                        target="_blank"
                                        href="http://www.damian-zsiros.tech/"
                                        rel="noreferrer"
                                    >
                                        <i class="fas fa-globe"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="social-icon social-twitter"
                                        target="_blank"
                                        href="https://twitter.com/ProgDamian"
                                        rel="noreferrer"
                                    >
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
