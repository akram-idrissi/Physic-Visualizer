class Liquid {
    constructor(x, y, w, h, c) {
        this.c = c;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.p = window.p;
        this.p5 = window.p.constructor;
    }

    contains(ball) {
        return (
            ball.position.x > this.x &&
            ball.position.x < this.x + this.w &&
            ball.position.y > this.y &&
            ball.position.y < this.y + this.h
        );
    }

    calculateDrag(ball) {
        let speed = ball.velocity.mag();
        let dragMagnitude = this.c * speed * speed;

        let drag = ball.velocity.copy();
        drag.mult(-1);
        drag.normalize();
        drag.mult(dragMagnitude);
        return drag;
    }

    display() {
        this.p.noStroke();
        this.p.fill("#006994");
        this.p.rect(this.x, this.y, this.w, this.h);
    }
}

export default Liquid;
