let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

// Додаємо слухачів кліків до кнопок
decrementBtn.addEventListener('click', () => {
counterValue -= 1;
valueEl.textContent = counterValue;
});
incrementBtn.addEventListener('click', () => {
counterValue += 1;
valueEl.textContent = counterValue;
});
