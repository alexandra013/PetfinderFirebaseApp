/*document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = document.getElementById('main-container');

    const petData = Array.from({ length: 50 }, (_, i) => ({
        name: `Pet Name ${i + 1}`,
        description: `Description of the pet goes here.`,
        imgSrc: `https://via.placeholder.com/300`
    }));

    petData.forEach((pet, index) => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        petCard.id = `pet-card-${index + 1}`;

        const petImage = document.createElement('div');
        petImage.className = 'pet-image';
        const img = document.createElement('img');
        img.src = pet.imgSrc;
        img.alt = `Pet Image ${index + 1}`;
        petImage.appendChild(img);

        const petDescription = document.createElement('div');
        petDescription.className = 'pet-description';
        const h2 = document.createElement('h2');
        h2.textContent = pet.name;
        const p = document.createElement('p');
        p.textContent = pet.description;

        petDescription.appendChild(h2);
        petDescription.appendChild(p);

        petCard.appendChild(petImage);
        petCard.appendChild(petDescription);

        mainContainer.appendChild(petCard);
    });
});*/
/********************************************************************************
document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = document.getElementById('main-container');

    const petData = Array.from({ length: 50 }, (_, i) => ({
        name: `Pet Name ${i + 1}`,
        description: `Description of the pet goes here.`,
        imgSrc: `https://via.placeholder.com/300`
    }));

    petData.forEach((pet, index) => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        petCard.id = `pet-card-${index + 1}`;

        const petImage = document.createElement('div');
        petImage.className = 'pet-image';
        const img = document.createElement('img');
        img.src = pet.imgSrc;
        img.alt = `Pet Image ${index + 1}`;
        petImage.appendChild(img);

       const petDescription = document.createElement('div');
        petDescription.className = 'pet-description';
        const h2 = document.createElement('h2');
        h2.textContent = pet.name;
        const p = document.createElement('p');
        p.textContent = pet.description;

        petDescription.appendChild(h2);
        petDescription.appendChild(p);

        // Create adopt button
        const adoptButton = document.createElement('button');
        adoptButton.textContent = 'Adopt';
        adoptButton.className = 'adopt-button';
        // Add event listener to the button
        adoptButton.addEventListener('click', function() {
            adoptPet(index + 1); // Pass the index + 1 to adoptPet function
        });

        petCard.appendChild(petImage);
        petCard.appendChild(petDescription);
        petCard.appendChild(adoptButton); // Append the adopt button to the pet card

        mainContainer.appendChild(petCard);
       
    });
   
    
});
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');

    // Create the "Home" button
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.className = 'home-button';
    // Add event listener to the button
    homeButton.addEventListener('click', function() {
        window.location.href = "index.html"; // Replace "index.html" with the path of your home page
    });

    // Append the "Home" button to the header
    header.appendChild(homeButton);
});

*/
/*************************adauga aceeasi descriere la toate pet-cardurile******************************************************************************/
/*document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = document.getElementById('main-container');

    // Fetch cat data from the API
    async function fetchCatData() {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD');
            const data = await response.json();
            return data.breeds[0]; // Assuming there is at least one breed
        } catch (error) {
            console.error('Error fetching cat data:', error);
            return null;
        }
    }

    // Create pet cards with fetched data
    async function createPetCards() {
        const breed = await fetchCatData();

        // If data was fetched successfully, map it to petData
        const petData = Array.from({ length: 50 }, (_, i) => ({
            name: breed ? breed.name : `Pet Name ${i + 1}`,
            description: breed ? `Origin: ${breed.origin}, Temperament: ${breed.temperament}, Life Span: ${breed.life_span} years, Weight: ${breed.weight.imperial} lbs (${breed.weight.metric} kg)` : `Description of the pet goes here.`,
            imgSrc: `https://via.placeholder.com/300`
        }));

        petData.forEach((pet, index) => {
            const petCard = document.createElement('div');
            petCard.className = 'pet-card';
            petCard.id = `pet-card-${index + 1}`;

            const petImage = document.createElement('div');
            petImage.className = 'pet-image';
            const img = document.createElement('img');
            img.src = pet.imgSrc;
            img.alt = `Pet Image ${index + 1}`;
            petImage.appendChild(img);

            const petDescription = document.createElement('div');
            petDescription.className = 'pet-description';
            const h2 = document.createElement('h2');
            h2.textContent = pet.name;
            const p = document.createElement('p');
            p.textContent = pet.description;

            petDescription.appendChild(h2);
            petDescription.appendChild(p);

            // Create adopt button
            const adoptButton = document.createElement('button');
            adoptButton.textContent = 'Adopt';
            adoptButton.className = 'adopt-button';
            // Add event listener to the button
            adoptButton.addEventListener('click', function() {
                adoptPet(index + 1); // Pass the index + 1 to adoptPet function
            });

            petCard.appendChild(petImage);
            petCard.appendChild(petDescription);
            petCard.appendChild(adoptButton); // Append the adopt button to the pet card

            mainContainer.appendChild(petCard);
        });
    }

    createPetCards();
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');

    // Create the "Home" button
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.className = 'home-button';
    // Add event listener to the button
    homeButton.addEventListener('click', function() {
        window.location.href = "index.html"; // Replace "index.html" with the path of your home page
    });

    // Append the "Home" button to the header
    header.appendChild(homeButton);
});
*/

        /*document.addEventListener("DOMContentLoaded", function () {
            const mainContainer = document.getElementById('main-container');

            // Fetch cat data from the API
            async function fetchCatData() {
                try {
                    const response = await fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD');
                    const data = await response.json();
                    return data.breeds[0]; // Assuming there is at least one breed
                } catch (error) {
                    console.error('Error fetching cat data:', error);
                    return null;
                }
            }

            // Create pet cards with fetched data
            async function createPetCards() {
                const breed = await fetchCatData();

                // Generate pet data, incorporating the fetched breed information
                const petData = Array.from({ length: 50 }, (_, i) => ({
                    name: `Pet Name ${i + 1}`,
                    description: breed 
    ? `Origin: ${breed.origin}
    Temperament: ${breed.temperament}
    Life Span: ${breed.life_span} years
    Weight: ${breed.weight.imperial} lbs (${breed.weight.metric} kg)`
    : `Description of the pet goes here.`,
imgSrc: `https://via.placeholder.com/300`
                }));

                petData.forEach((pet, index) => {
                    const petCard = document.createElement('div');
                    petCard.className = 'pet-card';
                    petCard.id = `pet-card-${index + 1}`;

                    const petImage = document.createElement('div');
                    petImage.className = 'pet-image';
                    const img = document.createElement('img');
                    img.src = pet.imgSrc;
                    img.alt = `Pet Image ${index + 1}`;
                    petImage.appendChild(img);

                    const petDescription = document.createElement('div');
                    petDescription.className = 'pet-description';
                    const h2 = document.createElement('h2');
                    h2.textContent = pet.name;
                    const p = document.createElement('p');
                    p.textContent = pet.description;

                    petDescription.appendChild(h2);
                    petDescription.appendChild(p);

                    // Create adopt button
                    const adoptButton = document.createElement('button');
                    adoptButton.textContent = 'Adopt';
                    adoptButton.className = 'adopt-button';
                    // Add event listener to the button
                    adoptButton.addEventListener('click', function() {
                        adoptPet(index + 1); // Pass the index + 1 to adoptPet function
                    });

                    petCard.appendChild(petImage);
                    petCard.appendChild(petDescription);
                    petCard.appendChild(adoptButton); // Append the adopt button to the pet card

                    mainContainer.appendChild(petCard);
                });
            }

            createPetCards();
        });

        document.addEventListener("DOMContentLoaded", function () {
            const header = document.querySelector('header');

            // Create the "Home" button
            const homeButton = document.createElement('button');
            homeButton.textContent = 'Home';
            homeButton.className = 'home-button';
            // Add event listener to the button
            homeButton.addEventListener('click', function() {
                window.location.href = "index.html"; // Replace "index.html" with the path of your home page
            });

            // Append the "Home" button to the header
            header.appendChild(homeButton);
        });

        function adoptPet(petId) {
            alert(`Adopting pet with ID: ${petId}`);
        }
*/

  //
 
       /* document.addEventListener("DOMContentLoaded", function () {
            const mainContainer = document.getElementById('main-container');

            // Fetch cat data from the API
            async function fetchCatData() {
                try {
                    const response = await fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD');
                    const data = await response.json();
                    return data.breeds[0]; // Assuming there is at least one breed
                } catch (error) {
                    console.error('Error fetching cat data:', error);
                    return null;
                }
            }

            // Create pet cards with fetched data
            async function createPetCards() {
                const breed = await fetchCatData();

                // Generate pet data, incorporating the fetched breed information
                const petData = Array.from({ length: 50 }, (_, i) => ({
                   
                    description: breed 
                        ? `Origin: ${breed.origin}
                           Temperament: ${breed.temperament}
                           Life Span: ${breed.life_span} years
                           Weight: ${breed.weight.imperial} lbs (${breed.weight.metric} kg)`
                        : `Description of the pet goes here.`,
                    imgSrc: `https://via.placeholder.com/300`
                }));

                petData.forEach((pet, index) => {
                    const petCard = document.createElement('div');
                    petCard.className = 'pet-card';
                    petCard.id = `pet-card-${index + 1}`;

                    const petImage = document.createElement('div');
                    petImage.className = 'pet-image';
                    const img = document.createElement('img');
                    img.src = pet.imgSrc;
                    img.alt = `Pet Image ${index + 1}`;
                    petImage.appendChild(img);

                    const petDescription = document.createElement('div');
                    petDescription.className = 'pet-description';
                    const h2 = document.createElement('h2');
                    h2.textContent = pet.name;
                    const p = document.createElement('p');
                    p.textContent = pet.description;

                    petDescription.appendChild(h2);
                    petDescription.appendChild(p);

                    // Create adopt button
                    const adoptButton = document.createElement('button');
                    adoptButton.textContent = 'Adopt';
                    adoptButton.className = 'adopt-button';
                    // Add event listener to the button
                    adoptButton.addEventListener('click', function() {
                        adoptPet(index + 1); // Pass the index + 1 to adoptPet function
                    });

                    petCard.appendChild(petImage);
                    petCard.appendChild(petDescription);
                    petCard.appendChild(adoptButton); // Append the adopt button to the pet card

                    mainContainer.appendChild(petCard);
                });
            }

            createPetCards();
        });

        document.addEventListener("DOMContentLoaded", function () {
            const header = document.querySelector('header');

            // Create the "Home" button
            const homeButton = document.createElement('button');
            homeButton.textContent = 'Home';
            homeButton.className = 'home-button';
            // Add event listener to the button
            homeButton.addEventListener('click', function() {
                window.location.href = "index.html"; // Replace "index.html" with the path of your home page
            });

            // Append the "Home" button to the header
            header.appendChild(homeButton);
        });

        function adoptPet(petId) {
            alert(`Adopting pet with ID: ${petId}`);
        }

*/
///
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = document.getElementById('main-container');

    // Fetch cat data from the API
    async function fetchCatData() {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD');
            const data = await response.json();
            return data.breeds[0]; // Assuming there is at least one breed
        } catch (error) {
            console.error('Error fetching cat data:', error);
            return null;
        }
    }

    // Create pet cards with fetched data
    async function createPetCards() {
        const breed = await fetchCatData();

        // Array of pet names
        const petNames = Array.from({ length: 50 }, (_, i) => `Pet Name ${i + 1}`);

        // Generate pet data, incorporating the fetched breed information
        const petData = petNames.map((name, i) => ({
            name: name,
            description: breed 
                ? `Origin: ${breed.origin}
                   Temperament: ${breed.temperament}
                   Life Span: ${breed.life_span} years
                   Weight: ${breed.weight.imperial} lbs (${breed.weight.metric} kg)`
                : `Description of the pet goes here.`,
            imgSrc: `https://via.placeholder.com/300?text=${name.replace(' ', '+')}`
        }));

        petData.forEach((pet, index) => {
            const petCard = document.createElement('div');
            petCard.className = 'pet-card';
            petCard.id = `pet-card-${index + 1}`;

            const petImage = document.createElement('div');
            petImage.className = 'pet-image';
            const img = document.createElement('img');
            img.src = pet.imgSrc;
            img.alt = `Pet Image ${index + 1}`;
            petImage.appendChild(img);

            const petDescription = document.createElement('div');
            petDescription.className = 'pet-description';
            const h2 = document.createElement('h2');
            h2.textContent = pet.name;
            const p = document.createElement('p');
            p.textContent = pet.description;

            petDescription.appendChild(h2);
            petDescription.appendChild(p);

            // Create adopt button
            const adoptButton = document.createElement('button');
            adoptButton.textContent = 'Adopt';
            adoptButton.className = 'adopt-button';
            // Add event listener to the button
            adoptButton.addEventListener('click', function() {
                adoptPet(index + 1); // Pass the index + 1 to adoptPet function
            });

            petCard.appendChild(petImage);
            petCard.appendChild(petDescription);
            petCard.appendChild(adoptButton); // Append the adopt button to the pet card

            mainContainer.appendChild(petCard);
        });
    }

    createPetCards();
});

// Function to update the image of a pet card
function populateCard(cardIndex, imageUrl) {
    const petCard = document.querySelectorAll('.pet-card')[cardIndex];
    const petImage = petCard.querySelector('.pet-image img');
    petImage.src = imageUrl;
}

// Call the function to fetch cat images when the page loads
window.addEventListener('load', fetchCatImages);

// Function to fetch cat images from TheCatAPI
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
    const header = document.querySelector('header');

    // Create the "Home" button
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.className = 'home-button';
    // Add event listener to the button
    homeButton.addEventListener('click', function() {
        window.location.href = "index.html"; // Replace "index.html" with the path of your home page
    });

    // Append the "Home" button to the header
    header.appendChild(homeButton);
});

function adoptPet(petId) {
    alert(`Adopting pet with ID: ${petId}`);
}
*/



document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = document.getElementById('main-container');
    const petNames = [
        'Bella', 'Charlie', 'Luna', 'Max', 'Lucy', 'Buddy', 'Daisy', 'Bailey', 'Lola', 'Molly', 'Sadie', 'Stella', 'Toby', 'Coco', 'Maggie', 'Rocky',
        'Sophie', 'Zoe', 'Jake', 'Roxy', 'Rosie', 'Nala', 'Bear', 'Ruby', 'Chloe', 'Marley', 'Oscar', 'Ginger', 'Buster', 'Hazel', 'Lucky', 'Penny',
        'Sasha', 'Shadow', 'Gizmo', 'Duke', 'Milo', 'Willow', 'Rex', 'Piper', 'Ellie', 'Scout', 'Harley', 'Emma', 'Simba', 'Winston', 'Jasper',
        'Loki', 'Phoebe', 'Bruno'
    ];

    // Fetch cat data from the API
    async function fetchCatData() {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD');
            const data = await response.json();
            return data.breeds[0]; // Assuming there is at least one breed
        } catch (error) {
            console.error('Error fetching cat data:', error);
            return null;
        }
    }

    // Create pet cards with fetched data
    async function createPetCards() {
        const breed = await fetchCatData();

        // Generate pet data, incorporating the fetched breed information
        const petData = Array.from({ length: 50 }, (_, i) => ({
            name: petNames[i] || `Pet Name ${i + 1}`, // Use predefined names or fallback to generic names
            description: breed 
                ? `Origin: ${breed.origin}
                   Temperament: ${breed.temperament}
                   Life Span: ${breed.life_span} years
                   Weight: ${breed.weight.imperial} lbs (${breed.weight.metric} kg)`
                : `Description of the pet goes here.`,
            imgSrc: `https://via.placeholder.com/300`
        }));

        petData.forEach((pet, index) => {
            const petCard = document.createElement('div');
            petCard.className = 'pet-card';
            petCard.id = `pet-card-${index + 1}`;

            const petImage = document.createElement('div');
            petImage.className = 'pet-image';
            const img = document.createElement('img');
            img.src = pet.imgSrc;
            img.alt = `Pet Image ${index + 1}`;
            petImage.appendChild(img);

            const petDescription = document.createElement('div');
            petDescription.className = 'pet-description';
            const h2 = document.createElement('h2');
            h2.textContent = pet.name;
            const p = document.createElement('p');
            p.textContent = pet.description;

            petDescription.appendChild(h2);
            petDescription.appendChild(p);

            // Create adopt button
            const adoptButton = document.createElement('button');
            adoptButton.textContent = 'Adopt';
            adoptButton.className = 'adopt-button';
            // Add event listener to the button
            adoptButton.addEventListener('click', function() {
                adoptPet(index + 1); // Pass the index + 1 to adoptPet function
            });

            petCard.appendChild(petImage);
            petCard.appendChild(petDescription);
            petCard.appendChild(adoptButton); // Append the adopt button to the pet card

            mainContainer.appendChild(petCard);
        });

        fetchCatImages();
    }

    createPetCards();

    // Function to fetch cat images from TheCatAPI
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
                const breedData = data.map(cat => cat.breeds[0]);
                // Populate all pet cards with the fetched images and descriptions
                imageUrls.forEach((imageUrl, index) => {
                    const petCard = document.querySelectorAll('.pet-card')[index];
                    const petImage = petCard.querySelector('.pet-image img');
                    petImage.src = imageUrl;

                    const petDescription = petCard.querySelector('.pet-description p');
                    if (breedData[index]) {
                        const breed = breedData[index];
                        petDescription.textContent = `Breed: ${breed.name}
                            Origin: ${breed.origin}
                            Temperament: ${breed.temperament}
                            Life Span: ${breed.life_span} years
                            Weight: ${breed.weight.imperial} lbs (${breed.weight.metric} kg)`;
                    }
                });
            })
            .catch(error => {
                console.error('Error fetching cat images:', error);
            });
    }
});
/*
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    // Create the "Home" button
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.className = 'home-button';
    // Add event listener to the button
    homeButton.addEventListener('click', function() {
        window.location.href = "index.html"; // Replace "index.html" with the path of your home page
    });

    // Append the "Home" button to the header
    header.appendChild(homeButton);
}); */

function adoptPet(petId) {
    alert(`Adopting pet with ID: ${petId}`);
}
