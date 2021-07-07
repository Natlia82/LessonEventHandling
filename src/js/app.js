const r = document.querySelectorAll('.cell');

export const id = setInterval(sec, 2000);
id;

const elem = document.createElement('img');
const li = document.createElement('li');
elem.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/simplification/dom/pic/goblin.png';
elem.alt = 'рожица';
elem.setAttribute('data', 'location');

function getRandomIntInclusive(min = 0, max = 15) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function sec() {
    const i = getRandomIntInclusive();

    r[i].appendChild(elem);

}