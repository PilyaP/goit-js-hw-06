const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');


function createBoxes(amount) {
const boxesArray = [];


let size = 30;

for (let i = 0; i < amount; i += 1) {

const box = document.createElement('div');

box.style.width = `${size}px`;
box.style.height = `${size}px`;
box.style.backgroundColor = getRandomHexColor();


boxesArray.push(box);


size += 10;
}


boxesRef.append(...boxesArray);
}


function destroyBoxes() {
boxesRef.innerHTML = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtnRef.addEventListener('click', () => {
createBoxes(inputRef.value);
});

destroyBtnRef.addEventListener('click', destroyBoxes);

