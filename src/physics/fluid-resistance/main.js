import React from "react";
import Ball from "./ball";
import Liquid from "./liquid";
import { ReactP5Wrapper } from "react-p5-wrapper";

var ball, liquid;

const sketch = (p5) => {
    p5.setup = () => {
        window.p = p5;
        p5.createCanvas(750, 550);
        liquid = new Liquid(0, p5.height / 2, p5.width, p5.height / 2, 0.2);
        ball = new Ball();
    };

    p5.draw = () => {
        p5.background(255);
        p5.fill(250);
        liquid.display();

        if (liquid.contains(ball)) {
            let dragForce = liquid.calculateDrag(ball);
            ball.applyForce(dragForce);
        }

        let gravity = p5.createVector(0, 0.15);
        ball.applyForce(gravity);

        ball.update();
        ball.display();
        ball.bounce();
    };
};

const Main = () => {
  return <ReactP5Wrapper sketch={sketch} />;
};

export default Main;
