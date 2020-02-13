function draw() {
    let xloc = randomGaussian();
    const sd = 200;
    const mean = width / 2;
    xloc = (xloc * sd) + mean;
    fill(255, 10);
    noStroke();
    ellipse(xloc, height / 2, 60, 60);
}
//The randomGaussian