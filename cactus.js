class Cactus extends Obstacle {
  constructor() {
    // Static method to initialize the cactus properties
    let cactusProperties = Cactus.initCactus();

    // Calls the constructor of the parent class Obstacle
    super(
      cactusProperties.x,
      cactusProperties.y,
      cactusProperties.width,
      cactusProperties.height
    );

    // Gets the cactus image
    this.cactusImg = cactusProperties.cactusImg;
  }

  static initCactus() {
    let randomCactusIndex = floor(random(0, 6));
    let cactusImg = allCactiImgs[randomCactusIndex]; // Selecting random cactus
    let cactusWidth = cactusImg.width; // Width of the selected cactus
    let cactusHeight = cactusImg.height; // Height of the selected cactus
    let x = width + 225; // x-coordinate
    let y = height - 206 - cactusHeight; // y-coordinate

    // Returning values
    return {
      x: x,
      y: y,
      width: cactusWidth,
      height: cactusHeight,
      cactusImg: cactusImg,
    };
  }

  move() {
    this.x -= gameSpeed; // Moving the cactus towards the left on x-axis based on the game speed
  }

  update() {
    this.move();
  }

  show() {
    image(this.cactusImg, this.x, this.y, this.width, this.height);
  }
}
