import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Attractor from "./attractor";
import Planet from "./planet";
import { backgroundColor } from "../colors";

var planet, attractor, attraction;

const sketch = (p5) => {
    let gravity = 0,
        masse = 0;

    p5.updateWithProps = (props) => {
        gravity = props.state[0];
        masse = props.state[1];
    };

    p5.setup = () => {
        window.p = p5;
        p5.createCanvas(750, 550);
        attractor = new Attractor(gravity, masse);
        planet = new Planet(300, 100, 15);
    };

    p5.draw = () => {
        attractor.mass = masse;
        attractor.G = gravity;
        p5.background(backgroundColor);

        attraction = attractor.attract(planet);
        planet.applyForce(attraction);
        planet.update();

        planet.display();
        attractor.display();
    };
};

const Main = ({ state }) => {
    return <ReactP5Wrapper sketch={sketch} state={state} />;
};

export default Main;
