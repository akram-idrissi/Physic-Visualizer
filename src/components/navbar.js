import React from "react";
import logo from "../images/logo.png";

const NavBar = () => {
    return (
        <header>
            <nav>
                <a href="/" className="animation fade-center">
                    <img src={logo} alt="logo" />
                </a>

                <div className="actions animation fade-center">
                    <a href="/">
                        <button className="btn">Collections</button>
                    </a>
                    <a href="/">
                        <button className="btn">About</button>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
