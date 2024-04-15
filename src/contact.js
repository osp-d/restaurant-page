const content = document.querySelector('#content');
const h1 = document.createElement('h1');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');

h1.textContent = 'Contact Us';

div1.textContent = 'Instagram: claude_monet';
div2.textContent = 'Telegram:  @claudemonet';
div3.textContent = 'Phone number: 8-800-555-35-35';
div4.textContent = 'Email: claudemonet@gmail.com';

export const renderContacts = () => content.append(h1, div1, div2, div3);
