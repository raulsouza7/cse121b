// Declare and initialize global variables
const landmarksElement = document.getElementById('landmarks');
let landmarkList = [];

// Function: displayLandmarks()
const displayLandmarks = (landmarks) => {
    landmarksElement.innerHTML = ''; // Clear existing landmarks
    landmarks.forEach(landmark => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = landmark.landmarkName;
        const img = document.createElement('img');
        img.setAttribute('src', landmark.imageUrl);
        img.setAttribute('alt', `Image of ${landmark.landmarkName}`);
        const p = document.createElement('p');
        p.textContent = landmark.description;
        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(p);
        landmarksElement.appendChild(article);
    });
};

// Function: getLandmarks() using fetch()
const getLandmarks = async () => {
    const response = await fetch("https://run.mocky.io/v3/fb984618-aaa9-45fd-8b2b-19257bd9e3ff");
    landmarkList = await response.json();
    displayLandmarks(landmarkList);
};

// Function: continentBasedFilter()
const continentBasedFilter = (location) => {
    // Example mapping, adjust according to your needs
    if (location.includes("China") || location.includes("India")) return "asia";
    if (location.includes("Peru") || location.includes("Mexico")) return "south-america";
    if (location.includes("France") || location.includes("Italy") || location.includes("Greece")) return "europe";
    if (location.includes("USA") || location.includes("Arizona")) return "north-america";
    if (location.includes("Australia")) return "australia";
    // Add more mappings as necessary
    return "other"; // Fallback
};

// Function: filterLandmarks()
const filterLandmarks = (filter) => {
    let filteredLandmarks = landmarkList;
    if (filter !== 'all') {
        filteredLandmarks = landmarkList.filter(landmark => continentBasedFilter(landmark.location) === filter);
    }
    displayLandmarks(filteredLandmarks);
};

// Event listener for the filter dropdown
document.getElementById('filtered').addEventListener('change', (event) => {
    filterLandmarks(event.target.value);
});

// Fetch landmarks data on load
getLandmarks();
