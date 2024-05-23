// Function to fetch cat images from TheCatAPI
/*function fetchCatImages() {
    const numberOfCards = 25; // Number of pet cards
    const apiKey = 'live_0HXpLCAwCbQOe2etRc4xO28yZCfcAk0Dj0TZspJgQybCPtzUb610TO3doORXnBbm'; // Your API key from TheCatAPI

    // Loop through each card
    for (let i = 0; i < numberOfCards; i++) {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=25&api_key=live_0HXpLCAwCbQOe2etRc4xO28yZCfcAk0Dj0TZspJgQybCPtzUb610TO3doORXnBbm`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Extract the image URL from the response
                const imageUrl = data[0].url;
                // Populate the corresponding pet card with the image
                populateCard(i, imageUrl);
            })
            .catch(error => {
                console.error('Error fetching cat images:', error);
            });
    }
}
8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
*/
 //Function to populate a pet card with an image
function populateCard(cardIndex, imageUrl) {
    const petCard = document.querySelectorAll('.pet-card')[cardIndex];
    const petImage = petCard.querySelector('.pet-image img');
    petImage.src = imageUrl;
}

// Call the function to fetch cat images when the page loads
window.addEventListener('load', fetchCatImages);


//Function to fetch cat images from TheCatAPI
function fetchCatImages() {
    const numberOfCards = 50; // Number of pet cards
    const apiKey = 'live_0HXpLCAwCbQOe2etRc4xO28yZCfcAk0Dj0TZspJgQybCPtzUb610TO3doORXnBbm'; // Your API key from TheCatAPI

    fetch(`https://api.thecatapi.com/v1/images/search?limit=${numberOfCards}&api_key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Extract image URLs from the response
            const imageUrls = data.map(cat => cat.url);
            // Populate all pet cards with the fetched images
            imageUrls.forEach((imageUrl, index) => {
                populateCard(index, imageUrl);
            });
        })
        .catch(error => {
            console.error('Error fetching cat images:', error);
        });
    }


    document.addEventListener('DOMContentLoaded', () => {
        const searchButton = document.getElementById('searchButton');
        const fileInput = document.getElementById('fileInput');
    
        searchButton.addEventListener('click', () => {
            fileInput.click(); // Trigger file input click event
        });
    
        fileInput.addEventListener('change', handleFileSelect);
    });
    
  /*  function handleFileSelect(event) {
        const file = event.target.files[0];
    
        if (file) {
            const reader = new FileReader();
    
            reader.onload = function(e) {
                const namesText = e.target.result;
                const namesArray = namesText.split('\n').filter(name => name.trim() !== '');
                assignNamesToPets(namesArray);
            };
    
            reader.readAsText(file);
        }
    }
    
    function assignNamesToPets(petNames) {
        const petCards = document.querySelectorAll('.pet-card');
        if (petCards.length !== petNames.length) {
            console.error('Number of pet cards does not match number of names.');
            return;
        }
        petCards.forEach((card, index) => {
            const petNameElement = card.querySelector('.pet-description h2');
            if (petNameElement && petNames[index]) {
                petNameElement.textContent = petNames[index];
            } else {
                console.error(`Unable to assign name to pet card ${index}.`);
            }
        });
    }*/
    
    
//99
document.addEventListener('DOMContentLoaded', () => {
    const petNames = [
        'Bella', 'Charlie', 'Luna', 'Max', 'Lucy', 'Buddy', 'Daisy', 'Bailey', 'Lola', 'Molly', 'Sadie', 'Stella', 'Toby', 'Coco', 'Maggie', 'Rocky',
         'Sophie', 'Zoe', 'Jake', 'Roxy', 'Rosie', 'Nala', 'Bear', 'Ruby', 'Chloe', 'Marley', 'Oscar', 'Ginger', 'Buster', 'Hazel', 'Lucky', 'Penny',
          'Sasha', 'Shadow', 'Gizmo', 'Duke', 'Milo', 'Willow', 'Rex', 'Piper', 'Ellie', 'Scout', 'Harley', 'Emma', 'Simba', 'Winston', 'Jasper',
           'Loki', 'Phoebe', 'Bruno'


    ];
    assignNamesToPets(petNames);
});

function assignNamesToPets(petNames) {
    const petCards = document.querySelectorAll('.pet-card');
    if (petCards.length !== petNames.length) {
        console.error('Number of pet cards does not match number of names.');
        return;
    }
    petCards.forEach((card, index) => {
        const petNameElement = card.querySelector('.pet-description h2');
        if (petNameElement && petNames[index]) {
            petNameElement.textContent = petNames[index];
        } else {
            console.error(`Unable to assign name to pet card ${index}.`);
        }
    });
}



    
    /*Function to fetch cat breeds from TheCatAPI
function fetchCatBreeds() {
    fetch('https://api.thecatapi.com/v1/breeds/search?limit=${numberOfCards}&api_key=${apiKey}')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Once the data is fetched, you can handle it here
            console.log('Cat breeds:', data);
        })
        .catch(error => {
            console.error('Error fetching cat breeds:', error);
        });
}

// Call the function to fetch cat breeds when the page loads
window.addEventListener('load', fetchCatBreeds);

async function fetchNames() {
    try {
        const response = await fetch('names.txt'); // Use a relative path if the file is in the same directory
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const namesText = await response.text();
        const namesArray = namesText.split('\n').filter(name => name.trim() !== '');
        return namesArray;
    } catch (error) {
        console.error('Error fetching names:', error);
        return [];
    }
}

// Function to assign names to pet cards
async function assignNamesToPets() {
    const petNames = await fetchNames();
    const petCards = document.querySelectorAll('.pet-card');
    petCards.forEach((card, index) => {
        const petNameElement = card.querySelector('.pet-description h2');
        if (petNameElement && petNames[index]) {
            petNameElement.textContent = petNames[index];
        }
    });
}

// Call the function to assign names when the DOM content is loaded
document.addEventListener('DOMContentLoaded', assignNamesToPets);


// Call the function to assign names when the DOM content is loaded
document.addEventListener('DOMContentLoaded', assignNamesToPets);


//888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
/* Function to fetch cat images from TheCatAPI
function fetchCatImages() {
    const numberOfCards = 50; // Number of pet cards
    const apiKey = 'live_0HXpLCAwCbQOe2etRc4xO28yZCfcAk0Dj0TZspJgQybCPtzUb610TO3doORXnBbm'; // Your API key from TheCatAPI

    fetch(`https://api.thecatapi.com/v1/images/search?limit=${numberOfCards}&api_key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Extract image URLs from the response
            const imageUrls = data.map(cat => cat.url);
            // Populate all pet cards with the fetched images
            imageUrls.forEach((imageUrl, index) => {
                populateCard(index, imageUrl);
            });
            // Add click event listeners to each pet card
            document.querySelectorAll('.pet-image').forEach((imageElement, index) => {
                imageElement.addEventListener('click', () => {
                    displayPetInfo(data[index]); // Pass the pet data to the display function
                });
            });
        })
        .catch(error => {
            console.error('Error fetching cat images:', error);
        });
}

// Function to populate a pet card with an image
function populateCard(cardIndex, imageUrl) {
    const petCard = document.querySelectorAll('.pet-card')[cardIndex];
    const petImage = petCard.querySelector('.pet-image img');
    petImage.src = imageUrl;
}

// Function to display pet information when a pet image is clicked
function displayPetInfo(petData) {
    // Replace this with your logic to display pet information
    console.log('Pet Data:', petData);
    alert(`You clicked on ${petData.breeds[0].name}. Description: ${petData.breeds[0].description}`);
}

// Call the function to fetch cat images when the page loads
window.addEventListener('load', fetchCatImages);
*/

