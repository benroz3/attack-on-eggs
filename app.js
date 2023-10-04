window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 1280;
  canvas.height = 720;

  class Player {
    constructor(game) {
      this.game = game;
    }
  }

  class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.width = canvas.width;
      this.height = canvas.height;
      this.player = new Player(this);
    }
  }

  const game = new Game(canvas);

  const animate = () => {};
});
