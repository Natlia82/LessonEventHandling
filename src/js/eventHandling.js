import id from './app';

const father = document.querySelector('.pole');
// let score = 0;
let away = 0;

father.addEventListener('click', (event) => {
  const elementOk = event.target.getAttribute('data');
  if (elementOk !== 'location') {
    away += 1;
  }
  if (away === 5) {
    clearTimeout(id());
    alert('Игра окончина!');
  }
});
