/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Raul Cavalcante de Souza';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/placeholder.png';  // Correct path to the image

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('picture img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`; 
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Arrays */

let favFoods = ['Pizza', 'Pasta', 'Tacos'];

foodElement.innerHTML = favFoods;

let newFood = 'Sushi';
favFoods.push(newFood);

foodElement.innerHTML += `<br>${favFoods}`; 

favFoods.shift(); 
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;