function Walker() {
    this.x = width / 2;
    this.y = height / 2;
    this.step = () => {
        let choice = floor(random(4));
        let r = random(1);
        if (r < 0.4) {
            this.x++;
        } else if (r < 0.6) {
            this.x--;
        } else if (r < 0.8) {
            this.y++;
        } else {
            this.y--;
        }
        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
        stroke(0,255,255);
        point(this.x, this.y);
    };
}
var walkers = [];
for (let i = 0; i < 20; i++) {
    walkers.push(new Walker());
}
function draw() {
    for (let i = 0; i < walkers.length; i++) {
        walkers[i].step();
    }
}
//Probability and Non-Uniform Distributions