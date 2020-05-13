const $box = document.getElementById('box');
const $btn = document.getElementById('btn');
const $min = document.getElementById('min');
const $max = document.getElementById('max');

let num = 0;

function Random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function animation(result, btn, val) {
  let min = val - 50;
  const max = val;
  const interval = setInterval(() => {
    min += 1;
    result.innerHTML = String(min);
    if (min === max) {
      btn.disabled = false;
      clearInterval(interval);
    }
  }, 10);
}

// function PrintNum() {
//   num = Math.floor(random($min.value, $max.value));
// }

window.onload = function () {
  $btn.addEventListener('click', () => {
    $btn.disabled = true;
    this.animation($box, btn, Random($min.value, $max.value));
  });
};
