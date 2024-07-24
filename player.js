class Player {
  constructor() {
    this.width = width / 6; // Initial of the dino
    this.y = height - 350; // y-coordinate of the dino
    this.width = 132; // Actual width of the dino
    this.height = 144;

    this.isGrounded = true; // Checking whether the dino is on the ground
    this.isDucking = false; // Checking whether the dino is ducking
    this.velocityY = 0;
    this.gravity = 1;
    this.maxFallSpeed = 30;

    this.animTimer = 0; // Animation timer for the dino
    this.displayRun1 = true; // Run 1 image
    this.displayRun2 = false; // Run 2 image
  }

  move() {
    this.y -= this.velocityY; // Moving the dino up or down based on the y-velocity

    // If the dino is not on the ground, applying gravity
    if (!this.isGrounded) {
      this.velocityY -= this.gravity;

      // Limiting the height of the fall, changing flag isGrounded to true
      if (this.y > height - 350) {
        this.velocityY = 0;
        this.y = height - 350;
        this.isGrounded = true;
      }
    }
  }

  jump(isBigJump) {
    if (this.isDucking) return; // Preventing the dino from jumping while ducking

    if (this.isGrounded) {
      this.isGrounded = false; // Changing the flag isGrounded to false when jumped

      // Different jump conditions based on the jump type
      if (isBigJump) {
        this.velocityY = 22;
        this.gravity = 1;
      } else {
        this.velocityY = 18;
        this.gravity = 1.2;
      }
    }
  }

  duck() {
    this.isDucking = true; // Changing the flag isDucking to true when ducking
    this.gravity = 5;

    if (this.isGrounded) {
      this.width = 177; // Width of the dino is increased while ducking
    }
  }

  stopDucking() {
    this.isDucking = false; // Change the flag
    this.width = 132; // Return to original width
  }

  update() {
    this.move();
    this.animTimer++;

    // Changing the image every 5 count for the animation
    if (this.animTimer === 5) {
      this.animTimer = 0; // Reset

      // Run animation
      this.displayRun1 = !this.displayRun1;

      // Duck animation
      if (this.isDucking) {
        this.displayDuck1 = !this.displayDuck1;
      }
    }
  }

  show() {
    // Mid-air dino
    if (!this.isGrounded) {
      image(dinoRun2Img, this.x, this.y, this.width, this.height);
      return;
    }

    // Running dino
    if (!this.isDucking) {
      if (this.displayRun1) {
        image(dinoRun1Img, this.x, this.y, this.width, this.height);
      } else {
        image(dinoRun2Img, this.x, this.y, this.width, this.height);
      }

      // Ducking dino
    } else {
      if (this.isGrounded) {
        if (this.displayDuck1) {
          image(dinoDuck1Img, this.x, this.y, this.width, this.height);
        } else {
          image(dinoDuck2Img, this.x, this.y, this.width, this.height);
        }
      }
    }
  }
}
