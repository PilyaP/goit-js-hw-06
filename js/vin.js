$(function() {
  const apiKey = 'a27721f246msh8e4856773d1aae6p158e23jsn851594685732'; // заменить на свой API-ключ
  const apiUrl = `https://vinfreecheck.com/api/vin/?key=${apiKey}&vin=`;

  $('#vin-form').submit(function(e) {
    e.preventDefault();
    const vin = $('#vin-input').val().toUpperCase(); // привести к верхнему регистру
    if (vin.length !== 17) {
      alert('Введите корректный VIN-код.');
      return;
    }
    $.getJSON(apiUrl + vin, function(data) {
      if (data.success) {
        const resultHTML = `
          <h2>Информация о автомобиле</h2>
          <p>Марка: ${data.make}</p>
          <p>Модель: ${data.model}</p>
          <p>Год выпуска: ${data.year}</p>
          <p>Тип кузова: ${data.body_style}</p>
          <p>Тип трансмиссии: ${data.transmission}</p>
          <p>Тип двигателя: ${data.engine_type}</p>
          <p>Объем двигателя: ${data.engine_size}</p>
        `;
        $('#vin-results').html(resultHTML);
      } else {
        alert('Не удалось расшифровать VIN-код. Проверьте правильность ввода и наличие подключения к Интернету.');
      }
    });
  });
});
