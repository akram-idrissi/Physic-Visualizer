class Planet {
    constructor(x, y, m) {
        this.f = 0;
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

    applyForce(force) {
        this.f = this.p5.Vector.div(force, this.mass);
        this.acceleration.add(this.f);
    }

    right() {
        this.position.add(this.velocity);
    }

    bounceEdges() {
        // A new variable to simulate an inelastic collision
        // 10% of the velocity's x or y component is lost
        let bounce = -0.9;
        if (this.position.x > this.p.width - this.radius / 2) {
            this.position.x = this.p.width - this.radius / 2;
            this.velocity.x *= -1;
        } else if (this.position.x < this.radius / 2) {
            this.position.x = this.radius / 2;
            this.velocity.x *= -1;
        }
        if (this.position.y > this.p.height - this.radius / 2) {
            this.position.y = this.p.height - this.radius / 2;
            this.velocity.y *= -1;
        } else if (this.position.y < this.radius / 2) {
            this.position.y = this.radius / 2;
            this.velocity.y *= -1;
        }
    }

    display() {
        this.p.strokeWeight(0);
        this.p.fill("#1C2851");
        this.p.ellipse(this.position.x, this.position.y, this.radius);
    }
}

export default Planet;
