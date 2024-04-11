import icon from './restaurant.jpg';

const content = document.querySelector('#content');
const h1 = document.createElement('h1');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const img = document.createElement('img');

h1.textContent = 'Claude Monet';

p1.textContent =
  'Claude Monet is a first-class restaurant serving classic French cuisine. This is real France in the middle of the Astana streets. Being the heir to the Moscow branch that had a Michelin star, Claude Monet preserves the traditions of the best establishment in the post-Soviet space.';

p2.textContent =
  'Here you will find all the best in French cuisine. For lovers of modern trends, there is an innovative molecular cuisine that will surprise even the most sophisticated viewers with its presentation, and will amaze seasoned gourmets with its taste.';

p3.textContent =
  'We are happy to welcome you to Claude Monet, and we hope that no matter what time you come, you will enjoy the gastronomic masterpieces of our restaurant.';

img.src = icon;
img.alt = "view of the 'Claude Monet' restaurant from the street";

export let attachContent = () => content.append(h1, p1, p2, p3, img);
