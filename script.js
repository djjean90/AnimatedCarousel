//Script.js

const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
const img = document.querySelector('.image-container');
const imgs = img.querySelectorAll('img');
let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > imgs.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgs.length - 1;
  }

  img.style.transform = `translateX(${-idx * 300}px)`;
}

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
