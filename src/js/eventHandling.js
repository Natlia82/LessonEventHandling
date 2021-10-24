import { id } from './app';
const father = document.querySelector('.pole');
let score = 0;
let away = 0;

father.addEventListener('click', (event) => {
    let elementOk = event.target.getAttribute('data');
    if (elementOk == 'location') {
        score++;
    } else away++;
    if (away == 5) {
        clearTimeout(id);
        alert('Игра окончина!');
    }
});