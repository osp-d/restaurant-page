const content = document.querySelector('#content');
const h1 = document.createElement('h1');
const menuList1 = document.createElement('ul');
const menuList2 = document.createElement('ul');
const menuList3 = document.createElement('ul');

const l1 = document.createElement('li');
const l2 = document.createElement('li');
const l3 = document.createElement('li');

const l4 = document.createElement('li');
const l5 = document.createElement('li');
const l6 = document.createElement('li');

const l7 = document.createElement('li');
const l8 = document.createElement('li');
const l9 = document.createElement('li');

h1.textContent = 'Menu';

l1.textContent = 'Olivier';
l2.textContent = 'Marine salad';
l3.textContent = "L'Huile de Noix";

l4.textContent = 'Ratatouille';
l5.textContent = 'Meat with pears';
l6.textContent = 'Lasagna';

l7.textContent = 'Spanish Cheesecake';
l8.textContent = 'Milky Girl';
l9.textContent = 'Strawberry Roulette';

menuList1.append(l1, l2, l3);
menuList2.append(l4, l5, l6);
menuList3.append(l7, l8, l9);

export const renderMenu = () => {
  content.append(h1, menuList1, menuList2, menuList3);
};
