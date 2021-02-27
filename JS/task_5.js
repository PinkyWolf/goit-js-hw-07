// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector('input');
const log = document.getElementById('name-output');

input.addEventListener('input', updateValue);

function updateValue() {
  log.textContent = input.value;
}