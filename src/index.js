import './scss/index.scss';
import { insertUsers, addUser } from './js/utilities';

const scoreForm = document.querySelector('#score-form');
const refreshButton = document.querySelector('#refresh');

window.onload = () => {
  insertUsers();
};

refreshButton.addEventListener('click', () => {
  insertUsers();
});

scoreForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.querySelector('#name');
  const score = document.querySelector('#score');

  await addUser([name.value, score.value]);
  insertUsers();
  e.target.reset();
});
