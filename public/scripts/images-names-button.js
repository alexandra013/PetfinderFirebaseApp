
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

    fetch(`https://api.thecatapi.com/v1/images/search?limit=${numberOfCards}&has_breeds=1&api_key=${apiKey}`)
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
    
  
    
//99names pet cards
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


