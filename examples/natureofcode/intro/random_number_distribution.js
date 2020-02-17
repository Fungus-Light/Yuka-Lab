var randomCounts = [];
var total = 20;
for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
}
function draw() {
    background(0);
    let index = floor(random(total));
    randomCounts[index]+=2;

    // Draw a rectangle to graph results
    stroke(0);
    strokeWeight(2);
    fill(255);

    let w = width / randomCounts.length;

    for (let x = 0; x < randomCounts.length; x++) {
        rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
    }
}
//Random number distribution