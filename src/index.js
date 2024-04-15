import { renderHome } from './start';
import { renderMenu } from './menu';
import { renderContacts } from './contact';
import './style.css';

renderHome();

const content = document.querySelector('#content');
const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');

homeBtn.addEventListener('click', () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  content.classList.remove('contact');

  renderHome();
});

menuBtn.addEventListener('click', () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  content.classList.remove('contact');

  renderMenu();
});

contactBtn.addEventListener('click', () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
    content.classList.add('contact');
  }

  renderContacts();
});
