class Obstacle {
  constructor(x, y, width, height) {
    // Gets the x, y-coordinates, width and height of the obstacle when called depending on the obstacle (cactus type or bird type)
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  // Condition to check if the obstacle is offscreen
  Offscreen() {
    return this.x < -300;
  }

  collidedWithPlayer(isBird) {
    // Checking horizontal overlap of the bounding boxes of the dino and the obstacle
    if (
      dino.x + 30 + dino.width - 60 > this.x &&
      dino.x + 30 < this.x + this.width
    ) {
      // If the dino is ducking when horizontal overlap is true, checking vertical overlap
      if (dino.isDucking) {
        // Condition to check bounding box overlap when dino is ducking
        if (dino.y + 60 > this.y && dino.y + 60 < this.y + this.height) {
          return true;
        }
        // Dino not ducking
      } else {
        // It's a bird
        if (isBird) {
          if (dino.y + 30 > this.y && dino.y + 30 < this.y + this.height) {
            return true;
          } else {
            if (dino.y + 30 + dino.height - 60 > this.y) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}
