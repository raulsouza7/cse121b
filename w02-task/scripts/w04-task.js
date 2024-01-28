/* LESSON 3 - Programming Tasks */

// Profile Object
let myProfile = {
    name: "Raul Souza",
    photo: "images/raulbraziljpg.jpg", 
    favoriteFoods: ['Pizza', 'Pasta', 'Tacos', 'Sushi'],
    hobbies: ['Work out', 'Meditate', 'Coding'],
    placesLived: []
  };
  
  // Populate Profile 
  myProfile.placesLived.push(
    {
      place: 'Brasilia, DF, Brazil',
      length: '26 year'
    },
    {
      place: 'Cedar Hills, UT, United States',
      length: '1 year'
    },
    {
      place: 'Pleasant Grove, UT, United States',
      length: '1,5 year'
    }
  );
  
  // DOM Manipulation - Output
  
  // Name
  document.getElementById('name').textContent = myProfile.name;
  
  // Photo with attributes
  let photoElement = document.getElementById('photo');
  photoElement.src = myProfile.photo;
  photoElement.alt = 'Photo of ' + myProfile.name;
  
  // Favorite Foods List
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.getElementById('favorite-foods').appendChild(li);
  });
  
  // Hobbies List
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.getElementById('hobbies').appendChild(li);
  });
  
  // Places Lived DataList
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    let dl = document.getElementById('places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
  });
  