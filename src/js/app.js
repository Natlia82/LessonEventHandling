const r = document.querySelectorAll('.cell');
const elem = document.createElement('img');
// const li = document.createElement('li');
elem.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/simplification/dom/pic/goblin.png';
elem.alt = 'рожица';
elem.setAttribute('data', 'location');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sec() {
  const i = getRandomIntInclusive(0, 15);
  r[i].appendChild(elem);
}

/* export default function id() {
  setInterval(sec, 1000);
} */

export const id = setInterval(sec, 1000);
// id;
