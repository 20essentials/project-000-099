const $ = el => document.querySelector(el);
const $wrapper = $('.wrapper');
const { width, height } = $wrapper.getBoundingClientRect();
const halfWidth = width / 2;
const halfHeight = height / 2;

window.addEventListener('mousemove', e => {
  $wrapper.style.transition = '.1s linear transform';
  const { offsetX, offsetY } = e;

  let rotateX = ((offsetX - halfWidth) / halfWidth) * 5;
  let rotateY = ((offsetY - halfHeight) / halfHeight) * 5;

  $wrapper.style.transform = `
  scale(.8)
  rotateY(${rotateY}deg) 
  rotateX(${rotateX}deg)
`;
});

window.addEventListener('mouseout', e => {
  $wrapper.style.transition = '.3s ease transform';
  $wrapper.style.transform = `
  scale(.8)
  rotateY(0deg) 
  rotateX(0deg)
`;
});
