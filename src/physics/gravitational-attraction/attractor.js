class Attractor {
    constructor(g, m) {
        this.G = g;
        this.mass = m;
        this.p = window.p;
        this.p5 = window.p.constructor;
        this.position = this.p.createVector(
            this.p.width / 2,
            this.p.height / 2
        );
    }

    attract(planet) {
        let force = this.p5.Vector.sub(this.position, planet.position);
        let distance = force.mag();
        distance = this.p.constrain(distance, 5, 25);
        /* force.normalize(); */
        let strength =
            (this.G * planet.mass * this.mass) / (distance * distance);
        force.setMag(strength);
        return force;
    }

    display() {
        this.p.strokeWeight(0);
        this.p.fill("#f9d71c");
        this.p.ellipse(
            this.position.x,
            this.position.y,
            this.mass * 2,
            this.mass * 2
        );
    }
}

export default Attractor;
