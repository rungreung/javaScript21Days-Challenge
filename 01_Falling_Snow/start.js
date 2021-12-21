(() => {
  // เริ่มเขียนโค้ด
  function setup() {
    const canvas = document.getElementById("l"); //get element canvas
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

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createSnowBalls(canvas, numberOfSnowBall) {
    return [...Array(numberOfSnowBall)].map(() => {
      return {
        x: random(0, canvas.width), //random position
        y: random(0, canvas.height), //random position
        opacity: random(0.5, 1), //random opacity
        radius: random(2, 4), //random size showBall
        speedX: random(-5, 5), // random speedx
        speedY: random(1, 3), //radmom speedy
      };
    });
  }

  function drawSnowBall(canvasContext, snowBalls) {
    canvasContext.beginPath();
    canvasContext.arc(
      snowBalls.x,
      snowBalls.y,
      snowBalls.radius,
      0,
      Math.PI * 2
    );
    canvasContext.fillStyle = `rgba(255,255,255,${snowBalls.opacity})`;
    canvasContext.fill();
  }
  function moveSnowBall(canvas, snowBall) {
    snowBall.x += snowBall.speedX;
    snowBall.y += snowBall.speedY;
    if (snowBall.x > canvas.width) {
      //ตกขอบ x set position ใหม่
      snowBall.x = 0;
    } else if (snowBall.x < 0) {
      snowBall.x = canvas.width;
    }

    if (snowBall.y > canvas.height) {
      //ตกขอบ y set position ใหม่
      snowBall.y = 0;
    } else if (snowBall.y < 0) {
      snowBall = canvas.height;
    }
  }

  function run() {
    const { canvas, canvasContext, numberOfSnowBall } = setup(); //ดึงมาเตรียมใช้
    const snowBall = createSnowBalls(canvas, numberOfSnowBall); //crateShowBall

    setInterval(() => {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
      snowBall.forEach((snowBall) => drawSnowBall(canvasContext, snowBall)); // show show ball
      snowBall.forEach((snowBall) => moveSnowBall(canvas, snowBall)); // move snowBall
    }, 50);
  }
  run();
})();
