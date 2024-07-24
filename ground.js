class Ground {
  constructor() {
    this.y = height - 335; // y-coordinate of the ground
    this.width = 2400;
    this.height = 144;
    this.xOffset = 0; // offset of the ground to move it horizontally
  }

  move() {
    // Adjusting the offset based on the game speed
    this.xOffset -= gameSpeed;

    // Resetting the ground offset to create an infinite loop
    if (this.xOffset <= -this.width) {
      this.xOffset += this.width;
    }
  }

  update() {
    this.move();
  }

  show() {
    for (let i = 0; i <= width / this.width + 1; i++) {
      let x = i * this.width + this.xOffset;
      image(groundImg, x, this.y, this.width, this.height);
    }
  }
}
