// 캔버스 생성 및 설정
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 벚꽃 이미지 생성
const img = new Image();
img.src =
  "http://www.incheonilbo.com/news/photo/202004/1031888_307877_2215.jpg";

// 벚꽃 객체 생성
class Sakura {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 + 1;
    this.size = Math.random() * 50 + 50;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (
      this.x < -this.size ||
      this.x > canvas.width ||
      this.y > canvas.height
    ) {
      this.x = Math.random() * canvas.width;
      this.y = -this.size;
    }
  }
  draw() {
    ctx.drawImage(img, this.x, this.y, this.size, this.size);
  }
}

// 벚꽃 객체 배열 생성
const sakuras = [];
for (let i = 0; i < 50; i++) {
  sakuras.push(new Sakura());
}

// 애니메이션 실행
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  sakuras.forEach((sakura) => {
    sakura.update();
    sakura.draw();
  });
  requestAnimationFrame(animate);
}
animate();
