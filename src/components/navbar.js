import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link to="/" className="animation fade-center">
                    <img src={logo} alt="logo" />
                </Link>

                <div className="actions animation fade-center">
                    <Link to="/collections">
                        <button className="btn">Collections</button>
                    </Link>
                    <Link to="/about">
                        <button className="btn">About</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
