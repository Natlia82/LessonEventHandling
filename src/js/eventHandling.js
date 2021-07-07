import { id } from './app';
const father = document.querySelector('.pole');
var score = 0;
var away = 0;

father.addEventListener('click', (event) => {
    var elementOk = event.target.getAttribute('data');
    if (elementOk == 'location') {
        score++;
    } else away++;
    if (away == 5) {
        clearTimeout(id);
        alert('Игра окончина и карты биты!');
    }
});