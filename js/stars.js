  const body = document.body;
      //星星脚本代码
      const starCreate = () => {
        let star = "";
        //一次生成10颗星星
        for (let i = 0; i < 10; i++) {
          star = document.createElement("div");
          star.classList.add("star");
          let r = Math.random() * 4 + 2; //半径2~4px
          star.style.width = r + "px";
          star.style.height = r + "px";
          star.style.left = Math.random() * innerWidth + "px";
          star.style.top = Math.random() * innerHeight + "px";
          body.append(star);
        }
        setTimeout(() => {
          star.remove();
        }, 400);
      };
      setInterval(() => {
        starCreate();
      }, 900);

      //流星脚本代码
      const meteorCreate = () => {
        let meteor = document.createElement("div");
        meteor.classList.add("meteor");
        let size = Math.random() * 10 + 100;
        meteor.style.width = size + "px";
        meteor.style.right = Math.random() * innerWidth + "px";
        meteor.style.top = Math.random() * innerHeight + "px";
        body.append(meteor);
        setTimeout(() => {
          meteor.remove();
        }, 400);
      };

      setInterval(() => {
        meteorCreate();
      }, 1000);

