import React from "react";
import Planet from "./planet";
import Attractor from "./attractor";
import { ReactP5Wrapper } from "react-p5-wrapper";

var planet, attractor, attraction;

const sketch = (p5) => {
    p5.setup = () => {
        p5.createCanvas(750, 550);
        window.p = p5;
        planet = new Planet(300, 100, 2);
        attractor = new Attractor();
    };

    p5.draw = () => {
        p5.background(51);
        p5.stroke(2);
        p5.fill(250);

        attraction = attractor.attract(planet);
        planet.applyForce(attraction);
        planet.update();

        attractor.display();
        planet.display();
    };
};

const GravitanionalAttraction = () => {
    return <ReactP5Wrapper sketch={sketch} />;
};

export default GravitanionalAttraction;
