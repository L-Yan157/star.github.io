      const canvas = document.getElementById("starCanvas");
      const ctx = canvas.getContext("2d");
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      class Star {
        constructor(x, y, size, speedY) {
          this.x = x;
          this.y = y; // 初始位置从底部开始
          this.size = size;
          this.speedY = speedY; // 只有垂直速度
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = "white";
          ctx.fill();
        }

        update() {
          this.y -= this.speedY; // 从下往上移动

          if (this.y < -this.size) {
            // 当星星移出顶部时，重新放置在底部
            this.y = height + this.size;
            this.x = Math.random() * width; // 可以选择重新随机化x位置
          }

          this.draw();
        }
      }

      const stars = [];

      // 初始化星星
      for (let i = 0; i < 200; i++) {
        const size = Math.random() * 1 + 0.8; // 星星大小在0.5到1.5之间
        const speedY = Math.random() * 0.4; // 星星速度在0.5到1.5之间
        const x = Math.random() * width; // 随机x位置
        const y = Math.random() * height; // 随机y位置
        stars.push(new Star(x, y, size, speedY));
      }

      function animate() {
        ctx.clearRect(0, 0, width, height);
        stars.forEach((star) => star.update());
        requestAnimationFrame(animate);
      }

      animate();

      window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        // 你可以在这里重新初始化星星，或者只是重置它们的y位置
        stars.forEach((star) => (star.y = height));
      });