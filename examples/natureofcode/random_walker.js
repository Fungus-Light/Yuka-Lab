function Walker() {
    this.x = width / 2;
    this.y = height / 2;
    this.step = () => {
        var choice = floor(random(4));
        if (choice === 0) {
            this.x += 2;
        } else if (choice == 1) {
            this.x -= 2;
        } else if (choice == 2) {
            this.y += 2;
        } else {
            this.y -= 2;
        }
        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
        stroke(255);
        point(this.x, this.y);
    }
}
var walkers=[];
for(let i=0;i<10;i++){
    walkers.push(new Walker());
}
function draw() {
    for(let i=0;i<walkers.length;i++){
        walkers[i].step();
    }
}
//Random Walker