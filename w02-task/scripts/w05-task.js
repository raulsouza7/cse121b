/* W05: Programming Tasks */

// Declare and initialize global variables
const templesElement = document.getElementById('temples');
let templeList = [];

// Function: displayTemples()
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        const img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

// Function: getTemples() using fetch()
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

// Function: reset()
const reset = () => {
    templesElement.innerHTML = '';
};

// Function: filterTemples()
const filterTemples = (filter) => {
    reset();
    let filteredTemples = [];
    switch (filter) {
        case 'utah':
            filteredTemples = templeList.filter(temple => temple.location.includes('Utah'));
            break;
        case 'nonutah':
            filteredTemples = templeList.filter(temple => !temple.location.includes('Utah'));
            break;
        case 'older':
            filteredTemples = templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            break;
        case 'all':
            filteredTemples = templeList;
            break;
        // Added alphabetical sorting as per the stretch task
        case 'alphabetical':
            filteredTemples = [...templeList].sort((a, b) => a.templeName.localeCompare(b.templeName));
            break;
    }
    displayTemples(filteredTemples);
};

// Event Listener for the filter
document.getElementById('filtered').addEventListener('change', (event) => {
    filterTemples(event.target.value);
});

// Fetch temples data on load
getTemples();


// Added an "Alphabetically" option to the dropdown menu in the HTML file to enable sorting temple data by name.