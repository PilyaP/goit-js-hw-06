// Получение элементов страницы
var display = document.getElementById("display");

// Добавление символа на экран
function addToDisplay(symbol) {
  display.value += symbol;
}

// Очистка экрана
function clearDisplay() {
  display.value = "";
}

// Вычисление результата
function calculate(operation) {
  var value = display.value;
  
  if (operation == "sin") {
    display.value = Math.sin(value);
  } else if (operation == "cos") {
    display.value = Math.cos(value);
  } else if (operation == "tan") {
    display.value = Math.tan(value);
  } else if (operation == "sqrt") {
    display.value = Math.sqrt(value);
  } else if (operation == "equals") {
    display.value = eval(value);
  }
}
