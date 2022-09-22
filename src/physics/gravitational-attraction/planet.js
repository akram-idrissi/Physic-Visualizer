import color from "../colors";

class Planet {
    constructor(x, y, m) {
        this.mass = m;
        this.p = window.p;
        this.radius = this.mass * 2;
        this.p5 = window.p.constructor;
        this.position = this.p.createVector(x, y);
        this.velocity = this.p.createVector(1, 0);
        this.acceleration = this.p.createVector(0, 0);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    bounce() {
        if (this.position.x > this.p.width - this.radius) {
            this.position.x = this.p.width;
            this.velocity.x *= -1;
        } else if (this.position.x < 0) {
            this.velocity.x *= -1;
            this.position.x = 0;
        }
        if (this.position.y > this.p.height) {
            this.velocity.y *= -1;
            this.position.y = this.p.height;
        }
    }

    applyForce(force) {
        let f = this.p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    display() {
        this.p.strokeWeight(0);
        this.p.fill(color);
        this.p.ellipse(this.position.x, this.position.y, this.radius);
    }
}

export default Planet;
