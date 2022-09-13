import React from "react";
import orbit from "../orbit.svg";
const Header = () => {
    return (
        <header className="container">
            <h1 className="title">
                <span className="gradient">Physics Made Easy With</span> <br />
                <span className="logo">
                    <img alt="orbit" src={orbit}></img>
                    <span className="word-mark">Physic Visualizer</span>
                </span>
            </h1>

            <p className="description">
                Learning by visualising is the the quickest, most effective way
                of learning physics
            </p>
        </header>
    );
};

export default Header;
