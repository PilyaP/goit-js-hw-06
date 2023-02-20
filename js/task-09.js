const button = document.querySelector('button.change-color');
const colorSpan = document.querySelector('.color');
console.log(button);



function changeBackgroundColor() {
    const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
button.addEventListener('click', changeBackgroundColor);
console.log();