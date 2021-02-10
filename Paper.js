class Paper extends baseclass {
  constructor(x, y, radius) {
    super(x, y, radius, "images/paper.png");
    this.image = loadImage("images/paper.png");
    this.image.scale = 0.2;
  }
}