class Ball {
    constructor() {
        this.topspeed = 5
        this.p = window.p;
        this.mass = this.p.random(1, 4);
        this.radius = this.mass * 8;
        this.p5 = window.p.constructor;
        this.velocity = this.p.createVector();
        this.acceleration = this.p.createVector();
        this.position = this.p.createVector(this.p.width / 2, 50);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    bounce() {
        if (this.position.y > this.p.height - this.radius) {
            this.velocity.y *= -0.9; // A little dampening when hitting the bottom
            this.position.y = this.p.height - this.radius;
        }
    }

    applyForce(force) {
        let f = this.p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    display() {
        this.p.stroke(0);
        this.p.strokeWeight(2);
        this.p.fill(127);
        this.p.ellipse(this.position.x, this.position.y, this.radius * 2);
    }
}

export default Ball;
