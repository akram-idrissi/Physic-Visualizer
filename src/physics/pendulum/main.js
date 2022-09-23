import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { backgroundColor } from "../colors";
import Pendulum from "./pendulum";

let pendulum;

const sketch = (p5) => {
    let lineLnegth, speed;
    p5.updateWithProps = (props) => {
        console.log(props.state);
        lineLnegth = props.state[0];
        speed = props.state[1];
    };

    p5.setup = () => {
        window.p = p5;
        p5.createCanvas(750, 550);
        pendulum = new Pendulum(p5.width / 2, 0, lineLnegth);
    };

    p5.draw = () => {
        pendulum.r = lineLnegth;
        p5.background(backgroundColor);
        pendulum.update();
        pendulum.drag(); // for user interaction
        pendulum.display();
    };

    p5.mousePressed = () => {
        pendulum.clicked(p5.mouseX, p5.mouseY);
    };

    p5.mouseReleased = () => {
        pendulum.stopDragging();
    };
};

const Main = ({ state }) => {
    return <ReactP5Wrapper sketch={sketch} state={state} />;
};

export default Main;
