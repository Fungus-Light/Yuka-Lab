var xoff = 0;
var xincrement = 0.01;
function draw() {
    noStroke();
    fill(0, 10);
    rect(0, 0, width, height);
    let n = noise(xoff);
    let x = map(n, 0, 1, 0, width);
    xoff += xincrement;
    fill(200);
    ellipse(x, height / 2, 64, 64);
    print(n);
}
//Noise 1D