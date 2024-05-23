function populateCard(cardIndex, imageUrl) {
    const petCards = document.querySelectorAll('.related__item.item');
    if (petCards[cardIndex]) {
        petCards[cardIndex].style.backgroundImage = `url(${imageUrl})`;
    } else {
        console.error(`No element found at index ${cardIndex}`);
    }
}

function fetchCatImages() {
    const numberOfCards = 6;
    const apiKey = 'live_0HXpLCAwCbQOe2etRc4xO28yZCfcAk0Dj0TZspJgQybCPtzUb610TO3doORXnBbm';

    fetch(`https://api.thecatapi.com/v1/images/search?limit=${numberOfCards}`, {
        headers: {
            'x-api-key': apiKey
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const imageUrls = data.map(cat => cat.url);
        imageUrls.forEach((imageUrl, index) => {
            populateCard(index, imageUrl);
        });
    })
    .catch(error => {
        console.error('Error fetching cat images:', error);
    });
}

window.addEventListener('load', fetchCatImages);