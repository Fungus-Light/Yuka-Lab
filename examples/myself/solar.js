function Planet(arc, distant, speed, colorText) {
    this.arc = arc;
    this.color = color(colorText);
    this.distant = distant;
    this.speed = speed;
    this.x = width / 2 + distant;
    this.y = height / 2;
    this.angle = 0;
    this.step = function () {
        this.angle += this.speed * 0.5;
        this.x = width / 2 + this.distant * Math.cos(this.angle);
        this.y = height / 2 + this.distant * Math.sin(this.angle);
        stroke(255);
        noFill()
        ellipse(width / 2, height / 2, this.distant * 2);
        stroke(this.color);
        fill(this.color);
        ellipse(this.x, this.y, this.arc);
    }
}
var Mercury = new Planet(8, 40, 0.09, "#F4A460");
var Venus = new Planet(16, 80, 0.08, "#FFFAF0");
var Earth = new Planet(18, 120, 0.07, "#6495ED");
var Mars = new Planet(12, 160, 0.06, "#B22222");
var Jupiter = new Planet(30, 200, 0.05, "#FAFAD2");
var Saturn = new Planet(25, 240, 0.04, "#CD853F");
var Uranus = new Planet(22, 280, 0.03, "#00BFFF");
var Neptune = new Planet(20, 320, 0.02, "#B0C4DE");
var Pluto = new Planet(5, 360, 0.01, "#D2B48C");
var solar = [Mercury, Venus, Earth, Mars, Jupiter,
    Saturn, Uranus, Neptune, Pluto];
function draw() {
    background(0);
    stroke(255, 204, 0);
    fill(255, 204, 0);
    ellipse(width / 2, height / 2, 40);
    for (let i = 0; i < solar.length; i++) {
        solar[i].step();
    }
}
//太阳系