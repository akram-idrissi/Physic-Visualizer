// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

import { color } from "../colors";

// Pendulum

// A Simple Pendulum Class
// Includes functionality for user can click and drag the pendulum

// This constructor could be improved to allow a greater variety of pendulums
class Pendulum {
    constructor(x, y, r) {
        // Fill all variables
        this.p = window.p;
        this.p5 = window.p.constructor;
        this.origin = this.p.createVector(x, y);
        this.position = this.p.createVector();
        this.r = r;
        this.angle = this.p.PI / 3;

        this.aVelocity = 0.0;
        this.aAcceleration = 0.0;
        this.damping = 0.995; // Arbitrary damping
        this.ballr = 48.0; // Arbitrary ball radius
        this.gravity = 0.04; // Arbitrary constant

        this.dragging = false;
    }

    // Function to update position
    update() {
        // As long as we aren't dragging the pendulum, let it swing!
        if (!this.dragging) {
            this.aAcceleration =
                ((-1 * this.gravity) / this.r) * this.p.sin(this.angle); // Calculate acceleration (see: http://www.myphysicslab.com/pendulum1.html)
            this.aVelocity += this.aAcceleration; // Increment velocity
            this.aVelocity *= this.damping; // Arbitrary damping
            this.angle += this.aVelocity; // Increment angle
        }
    }

    display() {
        this.position.set(
            this.r * this.p.sin(this.angle),
            this.r * this.p.cos(this.angle),
            0
        ); // Polar to cartesian conversion
        this.position.add(this.origin); // Make sure the position is relative to the pendulum's origin

        this.p.stroke(255);
        this.p.strokeWeight(2);
        // Draw the arm
        this.p.line(
            this.origin.x,
            this.origin.y,
            this.position.x,
            this.position.y
        );
        this.p.ellipseMode(this.p.CENTER);
        this.p.fill(color);

        if (this.dragging) this.p.fill(color);
        // Draw the ball
        this.p.ellipse(
            this.position.x,
            this.position.y,
            this.ballr,
            this.ballr
        );
    }

    // The methods below are for mouse interaction

    // This checks to see if we clicked on the pendulum ball
    clicked(mx, my) {
        let d = this.p.dist(mx, my, this.position.x, this.position.y);
        if (d < this.ballr) {
            this.dragging = true;
        }
    }

    // This tells us we are not longer clicking on the ball
    stopDragging() {
        this.aVelocity = 0; // No velocity once you let go
        this.dragging = false;
    }

    drag() {
        // If we are draging the ball, we calculate the angle between the
        // pendulum origin and mouse position
        // we assign that angle to the pendulum
        if (this.dragging) {
            let diff = this.p5.Vector.sub(
                this.origin,
                this.p.createVector(this.p.mouseX, this.p.mouseY)
            ); // Difference between 2 points
            this.angle = this.p.atan2(-1 * diff.y, diff.x) - this.p.radians(90); // Angle relative to vertical axis
        }
    }
}

export default Pendulum;
