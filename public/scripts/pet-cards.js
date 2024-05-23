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

        petCard.appendChild(petImage);
        petCard.appendChild(petDescription);

        mainContainer.appendChild(petCard);
    });
});
