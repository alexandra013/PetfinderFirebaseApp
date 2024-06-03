  // Function to handle the donate button click
  function donate() {
    if (isUserAuthenticated()) {
        // Redirect to the donation page if the user is authenticated
        window.location.href = '/donate';
    } else {
        // Show a message if the user is not authenticated
        showMessage('You need to log in to donate.');
    }
}

function isUserAuthenticated() {
    // Replace with your actual authentication check logic
    // For demonstration, let's assume we check a cookie or local storage
    return localStorage.getItem('authenticatedCache') === 'true';
}

function showMessage(message) {
    // Create a new div element for the message
    const messageBox = document.createElement('div');
    messageBox.className = 'message-box';
    messageBox.innerText = message;
    
    // Add a close button to the message box
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.onclick = function() {
        document.body.removeChild(messageBox);
    };
    
    messageBox.appendChild(closeButton);
    document.body.appendChild(messageBox);
}

// Add event listener to the donate button
document.getElementById('donateButton').addEventListener('click', donate);