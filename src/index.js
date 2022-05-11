import './scss/index.scss';
import { insertUsers } from './js/utilities';
const refreshButton = document.querySelector('#refresh');

window.onload = () => {
  insertUsers();
};

refreshButton.addEventListener('click', () => {
  insertUsers();
});
