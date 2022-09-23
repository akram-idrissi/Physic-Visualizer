import React from "react";
import orbit from "../../images/landing/orbit.svg";
import landing from "../../images/landing/landing.svg";

const Main = () => {
    return (
        <div className="landing">
            <h1 className="title animation fade-left delay-0-75">
                <span>Physics Made Easy With</span> <br />
                <span className="text">
                    <span className="word-mark">Physic Visualizer</span>
                    <img alt="orbit" src={orbit}></img>
                </span>
                <p className="description">
                    Learning by visualising is the quickest, most effective way
                    <br /> to learn physics
                </p>
            </h1>

            <img className="img" alt="landing" src={landing}></img>
        </div>
    );
};

export default Main;
