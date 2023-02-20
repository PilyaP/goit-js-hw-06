const items = document.querySelectorAll('.item');

items.forEach((item, index) => {
  setTimeout(() => {
    item.classList.add('show');
  }, index * 500);
