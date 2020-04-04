console.log("hi");
let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 大家好!
 * 我是练习时长一个月的前端练习生
 * 武林秀
 * 接下来我来演示一下我的前端功底
 * 首先来准备一个div */
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 我要把这个div变成一个八卦图
 * 首先要画一个圆 */
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦由阴阳组成
 * 一黑一白 */
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/* 加两个大球
 * 一白一黑 */
#div1::before {
    border: 1px solid red;
    transform: translateX(-50%);
    left: 50%;
    top: 0%;
    background: white;
    border-radius: 50%;
    border: none;
}
#div1::after {
    border: 1px solid red;
    transform: translateX(-50%);
    left: 50%;
    top: 50%;
    background: black;
    border-radius: 50%;
    border: none;
}
/* 加两个小球
 * 一黑一白 */
#div1::before{
    background: radial-gradient(circle, rgba(0,0,0,1) 15%, rgba(255,255,255,1) 15%);
}
#div1::after{
    background: radial-gradient(circle, rgba(255,255,255,1) 15%, rgba(0,0,0,1) 15%);
}
 `;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (n < string.length) {
      if (string[n] === "\n") {
        string2 += "<br>";
      } else if (string[n] === " ") {
        string2 += "&nbsp;";
      } else {
        string2 += string[n];
      }
      html.innerHTML = string2;
      window.scrollTo(0, 9999);
      html.scrollTo(0, 9999);
      style.innerHTML = string.slice(0, n);
      n += 1;
      step();
    }
  }, 10);
};
step();
