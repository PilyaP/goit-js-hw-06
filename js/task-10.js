const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

// Функція для створення колекції елементів
function createBoxes(amount) {
const boxesArray = [];

// Починаємо з першого елементу
let size = 30;

for (let i = 0; i < amount; i += 1) {
// Створюємо новий елемент
const box = document.createElement('div');
// Задаємо йому розмір та випадковий колір
box.style.width = `${size}px`;
box.style.height = `${size}px`;
box.style.backgroundColor = getRandomHexColor();

// Додаємо до масиву
boxesArray.push(box);

// Збільшуємо розмір для наступного елементу
size += 10;
}

// Додаємо масив елементів до DOM
boxesRef.append(...boxesArray);
}

// Функція для видалення колекції елементів
function destroyBoxes() {
boxesRef.innerHTML = '';
}

// Функція для отримання випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Додаємо обробники подій
createBtnRef.addEventListener('click', () => {
createBoxes(inputRef.value);
});

destroyBtnRef.addEventListener('click', destroyBoxes);

