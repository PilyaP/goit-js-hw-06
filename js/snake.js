const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Задаем параметры игры
const blockSize = 20;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const widthInBlocks = canvasWidth / blockSize;
const heightInBlocks = canvasHeight / blockSize;

let score = 0;
let delay = 200;

// Создаем змейку
let snake = [
  {x: 6, y: 6},
  {x: 5, y: 6},
  {x: 4, y: 6},
  {x: 3, y: 6},
  {x: 2, y: 6}
];

let food = {};

let direction = "right";

// Генерируем случайное местоположение еды
function generateFood() {
  food.x = Math.floor(Math.random() * (widthInBlocks - 2) + 1) * blockSize;
  food.y = Math.floor(Math.random() * (heightInBlocks - 2) + 1) * blockSize;
}

// Рисуем змейку
function drawSnake() {
  snake.forEach(function(block) {
    context.fillStyle = "green";
    context.fillRect(block.x, block.y, blockSize, blockSize);
  });
}

// Рисуем еду
function drawFood() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, blockSize, blockSize);
}

// Обновляем позицию змейки
function moveSnake() {
  let head = {
    x: snake[0].x + (direction === "right" ? blockSize : direction === "left" ? -blockSize : 0),
    y: snake[0].y + (direction === "down" ? blockSize : direction === "up" ? -blockSize : 0)
  };

  // Добавляем новый блок змейки
  snake.unshift(head);

  // Проверяем, съела ли змейка еду
  if (head.x === food.x && head.y === food.y) {
    score++;
    delay -= 10;
    generateFood();
  } else {
    // Удаляем последний блок змейки
    snake.pop();
  }
}

// Обрабатываем нажатие клавиш
document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 37: // влево
            if (direction !== "right") {
                direction = "left";
            }
            break;
        case 38: // вверх
            if (direction !== "down") {
                direction = "up";
            }
            break;
        case 39: // вправо
            if (direction !== "left") {
                direction = "right";
            }
            break;
        case 40: // вниз
            if (direction !== "up") {
                direction = "down";
            }
            break;
    }
});

