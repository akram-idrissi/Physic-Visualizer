class Planet {
    constructor(x, y, m) {
        this.mass = m;
        this.p = window.p;
        this.radius = this.mass * 8;
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
        if (this.position.x > this.p.width) {
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
        this.p.stroke(0);
        this.p.strokeWeight(1);
        this.p.fill(255, 100);
        this.p.ellipse(this.position.x, this.position.y, this.radius * 2);
    }
}

export default Planet;
