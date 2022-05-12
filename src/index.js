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

  const name = document.querySelector('#name').value.trim();
  const score = document.querySelector('#score').value.trim();

  if (name !== '' && score !== '') {
    await addUser([name, score]);
    insertUsers();
    e.target.reset();
  }
});
