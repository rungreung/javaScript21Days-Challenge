(() => {
  // เริ่มเขียนโค้ด
  function setup() {
    const canvas = document.getElementById("falling-snow-canvas"); //get element canvas
    canvas.width = window.innerWidth; //setup backgroung-img
    canvas.height = window.innerHeight; //setup backgroung-img

    return {
      // return ออกมาเป็น Obj
      canvas,
      canvasContext: canvas.getContext("2d"), //restur canvasContext ไว้วาด
      numberOfSnowBall: 250,
    };
  }
  function random(min, max) {
    //random position snowBall
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function createSnowBalls(canvas, numberOfSnowBall) {
    return [...Array(numberOfSnowBall)].map(() => {
      return {
        x: random(0, canvas.width), //random position
        y: random(0, canvas.height), //random position
      };
    });
  }

  function drawSnowBall(canvasContext, snowBalls) {
    canvasContext.beginPath();
    canvasContext.arc(snowBalls.x, snowBalls.y, 4, 0, Math.PI * 2);
    canvasContext.fillStyle = `rgba(255,255,255,1)`;
    canvasContext.fill();
  }

  function run() {
    const { canvas, canvasContext, numberOfSnowBall } = setup();
    const snowBalls = createSnowBalls(canvas, numberOfSnowBall);
    console.log(snowBalls);
    drawSnowBall(canvasContext, snowBalls[1]);
  }
  run();
})();
