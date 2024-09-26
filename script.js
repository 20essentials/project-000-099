console.group("Reference");
console.log(
  "Vector",
  "https://www.vecteezy.com/vector-art/5952107-blue-vector-seamless-background-with-diamonds"
);
console.log(
  "Vite Logo",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png?20220412224743"
);
console.groupEnd();

const $ = (el) => document.querySelector(el);
const $wrapper = $(".wrapper");
const { width, height } = $wrapper.getBoundingClientRect();
const halfWidth = width / 2;
const halfHeight = height / 2;

window.addEventListener("mousemove", (e) => {
  $wrapper.style.transition = ".1s linear transform";
  const { offsetX, offsetY } = e;

  let rotateX = ((offsetX - halfWidth) / halfWidth) * 10;
  let rotateY = ((offsetY - halfHeight) / halfHeight) * 10;

  $wrapper.style.transform = `
  scale(.8)
  rotateY(${rotateY}deg) 
  rotateX(${rotateX}deg)
`;
});

window.addEventListener("mouseout", (e) => {
  $wrapper.style.transition = ".3s ease transform";
  $wrapper.style.transform = `
  scale(.8)
  rotateY(0deg) 
  rotateX(0deg)
`;
});
