import React from "react";
import GoBack from "./goback";

const About = () => {
    return (
        <>
            {<GoBack style={{ top: "-65px", left: "15px" }} />}
            <div className="about">
                <h1 className="about-title">
                    <span>Physic</span>
                    <span className="word-mark">Visualizer</span>
                </h1>

                <p className="about-text">
                    This website is a physic-visualizer-hub, that allows
                    students to visualise high school physic laws and have a
                    good understanding of them.
                </p>
                <p className="about-text">
                    The site is created by a computer science student who had a
                    hard time learning physics in theory back in the days when
                    he was in high school.
                </p>
            </div>
        </>
    );
};

export default About;
