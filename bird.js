class Bird extends Obstacle {
  constructor() {
    let birdProperties = Bird.initBird();
    super(
      birdProperties.x,
      birdProperties.y,
      birdProperties.width,
      birdProperties.height
    );

    this.displayBirdImg1 = true; // Flag to switch between the two images
    this.animTimer = 0; // Animation timer
    this.speed = birdProperties.speed; // Speed of the bird
    this.isBird = true; // To help is obstacle collision logic
  }

  static initBird() {
    let x = width + 225; // x-coordinate
    let y;
    if ((random(1) < 0, 5)) {
      y = height - 206 - 250; // High flying bird
    } else {
      y = height - 206 - 350; // Low flying bird
    }
    let birdWidth = birdImg1.width; // Width of the bird
    let birdHeight = birdImg1.height; // Height of the bird
    let speed = random(-gameSpeed / 6, gameSpeed / 6); // Random speed of the bird depending on the game speed
    return {
      x: x,
      y: y,
      width: birdWidth,
      height: birdHeight,
      speed: speed,
    };
  }

  move() {
    this.x -= gameSpeed + this.speed;
  }

  update() {
    this.move();
    this.animTimer++;
    if (this.animTimer === 25) {
      this.animTimer = 0;
      this.displayBirdImg1 = !this.displayBirdImg1;
    }
  }

  show() {
    if (this.displayBirdImg1) {
      image(birdImg1, this.x, this.y, this.width, this.height);
    } else {
      image(birdImg2, this.x, this.y, this.width, this.height);
    }
  }
}
