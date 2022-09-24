import { mainObjColor } from "../colors";

class Attractor {
    constructor(g, m) {
        this.force = 0;
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
        this.force = this.p5.Vector.sub(this.position, planet.position);
        let distance = this.force.mag();
        distance = this.p.constrain(distance, 5, 20);
        this.force.normalize();
        let strength =
            (this.G * planet.mass * this.mass) / (distance * distance);
        this.force.setMag(strength);
        return this.force;
    }

    display() {
        this.p.strokeWeight(0);
        this.p.fill(mainObjColor);
        this.p.ellipse(
            this.position.x,
            this.position.y,
            this.mass * 2,
            this.mass * 2
        );
    }
}

export default Attractor;
