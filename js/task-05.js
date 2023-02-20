const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};


// const input = document.querySelector('name-input');
// const output = document.querySelector('name-output');

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change' onInputChange);
refs.input.addEventListener('input', onInputChange);

// function onInputFocus() {
// console.log('инпут получил фокус');
// }

// function onInputBlur() {
//     console.log('инпут получил блюр');
// }
function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.output.textContent = event.currentTarget.value;
    refs.output.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
}





//   const input = document.querySelector('#name-input');
//   const output = document.querySelector('#name-output');

//   input.addEventListener('input', onInputChange);

//   function onInputChange(event) {
//     const value = event.target.value;
//     output.textContent = value ? value : 'Anonymous';
//   }