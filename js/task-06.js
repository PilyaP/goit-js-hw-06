const input = document.querySelector('#validation-input');
    


input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);

const validLength = input.dataset.length;

console.log(validLength);









function onInputFocus() {
console.log('инпут получил фокус');
}

function onInputBlur(event) {
    const value = event.target.value;
    console.log('инпут получил блюр');
    console.log(value);
    if (value.length === Number(validLength)) {
    event.target.classList.add("valid");
      event.target.classList.remove("invalid");
} else {
          event.target.classList.add("invalid");
      event.target.classList.remove("valid");
}
}