import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/landing/logo.png";

const NavBar = () => {
    return (
        <header>
            <nav>
                <div className="logo animation fade-center">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="actions animation fade-center">
                    <Link to="/collections">
                        <button className="btn">Try Now</button>
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
