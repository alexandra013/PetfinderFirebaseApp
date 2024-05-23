// Function to display pet information when a pet image is clicked
function displayPetInfo(petData) {
    // Find the HTML elements where you want to display the pet information
    const petNameElement = document.getElementById('pet-name');
    const petDescriptionElement = document.getElementById('pet-description');
    const petImageElement = document.getElementById('pet-image');

    // Update the HTML elements with the pet information
    petNameElement.textContent = petData.breeds[0].name;
    petDescriptionElement.textContent = petData.breeds[0].description;
    petImageElement.src = petData.url;

    // Show a modal or other UI element to display the pet information
    // For example:
    // document.getElementById('pet-modal').style.display = 'block';
}
